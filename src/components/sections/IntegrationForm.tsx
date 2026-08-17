'use client';

import React, { useState, useId } from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { PrimaryButton } from '@/components/ui/Buttons';
import { usePostHog } from 'posthog-js/react';
import { CheckCircle2, Clock, ShieldCheck, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type FieldState = 'idle' | 'submitting' | 'success' | 'error';

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
  const posthog = usePostHog();
  const [state, setState]   = useState<FieldState>('idle');
  const [data, setData]     = useState<FormData>({ name: '', company: '', role: '', email: '', phone: '', spaces: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const inputClass = (field: keyof FormData) => cn(
    'w-full bg-slate-50 border text-slate-900 font-enBody text-sm rounded-xl px-4 py-3.5',
    'placeholder:text-slate-400',
    'focus:bg-white focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20',
    'transition-all duration-200',
    errors[field] ? 'border-red-500 bg-red-50/30' : 'border-slate-200 hover:border-slate-300'
  );

  const labelClass = 'block text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700 mb-2';

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!data.name.trim())    e.name    = 'Name is required';
    if (!data.company.trim()) e.company = 'Company name is required';
    if (!data.role)           e.role    = 'Please select a role';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Valid work email required';
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

    setState('submitting');
    try {
      const res = await fetch('/api/integration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        posthog?.capture('form_submission', { form_id: 'integration_form', role: data.role });
        setState('success');
        return;
      }

      const json = await res.json().catch(() => ({}));

      if (res.status === 422 && json.fields) {
        setErrors(json.fields as Partial<FormData>);
        setState('idle');
        return;
      }

      setState('error');
    } catch {
      setState('error');
    }
  };

  return (
    <section id="integration" className="py-28 relative bg-white border-t border-slate-100 overflow-hidden" aria-labelledby="form-heading">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Left — value proposition ─────────────────────────────── */}
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.05}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold mb-4 uppercase tracking-widest font-enHeading">
                <Translate en="Start In 48 Hours" ar="ابدأ خلال 48 ساعة" />
              </span>
              <h2 id="form-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 mb-6 tracking-tight">
                <Translate
                  en="Ready to unlock your parking revenue?"
                  ar="هل أنت مستعد لإطلاق أرباح مواقفك؟"
                />
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed">
                <Translate
                  en="Connect with our solutions engineering team. We'll scope your facility integration and deliver a custom feasibility report within 48 hours — zero commitment required."
                  ar="تواصل مع فريق مهندسي الحلول لدينا. سنحدد نطاق تكامل منشأتك ونقدم تقرير الجدوى المخصص خلال 48 ساعة — دون أي التزام مسبق."
                />
              </p>

              {/* What to expect checklist */}
              <div className="flex flex-col gap-4">
                {[
                  { en: '48-hour guaranteed response SLA', ar: 'رد مؤكد خلال 48 ساعة', icon: <Clock className="w-4 h-4 text-brand-accent" /> },
                  { en: 'Free facility yield & capacity assessment', ar: 'تقييم مجاني للسعة والعوائد المتوقعة', icon: <CheckCircle2 className="w-4 h-4 text-brand-accent" /> },
                  { en: 'Zero hardware CapEx commitment', ar: 'بدون أي التزام مالي لشراء أجهزة', icon: <ShieldCheck className="w-4 h-4 text-brand-accent" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      <Translate en={item.en} ar={item.ar} />
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Right — form card ─────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.12}>
              <div className="bg-white border border-slate-200/90 p-8 sm:p-10 relative rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.07)]">
                {/* Cyan top bar accent */}
                <div className="absolute top-0 inset-x-12 h-[3px] bg-brand-accent rounded-t-full" aria-hidden="true" />

                {state === 'success' ? (
                  /* Success state */
                  <div className="min-h-[420px] flex flex-col items-center justify-center text-center gap-6 py-8">
                    <div className="w-20 h-20 bg-brand-accent/15 border border-brand-accent/30 rounded-full flex items-center justify-center text-brand-accent shadow-sm">
                      <Check className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-enHeading text-slate-900">
                      <Translate en="Assessment Request Received!" ar="تم استلام طلب التقييم بنجاح!" />
                    </h3>
                    <p className="text-slate-600 max-w-md leading-relaxed">
                      <Translate
                        en="Our solutions engineering team will review your facility profile and reach out within 48 hours to present your revenue model."
                        ar="سيتواصل معك فريق مهندسي الحلول خلال 48 ساعة لتقديم نموذج دراسة العوائد لمنشأتك."
                      />
                    </p>
                  </div>
                ) : (
                  <form
                    id={`${formId}-form`}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-6"
                  >
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl font-bold font-enHeading text-slate-900">
                        <Translate en="Integration Assessment Request" ar="طلب تقييم تكامل المنشأة" />
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        <Translate en="Fill in your details below to receive a personalized proposal." ar="يرجى ملء البيانات أدناه للحصول على عرض مخصص." />
                      </p>
                    </div>

                    {state === 'error' && (
                      <div role="alert" className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
                        <Translate
                          en="Something went wrong while submitting. Please try again or reach out to contact@irken.com.eg."
                          ar="حدث خطأ أثناء الإرسال. يرجى المحاولة مجدداً أو التواصل عبر contact@irken.com.eg."
                        />
                      </div>
                    )}

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
                        placeholder="e.g. Ahmed Al-Rashid"
                        value={data.name}
                        onChange={handleChange('name')}
                        className={inputClass('name')}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? `${formId}-name-err` : undefined}
                      />
                      {errors.name && (
                        <p id={`${formId}-name-err`} role="alert" className="text-xs text-red-500 mt-1.5 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Company + Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor={`${formId}-company`} className={labelClass}>
                          <Translate en="Company / Organization *" ar="الشركة / المؤسسة *" />
                        </label>
                        <input
                          id={`${formId}-company`}
                          type="text"
                          autoComplete="organization"
                          required
                          placeholder="e.g. SODIC Developments"
                          value={data.company}
                          onChange={handleChange('company')}
                          className={inputClass('company')}
                          aria-required="true"
                          aria-invalid={!!errors.company}
                          aria-describedby={errors.company ? `${formId}-company-err` : undefined}
                        />
                        {errors.company && (
                          <p id={`${formId}-company-err`} role="alert" className="text-xs text-red-500 mt-1.5 font-medium">
                            {errors.company}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`${formId}-role`} className={labelClass}>
                          <Translate en="Your Role *" ar="المنصب *" />
                        </label>
                        <select
                          id={`${formId}-role`}
                          required
                          value={data.role}
                          onChange={handleChange('role')}
                          className={cn(inputClass('role'), 'cursor-pointer')}
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
                          <p id={`${formId}-role-err`} role="alert" className="text-xs text-red-500 mt-1.5 font-medium">
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
                          placeholder="name@company.eg"
                          value={data.email}
                          onChange={handleChange('email')}
                          className={inputClass('email')}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                        />
                        {errors.email && (
                          <p id={`${formId}-email-err`} role="alert" className="text-xs text-red-500 mt-1.5 font-medium">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`${formId}-phone`} className={labelClass}>
                          <Translate en="Phone (Optional)" ar="الهاتف (اختياري)" />
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
                        <Translate en="Approx. Facility Parking Spaces" ar="عدد مواقف المنشأة التقريبي" />
                      </label>
                      <input
                        id={`${formId}-spaces`}
                        type="number"
                        min="1"
                        placeholder="e.g. 350"
                        value={data.spaces}
                        onChange={handleChange('spaces')}
                        className={inputClass('spaces')}
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-3">
                      <PrimaryButton
                        type="submit"
                        disabled={state === 'submitting'}
                        en={state === 'submitting' ? 'Submitting Request...' : 'Request Integration Assessment'}
                        ar={state === 'submitting' ? 'جاري الإرسال...' : 'طلب تقييم التكامل'}
                        icon={state === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
                        className="w-full justify-center py-4 text-xs font-bold tracking-widest shadow-lg shadow-brand-accent/20"
                      />
                    </div>

                    <p className="text-xs text-slate-400 text-center font-medium">
                      <Translate en="No hardware commitment required · 48-hour response SLA" ar="بدون التزام بمعدات · رد مؤكد خلال 48 ساعة" />
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
