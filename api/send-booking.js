// api/send-booking.js  (ESM)
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const fromAddr = process.env.RESEND_FROM;
const toAddr = process.env.RESEND_TO;

function escapeHtml(s = '') {
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'","&#39;");
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8') || '{}';
  try { return JSON.parse(raw); } catch { return null; }
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.status(405).end(JSON.stringify({ ok:false, error:'Method not allowed' }));
    return;
  }

  if (!resendApiKey || !fromAddr || !toAddr) {
    res.status(500).end(JSON.stringify({ ok:false, error:'Missing env vars: RESEND_API_KEY / RESEND_FROM / RESEND_TO' }));
    return;
  }

  const body = await readJsonBody(req);
  if (!body) {
    res.status(400).end(JSON.stringify({ ok:false, error:'Invalid JSON body' }));
    return;
  }

  const { name, email, phone, service, date, time, notes } = body;
  if (!name || !email || !phone) {
    res.status(400).end(JSON.stringify({ ok:false, error:'Missing required fields (name, email, phone)' }));
    return;
  }

  try {
    const resend = new Resend(resendApiKey);
    const subject = `New Booking — ${name} (${service || 'Service'})`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.5;font-size:14px">
        <h2 style="margin:0 0 12px">New Booking Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || '')}</p>
        <p><strong>Date:</strong> ${escapeHtml(date || '')}</p>
        <p><strong>Time:</strong> ${escapeHtml(time || '')}</p>
        <p><strong>Notes:</strong><br>${escapeHtml(notes || '').replace(/\n/g,'<br>')}</p>
      </div>`;

    const { data, error } = await resend.emails.send({
      from: fromAddr,
      to: toAddr,
      subject,
      reply_to: email,
      html,
    });

    if (error) {
      res.status(502).end(JSON.stringify({ ok:false, error: error.message || 'Resend error' }));
      return;
    }
    res.status(200).end(JSON.stringify({ ok:true, id: data?.id }));
  } catch (err) {
    res.status(500).end(JSON.stringify({ ok:false, error: err?.message || 'Server error' }));
  }
}
