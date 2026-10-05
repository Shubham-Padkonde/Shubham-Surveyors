import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { SITE } from "@/lib/constants";

const content = {
  slug: "infrastructure",
  sector: "Infrastructure & highways",
  headline: "Understand the ground. Connect the route.",
  intro:
    "Corridor, alignment and level surveys that give infrastructure teams a consistent base for planning, design and construction.",
  capabilities: [
    {
      title: "Corridor mapping",
      desc: "Record ground conditions and visible features across the agreed road, railway or infrastructure corridor.",
    },
    {
      title: "Profiles and cross-sections",
      desc: "Capture levels at the required intervals and locations so engineers can assess terrain and develop alignment options.",
    },
    {
      title: "Control and setting-out",
      desc: "Establish agreed survey references and set out design points for construction teams, with the coordinate and height systems made clear.",
    },
    {
      title: "Structures and interfaces",
      desc: "Survey the agreed bridge approaches, junctions, drainage features and connections where the new works meet existing assets.",
    },
  ],
  deliverables: [
    "Corridor survey drawings and feature information.",
    "Longitudinal profiles and cross-sections as specified.",
    "Control-point and benchmark schedules.",
    "Setting-out or as-built records for the agreed works.",
  ],
  briefing: [
    "Proposed alignment, chainage limits and corridor width.",
    "Client specifications and the engineer’s output requirements.",
    "Existing control points, drawings and benchmarks.",
    "Access permissions, traffic restrictions and work programme.",
  ],
  note: "Formats, tolerances and acceptance criteria should come from the project specification and appointing authority; they are agreed before mobilisation.",
};

export const metadata: Metadata = {
  title: "Infrastructure & highways survey services",
  description: content.intro,
  alternates: { canonical: SITE.url + "/industries/" + content.slug },
};

export default function IndustryPage() {
  return <IndustryPageTemplate {...content} />;
}
