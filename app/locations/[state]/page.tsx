import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/lib/locations";
import { SITE } from "@/lib/constants";
import LocationPageTemplate from "@/components/locations/LocationPageTemplate";

interface Props {
  params: Promise<{ state: string }>;
}

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ state: location.state }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const location = LOCATIONS.find((item) => item.state === state);
  if (!location) notFound();
  const isMaharashtra = state === "maharashtra";
  const title = isMaharashtra
    ? "Land surveying in Maharashtra | Pune & Lonavala"
    : `Survey project enquiries in ${location.name}`;
  const description = isMaharashtra
    ? "Boundary, topographic, DGPS and Total Station surveys in Maharashtra. Contact our Pune and Lonavala team to discuss your site and deliverables."
    : `Discuss a survey project in ${location.name} with Pune-based Shubham Surveyors. Field availability, travel, survey scope and programme confirmed per project.`;
  const url = `${SITE.url}/locations/${state}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE.name,
      title: `${title} | ${SITE.name}`,
      description,
      url,
    },
    ...(!isMaharashtra ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function LocationPage({ params }: Props) {
  const { state } = await params;
  const location = LOCATIONS.find((item) => item.state === state);
  if (!location) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE.url}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: `${SITE.url}/locations/${state}`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <LocationPageTemplate location={location} />
    </>
  );
}
