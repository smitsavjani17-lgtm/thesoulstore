import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "TheSoulStore Waitlist <waitlist@thesoulstore.shop>",
      to: ["thesoulstore.ca@gmail.com"],
      subject: "New TheSoulStore waitlist signup",
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px;">
          <h1 style="font-size: 22px;">New waitlist signup</h1>
          <p>Someone joined the Collection 001 waitlist.</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString("en-CA")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to join the waitlist right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You are on the waitlist.",
    });
  } catch (error) {
    console.error("Waitlist error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}