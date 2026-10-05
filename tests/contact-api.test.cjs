/* eslint-disable @typescript-eslint/no-require-imports -- This Node CommonJS harness controls module loading to mock email delivery. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const repo = path.resolve(__dirname, '..');
const localRequire = Module.createRequire(path.join(repo, 'package.json'));
const ts = localRequire('typescript');
let calls = 0;
let mailMode = 'accept';
let lastMail;
const mailMock = { createTransport: () => ({ sendMail: async (mail) => {
  calls++;
  lastMail = mail;
  if (mailMode === 'throw') throw new Error('mock SMTP failure');
  return { accepted: mailMode === 'accept' ? ['test@example.invalid'] : [] };
} }) };
const cache = new Map();
function load(relative) {
  const filename = path.isAbsolute(relative) ? relative : path.join(repo, relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  const mod = new Module(filename, module);
  cache.set(filename, mod);
  mod.filename = filename;
  mod.paths = Module._nodeModulePaths(path.dirname(filename));
  mod.require = (id) => {
    if (id === 'nodemailer') return mailMock;
    if (id.startsWith('@/')) return load(path.join(repo, id.slice(2) + '.ts'));
    if (id.startsWith('.')) return load(path.resolve(path.dirname(filename), id + '.ts'));
    return localRequire(id);
  };
  mod._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText, filename);
  return mod.exports;
}
const contact = load('app/api/contact/route.ts').POST;
const estimate = load('app/api/estimate/route.ts').POST;
const { contactSchema } = load('lib/contact-validation.ts');
const { calculateEstimate } = load('lib/pricing.ts');
let checks = 0;
function equal(a, b) { assert.deepEqual(a, b); checks++; }
const payload = { name: 'Test enquiry', phone: '+91 98765 43210', email: 'test@example.invalid', service: 'Boundary and land survey', state: 'Pune, Maharashtra', projectDetails: 'This is mocked test data and is never delivered.', website: '' };
function request(data, options = {}) {
  return new Request('https://shubhamsurveyors.com/api/test', {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...options.headers },
    body: options.raw ?? JSON.stringify(data),
  });
}
async function checkStatus(handler, data, status, options) { const response = await handler(request(data, options)); equal(response.status, status); return response; }
(async () => {
  const oldUser = process.env.GMAIL_USER;
  const oldPass = process.env.GMAIL_APP_PASSWORD;
  const oldError = console.error;
  console.error = () => {};
  try {
    delete process.env.GMAIL_USER;
    delete process.env.GMAIL_APP_PASSWORD;
    const unavailable = await checkStatus(contact, payload, 503);
    equal((await unavailable.json()).success, undefined);
    equal(calls, 0);
    for (const mutation of [{name:' '}, {phone:'abcdefghij'}, {phone:'1234'}, {email:'not-email'}, {email:'test@example.invalid\r\nBcc: stranger@example.invalid'}, {service:'constructor'}, {state:''}, {projectDetails:'short'}, {projectDetails:'x'.repeat(3001)}, {website:'https://spam.invalid'}]) {
      await checkStatus(contact, {...payload, ...mutation}, 400);
    }
    for (const data of [null, [], 1, 'text']) await checkStatus(contact, data, 400);
    await checkStatus(contact, null, 400, {raw:'{bad'});
    await checkStatus(contact, payload, 415, {headers:{'content-type':'text/plain'}});
    await checkStatus(contact, payload, 403, {headers:{origin:'https://other.invalid'}});
    await checkStatus(contact, payload, 413, {headers:{'content-length':'20000'}});
    await checkStatus(contact, {...payload, extra:'x'.repeat(17000)}, 413);
    equal(calls, 0);
    process.env.GMAIL_USER = 'mock@example.invalid';
    process.env.GMAIL_APP_PASSWORD = 'not-a-real-password';
    mailMode = 'reject';
    await checkStatus(contact, payload, 503);
    mailMode = 'throw';
    await checkStatus(contact, payload, 503);
    mailMode = 'accept';
    const accepted = await checkStatus(contact, {...payload, projectDetails:'<img src=x onerror=alert(1)> This remains plain text.'}, 200, {headers:{origin:'https://shubhamsurveyors.com'}});
    equal((await accepted.json()).success, true);
    equal(lastMail.html, undefined);
    equal(lastMail.replyTo, 'test@example.invalid');
    equal(lastMail.text.includes('<img src=x onerror=alert(1)>'), true);
    equal(calls, 3);
    equal(contactSchema.parse({...payload,name:'  Test enquiry  '}).name, 'Test enquiry');
    const valid = {surveyType:'boundary', area:2, terrain:'flat'};
    const response = await checkStatus(estimate, valid, 200);
    equal(await response.json(), {min:10000,max:20000,unit:'acre',indicative:true,basis:'total',currency:'INR'});
    const highway = await checkStatus(estimate, {surveyType:'highway',area:10,terrain:'hilly'}, 200);
    equal((await highway.json()).max, 56000);
    for (const mutation of [{surveyType:'constructor'},{surveyType:'__proto__'},{surveyType:'random'},{area:0},{area:-1},{area:100001},{area:'10'},{area:null},{terrain:'constructor'},{terrain:'unknown'}]) {
      await checkStatus(estimate, {...valid,...mutation}, 400);
    }
    await checkStatus(estimate, valid, 400, {raw:'{'});
    await checkStatus(estimate, {...valid, extra:'x'.repeat(3000)}, 413);
    equal(calculateEstimate('boundary', 0.01, 1), {min:50,max:100,unit:'acre'});
    for (const args of [['boundary',NaN,1],['constructor',1,1],['boundary',1,9],['boundary',Infinity,1]]) {
      assert.throws(() => calculateEstimate(...args), RangeError); checks++;
    }
    equal(calls, 3);
  } finally {
    if (oldUser === undefined) delete process.env.GMAIL_USER; else process.env.GMAIL_USER = oldUser;
    if (oldPass === undefined) delete process.env.GMAIL_APP_PASSWORD; else process.env.GMAIL_APP_PASSWORD = oldPass;
    console.error = oldError;
  }
  console.log(`${checks} API and validation checks passed. All 3 delivery attempts used a local mail mock; no email was sent.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
