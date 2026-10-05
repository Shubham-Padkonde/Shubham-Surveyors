import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Land surveyors in Pune",
  description:
    "Pune-based Shubham Surveyors, established in 1994. Boundary, topographic, DGPS and Total Station surveys with clear scopes, CAD plans and site measurements.",
  alternates: { canonical: `${SITE.url}/land-surveyors-pune` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Land surveyors in Pune | Shubham Surveyors",
    description:
      "Pune-based Shubham Surveyors, established in 1994. Boundary, topographic, DGPS and Total Station surveys with clear scopes, CAD plans and site measurements.",
    url: `${SITE.url}/land-surveyors-pune`,
  },
};

const faqs = [
  {
    question: "How much does a land survey in Pune cost?",
    answer:
      "The fee depends on the survey purpose, site area, access, terrain, required detail and deliverables. Send a location pin, approximate area and any existing plan so we can discuss a suitable scope and quotation.",
  },
  {
    question: "Do you take enquiries from Pimpri-Chinchwad and nearby areas?",
    answer:
      "Yes. Share the exact location for sites in Pune, Pimpri-Chinchwad and surrounding areas such as Hinjawadi, Wagholi, Chakan, Talegaon, Mulshi and Lonavala. We confirm site access, team availability and the field programme when preparing the proposal.",
  },
  {
    question: "What should I send before a site visit?",
    answer:
      "A location pin, approximate area and the purpose of the survey are a useful start. Add available site plans, 7/12 or property-card references, previous measurements and your architect’s or engineer’s drawing requirements.",
  },
  {
    question: "Can you provide drawings for my architect or engineer?",
    answer:
      "Yes. We can agree CAD and PDF outputs, units, coordinate references, contour intervals and the feature list with your consultant before the survey begins.",
  },
  {
    question: "Is private jaga mojni the same as official Mojani?",
    answer:
      "Jaga mojni is commonly used to describe land measurement. A private measured plan and the official Land Records Department measurement process serve different purposes. We can explain our survey support and direct you to the official Mahabhumi service for government measurement enquiries.",
  },
];

export default function LandSurveyorsPunePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Land surveying in Pune",
        url: `${SITE.url}/land-surveyors-pune`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "City", name: "Pune" },
        description:
          "Boundary, topographic, DGPS and Total Station surveying from Shubham Surveyors in Pune.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Land surveyors in Pune",
            item: `${SITE.url}/land-surveyors-pune`,
          },
        ],
      },
    ],
  };
  const whatsapp = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to discuss a land survey in Pune. My site location is: ")}`;

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="page-hero">
        <div className="section-wrap">
          <nav
            className="breadcrumb"
            style={{ padding: "0 0 24px", border: 0 }}
            aria-label="Breadcrumb"
          >
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">Land surveyors in Pune</span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow">Pune, Maharashtra · Established 1994</p>
          <h1>
            Land surveyors
            <br />
            in Pune.
          </h1>
          <p className="lead">
            Land surveyors in Pune for property owners, architects and project
            teams. From boundary measurements to contour plans, we help you
            understand your site and prepare for what comes next.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Plan your Pune survey{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Share your site on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">A team close to your project</p>
            <h2 className="section-heading">
              Rooted in Pune.
              <br />
              Working with your brief.
            </h2>
          </div>
          <p>
            Shubham Surveyors has been in practice since 1994. Our Pune address
            is in Ambegaon (Bk), with a second contact location in Lonavala. We
            start every enquiry by understanding the site, the available
            references and what you need the survey to achieve.
          </p>
        </div>
        <div className="detail-grid">
          <article className="detail-panel">
            <MapPin size={24} aria-hidden="true" />
            <h3>Pune</h3>
            <address className="not-italic">{SITE.address}</address>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="text-link"
            >
              {SITE.phone} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
          <article className="detail-panel">
            <MapPin size={24} aria-hidden="true" />
            <h3>Lonavala</h3>
            <address className="not-italic">{SITE.addressLonavala}</address>
            <p>
              Please call before visiting so we can arrange a suitable time.
            </p>
            <Link href="/contact" className="text-link">
              Contact the team <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Choose your service</p>
            <h2 className="section-heading">What does your site need?</h2>
          </div>
          <p>
            Start with the decision you need to make. We can help identify a
            survey scope and the files your project team will need.
          </p>
        </div>
        <div className="service-grid">
          {SERVICE_DETAILS.map((service) => (
            <Link
              className="service-card"
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              <p className="eyebrow">{service.number}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="text-link">
                View scope & deliverables{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="detail-grid">
          <article className="detail-panel">
            <p className="eyebrow">For property owners</p>
            <h2>Start with the parcel and its references.</h2>
            <p>
              For a purchase check, area measurement or marking enquiry, share
              the village or locality, approximate extent and any available
              property plans. Point out existing stones, walls, fences and any
              portion that needs closer attention.
            </p>
            <p>
              A measured drawing helps you compare the physical site with
              supplied information. Where the matter requires official
              demarcation, we explain the distinction and the survey support we
              can provide.
            </p>
            <Link href="/services/mojani-support" className="text-link">
              Understand Mojani support{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">For architects & project teams</p>
            <h2>Define the drawing before the field work.</h2>
            <p>
              Tell us the survey extent, feature list, contour interval,
              benchmark requirements and CAD format. If adjoining road levels,
              drainage connections or existing building details matter to your
              design, include them in the brief.
            </p>
            <p>
              For work in PMC, PCMC or another jurisdiction, share the actual
              submission or consultant specification so we can review the survey
              requirements with you.
            </p>
            <Link href="/services/topographic-survey" className="text-link">
              Explore site & contour surveys{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Planning the visit</p>
            <h2 className="section-heading">
              A better brief.
              <br />A smoother survey.
            </h2>
          </div>
          <p>
            Site access, vegetation and the required detail can matter as much
            as the area. Sharing these early helps us plan the work
            realistically.
          </p>
        </div>
        <div className="detail-grid">
          <article className="detail-panel">
            <p className="eyebrow">01</p>
            <h3>Share your site</h3>
            <p>
              Send a location pin, approximate area and the purpose of the
              survey, along with any available drawings.
            </p>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">02</p>
            <h3>Agree the scope</h3>
            <p>
              We discuss the field method, included features, output formats,
              fee and expected programme.
            </p>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">03</p>
            <h3>Measure & prepare</h3>
            <p>
              The team carries out the agreed field work, checks the data and
              prepares the deliverables.
            </p>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">04</p>
            <h3>Review the handover</h3>
            <p>
              Receive your files with the reference information and an
              explanation of the scope covered.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Pune survey enquiries</p>
            <h2 className="section-heading">Common questions.</h2>
          </div>
          <a
            href="https://share.google/jhxqVbuElVFH4Ocna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Find us on Google <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Let’s talk about your land</p>
          <h2>Your next step starts here.</h2>
          <p>Send the site location and tell us what you need to understand.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Request a survey <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/locations/maharashtra"
              className="button button-outline"
            >
              Explore Maharashtra coverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
