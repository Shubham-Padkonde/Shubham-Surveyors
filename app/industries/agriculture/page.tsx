import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { SITE } from "@/lib/constants";

const content = {
  slug: "agriculture",
  sector: "Agriculture & land",
  headline: "Work with the shape of your land.",
  intro:
    "Farm and rural land surveys for site understanding, level planning and the preparation of clear, usable land information.",
  capabilities: [
    {
      title: "Land and feature measurement",
      desc: "Record the agreed site extent and physical features, using the available records to understand the survey brief.",
    },
    {
      title: "Levels for irrigation planning",
      desc: "Provide ground levels, contours or channel profiles for the designer evaluating water movement and irrigation layouts.",
    },
    {
      title: "Access and land development",
      desc: "Capture terrain and existing routes to support decisions about access, grading and farm infrastructure.",
    },
    {
      title: "Boundary enquiry support",
      desc: "Prepare measured site information and comparisons with supplied plans. Official measurement queries follow the Land Records Department’s procedure.",
    },
  ],
  deliverables: [
    "Measured site plan with the agreed field features.",
    "Levels, contours or sections required by the designer.",
    "Coordinate or area schedules with clear references.",
    "A record of survey coverage, date and limitations.",
  ],
  briefing: [
    "Village, taluka, district and survey or Gat references.",
    "Available 7/12 extract, maps or earlier measurements.",
    "The intended use of the survey and approximate area.",
    "Crop conditions, access permissions and an on-site contact.",
  ],
  note: "A private survey supports technical planning. Official Mojani, changes to records and questions of ownership need the appropriate authority or adviser.",
};

export const metadata: Metadata = {
  title: "Agriculture & land survey services",
  description: content.intro,
  alternates: { canonical: SITE.url + "/industries/" + content.slug },
};

export default function IndustryPage() {
  return <IndustryPageTemplate {...content} />;
}
