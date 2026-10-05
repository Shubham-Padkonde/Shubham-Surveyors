import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import BrandMark from "@/components/brand/BrandMark";
const columns = [
  {
    title: "Expertise",
    links: [
      ["Boundary surveys", "/services/boundary-survey"],
      ["Topographic surveys", "/services/topographic-survey"],
      ["DGPS surveys", "/services/dgps-survey"],
      ["Total Station surveys", "/services/total-station-survey"],
      ["Highway surveys", "/services/highway-survey"],
      ["All services", "/services"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["Our approach", "/about"],
      ["Project applications", "/projects"],
      ["Industries", "/industries"],
      ["Survey guides", "/knowledge"],
      ["Cost estimator", "/quote"],
      ["Project support", "/portal"],
    ],
  },
  {
    title: "Where we work",
    links: [
      ["Projects across India", "/locations"],
      ["Our office locations", "/contact"],
      ["Land surveyors in Pune", "/land-surveyors-pune"],
      ["Maharashtra expertise", "/locations/maharashtra"],
    ],
  },
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Let’s begin with a conversation</p>
          <h2>
            What’s possible
            <br />
            on your ground?
          </h2>
        </div>
        <Link
          href="/contact"
          prefetch={false}
          className="grove-footer-arrow"
          aria-label="Talk to a surveyor about your project"
        >
          <ArrowUpRight size={42} strokeWidth={1} aria-hidden="true" />
        </Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark">
            <BrandMark size={52} className="brand-mark" />
            <span className="brand-wordmark">
              <strong>Shubham</strong> <strong>Surveyors</strong>
            </span>
          </Link>
          <p>
            Precision in the field.
            <br />
            Clarity in every deliverable.
          </p>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a
            className="text-link"
            href={SITE.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find us on Google <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    prefetch={
                      href === "/quote" || href === "/contact"
                        ? false
                        : undefined
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shubham Surveyors. Established 1994.</p>
        <div>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
        <span>Serving projects across India</span>
      </div>
    </footer>
  );
}
