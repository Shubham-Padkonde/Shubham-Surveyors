import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/sections/ContactSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact land surveyors in Pune & Lonavala",
  description:
    "Discuss your land survey with Shubham Surveyors. Contact our Pune and Lonavala offices for boundary, topographic, DGPS and infrastructure surveys across India.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Talk to Shubham Surveyors",
    description:
      "Survey advice, project enquiries and quotations from our Pune and Lonavala teams.",
    url: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <p className="eyebrow">Pune · Lonavala · Across India</p>
          <h1>
            Let’s put your project
            <br />
            on solid ground.
          </h1>
          <p className="lead">
            From a single plot to an infrastructure corridor, start with a
            conversation with our survey team. Tell us what you’re planning and
            we’ll help you take the next step.
          </p>
        </div>
      </section>
      <ContactSection />
      <section className="section-wrap">
        <div className="page-shell">
          <div className="section-head">
            <p className="eyebrow">A productive first conversation</p>
            <h2 className="section-heading">
              A little preparation goes a long way.
            </h2>
          </div>
          <div className="detail-grid">
            <article className="detail-panel">
              <p className="eyebrow">01 / Location</p>
              <h3>Where is your site?</h3>
              <p>
                Share the village, city or district and approximate area. A map
                pin helps us understand access and plan a site visit.
              </p>
            </article>
            <article className="detail-panel">
              <p className="eyebrow">02 / Purpose</p>
              <h3>What are you planning?</h3>
              <p>
                Tell us whether the survey supports a purchase, design,
                construction, boundary check or an infrastructure project.
              </p>
            </article>
            <article className="detail-panel">
              <p className="eyebrow">03 / Output</p>
              <h3>What do you need?</h3>
              <p>
                Mention any drawing formats, contour intervals, project
                specifications and target dates. We’ll confirm the practical
                scope with you.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
