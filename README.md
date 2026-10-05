# Shubham Surveyors

Production website: https://shubhamsurveyors.com

Next.js App Router website for the Pune and Lonavala surveying practice. Public service and knowledge content renders on the server; client JavaScript is limited to navigation, the enquiry form and cost calculator.

## Run locally

Use Node.js 20.9 or newer (Node 22 LTS recommended).

```sh
npm ci
npm run dev
npm run lint
npm run test:api
npm run build
npm start
```

The build generates the XML sitemap and robots.txt through next-sitemap.

## Email delivery

Set these environment variables in the Vercel project, for the appropriate deployment environments:

- GMAIL_USER: the business mailbox that sends and receives enquiries.
- GMAIL_APP_PASSWORD: its Gmail app password.

Never commit credentials. The contact endpoint returns success only when the mail provider accepts the message. Missing credentials or delivery errors return a service-unavailable response and the visitor sees call/email/WhatsApp alternatives. Provider acceptance does not guarantee inbox delivery. No test leads are sent automatically.

The browser-only cost calculator does not collect personal data or send enquiries. Reference rates and terrain factors are indicative; final scope and pricing require a written quote.

## Content maintenance

- Business identity, verified contact details, Google Business Profile and indicative rates: lib/constants.ts.
- Seven service pages: lib/services.ts and app/services/[slug]/page.tsx.
- Five source-linked survey guides: app/knowledge/[slug]/page.tsx.
- Pune: app/land-surveyors-pune/page.tsx.
- Coverage: lib/locations.ts and components/locations/LocationPageTemplate.tsx.

Client identities are confidential. Project application examples and survey illustrations are labelled as illustrative, not presented as completed client work. Keep factual metrics current and do not add invented testimonials, review ratings, certifications, guaranteed accuracy or regulatory approvals.

The original public routes are retained. Regional enquiry pages outside Maharashtra remain accessible with noindex,follow until there is sufficient distinct local content to warrant indexing. They are excluded from the sitemap. To index a regional page later, first publish useful, verifiable location-specific information, then update its robots metadata and the sitemap filter. Do not create city-name copies.

## Visual identity and imagery

The visual identity uses midnight navy, cobalt and cool white. The original geometric S symbol is maintained as `public/brand-symbol.svg` and the reusable `components/brand/BrandMark.tsx`; icons and social previews use the same identity.

The landscape and surveying-instrument visuals in `public/images` were generated with OpenAI's built-in image generation tool on 5 October 2026. They are conceptual illustrations, not photographs of the business's equipment, employees or client projects. Keep their visible provenance captions. PNG originals are retained; pages use proportional, compressed WebP versions through Next Image with responsive sizes. Do not replace them with confidential project material.

Visual reference research included Fugro's redesign case study (https://www.makerstreet.nl/cases/fugro), Murphy Geospatial (https://murphygs.com/) and the Awwwards-listed Rickman Architecture + Design website (https://www.awwwards.com/sites/rickman-architecture-design). The implementation uses original layout, assets and branding.

## Deployment

The existing Vercel project deploys the master branch to shubhamsurveyors.com. Use a branch and pull request, check the production build and preview, then merge to master. Verify the public domain, sitemap, key service pages and contact alternatives after deployment. Preserve the preferred non-www HTTPS hostname.

## Quality checks

Run `npm run lint`, `npm run test:api` and `npm run build` before publishing. The API suite exercises validation, request limits, origin checks, provider failure handling and estimator arithmetic against the actual route handlers. Mail delivery is mocked: no enquiries or emails are sent. Check mobile navigation, keyboard focus, reduced motion, enquiry validation, estimator totals, canonical URLs, JSON-LD, sitemap coverage and genuine 404 responses. Lighthouse SEO is a technical audit score, not a promise of search position.

## Research informing the redesign

Business website benchmarks:

- https://www.yogeshwarassociates.com/
- https://www.prashantsurveys.com/
- https://www.fugro.com/
- https://murphygs.com/
- https://www.mckimcreed.com/

Search guidance:

- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://support.google.com/business/answer/7091

Official land-record and regulatory references are linked beside the relevant guide sections. Check them when updating the guides.

## Local search follow-through

Keep the verified Google Business Profile's name, address, phone, services and hours accurate. Add real field photographs when permitted, request genuine reviews from customers, and answer them. With access to Google Search Console, submit /sitemap.xml and inspect priority service/Pune/Maharashtra URLs. Monitor enquiries and search queries over time; ranking depends on relevance, distance, authority and competition as well as website quality.
