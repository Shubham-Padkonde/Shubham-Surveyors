import Link from "next/link";
import { SITE } from "@/lib/constants";
export default function Breadcrumb({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const all = [{ name: "Home", href: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          {all.map((item, i) => (
            <li key={item.href}>
              {i === all.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
