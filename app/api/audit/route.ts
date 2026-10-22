import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { countries } from '@/lib/countries';
import { EMAIL } from '@/lib/site';
import { normaliseWebsite, validateAudit, type AuditFields } from '@/lib/validation';

const DEFAULT_LEAD_RECIPIENTS = `${EMAIL},albie@mantrainfotechs.com`;

const escape =(s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.company === 'string' && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const str = (key: string) => (typeof body[key] === 'string' ? (body[key] as string).trim() : '');
  const data: AuditFields = {
    name: str('name'),
    code: str('code'),
    phone: str('phone'),
    email: str('email'),
    website: str('website'),
    budget: str('budget'),
  };

  const errors = validateAudit(data);
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: 'Please check the highlighted fields.', errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!apiKey || !from) {
    console.error('Audit form: RESEND_API_KEY or RESEND_FROM is not set.');
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  const dialCode = countries.find((c) => c.value === data.code)!.code;
  const rows: [string, string][] = [
    ['Name', data.name],
    ['WhatsApp', `${dialCode} ${data.phone}`],
    ['Email', data.email],
    ['Website', normaliseWebsite(data.website)!],
    ['Monthly ad budget', data.budget || 'Not specified'],
  ];

  const html = `
    <h2 style="font-family:Arial,sans-serif">New free Google Ads audit request (Dubai)</h2>
    <table cellpadding="8" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="border-bottom:1px solid #e1e6ed;color:#626a76">${k}</td><td style="border-bottom:1px solid #e1e6ed"><b>${escape(v)}</b></td></tr>`,
        )
        .join('')}
    </table>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: (process.env.LEAD_TO_EMAIL || DEFAULT_LEAD_RECIPIENTS)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    replyTo: data.email,
    subject: `Google Ads / Dubai : ${data.name}`,
    html,
    text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
  });

  if (error) {
    console.error('Audit form: Resend error', error);
    return NextResponse.json({ error: 'We could not send your request. Please try again.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
