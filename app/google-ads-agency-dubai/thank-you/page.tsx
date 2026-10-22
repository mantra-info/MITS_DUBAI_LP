import type { Metadata } from 'next';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { EMAIL, LANDING_PATH, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Thank You | Mantra Infotechs',
  description: 'Your free Google Ads audit request has been received.',
  robots: { index: false, follow: false },
};

const nextSteps = [
  ['We review your details', 'A Google Ads specialist looks at your website and current campaigns.'],
  ['We contact you', 'Expect a WhatsApp message or email within one UAE business day.'],
  ['You get your audit', 'Where budget is wasted, what to fix first and a target cost per lead.'],
];

export default function ThankYou() {
  return (
    <>
      <header className="header wrap">
        <Link href={LANDING_PATH} className="brand" aria-label="MITS home">
          <Logo />
        </Link>
      </header>

      <main className="thank-you wrap">
        <div className="thank-you-card">
          <span className="thank-you-icon" aria-hidden="true">
            ✓
          </span>
          <span className="eyebrow">REQUEST RECEIVED</span>
          <h1>
            Thank you.
            <br />
            Your audit is <em>on its way.</em>
          </h1>
          <p className="intro">
            We have received your free Google Ads audit request. Our team will review your business and get back to
            you shortly.
          </p>

          <ol className="thank-you-steps">
            {nextSteps.map(([title, text], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="thank-you-actions">
            <a className="btn" href={WHATSAPP_URL} target="_blank" rel="noopener">
              Chat on WhatsApp <span>↗</span>
            </a>
            <Link className="btn outline" href={LANDING_PATH}>
              Back to home
            </Link>
          </div>

          <p className="fine">
            Need to add something? Call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> or email{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </main>
    </>
  );
}
