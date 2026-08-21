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
  Compass 
} from 'lucide-react';

export default function SandboxOperatorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cityArea, setCityArea] = useState('');
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'operator_onboarding_form',
          ...data
        })
      });
      posthog?.capture('operator_form_submitted', { role: data.operatorRole, plan: data.desiredPlan });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to submit", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="operator-onboard" className="py-24 px-6 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)]">
          
          {/* Form Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider font-enHeading mb-3 border border-brand-accent/20">
              <Translate en="Operator Onboarding" ar="انضم لشبكة مشغلي الجراجات" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight mb-3">
              <Translate en="List Your Parking Facility" ar="سجل جراجك وابدأ استقبال الحجوزات" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              <Translate 
                en="Start receiving advance driver reservations and manage your bays with the Irken Operator Control Panel." 
                ar="سجل بيانات جراجك واستقبل حجوزات السائقين المسبقة وأدر أماكن الركنة بسهولة من لوحة تحكم إركن." 
              />
            </p>
          </div>

          {submitted ? (
            /* Apple-style Success Feedback Card */
            <div className="p-10 text-center bg-emerald-50/60 border border-emerald-200 rounded-3xl flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-enHeading text-slate-900">
                <Translate en="Facility Registration Received" ar="تم استلام طلب تسجيل الجراج بنجاح" />
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
                <Translate 
                  en="Our operator onboarding team will verify your facility details and activate your Control Panel access within 24 hours." 
                  ar="فريق الدعم هيراجع بيانات جراجك ويفعل حسابك على لوحة التحكم خلال 24 ساعة لتبدأ استقبال الحجوزات فوراً." 
                />
              </p>
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-emerald-200/80 text-xs text-emerald-800 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span><Translate en="24-Hour Activation" ar="تفعيل سريع خلال 24 ساعة" /></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><Translate en="Verified Listing" ar="إدراج معتمد ومضمون" /></span>
                </div>
              </div>
            </div>
          ) : (
            /* Apple Settings-style Grouped Inset Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Group 1: Role & Desired Plan */}
              <div className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200/70 space-y-4">
                <div className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-500 flex items-center gap-1.5 pb-2 border-b border-slate-200/60">
                  <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                  <Translate en="Account & Plan Configuration" ar="إعدادات الحساب ونوع الباقة" />
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
                        defaultValue="licensed_operator"
                        required
                      >
                        <option value="licensed_operator">مشغل جراج أو موقف مرخص (Licensed Operator)</option>
                        <option value="asset_investor">مالك أو مستثمر عقار ومساحات ركن (Asset Investor)</option>
                        <option value="valet_pro">محترف إدارة خدمات فاليه (Valet Professional)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 right-4 rtl:right-auto rtl:left-4 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Desired Control Panel *" ar="نوع لوحة التحكم المطلوبة *" />
                    </label>
                    <div className="relative">
                      <select 
                        name="desiredPlan"
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 rounded-2xl text-sm font-medium outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 appearance-none cursor-pointer shadow-sm"
                        defaultValue="free_starter"
                        required
                      >
                        <option value="free_starter">باقة البداية المجانية (0 جنيه / Free Starter)</option>
                        <option value="pro_subscription">الاشتراك المتقدم (تسعير ذكي وإشغال أعلى / Pro)</option>
                      </select>
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
                        type="text" 
                        placeholder="مثال: جراج مول التجمع الشمالي"
                        required 
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 ltr:pl-11 rtl:pr-11 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 shadow-sm" 
                      />
                      <Building2 className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="City / Area *" ar="المدينة أو المنطقة *" />
                    </label>
                    <div className="relative">
                      <input 
                        name="cityArea"
                        type="text" 
                        value={cityArea}
                        onChange={(e) => setCityArea(e.target.value)}
                        placeholder="مثال: التجمع الخامس، وسط البلد، الشيخ زايد"
                        required 
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 ltr:pl-11 rtl:pr-11 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 shadow-sm" 
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4" />
                    </div>

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

                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Capacity (Spaces) *" ar="السعة الاستيعابية (عدد أماكن الركنة) *" />
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
                        type="text" 
                        placeholder="مثال: أحمد رضوان"
                        required 
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 ltr:pl-10 rtl:pr-10 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 shadow-sm" 
                      />
                      <User className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-3.5 rtl:right-3.5" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Phone (WhatsApp) *" ar="رقم الموبايل (واتساب) *" />
                    </label>
                    <div className="relative">
                      <input 
                        name="phone"
                        type="tel" 
                        placeholder="+20 1..."
                        required 
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 ltr:pl-10 rtl:pr-10 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 shadow-sm" 
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-3.5 rtl:right-3.5" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-700">
                      <Translate en="Work Email *" ar="البريد الإلكتروني *" />
                    </label>
                    <div className="relative">
                      <input 
                        name="email"
                        type="email" 
                        placeholder="ahmed@garage.com"
                        required 
                        className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 ltr:pl-10 rtl:pr-10 rounded-2xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 shadow-sm" 
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ltr:left-3.5 rtl:right-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <PrimaryButton 
                  en={loading ? "Submitting Registration..." : "Submit Facility Registration"}
                  ar={loading ? "جاري إرسال البيانات..." : "تأكيد تسجيل الجراج"}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-sm font-bold shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
