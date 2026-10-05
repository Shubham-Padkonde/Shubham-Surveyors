import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Survey locations | Pune, Lonavala & project coverage",
  description:
    "Contact Shubham Surveyors in Pune and Lonavala. Discuss land surveys across Maharashtra and project enquiries elsewhere in India.",
  alternates: { canonical: `${SITE.url}/locations` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Survey locations | Pune, Lonavala & project coverage | Shubham Surveyors",
    description:
      "Contact Shubham Surveyors in Pune and Lonavala. Discuss land surveys across Maharashtra and project enquiries elsewhere in India.",
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
          <p className="eyebrow">Our locations & coverage</p>
          <h1>
            Based in Maharashtra.
            <br />
            Ready to discuss your site.
          </h1>
          <p className="lead">
            Our contact locations are Pune and Lonavala. We review survey
            enquiries across Maharashtra and elsewhere in India, with
            availability and mobilisation agreed for each project.
          </p>
          <Link href="/contact" className="button button-lime">
            Contact the team <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Find us</p>
            <h2 className="section-heading">Two local points of contact.</h2>
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
            <p className="eyebrow">Our home region</p>
            <h2 className="section-heading">Surveying in Maharashtra.</h2>
          </div>
          <p>
            From property measurements to design surveys and infrastructure
            corridors, share your location and project brief so we can assess
            the right scope.
          </p>
        </div>
        <Link href="/locations/maharashtra" className="service-card">
          <p className="eyebrow">Pune · Lonavala · Maharashtra</p>
          <h3>Local context. A clear project brief.</h3>
          <p>
            Explore survey services, preparation guidance and our approach to
            field work across Maharashtra.
          </p>
          <span className="text-link">
            Explore Maharashtra <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </Link>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Beyond Maharashtra</p>
            <h2 className="section-heading">Tell us where your project is.</h2>
          </div>
          <p>
            The regions below are enquiry routes, not a list of offices. We
            confirm field availability, travel, permissions and programme after
            reviewing the project.
          </p>
        </div>
        <div className="service-grid">
          {LOCATIONS.filter((location) => location.state !== "maharashtra").map(
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
