import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Location } from "@/lib/locations";
import { SERVICE_DETAILS } from "@/lib/services";

interface LocationPageTemplateProps {
  location: Location;
}

export default function LocationPageTemplate({
  location,
}: LocationPageTemplateProps) {
  const isMaharashtra = location.state === "maharashtra";
  const whatsapp = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to discuss a survey project in ${location.name}. The site location is: `)}`;
  const services = isMaharashtra
    ? SERVICE_DETAILS
    : SERVICE_DETAILS.filter((service) => service.slug !== "mojani-support");
  const faqs = isMaharashtra
    ? [
        {
          question: "Where is your team based?",
          answer:
            "Our contact locations are in Ambegaon (Bk), Pune, and Siddharth Nagar, Lonavala. We discuss Maharashtra projects from these locations and confirm field arrangements for each site.",
        },
        {
          question: "Can you help with a site outside Pune district?",
          answer:
            "Yes. Send the exact village, taluka, district or a location pin, along with the survey purpose and approximate area. We review travel, access and the required programme before confirming the work.",
        },
        {
          question: "What information helps with a rural land enquiry?",
          answer:
            "Share the village, taluka and Gat or Survey number if available, together with reference plans, existing markers and your reason for requesting a measurement. These help define the private survey scope.",
        },
        {
          question: "Do you carry out official government Mojani?",
          answer:
            "We offer private surveying and support around the documents and measurements in an agreed brief. Official Mojani is handled through the Maharashtra Land Records Department. Our Mojani support page explains the distinction.",
        },
      ]
    : [
        {
          question: `Do you have an office in ${location.name}?`,
          answer: `Our listed contact locations are Pune and Lonavala in Maharashtra. This page is a route for enquiries about projects in ${location.name}; it does not represent a local branch.`,
        },
        {
          question: "How do you confirm whether you can take the project?",
          answer:
            "We review the location, survey extent, required method, deliverables, access and programme. Availability, mobilisation and commercial terms are confirmed in a project proposal.",
        },
        {
          question: "Can you follow our local consultant’s requirements?",
          answer:
            "Share the actual specification, coordinate references and drawing requirements with your enquiry. We review the survey scope with your project team before confirming the work.",
        },
        {
          question: "What should I send for an initial discussion?",
          answer:
            "Send a location pin, approximate area or corridor length, the reason for the survey and your required date. Include available plans and details of access or permissions.",
        },
      ];

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
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <span aria-current="page">{location.name}</span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow">
            {isMaharashtra ? "Our home region" : "Project enquiries"}
          </p>
          <h1>
            {isMaharashtra
              ? "Land surveying in Maharashtra."
              : `A survey project in ${location.name}?`}
          </h1>
          <p className="lead">
            {isMaharashtra
              ? "Pune and Lonavala based surveying for property, design and infrastructure projects. Share your site and we’ll help define the measurements, references and deliverables you need."
              : `Speak with our Pune-based team about your site in ${location.name}. We assess availability, survey scope and mobilisation for each project before confirming the work.`}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              className="button button-outline"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share a site location
            </a>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              {isMaharashtra ? "Local presence" : "Plan the field work"}
            </p>
            <h2 className="section-heading">
              {isMaharashtra
                ? "A clear starting point for your land."
                : "Location is part of the brief."}
            </h2>
          </div>
          <p>
            {isMaharashtra
              ? "A plot measurement in a built-up area, a contour survey on sloping land and a long corridor each need a different field plan. We review access, available records and the required level of detail with you before setting the programme."
              : `A project in ${location.name} starts with an exact site location and a shared understanding of the work. Our offices are in Maharashtra; field availability, travel and any local access requirements are agreed specifically for your enquiry.`}
          </p>
        </div>
        {isMaharashtra ? (
          <div className="detail-grid">
            <article className="detail-panel">
              <MapPin size={24} aria-hidden="true" />
              <h3>Pune</h3>
              <address className="not-italic">{SITE.address}</address>
              <Link href="/land-surveyors-pune" className="text-link">
                Explore Pune services{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <article className="detail-panel">
              <MapPin size={24} aria-hidden="true" />
              <h3>Lonavala</h3>
              <address className="not-italic">{SITE.addressLonavala}</address>
              <p>Call ahead to arrange a visit or discuss a nearby site.</p>
              <Link href="/contact" className="text-link">
                Contact the team <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>
        ) : (
          <div className="detail-panel">
            <p className="eyebrow">Project-based availability</p>
            <h3>Confirm the scope before booking.</h3>
            <p>
              This page is an enquiry route for {location.name}. It does not
              imply a local office or immediate field availability. Tell us your
              location, required date and survey specification so we can assess
              the work.
            </p>
            <Link href="/locations" className="text-link">
              See our contact locations{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>

      {isMaharashtra && (
        <section className="section-wrap">
          <div className="detail-grid">
            <article className="detail-panel">
              <p className="eyebrow">Property & land</p>
              <h2>Bring the site and records together.</h2>
              <p>
                For a boundary or area enquiry, start with the location and
                available records. Existing plans, 7/12 extracts or
                property-card references can help explain the parcel and the
                purpose of the measurement.
              </p>
              <p>
                We distinguish visible site features from supplied boundary
                references. If your requirement involves an official measurement
                process, we can discuss the appropriate survey support.
              </p>
              <Link href="/services/mojani-support" className="text-link">
                Mojani & land-records support{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <article className="detail-panel">
              <p className="eyebrow">Design & infrastructure</p>
              <h2>Agree the detail that matters.</h2>
              <p>
                For planning or construction, send your consultant’s
                specification. Survey extent, contours, control references,
                drawing layers and profile intervals shape the field work and
                the final files.
              </p>
              <p>
                Share access restrictions and terrain photographs early. Slopes,
                vegetation and active roads can affect the method, programme and
                practical survey coverage.
              </p>
              <Link href="/services/highway-survey" className="text-link">
                Highway & infrastructure surveys{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>
      )}

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Survey expertise</p>
            <h2 className="section-heading">Choose the work you need.</h2>
          </div>
          <p>
            Explore the purpose, possible deliverables and preparation for each
            survey. The final scope is agreed for your site.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link
              className="service-card"
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              <p className="eyebrow">{service.number}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="text-link">
                Explore service <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="detail-grid">
          <article className="detail-panel">
            <p className="eyebrow">For a useful first conversation</p>
            <h2>Send these four things.</h2>
            <ul className="check-list">
              <li>The site pin, district and nearest access point.</li>
              <li>Approximate plot area or corridor length.</li>
              <li>The reason for the survey and required drawing formats.</li>
              <li>
                Your preferred programme, plus available plans or
                specifications.
              </li>
            </ul>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">What we confirm</p>
            <h2>A scope you can review.</h2>
            <p>
              Before field work, we agree the proposed measurements,
              deliverables, site access arrangements and fee. We also identify
              anything the survey cannot cover from the information available.
            </p>
            <p>
              For an authority submission, provide the current requirements from
              your consultant or the relevant office so these can be considered
              in the brief.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Before you enquire</p>
            <h2 className="section-heading">Your questions, answered.</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="section-wrap">
          <p className="eyebrow">Talk to Shubham Surveyors</p>
          <h2>Let’s start with your site.</h2>
          <p>
            Call {SITE.phone} or share the details of your project in{" "}
            {location.name}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="button button-lime">
              Request a survey <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              className="button button-outline"
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            >
              Call the team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
