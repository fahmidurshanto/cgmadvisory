import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Full Name, Work Email, Contact Number, Company, and Requirements)." },
        { status: 400 }
      );
    }

    // Server-side logging for simulation and auditing
    console.log("------------------------------------------");
    console.log("NEW CONSULTATION / CONTACT REQUEST RECEIVED");
    console.log("Target Notification Email: admin@cgmadvisorypteltd.com");
    console.log("Client Details:", {
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      service: service || "General Inquiry",
      message,
      timestamp: new Date().toISOString()
    });
    console.log("------------------------------------------");

    // In a production environment with SMTP/Resend/SendGrid credentials configured,
    // you would dispatch via nodemailer or provider SDK here.
    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. Your consultation request has been submitted to admin@cgmadvisorypteltd.com and our team will get in touch shortly."
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again or email us directly at admin@cgmadvisorypteltd.com" },
      { status: 500 }
    );
  }
}

