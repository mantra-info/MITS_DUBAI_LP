export const SITE_URL = 'https://ads.mantrainfotechs.com';
export const LANDING_PATH = '/google-ads-agency-dubai';

export const WHATSAPP_NUMBER = '919249089264';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MITS%2C%20I%27m%20interested%20in%20Google%20Ads%20for%20my%20Dubai%20business.`;
export const PHONE_DISPLAY = '+91 92490 89264';
export const PHONE_HREF = 'tel:+919249089264';
export const EMAIL = 'sales@mantraitsolutions.in';

export const MODAL_CONTENT = {
  privacy: {
    title: 'Privacy information',
    body: 'When you submit the audit form, your name, WhatsApp number, email, website and optional budget are sent by email to the Mantra Infotechs sales team so we can prepare your audit and contact you. We use these details only to respond to your enquiry. For enquiries about your information, email sales@mantraitsolutions.in.',
  },
  terms: {
    title: 'Website terms',
    body: 'This website introduces the Google Ads services of Mantra Infotechs. An enquiry does not create a purchase or contract. Campaign outcomes depend on your market, offer and budget. Service scope, pricing and contractual terms are provided with your proposal.',
  },
} as const;

export type ModalKind = keyof typeof MODAL_CONTENT;
