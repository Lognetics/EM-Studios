import { NextResponse } from "next/server";

type BookingPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  location?: string;
  budget?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let body: BookingPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  if (!body.name?.trim()) errors.name = "Please share your name.";
  if (!body.email?.trim()) errors.email = "Please share your email.";
  else if (!isEmail(body.email)) errors.email = "That email doesn't look right.";
  if (!body.service?.trim()) errors.service = "Please choose a service.";
  if (!body.message?.trim()) errors.message = "Tell us a little about your project.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // TODO: wire to email (Resend/SendGrid) or Supabase here.
  // For now we log the enquiry server-side and confirm receipt.
  console.log("[EM Studios] New booking enquiry:", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      ok: true,
      message:
        "Thank you — your enquiry has been received. We'll be in touch within 48 hours to begin your story.",
    },
    { status: 200 }
  );
}
