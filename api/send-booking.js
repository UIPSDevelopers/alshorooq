// api/send-booking.js
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// simple HTML escape to avoid injection
function escapeHtml(s = '') {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, phone, service, date, time, notes } = req.body || {};

    if (!name || !email || !phone) {
      res.status(400).json({ ok: false, error: 'Missing required fields.' });
      return;
    }

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
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM,     // e.g. 'AlShorooq <info@alshorooq-alsatae.ae>'
      to: process.env.RESEND_TO,         // e.g. 'info@alshorooq-alsatae.ae'
      subject,
      reply_to: email,
      html,
    });

    if (error) {
      res.status(502).json({ ok: false, error: error.message || 'Resend error' });
      return;
    }

    res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    res.status(500).json({ ok: false, error: err?.message || 'Server error' });
  }
};
