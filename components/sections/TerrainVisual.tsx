"use client";
import { useState } from "react";
import { Layers, Crosshair } from "lucide-react";
function contour(radius: number, index: number) {
  const points = Array.from({ length: 101 }, (_, n) => {
    const t = (n / 100) * Math.PI * 2;
    const r =
      radius *
      (1 + 0.105 * Math.sin(t * 3 + 0.4) + 0.07 * Math.cos(t * 5 - 0.8));
    return `${(350 + r * Math.cos(t)).toFixed(1)},${(344 + r * Math.sin(t) * 0.75 - index * 1.5).toFixed(1)}`;
  });
  return "M" + points.join(" L") + " Z";
}
export default function TerrainVisual() {
  const [mode, setMode] = useState<"contours" | "grid">("contours");
  return (
    <div className="terrain-visual">
      <div className="terrain-toolbar">
        <span>
          <i /> From ground to insight
        </span>
        <div role="group" aria-label="Illustration view">
          <button
            type="button"
            aria-pressed={mode === "contours"}
            onClick={() => setMode("contours")}
            aria-label="Show contour illustration"
          >
            <Layers size={16} />
          </button>
          <button
            type="button"
            aria-pressed={mode === "grid"}
            onClick={() => setMode("grid")}
            aria-label="Show survey grid illustration"
          >
            <Crosshair size={16} />
          </button>
        </div>
      </div>
      <svg
        viewBox="0 0 700 660"
        className="terrain-svg"
        role="img"
        aria-label={
          mode === "contours"
            ? "Conceptual topographic contours with a highlighted land boundary and survey control points"
            : "Conceptual survey grid with measured control points and a highlighted land boundary"
        }
      >
        <defs>
          <radialGradient id="terrain-bg">
            <stop stopColor="#31533b" />
            <stop offset="1" stopColor="#152e23" />
          </radialGradient>
          <pattern
            id="terrain-grid"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 44 0 H 0 V 44"
              fill="none"
              stroke="#c9e0b4"
              strokeOpacity=".1"
            />
          </pattern>
          <linearGradient id="plot-fill" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#dbf2a5" stopOpacity=".2" />
            <stop offset="1" stopColor="#dbf2a5" stopOpacity=".04" />
          </linearGradient>
        </defs>
        <rect width="700" height="660" fill="url(#terrain-bg)" />
        <rect width="700" height="660" fill="url(#terrain-grid)" />
        <g
          className={
            mode === "contours" ? "contour-lines" : "contour-lines muted"
          }
          fill="none"
        >
          {Array.from({ length: 30 }, (_, n) => (
            <path
              key={n}
              d={contour(400 - n * 11.8, n)}
              stroke={n % 5 === 0 ? "#bed2a5" : "#829f79"}
              strokeWidth={n % 5 === 0 ? 1.1 : 0.6}
              opacity={n % 5 === 0 ? 0.65 : 0.48}
            />
          ))}
        </g>
        {mode === "grid" && (
          <g stroke="#cfe8a5" strokeWidth=".8" opacity=".7">
            {Array.from({ length: 11 }, (_, i) => (
              <g key={i}>
                <path d={`M ${70 + i * 56} 125 L ${70 + i * 56} 560`} />
                <path d={`M 70 ${125 + i * 43.5} L 630 ${125 + i * 43.5}`} />
              </g>
            ))}
          </g>
        )}
        <path
          d="M182 267 L425 166 L540 389 L288 510 Z"
          fill="url(#plot-fill)"
          stroke="#d7ee9d"
          strokeWidth="2"
        />
        <path
          d="M182 267 L540 389 M425 166 L288 510"
          fill="none"
          stroke="#d7ee9d"
          strokeOpacity=".4"
          strokeDasharray="4 6"
        />
        {[
          [182, 267, "A"],
          [425, 166, "B"],
          [540, 389, "C"],
          [288, 510, "D"],
        ].map(([x, y, label]) => (
          <g key={label}>
            <circle
              cx={x}
              cy={y}
              r="12"
              fill="#172e22"
              stroke="#d7ee9d"
              strokeOpacity=".6"
            />
            <circle cx={x} cy={y} r="3.5" fill="#d7ee9d" />
            <text
              x={Number(x) + 19}
              y={Number(y) - 13}
              fill="#e1edcd"
              fontSize="12"
              fontFamily="monospace"
            >
              {label}
            </text>
          </g>
        ))}
        <g transform="translate(350 340)">
          <circle r="29" fill="#d7ee9d" fillOpacity=".13" />
          <circle r="17" fill="#d7ee9d" />
          <path d="M-8 0H8M0-8V8" stroke="#15291f" strokeWidth="1.5" />
        </g>
        <g transform="translate(613 120)" fill="#d9e5c8">
          <text
            x="0"
            y="-16"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="12"
          >
            N
          </text>
          <path d="M0-6 L-7 18 L0 13 L7 18Z" />
        </g>
        <g fill="#aac09e" fontSize="9" fontFamily="monospace" letterSpacing="2">
          <text x="64" y="582">
            ILLUSTRATIVE SURVEY PLAN
          </text>
          <text x="480" y="582">
            NOT SITE DATA
          </text>
        </g>
        <path
          d="M63 606H163 M63 602V610 M113 602V610 M163 602V610"
          stroke="#aac09e"
        />
      </svg>
      <div className="map-note">
        <span className="map-note-icon">
          <Crosshair size={20} />
        </span>
        <div>
          <strong>Every point has a purpose.</strong>
          <span>Measured. Checked. Mapped.</span>
        </div>
      </div>
      <div className="terrain-caption">
        <span>LAND / LEVELS / POSSIBILITIES</span>
        <span>01 — FIELD NOTES</span>
      </div>
    </div>
  );
}
