import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SOCIAL_IMAGES } from "@/lib/metadata";
import { SERVICE_DETAILS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Land & geospatial surveying services across India",
  description:
    "Land, building, railway line, water supply, drainage and irrigation surveys across India. Explore DGPS, topographic and mapping services for your project.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    images: SOCIAL_IMAGES,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title:
      "Land & geospatial surveying services across India | Shubham Surveyors",
    description:
      "Land, building, railway line, water supply, drainage and irrigation surveys across India. Explore DGPS, topographic and mapping services for your project.",
    url: `${SITE.url}/services`,
  },
};

const projectNeeds = [
  {
    title: "Understand a property",
    description:
      "Start with a boundary survey for dimensions and area, or add a topographic survey for site levels and features.",
    href: "/services/boundary-survey",
    link: "Explore boundary surveys",
  },
  {
    title: "Prepare a design",
    description:
      "Give your architect or engineer a measured base: features, contours, reference levels and an agreed CAD format.",
    href: "/services/topographic-survey",
    link: "Explore topographic surveys",
  },
  {
    title: "Build or verify",
    description:
      "Discuss control points, construction setting out, corridor sections or as-built measurements with a clear drawing brief.",
    href: "/services/total-station-survey",
    link: "Explore Total Station surveys",
  },
];

const legacyAnchors: Record<string, string> = {
  "boundary-survey": "boundary",
  "topographic-survey": "topo",
  "dgps-survey": "dgps",
  "highway-survey": "highway",
  "mojani-support": "regulatory",
  "gis-mapping": "gis",
};

export default function ServicesPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shubham Surveyors services",
    itemListElement: SERVICE_DETAILS.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${SITE.url}/services/${service.slug}`,
    })),
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(listSchema).replace(/</g, "\\u003c"),
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
                <span aria-current="page">Services</span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow">Surveying landscapes across India</p>
          <h1>
            Know the ground.
            <br />
            Plan with clarity.
          </h1>
          <p className="lead">
            From a single plot to an infrastructure corridor, we turn field
            measurements into information your project can use. Explore the
            right survey, what it includes and how to prepare.
          </p>
          <Link href="/contact#enquiry-form" className="button button-lime">
            Discuss your survey <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              {SERVICE_DETAILS.length} areas of expertise
            </p>
            <h2 className="section-heading">
              A clear scope.
              <br />A useful result.
            </h2>
          </div>
          <p>
            Each service starts with your purpose, site conditions and required
            outputs. We agree the method, deliverables and programme before
            field work.
          </p>
        </div>
        <div className="service-grid">
          {SERVICE_DETAILS.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-card"
              id={legacyAnchors[service.slug] || service.slug}
              style={{ scrollMarginTop: "7rem" }}
            >
              <span className="eyebrow">
                {service.number} / Survey services
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="text-link">
                View service <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Start with your project</p>
            <h2 className="section-heading">Not sure which survey you need?</h2>
          </div>
          <p>
            Tell us what you want to do with the land or the data. We can help
            you define the measurement brief.
          </p>
        </div>
        <div className="detail-grid">
          {projectNeeds.map((need) => (
            <article className="detail-panel" key={need.title}>
              <h3>{need.title}</h3>
              <p>{need.description}</p>
              <Link href={need.href} className="text-link">
                {need.link} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="detail-grid">
          <article className="detail-panel">
            <p className="eyebrow">The handover</p>
            <h2>Files that fit your workflow.</h2>
            <p>
              The proposal sets out exactly what you will receive. Depending on
              the brief, this can include:
            </p>
            <ul className="check-list">
              <li>Editable DWG or DXF drawings and readable PDF plans.</li>
              <li>
                Point coordinates, reference notes and measured area schedules.
              </li>
              <li>
                Contours, longitudinal profiles, cross-sections or terrain data.
              </li>
              <li>Structured GIS layers in an agreed format.</li>
            </ul>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">Before we begin</p>
            <h2>Bring the right information.</h2>
            <p>
              A location pin, approximate area and a short description of the
              project are enough to start a conversation. Existing plans, site
              photographs and your consultant’s specifications help us prepare a
              more useful scope.
            </p>
            <p>
              We support survey projects across India, planning field access,
              travel and mobilisation around the site and your programme. These
              details form part of the agreed scope.
            </p>
            <Link href="/locations" className="text-link">
              Explore our coverage <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Let’s get started</p>
          <h2>Tell us what you’re planning.</h2>
          <p>
            Share your site, purpose and deadline. We’ll help define the next
            step.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#enquiry-form" className="button button-lime">
              Request a survey <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="button button-outline">
              Speak with the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
