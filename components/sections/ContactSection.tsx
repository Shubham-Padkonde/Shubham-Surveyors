"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import {
  CONTACT_SERVICES,
  contactSchema,
  type ContactInput,
} from "@/lib/contact-validation";

export default function ContactSection() {
  const formId = useId();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: "" },
  });

  const field = (name: keyof ContactInput) => ({
    id: `${formId}-${name}`,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${formId}-${name}-error` : undefined,
  });
  const error = (name: keyof ContactInput) =>
    errors[name] && (
      <p id={`${formId}-${name}-error`} className="form-error">
        {errors[name]?.message}
      </p>
    );

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || body?.success !== true) {
        throw new Error(
          typeof body?.error === "string"
            ? body.error
            : "Your enquiry could not be sent. Please call or WhatsApp our team.",
        );
      }
      setStatus("success");
      setMessage(
        "Thank you. Your enquiry has been sent to our team. We’ll get back to you using the details you provided.",
      );
      reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "We could not confirm your enquiry was sent. Please check your connection, or call or WhatsApp our team.",
      );
    }
  };

  return (
    <section
      id="enquiry"
      className="contact-section section-wrap"
      aria-labelledby={`${formId}-heading`}
    >
      <div className="page-shell contact-grid">
        <div style={{ color: "#f4f5f7" }}>
          <p className="eyebrow" style={{ color: "#dce6ff" }}>
            Let’s talk about your site
          </p>
          <h2
            id={`${formId}-heading`}
            className="section-heading"
            style={{ color: "#f4f5f7" }}
          >
            Every good project starts with clarity.
          </h2>
          <p
            className="lead"
            style={{ color: "#cbd3e1", marginBottom: "2rem" }}
          >
            Tell us where your land is and what you need to achieve. Our Pune
            and Lonavala teams will help define the right survey, scope and next
            steps.
          </p>
          <div
            style={{ display: "grid", gap: "1.25rem", marginBottom: "2rem" }}
          >
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3"
              style={{ fontSize: "1.3rem", fontWeight: 600 }}
            >
              <Phone size={20} aria-hidden="true" />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3"
            >
              <Mail size={20} aria-hidden="true" />
              <span style={{ overflowWrap: "anywhere" }}>{SITE.email}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin
                size={20}
                aria-hidden="true"
                style={{ flexShrink: 0, marginTop: 3 }}
              />
              <div>
                <strong>Pune office</strong>
                <p style={{ color: "#cbd3e1", marginTop: ".35rem" }}>
                  {SITE.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin
                size={20}
                aria-hidden="true"
                style={{ flexShrink: 0, marginTop: 3 }}
              />
              <div>
                <strong>Lonavala office</strong>
                <p style={{ color: "#cbd3e1", marginTop: ".35rem" }}>
                  {SITE.addressLonavala}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to discuss a survey for my project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-lime"
            >
              Chat on WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href="https://share.google/jhxqVbuElVFH4Ocna"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
              style={{ color: "#f4f5f7", borderColor: "#79849a" }}
            >
              Find us on Google
            </a>
          </div>
          <p
            style={{
              color: "#cbd3e1",
              fontSize: ".875rem",
              marginTop: "1.25rem",
            }}
          >
            Prefer another number?{" "}
            <a
              href={`tel:${SITE.phoneAlt.replace(/\s/g, "")}`}
              style={{ textDecoration: "underline" }}
            >
              {SITE.phoneAlt}
            </a>
          </p>
        </div>

        <div
          className="detail-panel"
          style={{
            background: "#fff",
            color: "#10182a",
            padding: "clamp(1.5rem, 3vw, 2.75rem)",
          }}
        >
          <h3 style={{ fontSize: "1.65rem", marginBottom: ".5rem" }}>
            Tell us about your project
          </h3>
          <p
            style={{
              color: "#566176",
              marginBottom: "1.75rem",
              fontSize: ".9rem",
            }}
          >
            All fields are required. A location, approximate area and intended
            use help us respond usefully.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-busy={status === "loading"}
          >
            <fieldset
              disabled={status === "loading"}
              className="form-grid"
              style={{ border: 0, padding: 0, minWidth: 0 }}
            >
              <legend className="sr-only">Survey enquiry details</legend>
              <div className="form-field">
                <label htmlFor={`${formId}-name`}>Full name</label>
                <input
                  {...register("name")}
                  {...field("name")}
                  className="form-control"
                  autoComplete="name"
                  maxLength={80}
                  required
                />
                {error("name")}
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-phone`}>Phone number</label>
                <input
                  {...register("phone")}
                  {...field("phone")}
                  type="tel"
                  className="form-control"
                  autoComplete="tel"
                  placeholder="+91"
                  maxLength={32}
                  required
                />
                {error("phone")}
              </div>
              <div className="form-field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor={`${formId}-email`}>Email address</label>
                <input
                  {...register("email")}
                  {...field("email")}
                  type="email"
                  className="form-control"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
                {error("email")}
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-service`}>Survey requirement</label>
                <select
                  {...register("service")}
                  {...field("service")}
                  className="form-control"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {CONTACT_SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {error("service")}
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-state`}>
                  Project city / district
                </label>
                <input
                  {...register("state")}
                  {...field("state")}
                  className="form-control"
                  placeholder="e.g. Pune, Maharashtra"
                  maxLength={120}
                  required
                />
                {error("state")}
              </div>
              <div className="form-field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor={`${formId}-projectDetails`}>
                  Project details
                </label>
                <textarea
                  {...register("projectDetails")}
                  {...field("projectDetails")}
                  className="form-control"
                  rows={4}
                  maxLength={3000}
                  placeholder="Approximate area, purpose of the survey, and any timing or drawing requirements."
                  required
                />
                {error("projectDetails")}
              </div>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                }}
              >
                <label htmlFor={`${formId}-website`}>
                  Leave this field empty
                </label>
                <input
                  {...register("website")}
                  id={`${formId}-website`}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <p
                style={{
                  gridColumn: "1 / -1",
                  fontSize: ".8rem",
                  color: "#566176",
                }}
              >
                We’ll use these details to respond to your enquiry. Please avoid
                sending confidential land records here. Read our{" "}
                <Link
                  href="/privacy-policy"
                  style={{ textDecoration: "underline" }}
                >
                  privacy policy
                </Link>
                .
              </p>
              <button
                type="submit"
                className="button button-dark"
                style={{ gridColumn: "1 / -1", width: "100%" }}
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Sending your enquiry…"
                  : "Send enquiry"}{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </fieldset>
          </form>
          <div aria-live="polite" aria-atomic="true">
            {message && (
              <p
                role={status === "error" ? "alert" : "status"}
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: status === "error" ? "#fff0ee" : "#e9efff",
                  color: status === "error" ? "#9a3025" : "#1f3c7a",
                }}
              >
                {message}
              </p>
            )}
          </div>
          <noscript>
            <p>
              Please call, email or WhatsApp us to make an enquiry when
              JavaScript is disabled.
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
