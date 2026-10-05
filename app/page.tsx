import type { Metadata } from "next";
import Link from "next/link";
import Image, { getImageProps } from "next/image";
import { ArrowUpRight, Crosshair } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SOCIAL_IMAGES } from "@/lib/metadata";
import BrandMark from "@/components/brand/BrandMark";
import HeroVideo from "@/components/sections/HeroVideo";

export const metadata: Metadata = {
  title: {
    absolute: "Land Surveyors in India | DGPS & Mapping | Shubham Surveyors",
  },
  description:
    "Land surveying and geospatial services across India since 1994. DGPS, topographic, boundary, engineering and GIS surveys. Discuss your site with Shubham Surveyors.",
  alternates: { canonical: SITE.url },
  openGraph: {
    images: SOCIAL_IMAGES,
    url: SITE.url,
    title: "Shubham Surveyors | Know the land. See what’s possible.",
    description:
      "Precise land surveys and geospatial insight for projects across India. On the ground since 1994.",
  },
};

const services = [
  {
    title: "Land & boundary surveys",
    href: "boundary-survey",
    body: "Understand site extent, physical boundary features and land area against the available records. A clear starting point for your plans.",
  },
  {
    title: "Topographic & contour surveys",
    href: "topographic-survey",
    body: "Levels, contours and existing features translated into useful terrain information for architects, engineers and planning teams.",
  },
  {
    title: "DGPS & survey control",
    href: "dgps-survey",
    body: "Satellite-based positioning and control measurements, scoped around the coordinate framework and accuracy your project requires.",
  },
  {
    title: "Total Station & setting out",
    href: "total-station-survey",
    body: "Detailed site measurements and construction setting out that connect your design to positions and levels on the ground.",
  },
  {
    title: "Highways & infrastructure",
    href: "highway-survey",
    body: "Alignment surveys, longitudinal profiles and cross-sections for roads, corridors and linear infrastructure.",
  },
  {
    title: "GIS & digital mapping",
    href: "gis-mapping",
    body: "Organised spatial information that makes field data easier to understand, manage and use across your project.",
  },
];
const faqs = [
  [
    "Do you carry out surveys across India?",
    "Yes. Shubham Surveyors has worked on projects across India. Share your site location, area and objectives so we can confirm the survey method, field-team availability, travel and schedule for your project.",
  ],
  [
    "Which type of survey does my project need?",
    "Topographic surveys help with levels and design, boundary surveys document site extents and relevant features, and DGPS and Total Station methods support survey control and detailed measurement. We help define the right scope after understanding your site and purpose.",
  ],
  [
    "What will I receive after the survey?",
    "Your agreed scope may include survey drawings, coordinate and level data, area calculations, contours, CAD files or GIS layers. We confirm deliverables, formats and the reference system before fieldwork begins.",
  ],
  [
    "How is the survey cost calculated?",
    "The survey type, area, terrain, access, control requirements, travel and deliverables all affect the price. Our cost estimator provides an indicative range. A written quotation confirms the scope and final price.",
  ],
  [
    "What should I share before requesting a survey?",
    "Start with the site location, approximate area, your project objective and any available plans or land records. We will clarify access and the additional information needed to prepare a useful survey brief.",
  ],
];

export default function HomePage() {
  const poster = getImageProps({
    src: "/images/video-poster.webp",
    width: 600,
    height: 338,
    alt: "",
  }).props.src;
  return (
    <div className="grove-home">
      <section className="grove-hero" aria-labelledby="grove-title">
        <div className="grove-hero-still">
          <Image
            src={poster}
            alt="Illustrative aerial landscape of green fields and woodland"
            fill
            preload
            unoptimized
            sizes="100vw"
          />
        </div>
        <HeroVideo poster={poster} />
        <div className="grove-hero-shade" />
        <div className="grove-hero-content">
          <div>
            <p className="grove-eyebrow">
              <span /> Land & geospatial surveying · Since 1994
            </p>
            <h1 id="grove-title">
              Know the land.
              <br />
              See what’s <em>possible.</em>
            </h1>
          </div>
          <div className="grove-hero-aside">
            <p>
              Land surveys, DGPS and spatial insight for projects across India.
              A clear foundation for whatever comes next.
            </p>
            <Link href="/contact" prefetch={false} className="grove-line-link">
              Discuss your land <ArrowUpRight size={25} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grove-hero-bottom">
          <span>Serving projects across India</span>
          <span className="grove-media-credit">
            Illustrative landscape imagery
          </span>
          <a href="#perspective" aria-label="Explore below: our perspective">
            Explore below ↓
          </a>
        </div>
      </section>

      <section className="grove-intro grove-pad" id="perspective">
        <div className="grove-intro-label">
          <p className="grove-eyebrow">An experienced perspective</p>
          <BrandMark size={45} />
        </div>
        <div>
          <h2>
            Every great project begins with the land.
            <br />
            <em>And a clear understanding of it.</em>
          </h2>
          <div className="grove-intro-bottom">
            <p>
              From individual plots to infrastructure across India, we bring
              field experience, precise measurement and practical insight to the
              decisions that shape your project.
            </p>
            <div className="grove-stat">
              <strong>30+</strong>
              <span>Years in the field</span>
            </div>
            <div className="grove-stat">
              <strong>5,000+</strong>
              <span>Projects delivered</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="grove-services grove-pad"
        id="expertise"
        aria-labelledby="expertise-title"
      >
        <figure className="grove-equipment">
          <Image
            src="/images/dgps-grove.webp"
            alt="Illustrative DGPS GNSS rover receiver on a survey pole in open terrain"
            fill
            sizes="(max-width: 760px) 100vw, 43vw"
          />
          <figcaption>
            <span>DGPS / SATELLITE POSITIONING</span>
            <span>Concept imagery</span>
          </figcaption>
          <Crosshair
            className="grove-photo-mark"
            size={35}
            strokeWidth={0.8}
            aria-hidden="true"
          />
        </figure>
        <div className="grove-services-copy">
          <p className="grove-eyebrow">Our expertise</p>
          <h2 id="expertise-title">
            The right measure.
            <br />
            <em>For your next move.</em>
          </h2>
          <div className="grove-service-list">
            {services.map((service, index) => (
              <details key={service.href} open={index === 0}>
                <summary>
                  <small>0{index + 1}</small>
                  <span>{service.title}</span>
                  <span className="grove-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="grove-service-detail">
                  <p>{service.body}</p>
                  <Link href={`/services/${service.href}`}>
                    Explore {service.title.toLowerCase()}{" "}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </details>
            ))}
          </div>
          <Link href="/services" className="grove-services-all">
            Explore all survey services{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="grove-approach grove-pad" id="approach">
        <div className="grove-approach-top">
          <div>
            <p className="grove-eyebrow">From field to finished plan</p>
            <h2>
              Care in the process.
              <br />
              <em>Confidence in the outcome.</em>
            </h2>
          </div>
          <p>
            The tools matter. So do the people interpreting what they measure.
          </p>
        </div>
        <div className="grove-steps">
          {[
            [
              "01",
              "Understand the brief",
              "Your location, your purpose and the information your team needs. A clear scope before the first measurement.",
            ],
            [
              "02",
              "Measure & verify",
              "Field methods matched to the terrain, control requirements and agreed accuracy. Observations checked with care.",
            ],
            [
              "03",
              "Make the data useful",
              "Survey plans and digital deliverables your architect, engineer or project team can use, with a clear handover.",
            ],
          ].map(([number, title, body]) => (
            <article key={number}>
              <span>{number} /</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <Link href="/about" className="grove-line-link">
          Get to know our practice <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className="grove-reach grove-pad" aria-labelledby="reach-title">
        <div>
          <p className="grove-eyebrow">One practice. A wider perspective.</p>
          <h2 id="reach-title">
            Across India.
            <br />
            <em>Close to the detail.</em>
          </h2>
          <p>
            We have worked across India, supporting landowners, architects,
            developers and engineering teams. Every landscape is different. Our
            commitment to understanding it remains the same.
          </p>
          <Link href="/locations" className="grove-line-link">
            Explore our national coverage{" "}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
        <figure>
          <Image
            src="/images/grove-aerial.webp"
            alt="Illustrative aerial view of agricultural land parcels and undulating terrain"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <figcaption>Concept imagery · not a client project</figcaption>
        </figure>
      </section>

      <section className="grove-sectors grove-pad">
        <div className="grove-section-head">
          <p className="grove-eyebrow">Built around your project</p>
          <h2>
            Different ambitions.
            <br />
            <em>The same attention.</em>
          </h2>
        </div>
        <div className="grove-sector-list">
          {[
            [
              "Real estate & construction",
              "real-estate",
              "From a first feasibility study to the detail of setting out.",
            ],
            [
              "Infrastructure & highways",
              "infrastructure",
              "Ground information for the connections that move India.",
            ],
            [
              "Landowners & agriculture",
              "agriculture",
              "A clearer understanding of the land you own and manage.",
            ],
            [
              "Mining, utilities & urban planning",
              "mining",
              "Survey insight for complex sites and changing landscapes.",
            ],
          ].map(([title, href, description], index) => (
            <Link key={href} href={`/industries/${href}`}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight size={23} strokeWidth={1} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="grove-journal grove-pad">
        <div className="grove-section-head">
          <p className="grove-eyebrow">Notes from the practice</p>
          <h2>
            A more informed
            <br />
            <em>place to begin.</em>
          </h2>
          <Link href="/knowledge" className="grove-line-link">
            All survey guides <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="grove-journal-grid">
          {[
            [
              "Before you begin",
              "How to prepare for your land survey",
              "A practical checklist for your site, available documents and project brief.",
              "survey-preparation",
            ],
            [
              "Methods explained",
              "Total Station or DGPS?",
              "The strengths of each method, and why your project may benefit from both.",
              "total-station-vs-dgps",
            ],
            [
              "For landowners",
              "A first step for a boundary enquiry",
              "Gather the records and understand what a measured plan can tell you.",
              "boundary-disputes",
            ],
          ].map(([tag, title, body, slug], index) => (
            <Link href={`/knowledge/${slug}`} key={slug}>
              <div
                className={`grove-journal-art grove-journal-art-${index + 1}`}
                aria-hidden="true"
              >
                <BrandMark size={110} />
                <span>0{index + 1}</span>
              </div>
              <p className="grove-eyebrow">{tag}</p>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="grove-journal-link">
                Read the guide <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grove-faq grove-pad">
        <div>
          <p className="grove-eyebrow">A little clarity</p>
          <h2>
            Good questions.
            <br />
            <em>Clear answers.</em>
          </h2>
          <p>Your project is unique. A conversation is a good first step.</p>
          <Link href="/contact" prefetch={false} className="grove-line-link">
            Talk to our team <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
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
    </div>
  );
}
