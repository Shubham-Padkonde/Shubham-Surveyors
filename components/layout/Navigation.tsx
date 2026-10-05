"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
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
      <div className="utility-bar">
        <div className="utility-inner">
          <span>
            On the ground since 1994 <span className="utility-dot">·</span> Pune
            & Lonavala
          </span>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
            <Phone size={13} aria-hidden="true" /> {SITE.phone}
          </a>
        </div>
      </div>
      <header
        className="site-header"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <div className="nav-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Shubham Surveyors. Home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo-mark.png"
              width={42}
              height={42}
              alt=""
              priority
            />
            <span>
              SHUBHAM
              <strong>
                SURVEYORS<span className="brand-period">.</span>
              </strong>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
            className="button button-dark nav-quote"
            onClick={() => setOpen(false)}
          >
            Discuss your project <ArrowUpRight size={17} aria-hidden="true" />
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
