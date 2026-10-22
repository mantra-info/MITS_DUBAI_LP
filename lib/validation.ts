import { countries } from './countries';

export const BUDGETS = ['Under AED 3,000', 'AED 3,000 to 10,000', 'Over AED 10,000', 'Not sure yet'];

export type AuditFields = {
  name: string;
  code: string;
  phone: string;
  email: string;
  website: string;
  budget: string;
};

export type AuditErrors = Partial<Record<keyof AuditFields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u;

export function normaliseWebsite(value: string) {
  const raw = value.trim();
  if (!raw || /\s/.test(raw)) return null;
  try {
    const parsed = new URL(/^https?:\/\//i.test(raw) ? raw : 'https://' + raw);
    const labels = parsed.hostname.split('.');
    if (labels.length < 2 || labels.some((l) => !l) || !/^[a-z]{2,}$/i.test(labels.at(-1)!)) return null;
    return parsed.href;
  } catch {
    return null;
  }
}

export function validateField(name: keyof AuditFields, value: string): string | undefined {
  const v = value.trim();
  switch (name) {
    case 'name':
      if (!v) return 'Please enter your full name.';
      if (v.length < 2 || v.length > 80 || !NAME_RE.test(v)) return 'Please enter a valid name using letters only.';
      return;
    case 'code':
      if (!countries.some((c) => c.value === v)) return 'Please choose your country code.';
      return;
    case 'phone': {
      if (!v) return 'Please enter your WhatsApp number.';
      const digits = v.replace(/\D/g, '');
      if (!/^[+\d\s().-]+$/.test(v) || digits.length < 6 || digits.length > 15)
        return 'Please enter a valid phone number with 6 to 15 digits.';
      return;
    }
    case 'email':
      if (!v) return 'Please enter your business email.';
      if (v.length > 254 || !EMAIL_RE.test(v)) return 'Please enter a valid email, for example name@company.com.';
      return;
    case 'website':
      if (!v) return 'Please enter your business website.';
      if (v.length > 200 || !normaliseWebsite(v)) return 'Please enter a valid website, for example company.com.';
      return;
    case 'budget':
      if (v && !BUDGETS.includes(v)) return 'Please choose a budget from the list.';
      return;
  }
}

export function validateAudit(data: AuditFields): AuditErrors {
  const errors: AuditErrors = {};
  for (const key of Object.keys(data) as (keyof AuditFields)[]) {
    const error = validateField(key, data[key]);
    if (error) errors[key] = error;
  }
  return errors;
}
