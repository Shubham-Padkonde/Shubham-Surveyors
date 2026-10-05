import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Crosshair, FileCheck2, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About us | Pune surveyors since 1994",
  description:
    "Meet Shubham Surveyors, a Pune land surveying practice established in 1994. 30+ years of experience and 5,000+ surveys for landowners and project teams.",
  alternates: { canonical: SITE.url + "/about" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "About us | Pune surveyors since 1994 | Shubham Surveyors",
    description:
      "Meet Shubham Surveyors, a Pune land surveying practice established in 1994. 30+ years of experience and 5,000+ surveys for landowners and project teams.",
    url: `${SITE.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About</span>
          </nav>
          <p className="eyebrow">Pune roots. A wider perspective.</p>
          <h1>
            Good decisions
            <br />
            start on solid ground.
          </h1>
          <p className="lead">
            Since 1994, Shubham Surveyors has helped landowners, architects,
            developers and engineers understand the land they work with.
          </p>
          <Link href="/contact" className="button button-lime">
            Talk to our team <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section
        className="section-wrap"
        style={{
          paddingTop: "clamp(3rem, 6vw, 6rem)",
          paddingBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div
          className="detail-grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}
        >
          {[
            ["1994", "Established in Pune"],
            ["30+", "Years of surveying experience"],
            ["5,000+", "Surveys delivered"],
          ].map(([value, label]) => (
            <div className="detail-panel" key={label}>
              <p
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.06em",
                  marginBottom: "1rem",
                }}
              >
                {value}
              </p>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="section-wrap"
        style={{ paddingBottom: "clamp(3rem, 6vw, 6rem)" }}
      >
        <div className="section-head">
          <div>
            <p className="eyebrow">The way we work</p>
            <h2 className="section-heading">
              Field knowledge.
              <br />
              Usable information.
            </h2>
          </div>
          <p className="lead">
            A useful survey connects the conditions on site to the decisions
            that come next. We focus on the purpose, the measurement and the
            handover.
          </p>
        </div>
        <div
          className="detail-grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}
        >
          <div className="detail-panel">
            <Crosshair size={28} />
            <h3>Start with the purpose</h3>
            <p>
              A boundary enquiry, design survey and construction set-out need
              different information. We agree the survey extent and required
              output before fieldwork begins.
            </p>
          </div>
          <div className="detail-panel">
            <MapPin size={28} />
            <h3>Match the method to the site</h3>
            <p>
              Total station and RTK DGPS methods are selected around terrain,
              access, visibility and the project brief. Control and checks
              matter as much as the equipment.
            </p>
          </div>
          <div className="detail-panel">
            <FileCheck2 size={28} />
            <h3>Make the handover clear</h3>
            <p>
              Drawings, levels and coordinates need a clear reference. We
              discuss file formats, units, scope and any site limitations so
              your next team can use the result.
            </p>
          </div>
        </div>
      </section>
      <section
        className="section-wrap"
        style={{ paddingBottom: "clamp(3rem, 6vw, 6rem)" }}
      >
        <div className="section-head">
          <div>
            <p className="eyebrow">Local knowledge, direct contact</p>
            <h2 className="section-heading">
              Based in Maharashtra.
              <br />
              Ready for your brief.
            </h2>
          </div>
          <p className="lead">
            Speak with us about sites in Pune, Lonavala and across Maharashtra,
            or discuss mobilisation for a project elsewhere in India.
          </p>
        </div>
        <div
          className="detail-grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}
        >
          <div className="detail-panel">
            <p className="eyebrow">Pune office</p>
            <h3>Ambegaon Budruk</h3>
            <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
              {SITE.address}
            </address>
            <a
              className="text-link"
              href="https://share.google/jhxqVbuElVFH4Ocna"
              target="_blank"
              rel="noopener noreferrer"
            >
              View our Google Business Profile <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="detail-panel">
            <p className="eyebrow">Lonavala office</p>
            <h3>Lonavala</h3>
            <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
              {SITE.addressLonavala}
            </address>
            <Link className="text-link" href="/contact">
              Contact the team <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="detail-panel">
            <p className="eyebrow">Project confidentiality</p>
            <h3>Your information stays yours</h3>
            <p>
              Client names, site records and project drawings can be sensitive.
              Our public website focuses on capabilities and typical
              applications. Ask us about relevant experience and what can be
              shared for your enquiry.
            </p>
            <Link className="text-link" href="/projects">
              Explore project applications <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Let’s start with your site</p>
          <h2 className="section-heading">Tell us what you need to know.</h2>
          <p>
            Share the location, approximate area and purpose. We’ll help define
            the right survey scope.
          </p>
          <Link href="/quote" className="button button-lime">
            Discuss a survey <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
