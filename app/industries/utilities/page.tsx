import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { SITE } from "@/lib/constants";

const content = {
  slug: "utilities",
  sector: "Oil, gas & utilities",
  headline: "Clearer information along every corridor.",
  intro:
    "Route and site surveys for pipeline, power and utility teams planning assets and coordinating works with the existing terrain.",
  capabilities: [
    {
      title: "Route corridor survey",
      desc: "Map the agreed corridor, visible features and terrain to support route assessment and detailed engineering.",
    },
    {
      title: "Profiles and crossings",
      desc: "Capture the agreed levels and cross-sections at road, drainage and other visible crossing locations.",
    },
    {
      title: "Site and easement references",
      desc: "Prepare measurements and comparisons against supplied land or easement plans for the project team’s review.",
    },
    {
      title: "As-built asset records",
      desc: "Document the locations and attributes of assets included in the agreed survey, with references suitable for the receiving system.",
    },
  ],
  deliverables: [
    "Route plan and profile information.",
    "Cross-sections at the specified locations.",
    "Visible asset and site feature schedules.",
    "CAD or GIS files with agreed coordinate references.",
  ],
  briefing: [
    "Proposed route, corridor width and site limits.",
    "Existing drawings and known asset records.",
    "Required crossing, profile and attribute information.",
    "Access permissions, permits and operating-site constraints.",
  ],
  note: "A surface survey does not identify every buried service. Underground detection, excavation clearance and ownership or easement verification are separate specialist requirements.",
};

export const metadata: Metadata = {
  title: "Oil, gas & utilities survey services",
  description: content.intro,
  alternates: { canonical: SITE.url + "/industries/" + content.slug },
};

export default function IndustryPage() {
  return <IndustryPageTemplate {...content} />;
}
