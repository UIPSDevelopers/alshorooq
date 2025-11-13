// api/send-booking.js  (ESM)
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromAddr = process.env.RESEND_FROM;
const toAddr = process.env.RESEND_TO;

function escapeHtml(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8") || "{}";
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res
      .status(405)
      .end(JSON.stringify({ ok: false, error: "Method not allowed" }));
    return;
  }

  if (!resendApiKey || !fromAddr || !toAddr) {
    res
      .status(500)
      .end(
        JSON.stringify({
          ok: false,
          error: "Missing env vars: RESEND_API_KEY / RESEND_FROM / RESEND_TO",
        })
      );
    return;
  }

  const body = await readJsonBody(req);
  if (!body) {
    res
      .status(400)
      .end(JSON.stringify({ ok: false, error: "Invalid JSON body" }));
    return;
  }

  const { name, email, phone, service, date, time, notes } = body;
  if (!name || !email || !phone) {
    res
      .status(400)
      .end(
        JSON.stringify({
          ok: false,
          error: "Missing required fields (name, email, phone)",
        })
      );
    return;
  }

  try {
    const resend = new Resend(resendApiKey);
    const subject = `New Booking — ${name} (${service || "Service"})`;
    const html = `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Booking Request</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:24px 0;">
    <tr>
      <td align="center">
        <!-- Outer container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background-color:#e5edff;border-radius:18px;padding:2px;">
          <tr>
            <td>
              <!-- Main card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;padding:24px 20px;box-sizing:border-box;">
                <!-- Header -->
                <tr>
                  <td align="center" style="padding-bottom:16px;">
                    <div style="font-size:20px;font-weight:700;color:#1d4ed8;letter-spacing:0.03em;text-transform:uppercase;">
                      AlShorooq AlSatae
                    </div>
                    <div style="font-size:12px;color:#6b7280;margin-top:4px;">
                      Building Maintenance &amp; Cleaning Services
                    </div>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding-bottom:16px;">
                    <div style="height:1px;background:linear-gradient(to right,#e5e7eb,#1d4ed8,#e5e7eb);"></div>
                  </td>
                </tr>

                <!-- Title -->
                <tr>
                  <td style="padding-bottom:8px;">
                    <div style="font-size:18px;font-weight:600;color:#0f172a;">
                      New Booking Request
                    </div>
                    <div style="font-size:13px;color:#6b7280;margin-top:4px;">
                      You received a new service booking from your website.
                    </div>
                  </td>
                </tr>

                <!-- Booking summary pill -->
                <tr>
                  <td style="padding:10px 0 16px;">
                    <div style="display:inline-block;border-radius:999px;background-color:#eff6ff;padding:6px 14px;font-size:12px;color:#1d4ed8;font-weight:500;">
                      ${escapeHtml(service || "Service")} &bull;
                      <span style="color:#4b5563;">${escapeHtml(
                        date || "Date not specified"
                      )}</span>
                      ${
                        time
                          ? `&bull; <span style="color:#4b5563;">${escapeHtml(
                              time
                            )}</span>`
                          : ""
                      }
                    </div>
                  </td>
                </tr>

                <!-- Details box -->
                <tr>
                  <td>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;background-color:#f9fafb;border:1px solid #e5e7eb;padding:14px 14px 6px;box-sizing:border-box;">
                      <tr>
                        <td style="font-size:13px;color:#6b7280;padding-bottom:8px;">
                          <strong style="display:block;font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Client Details</strong>
                          <div style="margin-bottom:4px;"><strong style="color:#111827;">Name:</strong> ${escapeHtml(
                            name
                          )}</div>
                          <div style="margin-bottom:4px;"><strong style="color:#111827;">Email:</strong> ${escapeHtml(
                            email
                          )}</div>
                          <div style="margin-bottom:4px;"><strong style="color:#111827;">Phone:</strong> ${escapeHtml(
                            phone
                          )}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:13px;color:#6b7280;padding:6px 0 10px;">
                          <strong style="display:block;font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Booking Details</strong>
                          <div style="margin-bottom:4px;"><strong style="color:#111827;">Service:</strong> ${escapeHtml(
                            service || "Not specified"
                          )}</div>
                          <div style="margin-bottom:4px;"><strong style="color:#111827;">Date:</strong> ${escapeHtml(
                            date || "Not specified"
                          )}</div>
                          <div style="margin-bottom:4px;"><strong style="color:#111827;">Preferred Time:</strong> ${escapeHtml(
                            time || "Not specified"
                          )}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:13px;color:#6b7280;padding:6px 0 8px;">
                          <strong style="display:block;font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Notes</strong>
                          <div style="background-color:#f3f4f6;border-radius:8px;padding:10px 12px;border:1px dashed #e5e7eb;">
                            ${escapeHtml(
                              notes || "No additional notes provided."
                            ).replace(/\n/g, "<br />")}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Call to action -->
                <tr>
                  <td style="padding-top:18px;padding-bottom:8px;" align="center">
                    <a
                      href="mailto:${escapeHtml(
                            email
                          )}"
                      style="display:inline-block;padding:10px 20px;border-radius:999px;background-color:#1d4ed8;color:#ffffff;font-size:13px;font-weight:500;text-decoration:none;"
                    >
                      Reply to Customer
                    </a>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding-top:10px;font-size:11px;color:#9ca3af;" align="center">
                    <div>AlShorooq AlSatae Building Maintenance &amp; Cleaning Services</div>
                    <div style="margin-top:2px;">Dubai, United Arab Emirates</div>
                    <div style="margin-top:2px;">
                      Website:
                      <a href="https://alshorooq-alsatae.ae" style="color:#1d4ed8;text-decoration:none;">
                        alshorooq-alsatae.ae
                      </a>
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
        <!-- /Outer container -->
      </td>
    </tr>
  </table>
</body>
</html>`;

    const { data, error } = await resend.emails.send({
      from: fromAddr,
      to: toAddr,
      subject,
      reply_to: email,
      html,
    });

    if (error) {
      res
        .status(502)
        .end(
          JSON.stringify({ ok: false, error: error.message || "Resend error" })
        );
      return;
    }
    res.status(200).end(JSON.stringify({ ok: true, id: data?.id }));
  } catch (err) {
    res
      .status(500)
      .end(
        JSON.stringify({ ok: false, error: err?.message || "Server error" })
      );
  }
}
