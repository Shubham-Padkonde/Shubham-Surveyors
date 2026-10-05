import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/constants";

interface IndustryPageTemplateProps {
  slug: string;
  sector: string;
  headline: string;
  intro: string;
  capabilities: { title: string; desc: string }[];
  deliverables: string[];
  briefing: string[];
  note: string;
}

export default function IndustryPageTemplate({
  slug,
  sector,
  headline,
  intro,
  capabilities,
  deliverables,
  briefing,
  note,
}: IndustryPageTemplateProps) {
  const url = SITE.url + "/industries/" + slug;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: sector + " survey services",
        description: intro,
        url,
        provider: {
          "@id": SITE.url + "/#organization",
          name: SITE.name,
          url: SITE.url,
        },
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: SITE.url + "/industries",
          },
          { "@type": "ListItem", position: 3, name: sector, item: url },
        ],
      },
    ],
  };
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
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/industries">Industries</Link>
            <span aria-hidden="true">/</span>
            <span>{sector}</span>
          </nav>
          <p className="eyebrow">{sector}</p>
          <h1>{headline}</h1>
          <p className="lead">{intro}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Discuss your project <ArrowUpRight size={18} />
            </Link>
            <Link href="/services" className="button button-outline">
              Explore survey methods
            </Link>
          </div>
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
            <p className="eyebrow">A scope built around your site</p>
            <h2 className="section-heading">
              Measure what matters
              <br />
              to the next stage.
            </h2>
          </div>
          <p className="lead">
            We support survey projects across India, planning the method,
            mobilisation and deliverables around your site and the decisions
            your team needs to make.
          </p>
        </div>
        <div
          className="detail-grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          }}
        >
          {capabilities.map((cap, index) => (
            <article className="detail-panel" key={cap.title}>
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="section-wrap"
        style={{ paddingBottom: "clamp(3rem, 6vw, 6rem)" }}
      >
        <div
          className="detail-grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          }}
        >
          <div className="detail-panel">
            <p className="eyebrow">What to share</p>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
              A useful first brief
            </h2>
            <ul className="check-list">
              {briefing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/knowledge/survey-preparation" className="text-link">
              Read the survey preparation guide <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="detail-panel" style={{ background: "#e5e3d7" }}>
            <p className="eyebrow">Outputs to agree</p>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
              Information your team can use
            </h2>
            <ul className="check-list">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: "1.5rem" }}>{note}</p>
          </div>
        </div>
      </section>
      <section
        className="section-wrap"
        style={{ paddingBottom: "clamp(3rem, 6vw, 6rem)" }}
      >
        <div className="section-head">
          <div>
            <p className="eyebrow">From brief to handover</p>
            <h2 className="section-heading">A clear process.</h2>
          </div>
        </div>
        <div
          className="detail-grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}
        >
          {[
            {
              title: "01 / Define the scope",
              desc: "Review the location, intended use, available records and the information your technical team requires.",
            },
            {
              title: "02 / Survey and check",
              desc: "Plan the control and field observations around access, site conditions and the agreed measurement requirements.",
            },
            {
              title: "03 / Coordinate the handover",
              desc: "Issue the agreed outputs with clear references, units, revisions and limitations, ready for your team to review.",
            },
          ].map((step) => (
            <div className="detail-panel" key={step.title}>
              <Check size={24} />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Bring us your next site</p>
          <h2 className="section-heading">Start with a conversation.</h2>
          <p>
            Share the location, project stage and survey requirement. We’ll
            discuss the scope, schedule and suitable outputs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Request a survey quote <ArrowUpRight size={18} />
            </Link>
            <a
              href={"https://wa.me/" + SITE.whatsappNumber}
              className="button button-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss on WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
