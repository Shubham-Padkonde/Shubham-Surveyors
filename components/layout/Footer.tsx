import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
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
      ["Land surveyors in Pune", "/land-surveyors-pune"],
      ["Maharashtra & Lonavala", "/locations/maharashtra"],
      ["Across India", "/locations"],
      ["Contact the team", "/contact"],
    ],
  },
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">A strong foundation starts here</p>
          <h2>
            Let’s get your project
            <br />
            on solid ground.
          </h2>
        </div>
        <Link href="/quote" prefetch={false} className="button button-lime">
          Talk to a surveyor <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark">
            Shubham
            <br />
            Surveyors<span>.</span>
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
                    prefetch={href === "/quote" ? false : undefined}
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
        <span>Pune, Maharashtra, India</span>
      </div>
    </footer>
  );
}
