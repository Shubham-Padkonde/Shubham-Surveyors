import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import CostEstimator from "@/components/sections/CostEstimator";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Land survey cost calculator & quotation",
  description:
    "Estimate land survey costs in India for boundary, Total Station, RTK DGPS, highway and GIS surveys. No contact details required. Request a tailored quotation.",
  alternates: { canonical: `${SITE.url}/quote` },
  openGraph: {
    title: "Plan your land survey budget",
    description:
      "An indicative survey cost calculator from Shubham Surveyors. Calculate privately, then discuss your scope with our team.",
    url: `${SITE.url}/quote`,
  },
};

const questions = [
  {
    question: "Is the calculator a final quotation?",
    answer:
      "No. It multiplies the reference rate by your site size and an allowance for terrain. The final scope, site conditions, travel, minimum mobilisation charges, deliverables and applicable taxes are confirmed in a written quotation.",
  },
  {
    question: "What if I do not know the size of my land?",
    answer:
      "Use an approximate size for initial planning, or contact us with the site location and the information you have. Our team can help determine what needs to be measured before preparing a quotation.",
  },
  {
    question: "What changes the cost of a land survey?",
    answer:
      "The survey method, site size, vegetation and terrain, access, control points, required detail, travel and deliverable formats can affect the scope. Smaller sites may still need a full field team and mobilisation.",
  },
  {
    question: "Will calculating an estimate send my details to your team?",
    answer:
      "No. This calculator works in your browser and does not ask for personal details. You decide whether to share the result through WhatsApp or make an enquiry.",
  },
];

export default function QuotePage() {
  return (
    <>
      <section className="conversion-hero quote-hero">
        <div className="page-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Survey cost estimate</span>
          </nav>
          <div className="conversion-hero-grid">
            <div className="conversion-hero-copy">
              <p className="eyebrow">Land survey cost estimator</p>
              <h1>
                Big plans.
                <br />
                <span>A clearer budget.</span>
              </h1>
              <p className="lead">
                Put a starting figure to your next survey. Explore an indicative
                cost in a few simple steps, then shape the scope with our team.
              </p>
              <div className="conversion-hero-actions">
                <a href="#estimate" className="button button-lime">
                  Explore your estimate <ArrowDownRight size={19} aria-hidden="true" />
                </a>
                <Link href="/contact" prefetch={false} className="text-link">
                  Discuss your project <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <p className="conversion-kicker">No personal details / No obligation / Clear next steps</p>
            </div>
            <div className="conversion-visual quote-panel">
              <div className="quote-panel-top">
                <span>Project planning / 01</span><span>Scope → Estimate</span>
              </div>
              <svg className="quote-blueprint" viewBox="0 0 620 370" fill="none" aria-hidden="true">
                <defs>
                  <pattern id="quote-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                    <path d="M36 0H0V36" stroke="currentColor" strokeOpacity=".12" />
                  </pattern>
                </defs>
                <rect x="24" y="12" width="572" height="336" fill="url(#quote-grid)" />
                <path d="M100 250 316 132 525 213 309 333Z" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".22" />
                <path d="M100 214 316 96 525 177 309 297Z" fill="currentColor" fillOpacity=".05" stroke="currentColor" strokeOpacity=".36" />
                <path d="M100 176 316 58 525 139 309 259Z" fill="currentColor" fillOpacity=".09" stroke="currentColor" strokeWidth="1.5" />
                <path d="M100 176V250 M316 58V132 M525 139V213 M309 259V333" stroke="currentColor" strokeOpacity=".45" strokeDasharray="4 5" />
                <path d="M100 176 525 139 M316 58 309 259" stroke="currentColor" strokeOpacity=".4" strokeDasharray="4 5" />
                <path d="M164 141Q267 134 390 192 M205 118Q298 116 433 171 M248 95Q351 109 475 155" stroke="currentColor" strokeOpacity=".65" />
                <path d="M89 157 304 40 M85 152 94 163 M298 34 307 46 M324 283 539 164 M319 277 329 289 M534 158 544 170" stroke="currentColor" strokeOpacity=".7" />
                <g fill="currentColor">
                  <circle cx="100" cy="176" r="4" /><circle cx="316" cy="58" r="4" />
                  <circle cx="525" cy="139" r="4" /><circle cx="309" cy="259" r="4" />
                </g>
                <g fill="currentColor" fontSize="10" fontFamily="monospace" letterSpacing="2">
                  <text x="138" y="105" transform="rotate(-29 138 105)">SITE EXTENT</text>
                  <text x="402" y="263" transform="rotate(-29 402 263)">SURVEY SCOPE</text>
                  <text x="42" y="321">AREA / TERRAIN / OUTPUT</text>
                </g>
                <path d="M562 40V71M550 52H574" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div className="quote-panel-bottom">
                <span>A starting point.<br /><strong>Built around your site.</strong></span>
                <span className="conversion-kicker">Illustrative site geometry</span>
              </div>
            </div>
          </div>
          <ol className="quote-process" aria-label="How the estimate works">
            <li><span>01</span><div><strong>Choose your survey</strong><p>Start with what you need to know.</p></div></li>
            <li><span>02</span><div><strong>Describe your site</strong><p>Add its size and terrain.</p></div></li>
            <li><span>03</span><div><strong>See your starting range</strong><p>Discuss a written quote when ready.</p></div></li>
          </ol>
        </div>
      </section>
      <div id="estimate"><CostEstimator /></div>
      <section className="section-wrap quote-questions">
        <div className="page-shell">
          <div className="section-head">
            <p className="eyebrow">Before you budget</p>
            <h2 className="section-heading">Survey pricing, explained.</h2>
          </div>
          <div className="faq-list">
            {questions.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
