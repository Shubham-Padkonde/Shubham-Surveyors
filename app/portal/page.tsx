import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client project support",
  description:
    "Contact Shubham Surveyors for project updates, survey drawings and document support.",
  alternates: { canonical: `${SITE.url}/portal` },
  robots: { index: false, follow: true },
};

export default function PortalPage() {
  return (
    <section className="section-wrap">
      <div className="page-shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Client support</span>
        </nav>
        <div
          className="detail-panel"
          style={{
            maxWidth: 740,
            margin: "2rem auto",
            padding: "clamp(1.5rem, 4vw, 3.5rem)",
          }}
        >
          <FolderOpen
            size={36}
            aria-hidden="true"
            style={{ marginBottom: "1.5rem" }}
          />
          <p className="eyebrow">For our clients</p>
          <h1 className="section-heading">
            Your project. A direct connection.
          </h1>
          <p className="lead">
            Need a progress update, survey drawing or project document? Our team
            is here to help.
          </p>
          <p style={{ color: "#58675e", margin: "1.5rem 0 2rem" }}>
            Send your project reference or site location using your usual
            contact details. We’ll confirm your connection to the project and
            arrange the information you need. Online account access is not
            currently available.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Hello, I am an existing client and would like help with my survey project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              Contact project support{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="button button-outline"
            >
              Call the team
            </a>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: ".9rem" }}>
            Or email{" "}
            <a className="text-link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
