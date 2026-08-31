import { NextResponse } from 'next/server';

/* ─────────────────────────────────────────────────────────────────────────
   Irken Operator Lead Pipeline
   ─ Dual-track: Resend (instant team email) + Notion (permanent CRM log)
   ─ Both tracks fire independently; one failure never blocks the other.
   ─ Set these env vars in Vercel dashboard:
       RESEND_API_KEY          – your Resend API key
       RESEND_TO_EMAIL         – team email to receive alerts
       NOTION_API_KEY          – Internal Integration token from Notion
       NOTION_DATABASE_ID      – the Notion DB to insert rows into
   ─ Without the env vars, the route still returns 200 (graceful degradation).
───────────────────────────────────────────────────────────────────────── */

interface LeadPayload {
  source?: string;
  operatorRole?: string;
  capacity?: string;
  facilityName?: string;
  cityArea?: string;
  name?: string;
  phone?: string;
  email?: string;
}

/* ── Resend notification ──────────────────────────────────────────────── */
async function sendResendAlert(data: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL || 'leads@irken.com.eg';
  if (!apiKey) return;

  const html = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:16px;">
      <div style="background:#569BAA;color:#fff;padding:16px 24px;border-radius:12px 12px 0 0;margin-bottom:24px;">
        <h1 style="margin:0;font-size:18px;font-weight:700;">New Irken Partner Registration</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr style="background:#fff;border-bottom:1px solid #e2e8f0;">
          <td style="padding:12px 16px;font-weight:600;color:#64748b;width:40%;">Contact Name</td>
          <td style="padding:12px 16px;color:#0f172a;">${data.name ?? '—'}</td>
        </tr>
        <tr style="background:#f8fafc;border-bottom:1px solid #e2e8f0;">
          <td style="padding:12px 16px;font-weight:600;color:#64748b;">Phone (WhatsApp)</td>
          <td style="padding:12px 16px;color:#0f172a;font-weight:700;">${data.phone ?? '—'}</td>
        </tr>
        <tr style="background:#fff;border-bottom:1px solid #e2e8f0;">
          <td style="padding:12px 16px;font-weight:600;color:#64748b;">Work Email</td>
          <td style="padding:12px 16px;color:#0f172a;">${data.email ?? '—'}</td>
        </tr>
        <tr style="background:#f8fafc;border-bottom:1px solid #e2e8f0;">
          <td style="padding:12px 16px;font-weight:600;color:#64748b;">Facility Name</td>
          <td style="padding:12px 16px;color:#0f172a;">${data.facilityName ?? '—'}</td>
        </tr>
        <tr style="background:#fff;border-bottom:1px solid #e2e8f0;">
          <td style="padding:12px 16px;font-weight:600;color:#64748b;">City / Area</td>
          <td style="padding:12px 16px;color:#0f172a;">${data.cityArea ?? '—'}</td>
        </tr>
        <tr style="background:#f8fafc;border-bottom:1px solid #e2e8f0;">
          <td style="padding:12px 16px;font-weight:600;color:#64748b;">Operator Role</td>
          <td style="padding:12px 16px;color:#0f172a;">${data.operatorRole ?? '—'}</td>
        </tr>
        <tr style="background:#fff;">
          <td style="padding:12px 16px;font-weight:600;color:#64748b;">Facility Capacity</td>
          <td style="padding:12px 16px;color:#0f172a;">${data.capacity ?? '—'} spaces</td>
        </tr>
      </table>
      <div style="margin-top:24px;padding:16px;background:#ecfdf5;border-radius:10px;border:1px solid #bbf7d0;">
        <p style="margin:0;font-size:12px;color:#166534;font-weight:600;">
          Action Required: Follow up within 24 hours to activate dashboard access.
        </p>
      </div>
      <p style="margin-top:16px;font-size:11px;color:#94a3b8;text-align:center;">
        Submitted via irken.com.eg &middot; ${new Date().toLocaleString('en-EG', { timeZone: 'Africa/Cairo' })} (Cairo Time)
      </p>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'Irken Partner Leads <onboarding@resend.dev>',
        to: [toEmail],
        subject: `New Partner Lead: ${data.name ?? 'Unknown'} — ${data.facilityName ?? 'N/A'} (${data.cityArea ?? 'N/A'})`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Resend Admin Alert Error:', res.status, errText);
    }
  } catch (err) {
    console.error('Resend Admin Alert Network Error:', err);
  }
}

/* ── Applicant confirmation email (sent to the lead) ───────────────────── */
async function sendApplicantConfirmation(data: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !data.email) return;

  const html = `
    <div style="font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;background:#ffffff;border:1px solid #e2e8f0;border-radius:20px;">
      <div style="text-align:center;margin-bottom:28px;">
        <h1 style="color:#0f172a;font-size:22px;font-weight:800;margin:0 0 8px 0;letter-spacing:-0.5px;">
          شكراً لتسجيلك مع إركن | Welcome to Irken Partner Program
        </h1>
        <p style="color:#64748b;font-size:14px;margin:0;">
          تم استلام بياناتك بنجاح &bull; Your facility details have been received
        </p>
      </div>

      <div style="background:#f8fafc;border-radius:16px;padding:20px;margin-bottom:24px;border:1px solid #f1f5f9;">
        <h2 style="font-size:14px;font-weight:700;color:#0f172a;margin:0 0 12px 0;">
          الملخص المُسجل / Registered Details:
        </h2>
        <ul style="list-style:none;padding:0;margin:0;font-size:13px;color:#334155;line-height:2;">
          <li><strong>الاسم / Name:</strong> ${data.name ?? '—'}</li>
          <li><strong>الجراج / Facility:</strong> ${data.facilityName ?? '—'}</li>
          <li><strong>المنطقة / Location:</strong> ${data.cityArea ?? '—'}</li>
          <li><strong>السعة / Capacity:</strong> ${data.capacity ?? '—'} سيارة / bays</li>
        </ul>
      </div>

      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:16px;padding:20px;margin-bottom:28px;">
        <h3 style="color:#166534;font-size:15px;font-weight:700;margin:0 0 8px 0;">
          ما هي الخطوة القادمة؟ | What Happens Next?
        </h3>
        <p style="color:#15803d;font-size:13px;line-height:1.6;margin:0;">
          يقوم فريقنا بمراجعة تفاصيل الجراج وسيقوم مستشار التأهيل بالتواصل معك خلال <strong>يومين عمل</strong> لتأكيد تفعيل لوحة التحكم والبدء في استقبال حجوزات السائقين.
        </p>
      </div>

      <div style="text-align:center;padding-top:16px;border-top:1px solid #f1f5f9;">
        <p style="color:#64748b;font-size:13px;margin:0 0 12px 0;">
          هل لديك أي استفسار عاجل؟ / Have an urgent question?
        </p>
        <a href="https://wa.me/201222200479" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;padding:12px 24px;border-radius:9999px;">
          تواصل معنا عبر واتساب / Chat on WhatsApp
        </a>
      </div>

      <div style="text-align:center;margin-top:28px;font-size:11px;color:#94a3b8;">
        © ${new Date().getFullYear()} Irken Solutions &bull; irken.com.eg &bull; irken.eg
      </div>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'Irken Partner Support <leads@irken.com.eg>',
        to: [data.email],
        subject: 'تم استلام طلب انضمامك لشبكة مواقف إركن | Irken Partner Registration Received',
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Resend Lead Confirmation Error:', res.status, errText);
    }
  } catch (err) {
    console.error('Resend Lead Confirmation Network Error:', err);
  }
}

/* ── Notion CRM row append ────────────────────────────────────────────── */
async function appendToNotion(data: LeadPayload): Promise<void> {
  const apiKey = process.env.NOTION_API_KEY;
  const dbId = process.env.NOTION_DATABASE_ID;
  if (!apiKey || !dbId) return;

  const roleName =
    data.operatorRole === 'parking_operator' ? 'Parking Operator'
      : data.operatorRole === 'facility_manager' ? 'Facility Manager'
        : 'Valet Provider';

  const capacityName =
    data.capacity === '<50' ? '< 50 Spaces'
      : data.capacity === '50-200' ? '50-200 Spaces'
        : data.capacity === '200-500' ? '200-500 Spaces'
          : '500+ Spaces';

  const notionBody = {
    parent: { database_id: dbId },
    properties: {
      Name: { title: [{ text: { content: data.name ?? '—' } }] },
      Phone: { phone_number: data.phone ?? '' },
      Email: data.email ? { email: data.email } : undefined,
      'Facility Name': { rich_text: [{ text: { content: data.facilityName ?? '—' } }] },
      'City / Area': { rich_text: [{ text: { content: data.cityArea ?? '—' } }] },
      Role: { select: { name: roleName } },
      Capacity: { select: { name: capacityName } },
      Status: { select: { name: 'New Lead' } },
      Source: { rich_text: [{ text: { content: data.source ?? 'operator_onboarding_form' } }] },
      'Submitted At': { date: { start: new Date().toISOString() } },
    },
  };

  try {
    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(notionBody),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Notion API Error:', res.status, errText);
    }
  } catch (err) {
    console.error('Notion Network Error:', err);
  }
}

/* ── Route Handler ────────────────────────────────────────────────────── */
export async function POST(request: Request) {
  try {
    const body: LeadPayload = await request.json();

    // Fire all three tracks in parallel; log individual failures but never block UX
    const results = await Promise.allSettled([
      sendResendAlert(body),
      sendApplicantConfirmation(body),
      appendToNotion(body),
    ]);

    results.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.error(`Lead pipeline track ${i} failed:`, result.reason);
      }
    });

    return NextResponse.json(
      { success: true, message: 'Lead captured and dispatched' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling lead submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
