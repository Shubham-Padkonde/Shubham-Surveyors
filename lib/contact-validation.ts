import { z } from "zod";

export const CONTACT_SERVICES = [
  "Boundary and land survey",
  "Topographic and contour survey",
  "Total Station survey",
  "RTK DGPS survey",
  "Highway and infrastructure survey",
  "Building survey",
  "Railway line survey",
  "Water supply survey",
  "Drainage line survey",
  "Irrigation survey",
  "Layout and development survey",
  "Mojani and land records support",
  "GIS and digital mapping",
  "Help me choose",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Use 80 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number.")
    .max(32, "Enter a valid phone number.")
    .regex(/^\+?[\d\s().-]+$/, "Use digits and an optional country code.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Enter a phone number with 10 to 15 digits."),
  email: z
    .string()
    .trim()
    .max(254, "Enter a shorter email address.")
    .email("Enter a valid email address."),
  service: z.enum(CONTACT_SERVICES, {
    error: "Choose a service, or select “Help me choose”.",
  }),
  state: z
    .string()
    .trim()
    .min(2, "Enter your project city or district.")
    .max(120, "Use 120 characters or fewer."),
  projectDetails: z
    .string()
    .trim()
    .min(10, "Add a few details about your survey.")
    .max(3000, "Use 3,000 characters or fewer."),
  website: z.string().max(0, "Unable to submit this enquiry.").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export class RequestBodyError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "RequestBodyError";
  }
}

/** Limit the stream itself: Content-Length may be missing or inaccurate. */
export async function readJsonBody(
  request: Request,
  maxBytes = 16_384,
): Promise<unknown> {
  if (
    request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !==
    "application/json"
  ) {
    throw new RequestBodyError("Send this request as JSON.", 415);
  }
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    throw new RequestBodyError(
      "Please submit the form from this website.",
      403,
    );
  }
  const declaredLength = Number(request.headers.get("content-length"));
  if (declaredLength > maxBytes)
    throw new RequestBodyError("The request is too large.", 413);
  const reader = request.body?.getReader();
  if (!reader) throw new RequestBodyError("The request is empty.", 400);
  const decoder = new TextDecoder();
  let text = "";
  let bytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBytes) {
        await reader.cancel();
        throw new RequestBodyError("The request is too large.", 413);
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
  } finally {
    reader.releaseLock();
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new RequestBodyError(
      "The request could not be read. Please try again.",
      400,
    );
  }
}
