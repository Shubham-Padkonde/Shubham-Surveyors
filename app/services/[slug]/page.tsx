import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SERVICE_DETAILS, getSurveyService } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getSurveyService(slug);
  if (!service) notFound();
  const title = `${service.shortTitle} in Pune & Maharashtra`;
  const url = `${SITE.url}/services/${service.slug}`;
  return {
    title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description: service.description,
      url,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getSurveyService(slug);
  if (!service) notFound();
  const related = service.related
    .map(getSurveyService)
    .filter((item) => item !== undefined);
  const url = `${SITE.url}/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.shortTitle,
        description: service.description,
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "State", name: "Maharashtra" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortTitle,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
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
                <Link href="/services">Services</Link>
              </li>
              <li>
                <span aria-current="page">{service.shortTitle}</span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow">{service.number} / Survey services</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Discuss this survey <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="button button-outline"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">The right starting point</p>
            <h2 className="section-heading">Built around your purpose.</h2>
          </div>
          <p>{service.introduction}</p>
        </div>
        <div className="detail-panel">
          <p className="eyebrow">Who this is for</p>
          <p className="lead">{service.bestFor}</p>
        </div>
      </section>

      <section className="section-wrap">
        <div className="detail-grid">
          <article className="detail-panel">
            <p className="eyebrow">Your deliverables</p>
            <h2>What the scope can include</h2>
            <ul className="check-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Final deliverables are confirmed in your project proposal.</p>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">Before the field visit</p>
            <h2>What to have ready</h2>
            <ul className="check-list">
              {service.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="section-heading">From brief to handover.</h2>
          </div>
          <p>
            A shared understanding of the scope keeps field work and the final
            deliverable focused on what you need.
          </p>
        </div>
        <div className="detail-grid">
          {service.process.map((step, index) => (
            <article className="detail-panel" key={step.title}>
              <p className="eyebrow">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="detail-panel">
          <p className="eyebrow">A clear scope matters</p>
          <h2>Know what your survey covers.</h2>
          <p>{service.scopeNote}</p>
          {service.slug === "mojani-support" && (
            <a
              className="text-link"
              href="https://mahabhumi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Maharashtra’s official land-records portal{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Your questions</p>
            <h2 className="section-heading">Before you book.</h2>
          </div>
          <p>
            Have a specific drawing or specification? Send it to the team with
            your enquiry.
          </p>
        </div>
        <div className="faq-list">
          {service.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Related expertise</p>
            <h2 className="section-heading">Complete the picture.</h2>
          </div>
          <Link href="/services" className="text-link">
            All services <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="service-grid">
          {related.map((item) => (
            <Link
              className="service-card"
              href={`/services/${item.slug}`}
              key={item.slug}
            >
              <p className="eyebrow">{item.number} / Survey services</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="text-link">
                Explore service <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Your next step</p>
          <h2>Let’s understand your site.</h2>
          <p>
            Send your location, approximate area and intended use. We’ll discuss
            the scope, programme and deliverables.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Request a survey <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/land-surveyors-pune" className="button button-outline">
              Meet your Pune survey team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
