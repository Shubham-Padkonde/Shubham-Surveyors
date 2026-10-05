import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Phone } from "lucide-react";
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
      <section className="conversion-hero contact-hero">
        <div className="page-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <div className="conversion-hero-grid">
            <div className="conversion-hero-copy">
              <p className="eyebrow">A direct line to the ground</p>
              <h1>
                Great projects.
                <br />
                <span>Start here.</span>
              </h1>
              <p className="lead">
                A new plot. An ambitious development. A question about your land.
                Wherever you’re starting, let’s find a clear way forward.
              </p>
              <div className="conversion-hero-actions">
                <a href="#enquiry" className="button button-lime">
                  Tell us about your site <ArrowDownRight size={19} aria-hidden="true" />
                </a>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-link">
                  <Phone size={16} aria-hidden="true" /> {SITE.phone}
                </a>
              </div>
              <p className="conversion-kicker">Pune & Lonavala / Serving projects across India</p>
            </div>
            <figure className="conversion-visual contact-location-visual">
              <Image
                src="/images/terrain-editorial.webp"
                alt="Conceptual landscape inspired by the hills and lakes of Maharashtra"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 800px) 100vw, 42vw"
                style={{ objectFit: "cover" }}
              />
              <div className="contact-visual-shade" aria-hidden="true" />
              <figcaption className="contact-visual-caption">
                <span className="conversion-kicker">Local knowledge. A wider perspective.</span>
                <div className="contact-route-line">
                  <span>Pune</span><ArrowUpRight size={30} aria-hidden="true" /><span>Lonavala</span>
                </div>
                <span className="conversion-kicker">AI-generated / Maharashtra-inspired landscape</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <ContactSection />
      <section className="section-wrap contact-preparation">
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
