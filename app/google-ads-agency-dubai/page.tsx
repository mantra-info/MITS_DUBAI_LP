/* eslint-disable @next/next/no-img-element */
import AuditForm from '@/components/AuditForm';
import { ModalButton, ModalProvider } from '@/components/InfoModal';
import Logo from '@/components/Logo';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from '@/lib/site';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

const pains = [
  ['Clicks that never become enquiries', 'We review search terms every week and block the ones that waste your spend.'],
  ['Leads you cannot trace', 'We track form fills, WhatsApp clicks and calls, so you see which keywords bring real enquiries.'],
  ['Reports nobody understands', 'Monthly reports show leads, cost per lead and what we changed. No jargon.'],
];

const services = [
  {
    title: 'Google Search Ads',
    text: 'Show up when Dubai buyers search for what you sell, with ads tied to high-intent keywords.',
    icon: (
      <svg {...iconProps}>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6" />
      </svg>
    ),
  },
  {
    title: 'Performance Max',
    text: 'One goal-based campaign that reaches buyers across Search, YouTube, Maps and more.',
    icon: (
      <svg {...iconProps}>
        <path d="m13 2-8 12h6l-1 8 9-13h-6z" />
      </svg>
    ),
  },
  {
    title: 'Shopping Ads',
    text: 'Show products and prices to shoppers who are ready to buy.',
    icon: (
      <svg {...iconProps}>
        <path d="M5 7h14l2 14H3L5 7Z" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    title: 'Remarketing',
    text: 'Bring back visitors who did not enquire the first time.',
    icon: (
      <svg {...iconProps}>
        <path d="M20 8a9 9 0 1 0 1 7M20 3v6h-6" />
      </svg>
    ),
  },
  {
    title: 'Conversion Tracking',
    text: 'Track form fills, calls and WhatsApp clicks so you see cost per lead by keyword.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18M7 15l4-4 4 2 6-8" />
        <circle cx="11" cy="11" r="1" />
      </svg>
    ),
  },
];

const industries = [
  {
    img: 'ecommerce.webp',
    alt: 'Small business owner serving a customer',
    title: 'Small & medium businesses',
    text: 'Reach nearby customers searching for your services, and turn high-intent clicks into calls and enquiries.',
  },
  {
    img: 'clinic.webp',
    alt: 'Doctor with a stethoscope in a clinical setting',
    title: 'Clinics and healthcare',
    text: 'Turn local searches for treatments into booked appointments.',
  },
  {
    img: 'business.webp',
    alt: 'Business professionals collaborating on laptops',
    title: 'B2B services',
    text: 'Reach decision makers who are searching for a supplier, and filter for qualified enquiries.',
  },
  {
    img: 'fulfilment.webp',
    alt: 'Warehouse shelves for ecommerce order fulfilment',
    title: 'Ecommerce',
    text: 'Reach ready-to-buy shoppers with Search, Shopping and Performance Max campaigns built around your sales goals.',
  },
];

const steps = [
  ['Understand', 'We learn your offer, customers and lead targets.'],
  ['Strategise', 'We choose keywords, budget and a target cost per lead.'],
  ['Execute', 'We build campaigns, ads, landing pages and tracking.'],
  ['Optimise', 'We review search terms and results every week.'],
  ['Scale', 'We move more budget into what brings leads.'],
];

const measurements = [
  ['SMBs', 'Calls & enquiries', 'Understand which campaigns bring customers to your business and what each enquiry costs.'],
  ['CLINICS & HEALTHCARE', 'Appointment enquiries', 'Measure treatment enquiries and the cost of reaching prospective patients.'],
  ['B2B SERVICES', 'Qualified opportunities', 'Connect campaign performance with enquiries from relevant decision makers.'],
  ['ECOMMERCE', 'Sales & revenue', 'Track purchases and return on ad spend to understand which products and campaigns perform.'],
];

const promises = [
  ['Easy to reach', 'Direct WhatsApp support and calls scheduled during your UAE working day.'],
  ['Clear performance reporting', 'Understand your spend, leads and cost per lead in your account currency.'],
  ['Transparent scope and pricing', 'We recommend ad spend and quote our management fee separately after the audit.'],
];

const reviews = [
  {
    quote: 'Our traffic, engagement, and conversions have soared! Highly recommended.',
    name: 'Dr Joseph Sunny',
    role: 'Director, Praytana',
  },
  {
    quote: 'MITS took our mission and turned it into a movement. Smart strategies, great results!',
    name: 'Rahul',
    role: 'MD, TomLukes',
  },
  {
    quote:
      'We wanted results, and MITS delivered! They took our brand story and turned it into a powerful digital presence. Plus, their team is always up for a challenge, making them the perfect partners for our journey!',
    name: 'Ganesh Venkitchalam',
    role: 'MD, Rayenna Energy',
  },
];

const logos = [
  { img: 'oppo.webp', alt: 'Oppo' },
  { img: 'vivo.webp', alt: 'Vivo' },
  { img: 'benchmark.webp', alt: 'Benchmark Attestation Services', className: 'benchmark-logo' },
  { img: 'amity-university.webp', alt: 'Amity University Rajasthan' },
];

const faqs = [
  ['How much does Google Ads cost in Dubai?', 'The right budget depends on your industry, competition and goal. We recommend an advertising budget after your free audit and quote the management fee separately.'],
  ['What does a Google Ads agency in Dubai do?', 'A Google Ads agency plans keywords, writes ads, sets up conversion tracking, manages bids and budgets, and reports on leads. Mantra Infotechs does this as a Google Partner agency, with weekly optimisation.'],
  ['How quickly can Google Ads generate leads?', 'Search ads can start sending enquiries within days of launch, because people are already searching. Cost per lead usually improves over the first few weeks as we remove wasted searches and test ads.'],
  ['What is performance marketing?', 'Performance marketing judges every campaign by results you can measure, such as leads, calls and sales. Google Ads is our main channel for it, and we report on cost per lead.'],
  ['Do you manage Performance Max and Shopping campaigns?', 'Yes. We run Google Search, Performance Max, Shopping and remarketing campaigns. We set up conversion tracking first, so every campaign can be measured.'],
  ['Do you run Arabic or English campaigns?', 'Google Ads supports both. We start with the language most of your customers search in, then test the other once there is data.'],
  ['How do you reduce wasted Google Ads spend?', 'We review search terms weekly, add negative keywords and track conversions, so budget moves to what brings leads.'],
  ['What do I get in the free audit?', 'A review of your account structure, tracking and keywords, the main places budget is wasted, and a plan with a target cost per lead.'],
];

export default function Home() {
  return (
    <ModalProvider>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header wrap">
        <a href="#" className="brand" aria-label="MITS home">
          <Logo />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Our expertise</a>
          <a href="#process">Our process</a>
          <a href="#reviews">Client stories</a>
        </nav>
        <a className="btn small" href="#hero-audit">
          Get a Free Audit <span>↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="tag">
              <span></span> GOOGLE PARTNER AGENCY · DUBAI &amp; UAE
            </div>
            <h1>
              Google Ads agency <br />
              for <em>Dubai</em>
              <br />
              businesses.
            </h1>
            <p className="lead">
              More qualified leads.
              <br />
              Every dirham accountable.
            </p>
            <p className="intro">
              Mantra Infotechs is a Google Partner agency. We run Google Ads and performance marketing campaigns
              built around your cost per lead, with every lead tracked from click to enquiry.
            </p>
            <ul className="checks">
              <li>Google Search, Performance Max and Shopping campaigns built around your cost per lead</li>
              <li>Conversion tracking for forms, calls and WhatsApp set up before launch</li>
              <li>Plain monthly reports: leads, cost per lead and what we changed</li>
            </ul>
            <a className="wa-link" href={WHATSAPP_URL} target="_blank" rel="noopener">
              ◉ &nbsp; Chat on WhatsApp <span>↗</span>
            </a>
            <div className="hero-proof">
              <img src="/assets/partner.svg" alt="Google Partner" />
              <div>
                <b>AED 10M+</b>
                <span>ad spend managed</span>
              </div>
              <div>
                <b>12+</b>
                <span>years of campaign building</span>
              </div>
              <div>
                <b>
                  4.8/5 <i>★★★★★</i>
                </b>
                <span>client satisfaction rate</span>
              </div>
            </div>
          </div>
          <AuditForm id="hero-audit" />
        </section>

        <section className="market opportunity">
          <div className="wrap opportunity-grid">
            <div className="opportunity-copy">
              <span className="eyebrow">THE OPPORTUNITY</span>
              <h2>
                Your next customer
                <br />
                is already searching.
              </h2>
              <p>
                Be there when Dubai customers need what you offer. Connect the right search to a clear offer — and a
                simple way to enquire.
              </p>
              <a className="btn" href="#audit">
                Find My Growth Opportunities ↗
              </a>
              <div className="opportunity-note">For SMBs, clinics, B2B services and online stores.</div>
            </div>
            <div className="search-journey">
              <div className="search-mock">
                <span className="search-icon">⌕</span>
                <span>Find a service near me in Dubai</span>
                <span>↵</span>
              </div>
              <div className="search-ad">
                <span className="ad-tag">Illustrative search ad</span>
                <div className="ad-url">Your business · Dubai</div>
                <h3>
                  The service they need.
                  <br />
                  The business they choose.
                </h3>
                <p>
                  A relevant offer. A clear landing page.
                  <br />A direct route to your team.
                </p>
                <div className="ad-action">
                  Enquire now <span>↗</span>
                </div>
              </div>
              <div className="journey-steps">
                <span>
                  <b>01</b> Get discovered
                </span>
                <span>
                  <b>02</b> Build confidence
                </span>
                <span>
                  <b>03</b> Get enquiries
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="section-top">
            <span className="eyebrow">TURN WASTED SPEND INTO OPPORTUNITY</span>
            <h2>
              Is your Google Ads budget
              <br />
              working as hard as you are?
            </h2>
          </div>
          <div className="grid three pain">
            {pains.map(([title, text], i) => (
              <article className="card" key={title}>
                <span className="num">0{i + 1} /</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="#audit">
            Find where your budget leaks <span>↗</span>
          </a>
        </section>

        <section id="services" className="section soft">
          <div className="wrap">
            <div className="section-top split">
              <div>
                <span className="eyebrow">OUR EXPERTISE</span>
                <h2>
                  One growth goal.
                  <br />
                  The right Google Ads mix.
                </h2>
              </div>
              <p>
                Google Ads management services for lead generation in Dubai. Built around what matters to your
                business.
              </p>
            </div>
            <div className="grid three services">
              {services.map((s) => (
                <article className="card" key={s.title}>
                  <span className="service-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
              <article className="card cta-card">
                <span className="num">LET’S FIND YOUR STARTING POINT</span>
                <h3>
                  Not sure
                  <br />
                  what you need?
                </h3>
                <p>Get a free audit and we will tell you where to start.</p>
                <a className="btn white" href="#audit">
                  Get My Free Audit ↗
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="section-top">
            <span className="eyebrow">BUILT FOR YOUR BUSINESS</span>
            <h2>
              Different industries.
              <br />
              One focus: performance.
            </h2>
            <p>Performance marketing for Dubai’s key industries.</p>
          </div>
          <div className="grid four industries">
            {industries.map((ind) => (
              <article key={ind.title}>
                <div className="industry-photo">
                  <img
                    src={`/assets/${ind.img}`}
                    alt={ind.alt}
                    width={640}
                    height={420}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3>{ind.title}</h3>
                <p>{ind.text}</p>
              </article>
            ))}
          </div>
          <div className="industry-next">
            <p>Let’s find the right campaign for your business.</p>
            <a className="btn" href="#audit">
              Get My Free Audit <span>↗</span>
            </a>
          </div>
        </section>

        <section id="process" className="section soft">
          <div className="wrap">
            <div className="section-top">
              <span className="eyebrow">A CLEAR WAY FORWARD</span>
              <h2>
                From first conversation
                <br />
                to your next growth stage.
              </h2>
              <p>Our Google Ads management process.</p>
            </div>
            <div className="process">
              {steps.map(([title, text], i) => (
                <article key={title}>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benchmarks" className="section wrap">
          <div className="section-top split">
            <div>
              <span className="eyebrow">PERFORMANCE YOU CAN UNDERSTAND</span>
              <h2>
                Know what your
                <br />
                ad spend delivers.
              </h2>
            </div>
            <p>
              We agree the right success measures for your business, then report on the actions that matter to your
              growth.
            </p>
          </div>
          <div className="measurement-grid">
            {measurements.map(([label, title, text]) => (
              <article key={label}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="#audit">
            Get a measurement plan for my business ↗
          </a>
        </section>

        <section className="section agency trust-section">
          <div className="wrap">
            <div className="trust-heading">
              <div>
                <span className="eyebrow">BASED IN KOCHI. COMMITTED TO DUBAI.</span>
                <h2>
                  A real team.
                  <br />A clear plan. <em>Shared goals.</em>
                </h2>
              </div>
              <p>
                Mantra Infotechs brings strategy, campaign management and conversion tracking together — with direct
                communication throughout your campaign.
              </p>
            </div>
            <div className="trust-grid">
              <figure className="trust-photo">
                <img
                  src="/assets/dubai.webp"
                  alt="Dubai Marina waterfront and skyline"
                  width={1200}
                  height={760}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>YOUR MARKET. OUR FOCUS.</span>Serving Dubai businesses
                  <br />
                  from Kochi, India.
                </figcaption>
              </figure>
              <div className="trust-panel">
                <div className="trust-credentials">
                  <img src="/assets/partner.svg" alt="Google Partner" />
                  <div>
                    <b>AED 10M+</b>
                    <span>ad spend managed</span>
                  </div>
                  <div>
                    <b>12+ years</b>
                    <span>of campaign building</span>
                  </div>
                </div>
                <div className="trust-promises">
                  {promises.map(([title, text], i) => (
                    <article key={title}>
                      <span>0{i + 1}</span>
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="trust-contact">
                  <a href={PHONE_HREF}>{PHONE_DISPLAY} ↗</a>
                  <a href={`mailto:${EMAIL}`}>{EMAIL} ↗</a>
                  <span>Infopark, Kakkanad, Kochi, Kerala, India</span>
                </div>
              </div>
            </div>
            <div className="trust-bottom">
              <p>Only 1.5 hours apart. Working towards the same goals.</p>
              <a className="btn" href="#audit">
                Get My Free Audit ↗
              </a>
            </div>
          </div>
        </section>

        <section id="reviews" className="section wrap">
          <div className="section-top split">
            <div>
              <span className="eyebrow">CLIENT STORIES</span>
              <h2>
                Good work.
                <br />
                In their words.
              </h2>
            </div>
            <div>
              <span className="stars">★★★★★</span>
              <p>4.8/5 client satisfaction rate</p>
            </div>
          </div>
          <div className="grid three reviews">
            {reviews.map((r) => (
              <figure className="card" key={r.name}>
                <span className="stars">★★★★★</span>
                <blockquote>“{r.quote}”</blockquote>
                <figcaption>
                  <span className="avatar">{r.name[0]}</span>
                  <div>
                    <b>{r.name}</b>
                    <small>{r.role}</small>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="fine">Client testimonials reproduced from the Mantra Infotechs India landing page.</p>
          <div className="client-logos-section">
            <h3>Businesses we work with</h3>
            <div className="client-logos" aria-label="Client logos">
              {logos.map((l) => (
                <div key={l.img}>
                  <img className={l.className} src={`/assets/${l.img}`} alt={l.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="audit" className="section soft">
          <div className="wrap audit-layout">
            <div>
              <span className="eyebrow">LET’S MAKE YOUR NEXT CLICK COUNT</span>
              <h2>
                Better campaigns
                <br />
                start with a<br />
                <em>clearer picture.</em>
              </h2>
              <p className="intro">Get your free Google Ads audit and strategy proposal.</p>
              <ul className="checks">
                <li>A review of your account structure and tracking</li>
                <li>Where budget is wasted, and which keywords to fix first</li>
                <li>A plan with a target cost per lead</li>
              </ul>
              <div className="booking">
                <span className="calendar-icon">▦</span>
                <h3>Prefer a conversation?</h3>
                <p>Arrange a strategy call during UAE business hours. All times discussed in GST (UTC+4).</p>
                <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  Arrange a call on WhatsApp ↗
                </a>
                <small>Choose a suitable UAE time with our team on WhatsApp.</small>
              </div>
            </div>
            <AuditForm id="audit-form-bottom" />
          </div>
        </section>

        <section id="faq" className="section wrap faq-layout">
          <div>
            <span className="eyebrow">BEFORE WE START</span>
            <h2>
              A few good
              <br />
              questions.
            </h2>
            <p>
              Google Ads questions
              <br />
              Dubai businesses ask.
            </p>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-main">
          <div>
            <a className="brand footer-brand" href="#">
              <Logo />
            </a>
            <p>A Google Ads specialist agency focused on lead generation and measurable campaign performance.</p>
          </div>
          <div>
            <h3>Let’s talk growth.</h3>
            <a href={PHONE_HREF}>{PHONE_DISPLAY} ↗</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL} ↗</a>
          </div>
          <div>
            <h3>From Kochi. For Dubai.</h3>
            <p>
              Kakkanad, Infopark
              <br />
              Kochi, Kerala, India
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">
              Chat on WhatsApp ↗
            </a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 Mantra Infotechs. All rights reserved.</span>
          <div>
            <ModalButton kind="privacy">Privacy</ModalButton>
            <ModalButton kind="terms">Terms</ModalButton>
          </div>
        </div>
      </footer>

      <div className="mobile-sticky">
        <a className="btn outline" href={WHATSAPP_URL} target="_blank" rel="noopener">
          WhatsApp
        </a>
        <a className="btn" href="#hero-audit">
          Get My Free Audit ↗
        </a>
      </div>
    </ModalProvider>
  );
}
