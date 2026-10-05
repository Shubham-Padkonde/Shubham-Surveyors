import { ImageResponse } from "next/og";
import BrandMark from "@/components/brand/BrandMark";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Shubham Surveyors — Clarity on the ground. Land surveying since 1994.";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#10182A",
        color: "#F4F5F7",
        padding: "52px 62px 38px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <svg
        width="1200"
        height="630"
        viewBox="0 0 1200 630"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <path d="M860 0H1200V630H730L860 0Z" fill="#315DFF" />
        <path d="M910 0L780 630M1008 0L878 630M1106 0L976 630" stroke="#6B8AFF" strokeWidth="1" />
      </svg>

      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <BrandMark size={64} color="#F4F5F7" />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 24, lineHeight: 1.08, fontWeight: 700, letterSpacing: -0.7 }}>
          <span>Shubham</span>
          <span>Surveyors.</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: 700, marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, letterSpacing: 3, color: "#AEBCE0", marginBottom: 20 }}>
          <div style={{ width: 7, height: 7, background: "#315DFF" }} />
          LAND SURVEYING / SINCE 1994
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 98, fontWeight: 700, lineHeight: 0.98, letterSpacing: -5 }}>
          <span>Clarity on</span>
          <span>the ground.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#AEBCE0", marginTop: 22 }}>
          Confidence in every plan.
        </div>
      </div>

      <div style={{ position: "absolute", display: "flex", top: 154, right: 34, width: 342, height: 310, alignItems: "center", justifyContent: "center" }}>
        <BrandMark size={328} color="#E9EEFF" />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #6B799344", paddingTop: 24, fontSize: 17 }}>
        <span>shubhamsurveyors.com</span>
        <span style={{ fontSize: 13, letterSpacing: 2, color: "#E9EEFF" }}>PUNE · LONAVALA · INDIA</span>
      </div>
    </div>,
    size,
  );
}
