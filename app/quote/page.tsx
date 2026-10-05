import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="page-hero">
        <div className="page-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Survey cost estimate</span>
          </nav>
          <p className="eyebrow">A clearer view of your costs</p>
          <h1>
            Plan your survey.
            <br />
            Know your starting point.
          </h1>
          <p className="lead">
            Explore an indicative budget for your land survey before speaking to
            us. When you’re ready, we’ll shape a quotation around your actual
            site and requirements.
          </p>
        </div>
      </section>
      <CostEstimator />
      <section className="section-wrap" style={{ background: "#ecefe6" }}>
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
