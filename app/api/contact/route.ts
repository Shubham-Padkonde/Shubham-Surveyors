import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  contactSchema,
  readJsonBody,
  RequestBodyError,
} from "@/lib/contact-validation";

export const runtime = "nodejs";

const unavailableMessage =
  "Your enquiry could not be sent. Please call, email or WhatsApp our team using the contact details on this page.";

export async function POST(request: Request) {
  try {
    const parsed = contactSchema.safeParse(await readJsonBody(request));
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check the form fields and try again.",
          fields: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    if (!gmailUser || !gmailPass) {
      console.error(
        "Contact email is unavailable: mail credentials are not configured.",
      );
      return NextResponse.json({ error: unavailableMessage }, { status: 503 });
    }
    const { name, phone, email, service, state, projectDetails } = parsed.data;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
    // Plain text prevents enquiry content from injecting HTML into the owner's email.
    const sent = await transporter.sendMail({
      from: { name: "Shubham Surveyors website", address: gmailUser },
      to: gmailUser,
      replyTo: email,
      subject: `Website enquiry: ${service}`,
      text: [
        "New website enquiry",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        `Project location: ${state}`,
        "",
        "Project details:",
        projectDetails,
      ].join("\n"),
    });
    if (!sent.accepted?.length) {
      console.error("Contact email was not accepted by the mail provider.");
      return NextResponse.json({ error: unavailableMessage }, { status: 503 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof RequestBodyError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
    // Do not log submitted personal information or mail credentials.
    console.error("Contact email delivery failed.");
    return NextResponse.json({ error: unavailableMessage }, { status: 503 });
  }
}
