import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import BrandMark from "@/components/brand/BrandMark";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Shubham Surveyors — Know the land. See what’s possible. Surveying across India since 1994.";

const groveSerif = readFile(
  join(process.cwd(), "public/fonts/LibreBaskerville-Regular.ttf"),
);

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#153D32",
        color: "#EAE6DA",
        padding: "48px 60px 36px",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Grove Serif",
      }}
    >
      <svg
        width="1200"
        height="630"
        viewBox="0 0 1200 630"
        style={{ position: "absolute", top: 0, left: 0 }}
        fill="none"
      >
        <path
          d="M918-70c-96 150-58 227 19 307s132 122 114 223-38 145-13 205M977-70c-96 150-58 227 19 307s132 122 114 223-38 145-13 205M1036-70c-96 150-58 227 19 307s132 122 114 223-38 145-13 205"
          stroke="#CCB982"
          strokeWidth="1"
          opacity=".2"
        />
        <path d="M60 149H1140" stroke="#CCB982" strokeWidth="1" opacity=".4" />
      </svg>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <BrandMark size={65} color="#CCB982" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 27,
            lineHeight: 1.2,
            letterSpacing: -0.7,
          }}
        >
          <span>Shubham</span>
          <span>Surveyors</span>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: 213,
          right: 76,
          opacity: 0.18,
        }}
      >
        <BrandMark size={268} color="#CCB982" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 25 }}>
        <div
          style={{
            display: "flex",
            fontSize: 13,
            letterSpacing: 2.5,
            color: "#CCB982",
            marginBottom: 27,
          }}
        >
          SURVEYING ACROSS INDIA · SINCE 1994
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: -3.5,
          }}
        >
          <span>Know the land.</span>
          <span style={{ color: "#CCB982" }}>See what’s possible.</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #CCB98266",
          paddingTop: 24,
          fontSize: 16,
        }}
      >
        <span>shubhamsurveyors.com</span>
        <span style={{ fontSize: 12, letterSpacing: 1.8, color: "#CCB982" }}>
          LAND · TERRAIN · PERSPECTIVE
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Grove Serif",
          data: await groveSerif,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
