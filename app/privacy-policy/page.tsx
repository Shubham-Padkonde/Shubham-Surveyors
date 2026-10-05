import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Shubham Surveyors uses information shared through website enquiries and survey project conversations.",
  alternates: { canonical: `${SITE.url}/privacy-policy` },
};

const sections = [
  {
    heading: "Information you share",
    body: "Our enquiry form asks for your name, phone number, email address, project location, survey requirement and project details. We use these details to respond to your enquiry and discuss the requested work. Please share only the information needed for this initial conversation.",
  },
  {
    heading: "The survey cost calculator",
    body: "The calculator does not ask for your name, phone number or email address. It calculates the estimate in your browser. It does not submit an enquiry automatically. If you choose to discuss an estimate on WhatsApp, the survey details are included in a message for you to review and send.",
  },
  {
    heading: "How enquiries are handled",
    body: "Website enquiries are sent to our team through our email provider. Information you provide may be used to clarify requirements, arrange a site visit, prepare a quotation and communicate about your project. We do not sell or rent personal information.",
  },
  {
    heading: "Website and third-party services",
    body: "Our hosting provider may process technical information, such as IP addresses and request logs, to operate and protect the website. Links to WhatsApp, Google and other external services open those services, which have their own privacy policies. Please review their policies when using them.",
  },
  {
    heading: "Project information and retention",
    body: "Enquiry and project information is retained as needed to respond to your request, manage the project and meet applicable record-keeping requirements. Client names and confidential project documents are not published on this website. Contact us to arrange an appropriate way to share documents needed for your survey.",
  },
  {
    heading: "Questions, corrections or deletion requests",
    body: "You can contact us to ask about information you have shared, correct inaccurate details or request deletion. We will review the request and explain any information we need to retain for an ongoing project or applicable requirements.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Privacy policy</span>
          </nav>
          <p className="eyebrow">Your information</p>
          <h1>Privacy policy</h1>
          <p className="lead">
            A clear explanation of how this website handles your enquiries.
          </p>
        </div>
      </section>
      <section className="section-wrap">
        <div className="page-shell">
          <div style={{ maxWidth: 800 }}>
            <p style={{ color: "#566176", marginBottom: "2rem" }}>
              Last updated: 5 October 2026
            </p>
            {sections.map(({ heading, body }) => (
              <section key={heading} style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ fontSize: "1.4rem", marginBottom: ".75rem" }}>
                  {heading}
                </h2>
                <p style={{ color: "#566176", lineHeight: 1.8 }}>{body}</p>
              </section>
            ))}
            <h2 style={{ fontSize: "1.4rem", marginBottom: ".75rem" }}>
              Contact Shubham Surveyors
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
            <p style={{ marginTop: "1rem", color: "#566176" }}>
              {SITE.address}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
