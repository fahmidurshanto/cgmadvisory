import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// GET: Diagnostic endpoint — visit /api/contact in browser to check env vars
export async function GET() {
  return NextResponse.json({
    smtp_host: process.env.SMTP_HOST || "(not set)",
    smtp_port: process.env.SMTP_PORT || "(not set)",
    smtp_secure: process.env.SMTP_SECURE || "(not set)",
    smtp_user: process.env.SMTP_USER || "(not set)",
    smtp_password_set: !!process.env.SMTP_PASSWORD,
    smtp_password_length: process.env.SMTP_PASSWORD ? process.env.SMTP_PASSWORD.length : 0,
    contact_email: process.env.CONTACT_NOTIFICATION_EMAIL || "(not set)",
  });
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json(
        {
          error:
            "Please fill in all required fields (Full Name, Work Email, Contact Number, Company, and Requirements).",
        },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-SG", {
      timeZone: "Asia/Singapore",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // SMTP Configuration from Environment Variables
    const smtpHost = process.env.SMTP_HOST || "mail.privateemail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE === "false" ? false : smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || "admin@cgmadvisorypteltd.com";
    const smtpPass = process.env.SMTP_PASSWORD;
    const targetEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "admin@cgmadvisorypteltd.com";

    if (!smtpPass) {
      return NextResponse.json(
        { error: "Server email configuration is missing (SMTP_PASSWORD not set)." },
        { status: 500 }
      );
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Helpful if using a self-signed or panel cert
        rejectUnauthorized: false,
      },
    });

    // Luxury Executive HTML Email Template for CGM Advisory
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #07162c 0%, #0b2545 100%); padding: 32px 24px; text-align: center; border-bottom: 3px solid #f59e0b; }
            .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; color: #cbd5e1; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 32px 28px; }
            .badge { display: inline-block; background-color: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
            .field-row { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
            .field-label { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 15px; font-weight: 600; color: #07162c; word-break: break-word; }
            .message-box { background: #f8fafc; border-left: 4px solid #0b2545; padding: 16px; border-radius: 8px; margin-top: 20px; }
            .message-text { font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { background: #07162c; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8; }
            .footer a { color: #f59e0b; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>CGM ADVISORY PTE. LTD.</h1>
              <p>Direct Consultation & Inquiry Notification</p>
            </div>
            <div class="content">
              <span class="badge">New Inbound Inquiry</span>
              
              <div class="field-row">
                <div class="field-label">Full Name</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Work Email</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #0b2545; text-decoration: underline;">${email}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">Contact / Phone Number</div>
                <div class="field-value">${phone}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Company / Organization</div>
                <div class="field-value">${company}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Primary Service of Interest</div>
                <div class="field-value" style="color: #0284c7;">${service}</div>
              </div>

              <div class="message-box">
                <div class="field-label" style="color: #07162c; margin-bottom: 8px;">Detailed Client Requirements</div>
                <div class="message-text">${message}</div>
              </div>

              <p style="margin-top: 24px; font-size: 11px; color: #94a3b8; text-align: right;">
                Received on: ${timestamp} (SGT)
              </p>
            </div>
            <div class="footer">
              <p>© 2026 CGM Advisory Pte. Ltd. All rights reserved.</p>
              <p>Sent directly from your website contact portal to <a href="mailto:admin@cgmadvisorypteltd.com">admin@cgmadvisorypteltd.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Dispatch the email
    await transporter.sendMail({
      from: `"CGM Advisory Inquiries" <${smtpUser}>`,
      to: targetEmail,
      replyTo: email, // Directly clicking reply in your inbox replies to the user!
      subject: `[New Inquiry] ${service} — ${name} (${company})`,
      text: `New consultation inquiry from ${name} (${company}, ${email}, ${phone}):\n\nService: ${service}\n\nRequirements:\n${message}\n\nReceived: ${timestamp}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for reaching out. Your consultation request has been submitted to admin@cgmadvisorypteltd.com and our team will get in touch shortly.",
    });
  } catch (error: any) {
    console.error("Error dispatching consultation email:", error);
    return NextResponse.json(
      {
        error: `SMTP Error [${error.code || "UNKNOWN"}]: ${error.message || "Unknown error"}. Please contact admin@cgmadvisorypteltd.com directly.`,
        code: error.code,
      },
      { status: 500 }
    );
  }
}
