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

export default function SandboxOperatorForm() {
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
      errors.facilityName = 'Facility name is required — اسم الجراج مطلوب';
    }
    if (!String(data.cityArea ?? '').trim()) {
      errors.cityArea = 'City / area is required — المدينة أو المنطقة مطلوبة';
    }
    if (!String(data.name ?? '').trim()) {
      errors.name = 'Your name is required — اسمك مطلوب';
    }
    const phone = String(data.phone ?? '').trim();
    if (!phone) {
      errors.phone = 'Phone number is required — رقم الموبايل مطلوب';
    } else if (!/^\+?[\d\s\-().]{7,20}$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number — رقم غير صحيح';
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
    // Merge controlled cityArea back in
    formData.set('cityArea', cityArea);
    const data = Object.fromEntries(formData.entries());

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to first error
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

  /* ── Field error helper ─────────────────────────────────────────────── */
  const fieldError = (name: string) => formErrors[name];
  const fieldClass = (name: string, base: string) =>
    `${base} ${fieldError(name) ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'focus:border-brand-accent focus:ring-brand-accent/20'}`;



  return (
    <section id="operator-onboard" className="py-16 md:py-24 px-6 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)]">
          
          {/* Form Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider font-enHeading mb-3 border border-brand-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              <Translate en="Founding Partner Program" ar="برنامج الشركاء المؤسسين" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight mb-3 rtl:leading-[1.3]">
              <Translate en="Register Your Facility & Start Receiving Reservations" ar="سجل جراجك وابدأ استقبال الحجوزات فوراً" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto rtl:leading-[1.7]">
              <Translate 
                en="Zero setup costs, zero new hardware, and zero commitments. Fill in your facility details and our team will activate your dashboard within 24 hours." 
                ar="بدون أي مصاريف تأسيس، بدون أجهزة جديدة، وبدون أي عقود ملزمة. سجل بيانات جراجك وفريقنا هيفعل حسابك خلال 24 ساعة." 
              />
            </p>
          </div>

          {submitted ? (
            /* Apple-style Success Feedback Card */
            <div className="p-10 text-center bg-emerald-50/60 border border-emerald-200 rounded-3xl flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-enHeading text-slate-900 rtl:leading-[1.3]">
                <Translate en="Facility Registration Received Successfully" ar="تم استلام طلب تسجيل الجراج بنجاح" />
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed rtl:leading-[1.7]">
                <Translate 
                  en="Our operator onboarding team will verify your facility details and activate your Control Panel access within 24 hours to begin receiving driver reservations." 
                  ar="فريق الدعم هيراجع بيانات جراجك ويفعل حسابك على لوحة التحكم خلال 24 ساعة لتبدأ استقبال حجوزات السائقين فوراً." 
                />
              </p>
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-emerald-200/80 text-xs text-emerald-800 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span><Translate en="24-Hour Fast Activation" ar="تفعيل سريع خلال 24 ساعة" /></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><Translate en="Verified Listing" ar="إدراج معتمد ومضمون" /></span>
                </div>
              </div>
            </div>
          ) : (
            /* Grouped Inset Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Group 1: Role & Facility Capacity */}
              <div className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200/70 space-y-4">
                <div className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-500 flex items-center gap-1.5 pb-2 border-b border-slate-200/60">
                  <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                  <Translate en="Partner Classification" ar="تصنيف الشريك والسعة" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="I am a... *" ar="صفتك المهنية... *" />
                    </label>
                    <div className="relative">
                      <select 
                        name="operatorRole"
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 rounded-2xl text-sm font-medium outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 appearance-none cursor-pointer shadow-sm"
                        defaultValue="parking_operator"
                        required
                      >
                        <option value="parking_operator">مشغل جراج أو سايس مرخص (Parking Operator / Sayes)</option>
                        <option value="facility_manager">مالك عقار أو مدير مرافق تجارية (Property Owner / Facility Manager)</option>
                        <option value="valet_provider">مزود خدمات فاليه (Valet Service Provider)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 right-4 rtl:right-auto rtl:left-4 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Capacity (Spaces) *" ar="السعة الاستيعابية (عدد الأماكن) *" />
                    </label>
                    <div className="relative">
                      <select 
                        name="capacity"
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 ltr:pl-11 rtl:pr-11 rounded-2xl text-sm font-medium outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 appearance-none cursor-pointer shadow-sm"
                        defaultValue="50-200"
                        required
                      >
                        <option value="<50">أقل من 50 مكان ركنة (&lt; 50 Spaces)</option>
                        <option value="50-200">50 إلى 200 مكان ركنة (50 - 200 Spaces)</option>
                        <option value="200-500">200 إلى 500 مكان ركنة (200 - 500 Spaces)</option>
                        <option value="500+">أكثر من 500 مكان / عدة فروع (500+ Spaces)</option>
                      </select>
                      <Car className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4 pointer-events-none" />
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 right-4 rtl:right-auto rtl:left-4 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Group 2: Facility Details + Quick District Chips */}
              <div className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200/70 space-y-4">
                <div className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-500 flex items-center gap-1.5 pb-2 border-b border-slate-200/60">
                  <Building2 className="w-3.5 h-3.5 text-brand-accent" />
                  <Translate en="Facility Information" ar="بيانات الجراج والموقع" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Facility / Lot Name *" ar="اسم الجراج أو الموقف *" />
                    </label>
                    <div className="relative">
                      <input 
                        name="facilityName"
                        id="facilityName"
                        type="text" 
                        placeholder="مثال: جراج النيل الدولي - الدقي"
                        aria-invalid={!!fieldError('facilityName')}
                        aria-describedby={fieldError('facilityName') ? 'facilityName-error' : undefined}
                        required 
                        className={fieldClass('facilityName', 'w-full bg-white border text-slate-900 px-4 py-3.5 ltr:pl-11 rtl:pr-11 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:ring-2 shadow-sm')} 
                      />
                      <Building2 className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4" />
                    </div>
                    {fieldError('facilityName') && (
                      <p id="facilityName-error" role="alert" className="flex items-center gap-1.5 text-[11px] text-red-600 font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {fieldError('facilityName')}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="City / Area *" ar="المدينة أو المنطقة *" />
                    </label>
                    <div className="relative">
                      <input 
                        name="cityArea"
                        id="cityArea"
                        type="text" 
                        value={cityArea}
                        onChange={(e) => setCityArea(e.target.value)}
                        placeholder="مثال: التجمع الخامس، وسط البلد، الشيخ زايد"
                        aria-invalid={!!fieldError('cityArea')}
                        aria-describedby={fieldError('cityArea') ? 'cityArea-error' : undefined}
                        required 
                        className={fieldClass('cityArea', 'w-full bg-white border text-slate-900 px-4 py-3.5 ltr:pl-11 rtl:pr-11 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:ring-2 shadow-sm')} 
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4" />
                    </div>
                    {fieldError('cityArea') && (
                      <p id="cityArea-error" role="alert" className="flex items-center gap-1.5 text-[11px] text-red-600 font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {fieldError('cityArea')}
                      </p>
                    )}

                    {/* Quick District Selection Chips */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1.5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <Compass className="w-3 h-3 text-brand-accent" />
                        <Translate en="Quick Select:" ar="اختر سريعاً:" />
                      </span>
                      {popularDistricts.map((d, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCityArea(d.en)}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/5 transition-all shadow-2xs active:scale-95 cursor-pointer"
                        >
                          <Translate en={d.en} ar={d.ar} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


              {/* Group 3: Contact Details */}
              <div className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200/70 space-y-4">
                <div className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-500 flex items-center gap-1.5 pb-2 border-b border-slate-200/60">
                  <User className="w-3.5 h-3.5 text-brand-accent" />
                  <Translate en="Contact Person Details" ar="بيانات المسؤول للتواصل" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Full Name *" ar="الاسم بالكامل *" />
                    </label>
                    <div className="relative">
                      <input 
                        name="name"
                        id="name"
                        type="text" 
                        placeholder="مثال: أحمد رضوان"
                        aria-invalid={!!fieldError('name')}
                        aria-describedby={fieldError('name') ? 'name-error' : undefined}
                        required 
                        className={fieldClass('name', 'w-full bg-white border text-slate-900 px-4 py-3.5 ltr:pl-10 rtl:pr-10 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:ring-2 shadow-sm')} 
                      />
                      <User className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-3.5 rtl:right-3.5" />
                    </div>
                    {fieldError('name') && (
                      <p id="name-error" role="alert" className="flex items-center gap-1.5 text-[11px] text-red-600 font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {fieldError('name')}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Phone (WhatsApp) *" ar="رقم الموبايل (واتساب) *" />
                    </label>
                    <div className="relative">
                      <input 
                        name="phone"
                        id="phone"
                        type="tel" 
                        placeholder="+20 1..."
                        aria-invalid={!!fieldError('phone')}
                        aria-describedby={fieldError('phone') ? 'phone-error' : undefined}
                        required 
                        className={fieldClass('phone', 'w-full bg-white border text-slate-900 px-4 py-3.5 ltr:pl-10 rtl:pr-10 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:ring-2 shadow-sm')} 
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-3.5 rtl:right-3.5" />
                    </div>
                    {fieldError('phone') && (
                      <p id="phone-error" role="alert" className="flex items-center gap-1.5 text-[11px] text-red-600 font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {fieldError('phone')}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Work Email (Optional)" ar="البريد الإلكتروني (اختياري)" />
                    </label>
                    <div className="relative">
                      <input 
                        name="email"
                        type="email" 
                        placeholder="contact@garage.com"
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 ltr:pl-10 rtl:pr-10 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 shadow-sm" 
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-3.5 rtl:right-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA & WhatsApp Fast-Track */}
              <div className="pt-2 flex flex-col items-center gap-4">
                <PrimaryButton 
                  en={loading ? "Submitting Registration..." : "Join as Partner"}
                  ar={loading ? "جاري إرسال البيانات..." : "انضم كشريك"}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-sm font-bold shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
                />

                {/* Direct WhatsApp Fast-Track Option */}
                <div className="w-full flex items-center gap-3">
                  <div className="flex-1 h-[1px] bg-slate-200" />
                  <span className="text-xs text-slate-400 font-semibold font-enHeading uppercase tracking-wider">
                    <Translate en="Or Instant Direct Chat" ar="أو تواصل معنا فوراً عبر واتساب" />
                  </span>
                  <div className="flex-1 h-[1px] bg-slate-200" />
                </div>

                <a
                  href="https://wa.me/201222200479?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%A5%D8%B1%D9%83%D9%86%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20%D8%AC%D8%B1%D8%A7%D8%AC%D9%8A%20%D8%B6%D9%85%D9%86%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%A1%20%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D9%8A%D9%86."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full border border-emerald-500/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-500 font-enHeading text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>
                    <Translate en="Instant WhatsApp Registration (+20 1222200479)" ar="تسجيل سريع عبر محادثة واتساب (+20 1222200479)" />
                  </span>
                </a>

                {/* Trust Footer Signals */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] text-slate-500 font-medium pt-1 text-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                    <Translate en="Zero Setup Costs" ar="صفر تكلفة تأسيس" />
                  </span>
                  <span>•</span>
                  <span>
                    <Translate en="Zero Contract Lock-in" ar="بدون عقود ملزمة" />
                  </span>
                  <span>•</span>
                  <span>
                    <Translate en="24-Hour Dashboard Activation" ar="تفعيل الحساب خلال 24 ساعة" />
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
