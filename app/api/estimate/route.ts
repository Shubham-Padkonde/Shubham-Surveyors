import { NextResponse } from "next/server";
import {
  calculateEstimate,
  estimateSchema,
  TERRAIN_MULTIPLIERS,
} from "@/lib/pricing";
import { readJsonBody, RequestBodyError } from "@/lib/contact-validation";

export async function POST(request: Request) {
  try {
    const parsed = estimateSchema.safeParse(await readJsonBody(request, 2048));
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Choose a valid survey type, size and terrain." },
        { status: 400 },
      );
    }
    const { surveyType, area, terrain } = parsed.data;
    const estimate = calculateEstimate(
      surveyType,
      area,
      TERRAIN_MULTIPLIERS[terrain].value,
    );
    return NextResponse.json({
      ...estimate,
      indicative: true,
      basis: "total",
      currency: "INR",
    });
  } catch (error) {
    if (error instanceof RequestBodyError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
    return NextResponse.json(
      {
        error: "The estimate could not be calculated. Please contact our team.",
      },
      { status: 500 },
    );
  }
}
