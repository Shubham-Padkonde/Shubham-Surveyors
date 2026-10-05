import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { SITE } from "@/lib/constants";

const content = {
  slug: "smart-cities",
  sector: "Urban planning & smart cities",
  headline: "A shared base for a changing city.",
  intro:
    "Topographic and digital mapping information for planners, engineers and teams coordinating urban infrastructure.",
  capabilities: [
    {
      title: "Urban base mapping",
      desc: "Record agreed roads, buildings and visible public-realm features to provide a common starting point for planning.",
    },
    {
      title: "Terrain and drainage context",
      desc: "Capture spot levels, contours and visible drainage features at the detail requested by the design team.",
    },
    {
      title: "GIS data organisation",
      desc: "Structure surveyed features into agreed layers and attributes for integration with your GIS workflow.",
    },
    {
      title: "Existing asset documentation",
      desc: "Prepare measured information for selected assets and streetscapes, with dates, coverage and references clearly identified.",
    },
  ],
  deliverables: [
    "CAD or GIS base mapping in agreed file formats.",
    "Feature layers and an agreed attribute structure.",
    "Ground-level information or digital terrain data.",
    "Coordinate reference, survey date and coverage notes.",
  ],
  briefing: [
    "Study boundary and project objectives.",
    "Feature and attribute list required by the receiving team.",
    "Existing mapping, coordinate system and level references.",
    "Access, traffic and public-space working constraints.",
  ],
  note: "GIS, BIM and digital-twin projects need an agreed data specification. Interoperability and model requirements are confirmed with the receiving team before survey work starts.",
};

export const metadata: Metadata = {
  title: "Urban planning & smart cities survey services",
  description: content.intro,
  alternates: { canonical: SITE.url + "/industries/" + content.slug },
};

export default function IndustryPage() {
  return <IndustryPageTemplate {...content} />;
}
