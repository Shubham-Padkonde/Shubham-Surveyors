import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { SITE } from "@/lib/constants";

const content = {
  slug: "real-estate",
  sector: "Real estate & development",
  headline: "A better starting point for every build.",
  intro:
    "Topographic, boundary-reference and layout surveys for developers, architects and construction teams in Pune, Maharashtra and across India.",
  capabilities: [
    {
      title: "A base for design",
      desc: "Capture site features, spot levels and contours so the architect and engineer can develop the layout with a shared understanding of the ground.",
    },
    {
      title: "Layout and construction set-out",
      desc: "Transfer the issued design to the site using agreed control, plot references and setting-out requirements.",
    },
    {
      title: "Boundary comparison",
      desc: "Measure physical features and compare them with the records supplied, clearly distinguishing observed features from documented boundaries.",
    },
    {
      title: "As-built information",
      desc: "Record agreed completed works and provide measured information for the project team’s review and documentation.",
    },
  ],
  deliverables: [
    "Topographic plan and spot-level information.",
    "CAD and PDF drawings in the agreed reference system.",
    "Setting-out coordinates or layout records as scoped.",
    "Measured area schedules with clearly stated definitions.",
  ],
  briefing: [
    "Site location, land references and approximate area.",
    "Current architectural, engineering or approved layout plans.",
    "The purpose of the survey and the project stage.",
    "The receiving professional’s format and reference requirements.",
  ],
  note: "Survey information supports your architect, engineer and registration team. Official approvals and professional certifications are separate requirements.",
};

export const metadata: Metadata = {
  title: "Real estate & development survey services",
  description: content.intro,
  alternates: { canonical: SITE.url + "/industries/" + content.slug },
};

export default function IndustryPage() {
  return <IndustryPageTemplate {...content} />;
}
