import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Land survey guides | Pune & Maharashtra",
  description:
    "Practical guides to Mojani, preparing for a land survey, boundary enquiries, MahaRERA project information and total station versus RTK DGPS.",
  alternates: { canonical: SITE.url + "/knowledge" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Land survey guides | Pune & Maharashtra | Shubham Surveyors",
    description:
      "Practical guides to Mojani, preparing for a land survey, boundary enquiries, MahaRERA project information and total station versus RTK DGPS.",
    url: `${SITE.url}/knowledge`,
  },
};

const articles = [
  {
    slug: "survey-preparation",
    category: "Start here",
    title: "How to prepare for a land survey",
    description:
      "A practical checklist for your first enquiry, site visit and drawing handover.",
    time: "4 min read",
  },
  {
    slug: "mojani-process",
    category: "Maharashtra land records",
    title: "Understanding the Mojani process in Maharashtra",
    description:
      "Official measurement, e-Mojani applications and the role of a private survey.",
    time: "4 min read",
  },
  {
    slug: "total-station-vs-dgps",
    category: "Survey methods",
    title: "Total station or RTK DGPS: which does your site need?",
    description:
      "Understand visibility, site control and the reasons both methods may be used together.",
    time: "4 min read",
  },
  {
    slug: "rera-requirements",
    category: "For developers",
    title: "How survey information supports a MahaRERA project",
    description:
      "Coordinate your survey brief with the architect, engineer and registration team.",
    time: "4 min read",
  },
  {
    slug: "boundary-disputes",
    category: "For landowners",
    title: "A practical first step for a boundary enquiry",
    description:
      "Gather the records, document the site and understand what a measured plan can tell you.",
    time: "4 min read",
  },
];

export default function KnowledgePage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Knowledge</span>
          </nav>
          <p className="eyebrow">The field guide</p>
          <h1>
            A little clarity.
            <br />
            Before the first visit.
          </h1>
          <p className="lead">
            Straightforward guidance for landowners and project teams.
            Understand the process, ask better questions and start with the
            right information.
          </p>
        </div>
      </section>
      <section
        className="section-wrap"
        style={{
          paddingTop: "clamp(3rem, 6vw, 6rem)",
          paddingBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div className="section-head">
          <div>
            <p className="eyebrow">Practical reading</p>
            <h2 className="section-heading">
              From land records
              <br />
              to survey methods.
            </h2>
          </div>
          <p className="lead">
            The regulatory guides link to official Maharashtra sources.
            Application requirements should always be checked with the relevant
            authority for your case.
          </p>
        </div>
        <div className="service-grid">
          {articles.map((article, index) => (
            <Link
              className="service-card"
              href={"/knowledge/" + article.slug}
              key={article.slug}
            >
              <div className="flex justify-between items-start">
                <span className="eyebrow">
                  {String(index + 1).padStart(2, "0")} / {article.category}
                </span>
                <BookOpen size={22} />
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span className="text-link" style={{ marginTop: "auto" }}>
                {article.time} <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Have a specific site in mind?</p>
          <h2 className="section-heading">Let’s make the next step clear.</h2>
          <p>
            Send the site location, approximate area and the decision you need
            the survey to support.
          </p>
          <Link className="button button-lime" href="/contact">
            Speak with a surveyor <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
