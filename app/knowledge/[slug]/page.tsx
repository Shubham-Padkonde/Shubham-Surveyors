import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";

interface Article {
  title: string;
  category: string;
  description: string;
  takeaway: string;
  sections: {
    heading: string;
    paragraphs: string[];
    points?: string[];
    source?: { label: string; url: string };
  }[];
  checklist: string[];
  related: string[];
}

const landRecords = {
  label: "Maharashtra Land Records: e-Mojani FAQs",
  url: "https://bhumiabhilekh.maharashtra.gov.in/HelpAndFAQs/HelpAndFAQs?districtId=37",
};
const mahabhumi = {
  label: "Mahabhumi: official land records services",
  url: "https://mahabhumi.gov.in/",
};
const rera = {
  label: "MahaRERA: guidance for registering a new project",
  url: "https://www.maharera.maharashtra.gov.in/guidance-registration-new-project",
};

const articles: Record<string, Article> = {
  "mojani-process": {
    title: "Understanding the Mojani process in Maharashtra",
    category: "Maharashtra land records",
    description:
      "Understand official land measurement, e-Mojani applications, CAN and MRN references, and how a private survey can support your preparation.",
    takeaway:
      "Start with the correct land record and the purpose of measurement. Official Mojani is handled through the Land Records Department; a private survey supports preparation and site understanding.",
    sections: [
      {
        heading: "Start with the official route",
        paragraphs: [
          "Mojani means measurement. For official land measurement in Maharashtra, use the Land Records Department’s services. Mahabhumi links to e-Mojani and to records such as 7/12 extracts, property cards and maps. Begin from the official portal so you use the current service for your location.",
        ],
        source: mahabhumi,
      },
      {
        heading: "Keep the application references",
        paragraphs: [
          "The department distinguishes the Citizen Application Number (CAN), which acknowledges a submitted application, from the Mojni Register Number (MRN), assigned after the relevant office checks and accepts it. If an application is returned for corrections, review the issue in your login and supply the requested information.",
        ],
        source: landRecords,
      },
      {
        heading: "Prepare a useful document folder",
        paragraphs: [
          "Before seeking help, identify the village, taluka, district and survey, Gat or CTS number. Keep readable copies of the records you hold. The following is a preparation list, not a substitute for the portal’s document requirements.",
        ],
        points: [
          "Current 7/12 extract or property card, as applicable to the land.",
          "Available village map, earlier measurement plan and relevant deed or layout references.",
          "Applicant contact details, application references and correspondence already received.",
          "A short explanation of the purpose and the area or boundary that needs attention.",
        ],
      },
      {
        heading: "After the measurement",
        paragraphs: [
          "The department’s FAQ says the measurement map, or K-prat, becomes available online after the process is complete and can be downloaded with a digital signature. Retain the issued record and correspondence together. Ask the relevant office about any discrepancy or clarification you need.",
        ],
        source: landRecords,
      },
      {
        heading: "How a private survey helps",
        paragraphs: [
          "A private survey can record existing features, measure levels and prepare a site plan for your technical team. Ask explicitly whether your requirement is a design survey, a boundary comparison or an official measurement application. Each has a different purpose. Fees, scheduling and decisions for official measurement remain with the department; confirm them against your application.",
        ],
      },
    ],
    checklist: [
      "Identify the land parcel accurately.",
      "State why measurement is needed.",
      "Use the current official portal.",
      "Keep CAN/MRN and payment acknowledgements.",
      "Retain the issued map and correspondence.",
    ],
    related: ["boundary-disputes", "survey-preparation"],
  },
  "rera-requirements": {
    title: "How survey information supports a MahaRERA project",
    category: "For developers",
    description:
      "A practical guide to coordinating land survey data with your architect, engineer and MahaRERA registration team, with official reference links.",
    takeaway:
      "Treat the survey as one part of a coordinated project record. Agree the information your architect and engineer need, and check registration requirements directly with MahaRERA.",
    sections: [
      {
        heading: "Begin with the project team’s requirements",
        paragraphs: [
          "MahaRERA provides guidance for new project registration, including information, document and certificate resources. Review the current requirements with the professional responsible for your application. A survey drawing does not replace the project’s approvals, legal review or professional certificates.",
        ],
        source: rera,
      },
      {
        heading: "Turn the requirement into a survey brief",
        paragraphs: [
          "Ask the architect or engineer to define the survey extent, drawing reference, level datum and features needed. Explain whether the survey is for early design, layout setting-out, construction checks or an as-built record. A single general instruction to “do a RERA survey” leaves too much undefined.",
        ],
        points: [
          "Land parcel identifiers and the relevant plan revisions.",
          "Existing site features and levels required for design.",
          "The coordinate system, units and reference benchmark.",
          "Required CAD/PDF files and any area schedules to be checked.",
        ],
      },
      {
        heading: "Keep area descriptions distinct",
        paragraphs: [
          "A measured land area, a plotted development area and an apartment carpet area describe different things. Label every schedule clearly and have the relevant project professional confirm its intended use. Avoid transferring an area figure between drawings or forms without checking the definition, source and revision.",
        ],
      },
      {
        heading: "Record changes clearly",
        paragraphs: [
          "If the design changes, identify which approved or working drawing is being issued for the next survey task. Keep dates and revisions on the outputs. MahaRERA also provides guidance for project updates, corrections and ongoing compliance; the team responsible for the project should decide what needs to be submitted.",
        ],
        source: {
          label: "MahaRERA: guidance for promoters",
          url: "https://www.maharera.maharashtra.gov.in/promoter-guidance",
        },
      },
      {
        heading: "Ask the right questions at handover",
        paragraphs: [
          "Check that the survey includes the agreed extent and references. Confirm how any differences between supplied records and observed site conditions are described. Acceptance of a submission is determined by the relevant authority and project requirements, rather than by a blanket claim that a drawing is “RERA approved”.",
        ],
      },
    ],
    checklist: [
      "Name the person coordinating the application.",
      "Share the current plan revision.",
      "Agree extent, datum and file formats.",
      "Keep land and building area definitions clear.",
      "Check the current MahaRERA guidance.",
    ],
    related: ["survey-preparation", "mojani-process"],
  },
  "boundary-disputes": {
    title: "A practical first step for a boundary enquiry",
    category: "For landowners",
    description:
      "Prepare for a boundary enquiry in Maharashtra: gather records, document physical features, and understand the roles of surveys and official measurement.",
    takeaway:
      "A measured plan can clarify physical conditions and differences between records. Questions of ownership, official boundaries or a contested claim need the appropriate authority or legal adviser.",
    sections: [
      {
        heading: "Describe the question precisely",
        paragraphs: [
          "Is a fence in a different position from a plan? Is an old boundary mark missing? Is the recorded area different from the area you expected? Write down the specific issue and identify the land parcel before commissioning work. A clear question helps the surveyor define a useful scope.",
        ],
      },
      {
        heading: "Gather records before the site visit",
        paragraphs: [
          "Mahabhumi provides routes to Maharashtra’s land records and map services. Collect the records relevant to your parcel, along with earlier measurement plans and any correspondence you already hold. Keep track of the source and date of each document.",
        ],
        source: mahabhumi,
        points: [
          "Survey, Gat or CTS number and the village, taluka and district.",
          "Available 7/12 extract or property card and map references.",
          "Relevant deed, approved layout or earlier measurement plan.",
          "A sketch or dated photographs showing the physical feature in question.",
        ],
      },
      {
        heading: "Separate what is observed from what is inferred",
        paragraphs: [
          "A fence, wall or line of vegetation is a physical feature. The survey can record its position, but the feature alone should not be treated as a conclusion about ownership. Ask for the plan to distinguish measured features, supplied boundaries and any assumptions or missing information.",
        ],
      },
      {
        heading: "Understand the official measurement route",
        paragraphs: [
          "For an official measurement enquiry, refer to the Land Records Department’s e-Mojani guidance. Its FAQ explains application references, corrections and the issued measurement map. If an existing official measurement is disputed, ask the department or your legal adviser which procedure applies to your case.",
        ],
        source: landRecords,
      },
      {
        heading: "Use the survey as part of an informed discussion",
        paragraphs: [
          "Agree who can authorise site access and what can safely be measured. Avoid moving existing markers or starting work on a contested boundary based only on an informal sketch. A private survey report does not automatically settle a dispute or guarantee acceptance by a court. Obtain case-specific advice from a qualified lawyer where rights or legal proceedings are involved.",
        ],
      },
    ],
    checklist: [
      "Identify the exact disputed feature.",
      "Collect dated records and plans.",
      "Confirm permission for site access.",
      "Ask for assumptions to be shown clearly.",
      "Use official or legal advice for a contested claim.",
    ],
    related: ["mojani-process", "survey-preparation"],
  },
  "survey-preparation": {
    title: "How to prepare for a land survey",
    category: "Start here",
    description:
      "A practical land survey preparation checklist for Pune and Maharashtra: site details, available documents, access, project scope and drawing handover.",
    takeaway:
      "The most useful first message includes a location, approximate area and purpose. You do not need to choose the instrument before speaking to the surveyor.",
    sections: [
      {
        heading: "Explain the decision the survey must support",
        paragraphs: [
          "Tell us whether you are planning a building, checking an existing boundary, designing a road, setting out a layout or comparing earthworks. Mention who will use the result: an architect, engineer, contractor, landowner or another professional. This helps determine the survey detail and deliverables.",
        ],
      },
      {
        heading: "Share the location and available information",
        paragraphs: [
          "A map pin is helpful for finding the site. Add the village or locality and any survey, Gat or CTS reference. An approximate area is useful for planning even if you are unsure of the final measured area. Where relevant, Maharashtra’s official Mahabhumi portal links to land records and maps.",
        ],
        source: mahabhumi,
        points: [
          "Location pin, access directions and an on-site contact.",
          "Approximate area and the purpose of the survey.",
          "Available records, earlier survey drawings or project plans.",
          "Preferred timing and the files your design team needs.",
        ],
      },
      {
        heading: "Plan access before the team arrives",
        paragraphs: [
          "Confirm who can provide access and whether the site is occupied, under construction or covered by crops or vegetation. Mention slopes, water, traffic, restricted areas and operational working hours. Discuss any clearing or access preparation first; do not disturb boundary marks or arrange unsafe access.",
        ],
      },
      {
        heading: "Agree what the quotation includes",
        paragraphs: [
          "A useful quotation defines the survey extent, outputs, expected schedule and assumptions. Confirm whether it includes setting-out marks, contour intervals, coordinate lists, CAD files or repeat visits. If a government application or a specialist investigation is needed, ask whether that is a separate service.",
        ],
      },
      {
        heading: "Prepare for the handover",
        paragraphs: [
          "Have the intended recipient check the drawing format, units and reference levels in advance. At handover, review the survey date, coverage, legend, revision and stated limitations. Keep the issued PDF and editable files together so subsequent work starts from the correct version.",
        ],
      },
    ],
    checklist: [
      "Location pin and land reference.",
      "Approximate area and clear purpose.",
      "Available records and plan revisions.",
      "Access contact and site conditions.",
      "Required outputs and target date.",
    ],
    related: ["total-station-vs-dgps", "mojani-process"],
  },
  "total-station-vs-dgps": {
    title: "Total station or RTK DGPS: which does your site need?",
    category: "Survey methods",
    description:
      "Understand the practical differences between total station and RTK GNSS/DGPS surveys, including sight lines, satellite visibility, control and deliverables.",
    takeaway:
      "Choose the method around the site and the required result. A project may use GNSS for control and a total station for detail or setting-out.",
    sections: [
      {
        heading: "A total station measures from the ground",
        paragraphs: [
          "A total station measures angles and distances to locate points relative to an established setup. It is useful for detailed site measurement and setting-out, where the surveyor can establish suitable sight lines. Buildings, walls, equipment and vegetation affect where the instrument can be positioned.",
        ],
        source: {
          label: "Leica Geosystems: total station systems",
          url: "https://leica-geosystems.com/en-us/products/total-stations/systems",
        },
      },
      {
        heading: "RTK uses satellite positioning and corrections",
        paragraphs: [
          "RTK GNSS uses satellite observations and correction information to calculate positions in real time. “DGPS” is often used more broadly in project enquiries, so confirm the actual method proposed. GNSS observations depend on the surroundings and the available correction service.",
        ],
        source: {
          label: "Trimble: RTK initialization and good survey practice",
          url: "https://help.fieldsystems.trimble.com/trimble-access/2021.00/en/GNSS-RTK-initialization.htm",
        },
      },
      {
        heading: "Site conditions shape the choice",
        paragraphs: [
          "Open sky can favour GNSS work. Tall buildings, tree cover and reflected signals can make observations more difficult. Trimble’s guidance recommends clear sky when initializing RTK and checking the initialization through repeat measurements. A total station offers another way to measure detail where suitable ground control and sight lines are available.",
        ],
        source: {
          label: "Trimble: RTK initialization and good survey practice",
          url: "https://help.fieldsystems.trimble.com/trimble-access/2021.00/en/GNSS-RTK-initialization.htm",
        },
      },
      {
        heading: "Control connects the measurements",
        paragraphs: [
          "For a combined survey, observations need a consistent coordinate and height reference. Ask how the work will relate to your existing drawing or benchmark and what checks will be made. Instrument specifications alone do not describe the accuracy of a completed site survey. The control, method, conditions and verification all matter.",
        ],
      },
      {
        heading: "Specify the output before the equipment",
        paragraphs: [
          "For a quotation, start with the site and intended result: a contour plan, boundary comparison, coordinate schedule, construction set-out or as-built record. Let the surveyor propose the method and explain the checks, achievable requirements and limitations for those conditions.",
        ],
        points: [
          "What reference system and benchmark will be used?",
          "Which site conditions affect the proposed method?",
          "What independent checks are included?",
          "Which drawings, coordinates or reports will be handed over?",
        ],
      },
    ],
    checklist: [
      "Start with the intended result.",
      "Describe tree cover and buildings.",
      "Share existing control or drawings.",
      "Agree coordinate and height references.",
      "Ask about checks and deliverables.",
    ],
    related: ["survey-preparation", "rera-requirements"],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = Object.hasOwn(articles, slug) ? articles[slug] : undefined;
  if (!article)
    return { title: "Guide not found", robots: { index: false, follow: true } };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: SITE.url + "/knowledge/" + slug },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: SITE.url + "/knowledge/" + slug,
    },
  };
}

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = Object.hasOwn(articles, slug) ? articles[slug] : undefined;
  if (!article) notFound();
  const url = SITE.url + "/knowledge/" + slug;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        mainEntityOfPage: url,
        dateModified: "2026-10-05",
        author: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url + "/about",
        },
        publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Knowledge",
            item: SITE.url + "/knowledge",
          },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
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
      <header className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/knowledge">Knowledge</Link>
            <span aria-hidden="true">/</span>
            <span>{article.category}</span>
          </nav>
          <p className="eyebrow">{article.category}</p>
          <h1
            style={{
              maxWidth: "1000px",
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            }}
          >
            {article.title}
          </h1>
          <p className="lead">{article.description}</p>
          <p style={{ marginTop: "1.5rem", opacity: 0.8 }}>
            By Shubham Surveyors · Updated{" "}
            <time dateTime="2026-10-05">5 October 2026</time>
          </p>
        </div>
      </header>
      <div
        className="section-wrap grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-20"
        style={{
          paddingTop: "clamp(3rem, 6vw, 6rem)",
          paddingBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <article style={{ maxWidth: "780px" }}>
          <div
            className="detail-panel"
            style={{ background: "#e7eddd", marginBottom: "3rem" }}
          >
            <p className="eyebrow">The useful starting point</p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
              {article.takeaway}
            </p>
          </div>
          {article.sections.map((section, index) => (
            <section
              key={section.heading}
              id={"section-" + (index + 1)}
              style={{ marginBottom: "2.75rem", scrollMarginTop: "120px" }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  lineHeight: 1.25,
                  marginBottom: "1rem",
                  letterSpacing: "-.03em",
                }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    lineHeight: 1.85,
                    marginBottom: "1rem",
                    color: "#4b5b50",
                  }}
                >
                  {paragraph}
                </p>
              ))}
              {section.points && (
                <ul className="check-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {section.source && (
                <p style={{ marginTop: "1rem", fontSize: ".875rem" }}>
                  Reference:{" "}
                  <a
                    className="text-link"
                    href={section.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {section.source.label} <ArrowUpRight size={14} />
                  </a>
                </p>
              )}
            </section>
          ))}
          <p
            style={{
              borderTop: "1px solid #d6ddcf",
              paddingTop: "1.5rem",
              fontSize: ".9rem",
              lineHeight: 1.7,
              color: "#4b5b50",
            }}
          >
            This guide provides general survey information. Official
            requirements depend on the property, project and authority. Use the
            linked government resources for current procedures and seek
            appropriate professional advice for your case.
          </p>
        </article>
        <aside className="flex flex-col gap-6" aria-label="Guide resources">
          <nav className="detail-panel" aria-label="In this guide">
            <p className="eyebrow">In this guide</p>
            <ol
              style={{
                listStyle: "decimal",
                paddingLeft: "1.25rem",
                display: "grid",
                gap: ".85rem",
              }}
            >
              {article.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={"#section-" + (index + 1)}
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="detail-panel">
            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
              Your checklist
            </h2>
            <ul className="check-list">
              {article.checklist.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="detail-panel">
            <p className="eyebrow">Keep reading</p>
            {article.related.map((related) => (
              <Link
                className="text-link"
                style={{ display: "flex", marginBottom: "1rem" }}
                key={related}
                href={"/knowledge/" + related}
              >
                {articles[related].title} <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
          <div
            className="detail-panel"
            style={{ background: "#15291f", color: "#f5f4ee" }}
          >
            <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
              Have a site in mind?
            </h2>
            <p style={{ color: "#d5dfcf", marginBottom: "1.5rem" }}>
              Tell us the location and what you need the survey to support.
            </p>
            <Link className="button button-lime" href="/quote">
              Discuss your survey <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
