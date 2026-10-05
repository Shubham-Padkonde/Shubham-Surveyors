import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Website & service terms",
  description:
    "Information about website estimates, survey scope, deliverables and project enquiries with Shubham Surveyors.",
  alternates: { canonical: `${SITE.url}/terms-of-service` },
};

const sections = [
  {
    heading: "Website information",
    body: "This website describes Shubham Surveyors’ land surveying and related services. General information and knowledge articles help you understand survey processes; they do not replace site-specific technical advice, official records or the requirements of the relevant authority.",
  },
  {
    heading: "Estimates and quotations",
    body: "Calculator results and reference rates are indicative, non-binding budget estimates. They are not a confirmed offer or booking. Site conditions, access, area, travel, mobilisation, deliverables and applicable taxes are reviewed before we provide a written quotation.",
  },
  {
    heading: "Agreeing the project scope",
    body: "Survey method, coverage, required accuracy, deliverables, schedule and payment terms are agreed for each project. Sending an enquiry or discussing an estimate does not itself confirm a project. The agreed written scope and project terms govern commissioned work.",
  },
  {
    heading: "Survey records and deliverables",
    body: "Reports and drawings are prepared using field measurements and the records available for the agreed scope. Clients are responsible for arranging authorised site access and providing accurate project information and relevant documents. A private survey does not itself establish ownership or replace an official land record, statutory measurement or authority approval.",
  },
  {
    heading: "Client support and documents",
    body: "For updates or copies of project documents, contact our team with your project reference or site location. We will confirm your connection to the project before arranging access. This website does not currently offer an online client login or document download portal.",
  },
  {
    heading: "External services",
    body: "Links to WhatsApp, Google and other websites are provided for convenience. Those services are operated separately and their own terms apply when you use them.",
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Website & service terms</span>
          </nav>
          <p className="eyebrow">Clear expectations</p>
          <h1>Website & service terms</h1>
          <p className="lead">
            How estimates, enquiries and commissioned survey work fit together.
          </p>
        </div>
      </section>
      <section className="section-wrap">
        <div className="page-shell">
          <div style={{ maxWidth: 800 }}>
            <p style={{ color: "#58675e", marginBottom: "2rem" }}>
              Last updated: 5 October 2026
            </p>
            {sections.map(({ heading, body }) => (
              <section key={heading} style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ fontSize: "1.4rem", marginBottom: ".75rem" }}>
                  {heading}
                </h2>
                <p style={{ color: "#58675e", lineHeight: 1.8 }}>{body}</p>
              </section>
            ))}
            <h2 style={{ fontSize: "1.4rem", marginBottom: ".75rem" }}>
              Questions about a project?
            </h2>
            <p>
              Email{" "}
              <a className="text-link" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>{" "}
              or call{" "}
              <a
                className="text-link"
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              >
                {SITE.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
