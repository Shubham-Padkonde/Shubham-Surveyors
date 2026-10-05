import type { Metadata, Viewport } from "next";
import { Manrope, Jost } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { SITE } from "@/lib/constants";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-syne-var",
  display: "swap",
});
const body = Jost({
  subsets: ["latin"],
  variable: "--font-jost-var",
  display: "swap",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10182a",
};
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Land Surveyors in Pune & Maharashtra | Shubham Surveyors",
    template: "%s | Shubham Surveyors",
  },
  description:
    "Land surveyors in Pune and Lonavala since 1994. Boundary, topographic, Total Station and DGPS surveys for projects across Maharashtra and India.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Shubham Surveyors | Clarity on the ground.",
    description:
      "Land surveying, mapping and engineering support. Based in Pune and Lonavala. Serving projects across India since 1994.",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};
const business = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo-mark.png`,
  image: `${SITE.url}/opengraph-image`,
  description:
    "Land surveying and geospatial services based in Pune and Lonavala, Maharashtra, established in 1994.",
  telephone: SITE.phone.replace(/\s/g, ""),
  email: SITE.email,
  foundingDate: SITE.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "B 1 Wing, Flat No. 211, Forest Castle, Vetal Nagar, Ambegaon (Bk)",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411046",
    addressCountry: "IN",
  },
  location: {
    "@type": "Place",
    name: "Shubham Surveyors, Lonavala",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 13, 14, 15, Municipal Complex, Siddharth Nagar",
      addressLocality: "Lonavala",
      addressRegion: "Maharashtra",
      postalCode: "410401",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Maharashtra" },
    { "@type": "City", name: "Pune" },
  ],
  sameAs: SITE.sameAs,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(business).replace(/</g, "\\u003c"),
          }}
        />
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
