import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Route,
  Building2,
  Mountain,
  Sprout,
  Building,
  Zap,
} from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Survey services by industry | Pune & Maharashtra",
  description:
    "Land survey support for real estate, infrastructure, earthworks, agriculture, urban planning and utilities. Explore the right scope for your project.",
  alternates: { canonical: SITE.url + "/industries" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Survey services by industry | Pune & Maharashtra | Shubham Surveyors",
    description:
      "Land survey support for real estate, infrastructure, earthworks, agriculture, urban planning and utilities. Explore the right scope for your project.",
    url: `${SITE.url}/industries`,
  },
};

const industries = [
  {
    slug: "real-estate",
    title: "Real estate & development",
    icon: Building2,
    description:
      "Site information for architects, developers and construction teams, from the first contour plan to the as-built record.",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure & highways",
    icon: Route,
    description:
      "Corridor mapping, profiles and control that connect the engineering design to the actual ground.",
  },
  {
    slug: "mining",
    title: "Mining & earthworks",
    icon: Mountain,
    description:
      "Measured surfaces and quantity comparisons with clearly defined boundaries, references and assumptions.",
  },
  {
    slug: "agriculture",
    title: "Agriculture & land",
    icon: Sprout,
    description:
      "Farm and rural land information for level planning, access, irrigation design and boundary enquiries.",
  },
  {
    slug: "smart-cities",
    title: "Urban planning & smart cities",
    icon: Building,
    description:
      "Topographic and GIS base information to help planners and engineering teams work from a common reference.",
  },
  {
    slug: "utilities",
    title: "Oil, gas & utilities",
    icon: Zap,
    description:
      "Route, profile and visible asset surveys for pipeline, power and utility infrastructure teams.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Industries</span>
          </nav>
          <p className="eyebrow">Surveying in context</p>
          <h1>
            Different projects.
            <br />
            The same care for detail.
          </h1>
          <p className="lead">
            Your project determines what needs to be measured. Explore how
            survey information supports decisions across the built environment
            and the land around it.
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
        <div className="service-grid">
          {industries.map(({ slug, title, icon: Icon, description }, index) => (
            <Link
              className="service-card"
              href={"/industries/" + slug}
              key={slug}
            >
              <div className="flex justify-between items-start">
                <span className="eyebrow">
                  {String(index + 1).padStart(2, "0")} / Sector
                </span>
                <Icon size={28} />
              </div>
              <h2
                style={{
                  fontSize: "1.6rem",
                  lineHeight: 1.25,
                  marginTop: "2rem",
                }}
              >
                {title}
              </h2>
              <p>{description}</p>
              <span className="text-link" style={{ marginTop: "auto" }}>
                Explore the survey scope <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Not sure where to start?</p>
          <h2 className="section-heading">Tell us about the site.</h2>
          <p>
            We’ll help you define the scope, suitable survey methods and the
            information your team needs.
          </p>
          <Link href="/quote" className="button button-lime">
            Discuss your requirements <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
