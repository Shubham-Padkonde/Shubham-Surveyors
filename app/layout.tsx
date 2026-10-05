import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./grove.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { SITE } from "@/lib/constants";
import { SOCIAL_IMAGES } from "@/lib/metadata";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-syne-var",
  display: "swap",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#153d32",
};
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Land Surveyors in India | Shubham Surveyors",
    template: "%s | Shubham Surveyors",
  },
  description:
    "Land surveying and geospatial services across India since 1994. Boundary, topographic, Total Station, DGPS and engineering surveys for your project.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    images: SOCIAL_IMAGES,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Shubham Surveyors | Know the land. See what’s possible.",
    description:
      "Land surveying, mapping and engineering support for projects across India. On the ground since 1994.",
  },
  twitter: { card: "summary_large_image", images: SOCIAL_IMAGES },
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
    "Land surveying and geospatial services for projects across India since 1994, with offices in Pune and Lonavala.",
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
  areaServed: [{ "@type": "Country", name: "India" }],
  sameAs: SITE.sameAs,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={heading.variable}
    >
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
