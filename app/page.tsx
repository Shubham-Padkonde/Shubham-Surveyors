import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  MapPinned,
  Mountain,
  Satellite,
  ScanLine,
  Route,
  Map,
  Plus,
  Crosshair,
} from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Land Surveyors in Pune & Maharashtra | Shubham Surveyors",
  },
  description:
    "Land surveyors in Pune and Lonavala since 1994. Expert DGPS, Total Station, boundary and topographic surveys across Maharashtra and India. Get a project quote.",
  alternates: { canonical: SITE.url },
  openGraph: {
    url: SITE.url,
    title: "Shubham Surveyors | Clarity on the ground.",
    description:
      "Land surveying in Pune, Maharashtra and across India. 30+ years of field experience. Start your project with the right survey.",
  },
};
const services = [
  {
    icon: MapPinned,
    name: "Boundary & land",
    description:
      "Understand your land. Map boundaries, site features and area with a clear survey plan.",
    href: "boundary-survey",
    label: "LANDOWNERS & DEVELOPERS",
  },
  {
    icon: Mountain,
    name: "Topographic & contour",
    description:
      "See the shape of your site. Levels, contours and features for better design decisions.",
    href: "topographic-survey",
    label: "ARCHITECTS & PLANNERS",
  },
  {
    icon: Satellite,
    name: "DGPS & control",
    description:
      "Connect your project to a reliable coordinate framework with satellite-based surveying.",
    href: "dgps-survey",
    label: "ENGINEERING & INFRASTRUCTURE",
  },
  {
    icon: ScanLine,
    name: "Total Station",
    description:
      "Detailed site measurements and construction setting out, aligned to your project brief.",
    href: "total-station-survey",
    label: "BUILDERS & CONTRACTORS",
  },
  {
    icon: Route,
    name: "Highways & corridors",
    description:
      "Alignment, longitudinal profiles and cross-sections for roads and linear infrastructure.",
    href: "highway-survey",
    label: "INFRASTRUCTURE TEAMS",
  },
  {
    icon: Map,
    name: "GIS & digital mapping",
    description:
      "Turn field observations into organised spatial data your project team can use.",
    href: "gis-mapping",
    label: "PLANNING & ASSET MANAGEMENT",
  },
];
const faqs = [
  [
    "Which survey do I need for my land?",
    "For site levels and design, a topographic survey is usually the starting point. For land extents, discuss a boundary survey. For construction coordinates and setting out, Total Station and DGPS methods may be combined. Share your site location and objective and we will help define the scope.",
  ],
  [
    "Do you work outside Pune?",
    "Yes. Our bases are in Pune and Lonavala, with surveying services across Maharashtra and projects across India. We confirm field-team availability, travel and the proposed schedule when we review your enquiry.",
  ],
  [
    "What does a land survey cost?",
    "Cost depends on the survey type, area, terrain, access, control requirements and deliverables. Our estimator gives an indicative range; your written project quotation confirms the final scope and price.",
  ],
  [
    "What will I receive after the survey?",
    "The agreed scope may include a survey plan, coordinate and level data, area calculations, contour drawings, CAD files or GIS layers. File formats, reference system and drawing requirements are agreed before fieldwork.",
  ],
  [
    "Can a private survey replace government Mojani?",
    "A private survey can support your understanding of the site and document preparation. Official land measurement and revenue-record decisions follow the relevant government process. We can help you understand the distinction and prepare for Maharashtra Mojani.",
  ],
];
export default function HomePage() {
  return (
    <>
      <section className="editorial-hero">
        <div className="editorial-hero-image">
          <Image src="/images/terrain-editorial.webp" alt="Illustrative aerial landscape of mountain ridges, fields and a reservoir" fill preload sizes="100vw" />
        </div>
        <div className="editorial-hero-overlay" />
        <div className="editorial-hero-content">
          <p className="eyebrow">
            <span className="hero-line" /> LAND SURVEYING & GEOSPATIAL · SINCE 1994
          </p>
          <h1>
            A clearer view.<br />
            <span>A stronger</span><br />
            foundation.
          </h1>
          <p className="hero-description">
            We turn the complexity of the land into the confidence to move forward.
            Precise surveys. Practical insight. Possibilities, mapped.
          </p>
          <div className="hero-actions">
            <Link href="/quote" prefetch={false} className="button button-cobalt">
              Start your project <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <Link href="/services" className="hero-secondary">
              Explore our expertise <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero-field-marker" aria-hidden="true"><Crosshair size={44} strokeWidth={.7} /><span>THE BIG PICTURE.<br />DOWN TO THE LAST DETAIL.</span></div>
        <div className="editorial-hero-bottom">
          <span><span className="live-dot" /> PUNE & LONAVALA <span className="hero-slash">/</span> SERVING INDIA</span>
          <span className="hero-image-credit">AI-generated landscape illustration</span>
          <a href="#services" aria-label="Explore below: our expertise">EXPLORE BELOW <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section className="trust-strip" aria-label="Our experience">
        <div>
          <strong>
            1994<span>↗</span>
          </strong>
          <span>Our foundation</span>
        </div>
        <div>
          <strong>30+</strong>
          <span>Years on the ground</span>
        </div>
        <div>
          <strong>5,000+</strong>
          <span>Surveys. Real-world insight.</span>
        </div>
        <div className="trust-statement">
          <span>
            Good decisions start
            <br />
            with <strong>good ground data.</strong>
          </span>
          <Link href="/about" aria-label="Discover our surveying approach">
            <ArrowUpRight size={30} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section-wrap services-section" id="services">
        <div className="section-head">
          <div>
            <p className="eyebrow">01 / Our expertise</p>
            <h2 className="section-heading">
              Precision is the start.
              <br />
              <span>Possibility is the point.</span>
            </h2>
          </div>
          <div>
            <p>
              Know what’s there before you decide what comes next. We turn
              complex ground conditions into practical information.
            </p>
            <Link href="/services" className="text-link">
              View all services <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="expertise-index">
          {services.map((service, i) => (
            <Link
              className="expertise-row"
              href={`/services/${service.href}`}
              key={service.href}
            >
              <span className="expertise-number">0{i + 1}</span>
              <div className="expertise-title"><service.icon size={27} strokeWidth={1.2} aria-hidden="true" /><h3>{service.name}</h3></div>
              <p>{service.description}</p>
              <span className="expertise-arrow"><ArrowUpRight size={24} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
        <div className="service-footnote">
          <span>Need help with land measurement in Maharashtra?</span>
          <Link href="/services/mojani-support" className="text-link">
            Explore Mojani support <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="approach-section field-approach">
        <figure className="field-photo">
          <Image src="/images/survey-editorial.webp" alt="Illustrative Total Station instrument set up on a tripod in open terrain" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="field-photo-label"><span>01 / ON THE GROUND</span><Crosshair size={34} strokeWidth={1} /></div>
          <figcaption>AI-generated illustration · not a client project</figcaption>
        </figure>
        <div className="approach-copy">
          <p className="eyebrow">02 / From field to finished plan</p>
          <h2 className="section-heading">
            Technology measures.
            <br /><span>Experience understands.</span>
          </h2>
          <p className="lead">
            A survey is more than a drawing. It’s the starting point for
            everything you’re planning to build.
          </p>
          <div className="process-list">
            {[
              [
                "01",
                "Understand the brief",
                "Your site, your objective and the information your team needs.",
              ],
              [
                "02",
                "Measure & verify",
                "Fieldwork using methods suited to the terrain, control and required accuracy.",
              ],
              [
                "03",
                "Make the data useful",
                "Checked plans and digital deliverables, with a clear handover.",
              ],
            ].map(([n, title, body]) => (
              <div key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/about" className="text-link">
            Get to know our approach{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section-wrap sectors-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">03 / Built around your project</p>
            <h2 className="section-heading">
              Different challenges.
              <br />
              <span>The same commitment.</span>
            </h2>
          </div>
          <Link href="/industries" className="text-link">
            Explore industries <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="sector-list">
          {[
            [
              "01",
              "Real estate & construction",
              "From development planning to setting out.",
              "real-estate",
            ],
            [
              "02",
              "Infrastructure & highways",
              "Ground data for projects that connect us.",
              "infrastructure",
            ],
            [
              "03",
              "Landowners & agriculture",
              "Understand the land you own and manage.",
              "agriculture",
            ],
            [
              "04",
              "Mining, utilities & urban planning",
              "Survey information for complex environments.",
              "mining",
            ],
          ].map(([n, title, body, slug]) => (
            <Link href={`/industries/${slug}`} key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <ArrowUpRight size={24} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <section className="local-section">
        <div>
          <p className="eyebrow">04 / Local knowledge. Wider reach.</p>
          <h2 className="section-heading">
            Rooted in Maharashtra.
            <br />
            <span>Ready for your next site.</span>
          </h2>
          <p>
            Our story began in 1994. Today, our Pune and Lonavala teams support
            landowners, architects, developers and engineering teams across
            India.
          </p>
          <div className="hero-actions">
            <Link href="/land-surveyors-pune" className="button button-lime">
              Surveyors in Pune <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/locations" className="text-link">
              Explore our coverage <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="location-cards">
          <Link href="/land-surveyors-pune">
            <span className="eyebrow">PUNE / OUR BASE</span>
            <h3>Pune</h3>
            <p>Ambegaon (Bk), Pune 411046</p>
            <ArrowUpRight size={21} aria-hidden="true" />
          </Link>
          <Link href="/locations/maharashtra">
            <span className="eyebrow">LONAVALA / LOCAL EXPERTISE</span>
            <h3>Lonavala</h3>
            <p>Siddharth Nagar, Lonavala 410401</p>
            <ArrowUpRight size={21} aria-hidden="true" />
          </Link>
          <a
            href={SITE.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="google-link"
          >
            Find our business on Google{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="section-wrap insights-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">05 / Field notes</p>
            <h2 className="section-heading">
              A little knowledge.
              <br />
              <span>A stronger start.</span>
            </h2>
          </div>
          <Link href="/knowledge" className="text-link">
            All survey guides <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="insight-grid">
          {[
            [
              "BEFORE YOU BEGIN",
              "How to prepare for your land survey",
              "A practical checklist for site access, documents and the information to share with your surveyor.",
              "survey-preparation",
            ],
            [
              "METHODS EXPLAINED",
              "Total Station or DGPS?",
              "Understand the strengths of each method and why your project may benefit from both.",
              "total-station-vs-dgps",
            ],
            [
              "MAHARASHTRA LAND RECORDS",
              "Understanding the Mojani process",
              "Official land measurement, application preparation and where a private survey can help.",
              "mojani-process",
            ],
          ].map(([tag, title, body, slug], i) => (
            <Link
              href={`/knowledge/${slug}`}
              className="insight-card"
              key={slug}
            >
              <div className={`insight-art art-${i + 1}`} aria-hidden="true">
                <span>0{i + 1}</span>
                <Plus size={60} strokeWidth={0.65} />
              </div>
              <span className="eyebrow">{tag}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="text-link">
                Read the guide <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-wrap home-faq">
        <div>
          <p className="eyebrow">Good questions. Clear answers.</p>
          <h2 className="section-heading">
            Let’s make
            <br />
            <span>things clear.</span>
          </h2>
          <p>
            Not sure where to start?
            <br />A conversation is a good first step.
          </p>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="text-link"
          >
            Call {SITE.phone} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
