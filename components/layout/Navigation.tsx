"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandMark from "@/components/brand/BrandMark";
const links = [
  { label: "Services", href: "/services" },
  { label: "Our approach", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/knowledge" },
  { label: "Contact", href: "/contact" },
];
export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <>
      <aside className="grove-rail" aria-label="Shubham Surveyors brand">
        <Link
          href="/"
          aria-label="Shubham Surveyors home"
          onClick={() => setOpen(false)}
        >
          <BrandMark size={47} />
        </Link>
        <span className="grove-rail-motto">
          Ground knowledge. Greater possibilities.
        </span>
        <span className="grove-rail-year">
          EST.
          <br />
          1994
        </span>
      </aside>
      <header
        className={`site-header grove-navigation${pathname === "/" ? " home-navigation" : ""}${open ? " navigation-open" : ""}`}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <div className="nav-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <BrandMark size={40} className="brand-mark" />
            <span className="brand-wordmark">
              <strong>Shubham</strong> <strong>Surveyors</strong>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={link.href === "/contact" ? false : undefined}
                onClick={() => setOpen(false)}
                aria-current={
                  pathname.startsWith(link.href) ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/quote"
            prefetch={false}
            className="button button-dark nav-quote"
            onClick={() => setOpen(false)}
          >
            Discuss your land <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={link.href === "/contact" ? false : undefined}
                onClick={() => setOpen(false)}
                aria-current={
                  pathname.startsWith(link.href) ? "page" : undefined
                }
              >
                {link.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            ))}
            <Link
              href="/quote"
              prefetch={false}
              className="button button-dark"
              onClick={() => setOpen(false)}
            >
              Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
