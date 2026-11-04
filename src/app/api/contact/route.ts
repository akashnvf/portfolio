import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Server-side validation with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form for invalid inputs.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website_company } = validationResult.data;

    // 2. Honeypot check for spam bots
    if (website_company && website_company.trim().length > 0) {
      // Quietly reject bots with 200 to not reveal detection
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
      );
    }

    // 3. Email provider dispatch (if RESEND_API_KEY is configured in environment)
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "akash.nvf@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (apiKey) {
      const emailPayload = {
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: subject ? `[Portfolio Contact] ${subject}` : `[Portfolio Contact] Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      };

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error("Email provider error:", errorData);
        return NextResponse.json(
          {
            success: false,
            message:
              "Could not dispatch email via the provider. Please send an email directly to akash.nvf@gmail.com.",
          },
          { status: 502 }
        );
      }
    } else {
      // In development or when email provider is not yet hooked up
      console.log("[Contact API] Valid message received:", {
        name,
        email,
        subject,
        messageLength: message.length,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unhandled contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected server error occurred. Please reach out directly to akash.nvf@gmail.com.",
      },
      { status: 500 }
    );
  }
}

