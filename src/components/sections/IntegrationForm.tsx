'use client';

import React, { useState, useId } from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import SectionBadge from '@/components/ui/SectionBadge';
import { PrimaryButton } from '@/components/ui/Buttons';

type FieldState = 'idle' | 'success' | 'error';

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  spaces: string;
}

const ROLES = [
  { value: '', label: { en: 'Select your role', ar: 'اختر منصبك' } },
  { value: 'developer', label: { en: 'Real Estate Developer', ar: 'مطور عقاري' } },
  { value: 'operator',  label: { en: 'Parking Operator',      ar: 'مشغّل موقف' } },
  { value: 'municipal', label: { en: 'Municipality / Gov.',   ar: 'جهة حكومية' } },
  { value: 'consultant', label: { en: 'Consultant / Advisor', ar: 'استشاري' } },
  { value: 'other',     label: { en: 'Other',                 ar: 'أخرى' } },
];

export default function IntegrationForm() {
  const formId = useId();
  const [state, setState]   = useState<FieldState>('idle');
  const [data, setData]     = useState<FormData>({ name: '', company: '', role: '', email: '', phone: '', spaces: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const inputClass = (field: keyof FormData) => [
    'w-full bg-brand-secondary border px-4 py-3 text-text-primary font-enBody text-sm rounded-md',
    'placeholder:text-text-secondary/50',
    'focus:outline-none focus:border-brand-accent focus:shadow-[inset_3px_0_0_theme(colors.brand.accent)]',
    'transition-all duration-200',
    errors[field] ? 'border-red-500/60' : 'border-brand-secondary hover:border-text-secondary/60',
  ].join(' ');

  const labelClass = 'block text-[11px] font-enHeading uppercase tracking-[0.15em] text-text-secondary mb-1.5';

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!data.name.trim())    e.name    = 'Required';
    if (!data.company.trim()) e.company = 'Required';
    if (!data.role)           e.role    = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Valid email required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((d) => ({ ...d, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Simulate async submission (replace with real API call)
    await new Promise((r) => setTimeout(r, 900));
    setState('success');
  };

  return (
    <section id="integration" className="py-24 relative border-t border-brand-secondary overflow-hidden" aria-labelledby="form-heading">

      {/* Ambient glow */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-brand-accent/20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(100,255,218,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left — value proposition ─────────────────────────────── */}
          <Reveal direction="up" delay={0.05}>
            <div>
              <SectionBadge en="Get Started" ar="ابدأ الآن" variant="active" />
              <h2 id="form-heading" className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
                <Translate
                  en="Ready to unlock your parking revenue?"
                  ar="هل أنت مستعد لإطلاق إيرادات مواقفك؟"
                />
              </h2>
              <p className="text-base text-text-secondary mb-10 max-w-md">
                <Translate
                  en="Connect with the team. We'll scope your integration and deliver a proposal within 48 hours — no commitment required."
                  ar="تواصل مع الفريق. سنحدد نطاق تكاملك ونقدم اقتراحاً خلال 48 ساعة — دون أي التزام."
                />
              </p>

              {/* What to expect */}
              <div className="flex flex-col gap-5">
                {[
                  { en: '48-hour response SLA', ar: 'رد خلال 48 ساعة' },
                  { en: 'Free integration assessment', ar: 'تقييم تكامل مجاني' },
                  { en: 'No hardware commitment', ar: 'لا التزام بمعدات' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className="w-5 h-5 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0 text-brand-accent" aria-hidden="true">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <polyline points="1 4 4 7 9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <Translate en={item.en} ar={item.ar} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Right — form ─────────────────────────────────────────── */}
          <Reveal direction="up" delay={0.12}>
            <div className="border border-brand-accent/40 bg-brand-secondary/50 p-8 relative rounded-md shadow-glow-accent">
              {/* Cyan top bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-accent rounded-t-md" aria-hidden="true" />

              {state === 'success' ? (
                /* Success state */
                <div className="min-h-[400px] flex flex-col items-center justify-center text-center gap-6 py-12">
                  <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent" aria-hidden="true">
                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                      <polyline points="2 11 10 19 26 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-enHeading text-brand-accent">
                    <Translate en="Request Received." ar="تم استلام طلبك." />
                  </h3>
                  <p className="text-text-secondary max-w-sm">
                    <Translate
                      en="Our integration team will reach out within 48 hours to scope your facility."
                      ar="سيتواصل معك فريق التكامل خلال 48 ساعة لدراسة منشأتك."
                    />
                  </p>
                </div>
              ) : (
                <form
                  id={`${formId}-form`}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-describedby={`${formId}-desc`}
                  className="flex flex-col gap-5"
                >
                  <p id={`${formId}-desc`} className="text-[11px] font-enHeading uppercase tracking-[0.15em] text-text-secondary mb-2">
                    <Translate en="Integration Assessment Request" ar="طلب تقييم التكامل" />
                  </p>

                  {/* Name */}
                  <div>
                    <label htmlFor={`${formId}-name`} className={labelClass}>
                      <Translate en="Full Name *" ar="الاسم الكامل *" />
                    </label>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Ahmed Al-Rashid"
                      value={data.name}
                      onChange={handleChange('name')}
                      className={inputClass('name')}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${formId}-name-err` : undefined}
                    />
                    {errors.name && (
                      <p id={`${formId}-name-err`} role="alert" className="text-[10px] text-red-400 mt-1 font-enHeading uppercase tracking-widest">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Company + Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={`${formId}-company`} className={labelClass}>
                        <Translate en="Company *" ar="اسم الشركة *" />
                      </label>
                      <input
                        id={`${formId}-company`}
                        type="text"
                        autoComplete="organization"
                        required
                        placeholder="SODIC Group"
                        value={data.company}
                        onChange={handleChange('company')}
                        className={inputClass('company')}
                        aria-required="true"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? `${formId}-company-err` : undefined}
                      />
                      {errors.company && (
                        <p id={`${formId}-company-err`} role="alert" className="text-[10px] text-red-400 mt-1 font-enHeading uppercase tracking-widest">
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={`${formId}-role`} className={labelClass}>
                        <Translate en="Your Role *" ar="منصبك *" />
                      </label>
                      <select
                        id={`${formId}-role`}
                        required
                        value={data.role}
                        onChange={handleChange('role')}
                        className={`${inputClass('role')} appearance-none cursor-pointer`}
                        aria-required="true"
                        aria-invalid={!!errors.role}
                      >
                        {ROLES.map((r) => (
                          <option key={r.value} value={r.value} disabled={r.value === ''}>
                            {r.label.en}
                          </option>
                        ))}
                      </select>
                      {errors.role && (
                        <p id={`${formId}-role-err`} role="alert" className="text-[10px] text-red-400 mt-1 font-enHeading uppercase tracking-widest">
                          {errors.role}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={`${formId}-email`} className={labelClass}>
                        <Translate en="Work Email *" ar="البريد المهني *" />
                      </label>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="ahmed@company.eg"
                        value={data.email}
                        onChange={handleChange('email')}
                        className={inputClass('email')}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                      />
                      {errors.email && (
                        <p id={`${formId}-email-err`} role="alert" className="text-[10px] text-red-400 mt-1 font-enHeading uppercase tracking-widest">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={`${formId}-phone`} className={labelClass}>
                        <Translate en="Phone (Optional)" ar="رقم الهاتف (اختياري)" />
                      </label>
                      <input
                        id={`${formId}-phone`}
                        type="tel"
                        autoComplete="tel"
                        placeholder="+20 10 0000 0000"
                        value={data.phone}
                        onChange={handleChange('phone')}
                        className={inputClass('phone')}
                      />
                    </div>
                  </div>

                  {/* Facility size */}
                  <div>
                    <label htmlFor={`${formId}-spaces`} className={labelClass}>
                      <Translate en="Approx. Parking Spaces in Your Facility" ar="عدد مواقف المنشأة التقريبي" />
                    </label>
                    <input
                      id={`${formId}-spaces`}
                      type="number"
                      min="1"
                      placeholder="e.g. 250"
                      value={data.spaces}
                      onChange={handleChange('spaces')}
                      className={inputClass('spaces')}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <PrimaryButton
                      type="submit"
                      en="Request Integration Assessment"
                      ar="طلب تقييم التكامل"
                      aria-describedby={`${formId}-desc`}
                      className="w-full justify-center py-4"
                    />
                  </div>

                  <p className="text-[10px] text-text-secondary/50 font-enHeading uppercase tracking-[0.1em] text-center">
                    <Translate en="No commitment required · Response within 48h" ar="بدون التزام · رد خلال 48 ساعة" />
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
