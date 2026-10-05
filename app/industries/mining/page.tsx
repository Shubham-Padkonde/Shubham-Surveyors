import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { SITE } from "@/lib/constants";

const content = {
  slug: "mining",
  sector: "Mining & earthworks",
  headline: "Know the surface. Understand the quantities.",
  intro:
    "Surface and stockpile surveys for earthworks planning, quantity comparisons and operational site records.",
  capabilities: [
    {
      title: "Stockpile measurement",
      desc: "Measure the accessible stockpile surface and define its limits and reference base before calculating quantities.",
    },
    {
      title: "Terrain models",
      desc: "Capture the agreed site extent and build a surface representation that supports earthwork planning and engineering review.",
    },
    {
      title: "Repeat survey comparisons",
      desc: "Use consistent references and agreed dates to compare measured surfaces as work progresses.",
    },
    {
      title: "Access and haul routes",
      desc: "Document levels and geometry along the required site routes to support the engineer’s assessment.",
    },
  ],
  deliverables: [
    "Surveyed surface drawings or digital terrain models.",
    "Volume calculations with the boundary and base assumptions.",
    "Comparative surface or earthwork quantity statements.",
    "Coordinate and level schedules in agreed formats.",
  ],
  briefing: [
    "Site location and the areas or stockpiles to be measured.",
    "Purpose of the quantity calculation and proposed base surface.",
    "Available previous survey data and its reference system.",
    "Safe access, operating hours and site induction requirements.",
  ],
  note: "Volume results depend on the surveyed extent, reference surface and calculation method. These assumptions are recorded with the output; commercial quantity certification is scoped separately.",
};

export const metadata: Metadata = {
  title: "Mining & earthworks survey services",
  description: content.intro,
  alternates: { canonical: SITE.url + "/industries/" + content.slug },
};

export default function IndustryPage() {
  return <IndustryPageTemplate {...content} />;
}
