import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SOCIAL_IMAGES } from "@/lib/metadata";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Land survey coverage across India",
  description:
    "Discuss a land survey anywhere in India. Shubham Surveyors plans fieldwork, access and mobilisation around your site, survey scope and required outputs.",
  alternates: { canonical: `${SITE.url}/locations` },
  openGraph: {
    images: SOCIAL_IMAGES,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Land survey coverage across India | Shubham Surveyors",
    description:
      "Discuss a land survey anywhere in India. Shubham Surveyors plans fieldwork, access and mobilisation around your site, survey scope and required outputs.",
    url: `${SITE.url}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-wrap">
          <nav
            className="breadcrumb"
            style={{ padding: "0 0 24px", border: 0 }}
            aria-label="Breadcrumb"
          >
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">Locations</span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow">Surveying across India</p>
          <h1>
            Across India.
            <br />
            Focused on your site.
          </h1>
          <p className="lead">
            From an individual plot to a wider infrastructure corridor, we
            plan survey work around the location, terrain and decisions ahead.
            Share your site anywhere in India and we’ll define the next steps.
          </p>
          <Link href="/contact" className="button button-lime">
            Contact the team <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Find our team</p>
            <h2 className="section-heading">A direct point of contact.</h2>
          </div>
          <p>
            Please call ahead to arrange a visit. Field schedules mean the best
            time to meet can vary.
          </p>
        </div>
        <div className="detail-grid">
          <article className="detail-panel">
            <MapPin size={24} aria-hidden="true" />
            <h3>Pune</h3>
            <address className="not-italic">{SITE.address}</address>
            <Link href="/land-surveyors-pune" className="text-link">
              Land surveyors in Pune{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
          <article className="detail-panel">
            <MapPin size={24} aria-hidden="true" />
            <h3>Lonavala</h3>
            <address className="not-italic">{SITE.addressLonavala}</address>
            <a
              className="text-link"
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            >
              Call {SITE.phone} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Plan the fieldwork</p>
            <h2 className="section-heading">Every site has its own context.</h2>
          </div>
          <p>
            Terrain, access, survey references and the required outputs shape
            the approach. We agree the field programme and mobilisation as
            part of your project scope.
          </p>
        </div>
        <Link href="/knowledge/survey-preparation" className="service-card">
          <p className="eyebrow">A useful starting point</p>
          <h3>A location. A purpose. A clear brief.</h3>
          <p>
            Bring a location pin, approximate site area or corridor length,
            available references and a description of what you need to know.
          </p>
          <span className="text-link">
            Prepare for your survey <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </Link>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Nationwide project enquiries</p>
            <h2 className="section-heading">Tell us where your project is.</h2>
          </div>
          <p>
            Select your region to start a project enquiry. Our office addresses
            are listed above; field access, travel, permissions and programme
            are confirmed around each brief.
          </p>
        </div>
        <div className="service-grid">
          {LOCATIONS.map(
            (location) => (
              <Link
                className="service-card"
                href={`/locations/${location.state}`}
                key={location.state}
              >
                <p className="eyebrow">Project enquiries</p>
                <h3>{location.name}</h3>
                <span className="text-link">
                  Discuss availability{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ),
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Start with the location</p>
          <h2>A pin on the map is a useful start.</h2>
          <p>
            Include the approximate area or corridor length, the survey purpose
            and your preferred programme.
          </p>
          <Link href="/quote" className="button button-lime">
            Send your project details{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
