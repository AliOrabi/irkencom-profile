'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';
import { usePostHog } from 'posthog-js/react';
import { PrimaryButton } from '@/components/ui/Buttons';
import {
  CheckCircle2,
  ChevronDown,
  Building2,
  User,
  Mail,
  Car,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
  Clock,
  Compass,
  AlertCircle
} from 'lucide-react';

type FormErrors = Record<string, string>;

export default function OperatorOnboardingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cityArea, setCityArea] = useState('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const posthog = usePostHog();

  const popularDistricts = [
    { en: "New Cairo", ar: "التجمع / القاهرة الجديدة" },
    { en: "Downtown Cairo", ar: "وسط البلد" },
    { en: "Sheikh Zayed", ar: "الشيخ زايد" },
    { en: "Maadi", ar: "المعادي" },
    { en: "Heliopolis", ar: "مصر الجديدة" },
    { en: "Dokki & Giza", ar: "الدقي والجيزة" },
    { en: "Alexandria", ar: "الإسكندرية" }
  ];

  /* ── Client-side validation ─────────────────────────────────────────── */
  const validateForm = (data: Record<string, FormDataEntryValue>): FormErrors => {
    const errors: FormErrors = {};
    if (!String(data.facilityName ?? '').trim()) {
      errors.facilityName = 'Facility name is required — اسم الموقف/الجراج مطلوب';
    }
    if (!String(data.cityArea ?? '').trim()) {
      errors.cityArea = 'City / area is required — المدينة أو المنطقة مطلوبة';
    }
    if (!String(data.name ?? '').trim()) {
      errors.name = 'Your name is required — اسمك مطلوب';
    }
    const phone = String(data.phone ?? '').trim();
    if (!phone) {
      errors.phone = 'Phone number is required — رقم الهاتف مطلوب';
    } else if (!/^\+?[\d\s\-().]{7,20}$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number — رقم هاتف غير صحيح';
    }
    const email = String(data.email ?? '').trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email — بريد إلكتروني غير صحيح';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set('cityArea', cityArea);
    const data = Object.fromEntries(formData.entries());

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstErrorEl = e.currentTarget.querySelector('[aria-invalid="true"]');
      (firstErrorEl as HTMLElement)?.focus();
      return;
    }

    setFormErrors({});
    setLoading(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'operator_onboarding_form',
          ...data
        })
      });
      posthog?.capture('operator_form_submitted', { role: data.operatorRole, capacity: data.capacity });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to submit", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="operator-onboard" className="py-20 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-10 sm:p-14 text-center shadow-xl">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold font-enHeading text-slate-900 mb-4 rtl:leading-[1.3]">
            <Translate en="Registration Received!" ar="تم استلام طلب تسجيل موقفك بنجاح!" />
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed rtl:leading-[1.8]">
            <Translate
              en="Our onboarding specialist will contact you on WhatsApp within 24 hours to verify your bay allocation and activate your Operator Dashboard."
              ar="سيتواصل معك مسؤول التأهيل والعمليات عبر واتساب خلال 24 ساعة لتأكيد سعة الموقف وتفعيل لوحة تحكم المشغل الخاصة بك."
            />
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            <Clock className="w-4 h-4 text-brand-accent" />
            <Translate en="Direct WhatsApp confirmation sent" ar="تم إرسال إشعار تأكيد فوري عبر واتساب" />
          </div>
        </div>
      </section>
    );
  }

  const baseInputClass = (hasError: boolean) =>
    `w-full bg-slate-50/90 border ${
      hasError ? 'border-rose-400 focus:ring-rose-400/20' : 'border-slate-200 focus:border-brand-accent focus:ring-brand-accent/20'
    } text-slate-900 px-4 py-3.5 text-sm rounded-2xl outline-none transition-all duration-200 focus:bg-white focus:ring-2 placeholder:text-slate-400 font-medium`;

  return (
    <section id="operator-onboard" className="pt-16 md:pt-24 pb-12 md:pb-16 px-6 max-w-[1280px] mx-auto w-full overflow-hidden">
      <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent via-cyan-400 to-brand-accent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Context Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold font-enHeading uppercase tracking-widest mb-3 border border-brand-accent/20">
                <Sparkles className="w-3.5 h-3.5" />
                <Translate en="2-Minute Operator Onboarding" ar="تسجيل الموقف في دقيقتين" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight rtl:leading-[1.3] mb-4">
                <Translate en="List Your Parking Facility on Irken" ar="سجّل موقف سياراتك على شبكة إركن" />
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed rtl:leading-[1.8]">
                <Translate
                  en="Zero setup fees, zero hardware purchases. Start receiving pre-paid driver reservations with full transparency and direct bank payouts."
                  ar="بدون رسوم تسجيل، وبدون شراء أي أجهزة جديدة. ابدأ في استقبال حجوزات السائقين المدفوعة مسبقاً مع تسويات بنكية دورية وشفافة."
                />
              </p>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span><Translate en="Free tier: 100% risk-free. No credit card required." ar="تسجيل مجاني 100% بدون أي بطاقة ائتمانية." /></span>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-5 h-5 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span><Translate en="Fast activation: Operator Dashboard ready within 24 hours." ar="تفعيل سريع: لوحة تحكم المشغل تصبح جاهزة خلال 24 ساعة." /></span>
              </div>
            </div>

            {/* Popular District Pills */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold font-enHeading text-slate-400 uppercase tracking-wider block mb-2.5">
                <Translate en="Fast District Quick-Select:" ar="اختيار سريع للمنطقة:" />
              </span>
              <div className="flex flex-wrap gap-1.5">
                {popularDistricts.map((d, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCityArea(d.en)}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-brand-accent/10 hover:text-brand-accent text-slate-600 font-medium transition-colors cursor-pointer"
                  >
                    <Translate en={d.en} ar={d.ar} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Facility Name */}
              <div>
                <label className="block text-xs font-bold font-enHeading text-slate-700 uppercase tracking-wider mb-1.5">
                  <Translate en="Facility or Lot Name *" ar="اسم الموقف أو الجراج *" />
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="facilityName"
                    required
                    placeholder="e.g. City Stars Underground Parking / ساحة التحرير"
                    className={`${baseInputClass(!!formErrors.facilityName)} ltr:pl-11 rtl:pr-11`}
                    aria-invalid={!!formErrors.facilityName}
                  />
                </div>
                {formErrors.facilityName && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.facilityName}
                  </p>
                )}
              </div>

              {/* City / Area + Capacity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-enHeading text-slate-700 uppercase tracking-wider mb-1.5">
                    <Translate en="City / District / Area *" ar="المدينة أو الحي أو المنطقة *" />
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="cityArea"
                      required
                      value={cityArea}
                      onChange={(e) => setCityArea(e.target.value)}
                      placeholder="e.g. Nasr City, Cairo"
                      className={`${baseInputClass(!!formErrors.cityArea)} ltr:pl-11 rtl:pr-11`}
                      aria-invalid={!!formErrors.cityArea}
                    />
                  </div>
                  {formErrors.cityArea && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.cityArea}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold font-enHeading text-slate-700 uppercase tracking-wider mb-1.5">
                    <Translate en="Estimated Bay Capacity" ar="السعة التقديرية (عدد الأماكن)" />
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-slate-400 absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      name="capacity"
                      defaultValue="50-100"
                      className={`${baseInputClass(false)} ltr:pl-11 rtl:pr-11 appearance-none cursor-pointer`}
                    >
                      <option value="10-30">10 – 30 Spaces (موقف صغير)</option>
                      <option value="30-75">30 – 75 Spaces (موقف متوسط)</option>
                      <option value="75-150">75 – 150 Spaces (موقف كبير)</option>
                      <option value="150+">150+ Spaces (مجمع أو مبنى مواقف)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Operator Role */}
              <div>
                <label className="block text-xs font-bold font-enHeading text-slate-700 uppercase tracking-wider mb-1.5">
                  <Translate en="Your Relationship to the Facility" ar="صفتك بالنسبة للموقف / المنشأة" />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { value: 'operator', en: 'Parking Operator / Sayes', ar: 'مشغل موقف / مسؤول ساحة' },
                    { value: 'owner', en: 'Property / Building Owner', ar: 'مالك عقار / جراج' },
                    { value: 'facility_manager', en: 'Commercial Facility Manager', ar: 'مدير منشأة تجارية / مول' }
                  ].map((role, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-2xl border border-slate-200 hover:border-brand-accent/40 bg-slate-50/70 hover:bg-white transition-colors cursor-pointer text-xs font-medium text-slate-700"
                    >
                      <input
                        type="radio"
                        name="operatorRole"
                        value={role.value}
                        defaultChecked={idx === 0}
                        className="accent-brand-accent"
                      />
                      <span><Translate en={role.en} ar={role.ar} /></span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-enHeading text-slate-700 uppercase tracking-wider mb-1.5">
                    <Translate en="Contact Person Name *" ar="اسم المسؤول للتواصل *" />
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Mohamed Ibrahim"
                      className={`${baseInputClass(!!formErrors.name)} ltr:pl-11 rtl:pr-11`}
                      aria-invalid={!!formErrors.name}
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold font-enHeading text-slate-700 uppercase tracking-wider mb-1.5">
                    <Translate en="Mobile / WhatsApp Number *" ar="رقم الموبايل / واتساب *" />
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+20 100 123 4567"
                      className={`${baseInputClass(!!formErrors.phone)} ltr:pl-11 rtl:pr-11`}
                      aria-invalid={!!formErrors.phone}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Optional Email */}
              <div>
                <label className="block text-xs font-bold font-enHeading text-slate-700 uppercase tracking-wider mb-1.5">
                  <Translate en="Email Address (Optional)" ar="البريد الإلكتروني (اختياري)" />
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    className={`${baseInputClass(!!formErrors.email)} ltr:pl-11 rtl:pr-11`}
                    aria-invalid={!!formErrors.email}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold font-enHeading text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/25 cursor-pointer disabled:opacity-50 active:scale-[0.98]"
                >
                  <span>
                    {loading ? (
                      <Translate en="Processing Registration..." ar="جاري تسجيل الموقف..." />
                    ) : (
                      <Translate en="Submit Facility & Activate Listing" ar="تأكيد تسجيل الموقف وتفعيل الحساب" />
                    )}
                  </span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                <Translate
                  en="By submitting, you agree to Irken's partner terms. No spam guaranteed."
                  ar="بإرسال النموذج، أنت توافق على شروط الشراكة لدى إركن. لن نرسل أي رسائل غير مرغوب فيها."
                />
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
