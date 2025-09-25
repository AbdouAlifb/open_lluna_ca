// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";         // Resend requires Node runtime
export const dynamic = "force-dynamic";  // don't statically cache this route

const resend = new Resend(process.env.RESEND_API_KEY || "re_U5wLAcj9_7gEMjPBt6HCmHdZSurNrVUwF");

// Configure these in .env.local
const BRAND = "#28B7D5";
const SITE_NAME = process.env.SITE_NAME || "Open Lluna";
const SITE_URL = (process.env.SITE_URL || "https://openlluna.com").replace(/\/$/, "");
const TO_INTERNAL = process.env.CONTACT_TO_EMAIL || "contact@openlluna.com";
const FROM_INTERNAL = process.env.CONTACT_FROM_EMAIL || `${SITE_NAME} <send@openlluna.ca>`;
const FROM_CLIENT = process.env.CLIENT_FROM_EMAIL || `${SITE_NAME} <send@openlluna.ca>`;
const LOGO_URL = process.env.LOGO_URL || `${SITE_URL}/logo.png`; // place logo.png in /public

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Build emails
    const subjectInternal = `New inquiry from ${name}`;
    const subjectClient = `We received your message — ${SITE_NAME}`;

    const htmlInternal = internalTemplate({ name, email, phone, message });
    const textInternal = plainTextInternal({ name, email, phone, message });

    const htmlClient = clientTemplate({ name });
    const textClient = plainTextClient({ name });

    // Send both emails (internal + client)
    const [adminResult, clientResult] = await Promise.all([
      resend.emails.send({
        from: FROM_INTERNAL,
        to: [TO_INTERNAL],
        // reply_to: email, // makes replying easy
        subject: subjectInternal,
        html: htmlInternal,
        text: textInternal,
        headers: { "X-Entity-Ref-ID": `contact-admin-${Date.now()}` },
      }),
      resend.emails.send({
        from: FROM_CLIENT,
        to: [email],
        subject: subjectClient,
        html: htmlClient,
        text: textClient,
        headers: { "X-Entity-Ref-ID": `contact-client-${Date.now()}` },
      }),
    ]);

    if (adminResult.error) {
      console.error("Admin email error:", adminResult.error);
      return NextResponse.json({ error: "Notification send failed." }, { status: 500 });
    }
    if (clientResult.error) {
      console.error("Client email error:", clientResult.error);
      // Still return 200, since we received the inquiry; but you can make this 500 if you prefer
    }

    return NextResponse.json({
      ok: true,
      adminId: adminResult.data?.id,
      clientId: clientResult.data?.id,
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
}

/* ----------------------------- Templates ----------------------------- */

function internalTemplate({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#0f172a;background:#ffffff">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px;margin:0 auto;">
      <tr>
        <td style="padding:0 0 16px 0;">
          <img src="${escapeAttr(LOGO_URL)}" alt="${escapeAttr(SITE_NAME)}" height="32" style="display:block"/>
        </td>
      </tr>
      <tr>
        <td style="padding:20px;border:1px solid #e2e8f0;border-radius:14px;background:#ffffff">
          <h2 style="margin:0 0 8px;font-size:20px;">New Contact Form Submission</h2>
          <p style="margin:0 0 6px;color:#475569;font-size:14px">From your website contact form</p>
          <table cellpadding="0" cellspacing="0" style="font-size:14px;margin-top:8px">
            <tr>
              <td style="padding:6px 12px 6px 0;color:#64748b;">Name:</td>
              <td><strong>${escapeHtml(name)}</strong></td>
            </tr>
            <tr>
              <td style="padding:6px 12px 6px 0;color:#64748b;">Email:</td>
              <td><a href="mailto:${escapeAttr(email)}" style="color:${BRAND};text-decoration:none">${escapeHtml(email)}</a></td>
            </tr>
            ${
              phone
                ? `<tr><td style="padding:6px 12px 6px 0;color:#64748b;">Phone:</td><td>${escapeHtml(
                    phone
                  )}</td></tr>`
                : ""
            }
          </table>
          <div style="margin-top:14px;padding:12px;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <div style="color:#64748b;font-size:12px;margin-bottom:6px">Message</div>
            <div style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
          </div>
          <p style="margin:14px 0 0;color:#94a3b8;font-size:12px;">Sent from ${escapeHtml(SITE_URL)}</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function clientTemplate({ name }: { name: string }) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#0f172a;background:#ffffff">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px;margin:0 auto;">
      <tr>
        <td style="padding:0 0 16px 0;">
          <img src="${escapeAttr(LOGO_URL)}" alt="${escapeAttr(SITE_NAME)}" height="32" style="display:block"/>
        </td>
      </tr>
      <tr>
        <td style="padding:0;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
          <div style="background:${BRAND};padding:20px">
            <h1 style="margin:0;color:#ffffff;font-size:22px;">Thanks ${escapeHtml(name)}, we’ve received your message</h1>
            <p style="margin:8px 0 0;color:#e6f7fb;font-size:14px">Our team will reach out shortly (typically within 24–48h).</p>
          </div>
          <div style="padding:20px;background:#ffffff">
            <p style="margin:0 0 12px 0;font-size:14px;color:#334155">
              In the meantime, feel free to reply to this email with any extra details or links.
            </p>
            <ul style="margin:0 0 12px 18px;color:#475569;font-size:14px;line-height:1.6">
              <li>Website: <a href="${escapeAttr(
                SITE_URL
              )}" style="color:${BRAND};text-decoration:none">${escapeHtml(SITE_URL)}</a></li>
              <li>Services: <a href="${escapeAttr(
                SITE_URL + "/services"
              )}" style="color:${BRAND};text-decoration:none">${escapeHtml(SITE_URL + "/services")}</a></li>
            </ul>
            <p style="margin:0;color:#64748b;font-size:12px">
              If this wasn’t you, you can ignore this message.
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="text-align:center;color:#94a3b8;font-size:12px;padding-top:10px">
          © ${new Date().getFullYear()} ${escapeHtml(SITE_NAME)} · All rights reserved
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function plainTextInternal({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return `New inquiry
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}

Message:
${message}
`;
}

function plainTextClient({ name }: { name: string }) {
  return `Hi ${name},

Thanks for reaching out to ${SITE_NAME}. We’ve received your message and will get back to you within 24–48 hours.

In the meantime, you can reply to this email with any extra details.
${SITE_URL}
`;
}

/* ------------------------------ Helpers ------------------------------ */
function escapeHtml(s: string) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(s: string) {
  return escapeHtml(s);
}
