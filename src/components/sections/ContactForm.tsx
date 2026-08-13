'use client';

import React, { useState, useId } from 'react';
import Translate from '@/components/ui/Translate';
import { usePostHog } from 'posthog-js/react';

// ── Types ──────────────────────────────────────────────────────────────────
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormData {
  name: string;
  email: string;
  inquiry: string;
  message: string;
}

const INQUIRY_OPTIONS = [
  { value: 'sales',       en: 'Sales Enquiry',      ar: 'استفسار مبيعات' },
  { value: 'support',     en: 'Technical Support',  ar: 'الدعم الفني' },
  { value: 'partnership', en: 'Partnership',         ar: 'شراكة استراتيجية' },
  { value: 'media',       en: 'Media & Press',       ar: 'الإعلام والصحافة' },
  { value: 'other',       en: 'Other',               ar: 'أخرى' },
];

// ── Shared Input Style ──────────────────────────────────────────────────────
// DESIGN.md: rounded-md radius, brand-accent, brand-secondary surface
const baseInput = [
  'w-full',
  'bg-brand-secondary',
  'border border-brand-secondary',
  'text-text-primary',
  'px-4 py-3',
  'font-enBody text-sm',
  'placeholder:text-text-secondary/40',
  'outline-none',
  'transition-all duration-200',
  // Focus: Electric Cyan border + left accent bar (LTR) / right bar (RTL)
  'focus:border-brand-accent',
  'focus:shadow-[inset_3px_0_0_theme(colors.brand.accent)]',
  'rtl:focus:shadow-[inset_-3px_0_0_theme(colors.brand.accent)]',
  'hover:border-text-secondary/60',
  // Invalid state
  'aria-[invalid=true]:border-red-500/60',
  'min-h-[44px]',
  'rounded-md',
].join(' ');

const labelClass =
  'block text-[11px] font-enHeading uppercase tracking-[0.15em] text-text-secondary mb-1.5';

export default function ContactForm() {
  const uid    = useId();
  const posthog = usePostHog();
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [data, setData]     = useState<ContactFormData>({ name: '', email: '', inquiry: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const e: Partial<ContactFormData> = {};
    if (!data.name.trim())     e.name    = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Valid email required';
    if (!data.inquiry)         e.inquiry  = 'Required';
    if (!data.message.trim() || data.message.trim().length < 10) e.message = 'At least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setData(d => ({ ...d, [field]: e.target.value }));
      if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'contact_form',
          ...data
        })
      });
      posthog?.capture('form_submission', { form_id: 'contact_form', inquiry_type: data.inquiry });
      setStatus('success');
    } catch (error) {
      console.error('Submission failed', error);
      setStatus('error');
    }
  };

  // ── Success State ─────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="min-h-[340px] flex flex-col items-center justify-center text-center gap-6 py-12 px-8"
      >
        {/* Checkmark in circle — DESIGN.md geometric language, borderless */}
        <div
          className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent"
          aria-hidden="true"
        >
          <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
            <polyline
              points="2 11 10 19 26 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-enHeading text-brand-accent mb-2">
            <Translate en="Message Received." ar="تم استلام رسالتك." />
          </h3>
          <p className="text-text-secondary max-w-xs mx-auto">
            <Translate
              en="Our team will respond within one business day."
              ar="سيتواصل معك فريقنا خلال يوم عمل واحد."
            />
          </p>
        </div>
        <button
          onClick={() => { setStatus('idle'); setData({ name: '', email: '', inquiry: '', message: '' }); }}
          className="text-[11px] font-enHeading uppercase tracking-[0.15em] text-text-secondary hover:text-brand-accent transition-colors underline-offset-4 hover:underline"
        >
          <Translate en="Send Another Message" ar="إرسال رسالة أخرى" />
        </button>
      </div>
    );
  }

  return (
    <form
      id={`${uid}-contact-form`}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-5"
    >

      {/* ── Name + Email ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>
            <Translate en="Full Name *" ar="الاسم الكامل *" />
          </label>
          <input
            id={`${uid}-name`}
            type="text"
            autoComplete="name"
            required
            placeholder="Ahmed Al-Rashid"
            value={data.name}
            onChange={handleChange('name')}
            className={baseInput}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} role="alert" className="text-[10px] text-red-400 mt-1 font-enHeading uppercase tracking-widest">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>
            <Translate en="Work Email *" ar="البريد المهني *" />
          </label>
          <input
            id={`${uid}-email`}
            type="email"
            autoComplete="email"
            required
            placeholder="ahmed@company.eg"
            value={data.email}
            onChange={handleChange('email')}
            className={baseInput}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
          />
          {errors.email && (
            <p id={`${uid}-email-err`} role="alert" className="text-[10px] text-red-400 mt-1 font-enHeading uppercase tracking-widest">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* ── Inquiry Type ────────────────────────────────────────────── */}
      <div>
        <label htmlFor={`${uid}-inquiry`} className={labelClass}>
          <Translate en="Inquiry Type *" ar="نوع الاستفسار *" />
        </label>
        <div className="relative">
          <select
            id={`${uid}-inquiry`}
            required
            value={data.inquiry}
            onChange={handleChange('inquiry')}
            className={`${baseInput} appearance-none cursor-pointer`}
            aria-required="true"
            aria-invalid={errors.inquiry ? 'true' : 'false'}
            aria-describedby={errors.inquiry ? `${uid}-inquiry-err` : undefined}
          >
            <option value="" disabled>
              <Translate en="Select a topic..." ar="اختر موضوعاً..." />
            </option>
            {INQUIRY_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.en}</option>
            ))}
          </select>
          {/* Chevron icon — no Lucide, pure SVG geometric */}
          <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none text-text-secondary" aria-hidden="true">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <polyline points="1 1 6 7 11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {errors.inquiry && (
          <p id={`${uid}-inquiry-err`} role="alert" className="text-[10px] text-red-400 mt-1 font-enHeading uppercase tracking-widest">
            {errors.inquiry}
          </p>
        )}
      </div>

      {/* ── Message ─────────────────────────────────────────────────── */}
      <div>
        <label htmlFor={`${uid}-message`} className={labelClass}>
          <Translate en="Message *" ar="الرسالة *" />
        </label>
        <textarea
          id={`${uid}-message`}
          required
          rows={6}
          placeholder="Describe your inquiry or how we can help..."
          value={data.message}
          onChange={handleChange('message')}
          className={`${baseInput} resize-y min-h-[120px]`}
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? `${uid}-message-err` : undefined}
        />
        {errors.message && (
          <p id={`${uid}-message-err`} role="alert" className="text-[10px] text-red-400 mt-1 font-enHeading uppercase tracking-widest">
            {errors.message}
          </p>
        )}
      </div>

      {/* ── Submit ──────────────────────────────────────────────────── */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={[
            'inline-flex items-center justify-center gap-3',
            'px-8 py-4 min-h-[44px]',
            'bg-brand-accent text-brand-on-accent',
            'font-enHeading text-xs uppercase tracking-[0.15em]',
            'border-2 border-brand-accent',
            'transition-all duration-200',
            'hover:bg-brand-accent-hover hover:border-brand-accent-hover',
            'hover:shadow-glow-accent-sm',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            'rounded-md',
          ].join(' ')}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              {/* Animated loading dot pattern */}
              <span className="flex gap-1" aria-hidden="true">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-brand-on-accent"
                    style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
                  />
                ))}
              </span>
              <Translate en="Sending..." ar="جاري الإرسال..." />
            </>
          ) : (
            <>
              <Translate en="Send Message" ar="إرسال الرسالة" />
              {/* Geometric arrow — no consumer icon libs */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>

      <p className="text-[10px] font-enHeading uppercase tracking-[0.1em] text-text-secondary/50">
        <Translate en="We typically respond within 24 hours on business days." ar="نستجيب عادةً خلال 24 ساعة في أيام العمل." />
      </p>
    </form>
  );
}
