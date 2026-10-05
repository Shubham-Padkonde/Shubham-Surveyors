import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Shubham Surveyors — Land surveying in Pune, Maharashtra and India since 1994";
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#15291f",
        color: "#f5f4ee",
        padding: "70px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          letterSpacing: 3,
        }}
      >
        <span>SHUBHAM SURVEYORS</span>
        <span style={{ color: "#d7ee9d" }}>SINCE 1994</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 83,
          fontWeight: 600,
          lineHeight: 1.03,
          letterSpacing: -4,
        }}
      >
        <span>Clarity on the ground.</span>
        <span style={{ color: "#d7ee9d" }}>Confidence in every plan.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          borderTop: "1px solid #657558",
          paddingTop: 25,
        }}
      >
        <span>Pune · Maharashtra · India</span>
        <span>shubhamsurveyors.com</span>
      </div>
    </div>,
    size,
  );
}
