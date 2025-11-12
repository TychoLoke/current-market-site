import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());

  console.log("Contact submission", payload);

  // TODO: Integrate SendGrid or preferred email service here to forward payload.

  return NextResponse.json({ ok: true });
}
