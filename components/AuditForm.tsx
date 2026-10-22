'use client';

import { useState, type FocusEvent, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { countries } from '@/lib/countries';
import { BUDGETS, validateAudit, validateField, type AuditErrors, type AuditFields } from '@/lib/validation';
import { ModalButton } from './InfoModal';

const FIELD_ORDER: (keyof AuditFields)[] = ['name', 'code', 'phone', 'email', 'website'];

export default function AuditForm({ id }: { id: string }) {
  const router = useRouter();
  const [errors, setErrors] = useState<AuditErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const readForm = (form: HTMLFormElement): AuditFields => {
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? '');
    return {
      name: get('name'),
      code: get('code'),
      phone: get('phone'),
      email: get('email'),
      website: get('website'),
      budget: get('budget'),
    };
  };

  const setFieldError = (name: keyof AuditFields, value: string) =>
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof AuditFields;
    if (e.target.value.trim() || errors[name]) setFieldError(name, e.target.value);
  };

  // Once a field shows an error, clear it as soon as the input becomes valid.
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name as keyof AuditFields;
    if (errors[name]) setFieldError(name, e.currentTarget.value);
  };

  const focusFirstError = (form: HTMLFormElement, found: AuditErrors) => {
    const first = FIELD_ORDER.find((key) => found[key]);
    if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget;
    const fields = readForm(form);

    const found = validateAudit(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('idle');
      setMessage('');
      focusFirstError(form, found);
      return;
    }

    setStatus('sending');
    setMessage('');
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, company: String(new FormData(form).get('company') ?? '') }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (result.errors) {
          setErrors(result.errors);
          focusFirstError(form, result.errors);
        }
        throw new Error(result.error);
      }
      const w = window as typeof window & { dataLayer?: Record<string, unknown>[] };
      (w.dataLayer ||= []).push({ event: 'generate_lead', form_id: id, budget: fields.budget || 'Not specified' });
      router.push('/thank-you');
    } catch (err) {
      setStatus('error');
      setMessage(
        (err instanceof Error && err.message) || 'Something went wrong. Please try again or contact us on WhatsApp.',
      );
    }
  };

  const fieldProps = (name: keyof AuditFields) => ({
    name,
    onBlur: handleBlur,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${id}-${name}-error` : undefined,
  });

  const errorText = (name: keyof AuditFields) =>
    errors[name] && (
      <span className="field-error" id={`${id}-${name}-error`}>
        {errors[name]}
      </span>
    );

  return (
    <form className="audit-form" id={id} onSubmit={handleSubmit} noValidate>
      <div className="form-top">
        <span className="eyebrow">YOUR NEXT GROWTH OPPORTUNITY</span>
        <h2>
          Get your free
          <br />
          Google Ads audit.
        </h2>
        <p>Tell us about your business. No obligation.</p>
      </div>
      <div className="fields">
        <label>
          Full name *
          <input
            {...fieldProps('name')}
            autoComplete="name"
            placeholder="Your full name"
            maxLength={80}
            required
            onInput={handleInput}
          />
          {errorText('name')}
        </label>
        <label>
          WhatsApp number *
          <div className="phone">
            <select {...fieldProps('code')} aria-label="Country and calling code" defaultValue="AE">
              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              {...fieldProps('phone')}
              type="tel"
              inputMode="tel"
              aria-label="WhatsApp number"
              autoComplete="tel-national"
              placeholder="50 123 4567"
              maxLength={20}
              required
              onInput={handleInput}
            />
          </div>
          {errorText('code')}
          {errorText('phone')}
        </label>
        <label>
          Business email *
          <input
            {...fieldProps('email')}
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            maxLength={254}
            required
            onInput={handleInput}
          />
          {errorText('email')}
        </label>
        <label>
          Website *
          <input
            {...fieldProps('website')}
            inputMode="url"
            placeholder="yourcompany.com"
            autoComplete="url"
            maxLength={200}
            required
            onInput={handleInput}
          />
          {errorText('website')}
        </label>
        <label className="hp" aria-hidden="true">
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <fieldset>
        <legend>
          Monthly Google Ads budget <small>(optional)</small>
        </legend>
        <div className="budgets">
          {BUDGETS.map((b) => (
            <label key={b}>
              <input type="radio" name="budget" value={b} />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button className="btn full" type="submit" disabled={status === 'sending'} aria-busy={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get My Free Audit'} <span>↗</span>
      </button>
      <p className="fine">
        Your details stay private. <ModalButton kind="privacy">Privacy information</ModalButton>
      </p>
      <p className={`form-message${status === 'error' ? ' error' : ''}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
