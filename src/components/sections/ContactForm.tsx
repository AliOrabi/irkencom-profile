'use client';

import React, { useState, useId } from 'react';
import Translate from '@/components/ui/Translate';
import { usePostHog } from 'posthog-js/react';
import { Check, ArrowRight, Loader2 } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormData {
  name: string;
  email: string;
  inquiry: string;
  message: string;
}

const INQUIRY_OPTIONS = [
  { value: 'sales',       en: 'Facility Monetization / Sales', ar: 'تسييل مواقف المنشآت / المبيعات' },
  { value: 'support',     en: 'Technical Integration Support', ar: 'الدعم الفني والربط البرمجي' },
  { value: 'partnership', en: 'Strategic Partnership',         ar: 'شراكة استراتيجية' },
  { value: 'media',       en: 'Media & Press',                 ar: 'الإعلام والصحافة' },
  { value: 'other',       en: 'Other Inquiry',                 ar: 'استفسار آخر' },
];

export default function ContactForm() {
  const uid = useId();
  const posthog = usePostHog();
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [data, setData]     = useState<ContactFormData>({ name: '', email: '', inquiry: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const e: Partial<ContactFormData> = {};
    if (!data.name.trim())     e.name    = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Valid work email required';
    if (!data.inquiry)         e.inquiry  = 'Please select an inquiry type';
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
        className="min-h-[380px] flex flex-col items-center justify-center text-center gap-6 py-12 px-8"
      >
        <div
          className="w-16 h-16 bg-brand-accent/15 border border-brand-accent/30 rounded-full flex items-center justify-center text-brand-accent shadow-sm"
          aria-hidden="true"
        >
          <Check className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold font-enHeading text-slate-900 mb-2">
            <Translate en="Message Received." ar="تم استلام رسالتك بنجاح." />
          </h3>
          <p className="text-slate-600 max-w-xs mx-auto text-sm leading-relaxed">
            <Translate
              en="Our enterprise solutions team will review your inquiry and respond within 24 hours."
              ar="سيقوم فريق الحلول لدينا بمراجعة طلبك والرد خلال 24 ساعة."
            />
          </p>
        </div>
        <button
          onClick={() => { setStatus('idle'); setData({ name: '', email: '', inquiry: '', message: '' }); }}
          className="text-xs font-enHeading font-bold uppercase tracking-[0.14em] text-brand-accent hover:underline cursor-pointer"
        >
          <Translate en="Send Another Message" ar="إرسال رسالة أخرى" />
        </button>
      </div>
    );
  }

  const baseInputStyle = "w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 text-sm rounded-2xl outline-none transition-all duration-200 focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 placeholder:text-slate-400";
  const labelStyle = "block text-xs font-enHeading font-semibold uppercase tracking-wider text-slate-700 mb-2";

  return (
    <form
      id={`${uid}-contact-form`}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-6"
    >
      {/* ── Name + Email ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor={`${uid}-name`} className={labelStyle}>
            <Translate en="Full Name *" ar="الاسم الكامل *" />
          </label>
          <input
            id={`${uid}-name`}
            type="text"
            autoComplete="name"
            required
            placeholder="e.g. Ahmed Al-Rashid"
            value={data.name}
            onChange={handleChange('name')}
            className={baseInputStyle}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} role="alert" className="text-xs text-rose-500 mt-1.5 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor={`${uid}-email`} className={labelStyle}>
            <Translate en="Work Email *" ar="البريد المهني *" />
          </label>
          <input
            id={`${uid}-email`}
            type="email"
            autoComplete="email"
            required
            placeholder="e.g. name@company.eg"
            value={data.email}
            onChange={handleChange('email')}
            className={baseInputStyle}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
          />
          {errors.email && (
            <p id={`${uid}-email-err`} role="alert" className="text-xs text-rose-500 mt-1.5 font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* ── Inquiry Type ────────────────────────────────────────────── */}
      <div>
        <label htmlFor={`${uid}-inquiry`} className={labelStyle}>
          <Translate en="Inquiry Type *" ar="نوع الاستفسار *" />
        </label>
        <div className="relative">
          <select
            id={`${uid}-inquiry`}
            required
            value={data.inquiry}
            onChange={handleChange('inquiry')}
            className={`${baseInputStyle} appearance-none cursor-pointer`}
            aria-required="true"
            aria-invalid={errors.inquiry ? 'true' : 'false'}
            aria-describedby={errors.inquiry ? `${uid}-inquiry-err` : undefined}
          >
            <option value="" disabled>
              Select an inquiry type...
            </option>
            {INQUIRY_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.en}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none text-slate-400" aria-hidden="true">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <polyline points="1 1 6 7 11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {errors.inquiry && (
          <p id={`${uid}-inquiry-err`} role="alert" className="text-xs text-rose-500 mt-1.5 font-medium">
            {errors.inquiry}
          </p>
        )}
      </div>

      {/* ── Message ─────────────────────────────────────────────────── */}
      <div>
        <label htmlFor={`${uid}-message`} className={labelStyle}>
          <Translate en="Message *" ar="الرسالة *" />
        </label>
        <textarea
          id={`${uid}-message`}
          required
          rows={5}
          placeholder="Describe your facility, approximate parking spaces, or project requirements..."
          value={data.message}
          onChange={handleChange('message')}
          className={`${baseInputStyle} resize-y min-h-[120px]`}
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? `${uid}-message-err` : undefined}
        />
        {errors.message && (
          <p id={`${uid}-message-err`} role="alert" className="text-xs text-rose-500 mt-1.5 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* ── Submit Button ───────────────────────────────────────────── */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold font-enHeading text-xs uppercase tracking-[0.14em] rounded-full transition-all duration-200 hover:shadow-md cursor-pointer disabled:opacity-50 select-none"
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <Translate en="Submitting..." ar="جاري الإرسال..." />
            </>
          ) : (
            <>
              <Translate en="Send Message" ar="إرسال الرسالة" />
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-slate-400 font-medium">
        <Translate en="We respect your privacy. No spam guaranteed." ar="نحترم خصوصيتك. لن نرسل لك أي رسائل غير مرغوب فيها." />
      </p>
    </form>
  );
}
