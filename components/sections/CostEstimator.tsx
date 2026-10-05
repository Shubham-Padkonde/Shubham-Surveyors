"use client";

import { useId, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { PRICING, SITE } from "@/lib/constants";
import {
  calculateEstimate,
  estimateSchema,
  formatINR,
  TERRAIN_MULTIPLIERS,
  type EstimateInput,
  type SurveyType,
  type TerrainType,
} from "@/lib/pricing";

export default function CostEstimator() {
  const formId = useId();
  const [result, setResult] = useState<ReturnType<
    typeof calculateEstimate
  > | null>(null);
  const [calculation, setCalculation] = useState<EstimateInput | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EstimateInput>({ resolver: zodResolver(estimateSchema) });
  const surveyType = useWatch({ control, name: "surveyType" });
  const isKm = surveyType === "highway";

  useEffect(() => {
    if (result) resultRef.current?.focus({ preventScroll: true });
  }, [result]);

  const onSubmit = (data: EstimateInput) => {
    setResult(
      calculateEstimate(
        data.surveyType,
        data.area,
        TERRAIN_MULTIPLIERS[data.terrain].value,
      ),
    );
    setCalculation(data);
  };
  const whatsappMessage =
    calculation && result
      ? `Hello, I used your survey cost estimator.\nService: ${PRICING[calculation.surveyType].label}\nSize: ${calculation.area} ${result.unit === "km" ? "km" : "acres"}\nTerrain: ${TERRAIN_MULTIPLIERS[calculation.terrain].label}\nIndicative total: ${formatINR(result.min)} – ${formatINR(result.max)}\nPlease help confirm the scope and provide a written quotation.`
      : "";

  return (
    <section className="section-wrap" aria-labelledby={`${formId}-heading`}>
      <div className="page-shell contact-grid">
        <div>
          <p className="eyebrow">Plan with confidence</p>
          <h2 id={`${formId}-heading`} className="section-heading">
            A useful starting point for your budget.
          </h2>
          <p className="lead" style={{ marginBottom: "2rem" }}>
            Choose a survey, enter your site size and select the terrain. Get an
            indicative total without sharing your name or phone number.
          </p>
          <div
            className="detail-panel"
            style={{ padding: 0, overflow: "hidden" }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: ".9rem",
              }}
            >
              <caption
                style={{
                  textAlign: "left",
                  padding: "1.25rem",
                  fontWeight: 600,
                }}
              >
                Reference rates for flat, accessible sites
              </caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Survey</th>
                  <th scope="col">Indicative rate</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(PRICING).map(([key, price]) => (
                  <tr key={key} style={{ borderTop: "1px solid #dce2d7" }}>
                    <th
                      scope="row"
                      style={{
                        textAlign: "left",
                        padding: "1rem 1.25rem",
                        fontWeight: 500,
                      }}
                    >
                      {price.label}
                    </th>
                    <td style={{ textAlign: "right", padding: "1rem 1.25rem" }}>
                      {formatINR(price.min)}–{formatINR(price.max)}{" "}
                      <span style={{ whiteSpace: "nowrap" }}>
                        per {price.unit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontSize: ".875rem",
              color: "#58675e",
              marginTop: "1.25rem",
            }}
          >
            This is a non-binding budget estimate. Site access, travel, survey
            scope, required outputs, minimum mobilisation charges and applicable
            taxes will be confirmed in your written quotation.
          </p>
        </div>
        <div
          className="detail-panel"
          style={{ background: "#fff", padding: "clamp(1.5rem, 3vw, 2.75rem)" }}
        >
          <h3 style={{ fontSize: "1.65rem", marginBottom: ".5rem" }}>
            Calculate a survey estimate
          </h3>
          <p
            style={{
              color: "#58675e",
              marginBottom: "1.75rem",
              fontSize: ".9rem",
            }}
          >
            Your calculation stays in this browser. No enquiry is sent unless
            you choose to contact us.
          </p>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            onChange={() => {
              setResult(null);
              setCalculation(null);
            }}
            style={{ display: "grid", gap: "1.25rem" }}
          >
            <div className="form-field">
              <label htmlFor={`${formId}-type`}>Survey type</label>
              <select
                id={`${formId}-type`}
                {...register("surveyType")}
                className="form-control"
                defaultValue=""
                required
                aria-invalid={Boolean(errors.surveyType)}
                aria-describedby={
                  errors.surveyType ? `${formId}-type-error` : undefined
                }
              >
                <option value="" disabled>
                  Choose a survey
                </option>
                {(Object.keys(PRICING) as SurveyType[]).map((key) => (
                  <option key={key} value={key}>
                    {PRICING[key].label}
                  </option>
                ))}
              </select>
              {errors.surveyType && (
                <p className="form-error" id={`${formId}-type-error`}>
                  {errors.surveyType.message}
                </p>
              )}
            </div>
            <div className="form-field">
              <label htmlFor={`${formId}-area`}>
                {isKm ? "Corridor length (kilometres)" : "Site area (acres)"}
              </label>
              <input
                id={`${formId}-area`}
                {...register("area", { valueAsNumber: true })}
                className="form-control"
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0.01"
                max="100000"
                placeholder={isKm ? "e.g. 10" : "e.g. 5"}
                required
                aria-invalid={Boolean(errors.area)}
                aria-describedby={
                  errors.area ? `${formId}-area-error` : `${formId}-area-hint`
                }
              />
              {errors.area ? (
                <p className="form-error" id={`${formId}-area-error`}>
                  {errors.area.message}
                </p>
              ) : (
                <p
                  id={`${formId}-area-hint`}
                  style={{ fontSize: ".8rem", color: "#58675e" }}
                >
                  {isKm
                    ? "Enter the approximate length of the survey corridor."
                    : "1 acre = 43,560 square feet = approximately 4,047 square metres."}
                </p>
              )}
            </div>
            <div className="form-field">
              <label htmlFor={`${formId}-terrain`}>Site terrain</label>
              <select
                id={`${formId}-terrain`}
                {...register("terrain")}
                className="form-control"
                defaultValue=""
                required
                aria-invalid={Boolean(errors.terrain)}
                aria-describedby={
                  errors.terrain ? `${formId}-terrain-error` : undefined
                }
              >
                <option value="" disabled>
                  Choose the terrain
                </option>
                {(Object.keys(TERRAIN_MULTIPLIERS) as TerrainType[]).map(
                  (key) => (
                    <option key={key} value={key}>
                      {TERRAIN_MULTIPLIERS[key].label}
                    </option>
                  ),
                )}
              </select>
              {errors.terrain && (
                <p className="form-error" id={`${formId}-terrain-error`}>
                  {errors.terrain.message}
                </p>
              )}
            </div>
            <button className="button button-dark" type="submit">
              Calculate estimate <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </form>
          <div aria-live="polite" aria-atomic="true">
            {result && calculation && (
              <div
                ref={resultRef}
                tabIndex={-1}
                style={{
                  background: "#15291f",
                  color: "#f5f4ee",
                  marginTop: "1.5rem",
                  padding: "1.5rem",
                  borderRadius: 8,
                }}
              >
                <p className="eyebrow" style={{ color: "#d7ee9d" }}>
                  Indicative project total
                </p>
                <p
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    color: "#f5f4ee",
                    lineHeight: 1.2,
                    fontWeight: 600,
                    margin: ".75rem 0",
                  }}
                >
                  {formatINR(result.min)} – {formatINR(result.max)}
                </p>
                <p style={{ fontSize: ".9rem", color: "#d5ded7" }}>
                  For {calculation.area}{" "}
                  {result.unit === "km"
                    ? "km"
                    : calculation.area === 1
                      ? "acre"
                      : "acres"}{" "}
                  ·{" "}
                  {TERRAIN_MULTIPLIERS[calculation.terrain].label.toLowerCase()}
                </p>
                <p
                  style={{
                    fontSize: ".85rem",
                    margin: "1rem 0 1.5rem",
                    color: "#d5ded7",
                  }}
                >
                  A planning range, subject to site review and a written
                  quotation.
                </p>
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-lime"
                  style={{ width: "100%" }}
                >
                  Discuss this estimate{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
          <p style={{ marginTop: "1.25rem", fontSize: ".9rem" }}>
            Have drawings or a complex scope?{" "}
            <Link className="text-link" href="/contact#enquiry">
              Request a tailored quote
            </Link>
            .
          </p>
          <noscript>
            <p>
              Call{" "}
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>{" "}
              for help with an estimate.
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
