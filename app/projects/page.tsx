import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, Route, Mountain, Sprout } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Survey project applications | Pune & Maharashtra",
  description:
    "Explore how land surveys support development, road design, earthworks and agricultural planning. Discuss relevant surveying experience with Shubham Surveyors.",
  alternates: { canonical: SITE.url + "/projects" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Survey project applications | Pune & Maharashtra | Shubham Surveyors",
    description:
      "Explore how land surveys support development, road design, earthworks and agricultural planning. Discuss relevant surveying experience with Shubham Surveyors.",
    url: `${SITE.url}/projects`,
  },
};

const applications = [
  {
    title: "A development site, ready for design",
    icon: Building2,
    sector: "Real estate",
    challenge:
      "An architect needs a reliable base before positioning buildings, roads and drainage.",
    scope:
      "Site features, spot levels, contours and a boundary reference, with the survey extent agreed against the available records.",
    output: "A coordinated CAD base and level information for the design team.",
    href: "/industries/real-estate",
  },
  {
    title: "A corridor, understood in section",
    icon: Route,
    sector: "Infrastructure",
    challenge:
      "An engineering team needs to compare an alignment with the actual terrain.",
    scope:
      "Control points, longitudinal profiles, cross-sections and visible features along the agreed corridor.",
    output:
      "Profiles, sections and survey drawings matched to the engineer’s brief.",
    href: "/industries/infrastructure",
  },
  {
    title: "Earthworks, measured over time",
    icon: Mountain,
    sector: "Mining & earthworks",
    challenge:
      "A site team needs a consistent basis for comparing ground or stockpile quantities.",
    scope:
      "Surface measurement at an agreed date, repeatable control, and clearly defined volume boundaries and reference surfaces.",
    output:
      "Surface models and a quantity statement that explains its assumptions.",
    href: "/industries/mining",
  },
  {
    title: "Farmland, planned with the terrain",
    icon: Sprout,
    sector: "Agriculture",
    challenge:
      "A landowner wants to understand levels, access and the physical extent of a site.",
    scope:
      "Field features, levels and available boundary information, with access and crop conditions considered before the visit.",
    output:
      "A practical site plan to support irrigation, grading or further professional review.",
    href: "/industries/agriculture",
  },
];

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Project applications</span>
          </nav>
          <p className="eyebrow">From fieldwork to the next decision</p>
          <h1>
            Every site has
            <br />a question to answer.
          </h1>
          <p className="lead">
            5,000+ surveys since 1994. The applications below show how a
            considered survey scope can support your project.
          </p>
          <Link href="/contact" className="button button-lime">
            Discuss relevant experience <ArrowUpRight size={18} />
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
        <div className="section-head">
          <div>
            <p className="eyebrow">Typical survey applications</p>
            <h2 className="section-heading">
              A clearer brief.
              <br />A more useful result.
            </h2>
          </div>
          <p className="lead">
            These are illustrative survey scenarios, not published client case
            studies. Client identities and confidential project records are kept
            private.
          </p>
        </div>
        <div
          className="detail-grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          }}
        >
          {applications.map(
            ({ title, icon: Icon, sector, challenge, scope, output, href }) => (
              <article className="detail-panel" key={title}>
                <Icon size={30} />
                <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
                  {sector} · Illustrative application
                </p>
                <h3 style={{ fontSize: "1.6rem" }}>{title}</h3>
                <p>{challenge}</p>
                <h4 style={{ marginTop: "1.5rem" }}>The survey brief</h4>
                <p>{scope}</p>
                <h4 style={{ marginTop: "1.5rem" }}>The handover</h4>
                <p>{output}</p>
                <Link href={href} className="text-link">
                  Explore {sector.toLowerCase()} surveys{" "}
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ),
          )}
        </div>
      </section>
      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Your project is the starting point</p>
          <h2 className="section-heading">Let’s discuss a site like yours.</h2>
          <p>
            Tell us the sector, location and intended use. We can discuss
            relevant experience and the examples we’re able to share.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Share your project brief <ArrowUpRight size={18} />
            </Link>
            <Link href="/services" className="button button-outline">
              Explore survey services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
