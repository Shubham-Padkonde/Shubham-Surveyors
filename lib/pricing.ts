import { z } from "zod";
import { PRICING } from "./constants";

export type SurveyType = keyof typeof PRICING;

export const TERRAIN_MULTIPLIERS = {
  flat: { label: "Flat and accessible", value: 1 },
  urban: { label: "Urban or semi-urban", value: 1.2 },
  hilly: { label: "Hilly or forested", value: 1.4 },
} as const;

export type TerrainType = keyof typeof TERRAIN_MULTIPLIERS;

export const estimateSchema = z.object({
  surveyType: z.enum(
    ["boundary", "total_station", "rtk_dgps", "highway", "layout_rera", "gis"],
    { error: "Choose a survey type." },
  ),
  area: z
    .number({ error: "Enter a valid area or length." })
    .finite()
    .min(0.01, "Enter at least 0.01.")
    .max(100_000, "For a larger project, please contact our team."),
  terrain: z.enum(["flat", "urban", "hilly"], {
    error: "Choose the site terrain.",
  }),
});

export type EstimateInput = z.infer<typeof estimateSchema>;

export function calculateEstimate(
  surveyType: SurveyType,
  area: number,
  terrainMultiplier: number,
): { min: number; max: number; unit: string } {
  if (
    !Object.hasOwn(PRICING, surveyType) ||
    !Number.isFinite(area) ||
    area < 0.01 ||
    area > 100_000 ||
    ![1, 1.2, 1.4].includes(terrainMultiplier)
  ) {
    throw new RangeError("Invalid survey estimate parameters.");
  }
  const pricing = PRICING[surveyType];
  return {
    min: Math.round(pricing.min * area * terrainMultiplier),
    max: Math.round(pricing.max * area * terrainMultiplier),
    unit: pricing.unit,
  };
}

export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}
