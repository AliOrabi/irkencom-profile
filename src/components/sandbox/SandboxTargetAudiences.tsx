'use client';

import React from 'react';
import Image from 'next/image';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import {
  CheckCircle2,
  Smartphone,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { PrimaryButton } from '@/components/ui/Buttons';

export default function SandboxTargetAudiences() {
  return (
    <section id="partnership" className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto w-full overflow-hidden">

      {/* ── Section Header ────────────────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest font-enHeading mb-4 border border-brand-accent/20">
            <Sparkles className="w-3.5 h-3.5" />
            <Translate en="Tailored Partnership Models" ar="نماذج شراكة مخصصة" />
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-5 rtl:leading-[1.3]">
            <Translate
              en="Built for Egyptian Parking Operators & Property Owners"
              ar="حلول مخصصة لمشغلي المواقف وملاك العقارات في مصر"
            />
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed rtl:leading-[1.8]">
            <Translate
              en="Whether you run a busy street-level lot with gate attendants or manage high-capacity commercial parking real estate — Irken provides the digital bridge to guaranteed advance driver demand."
              ar="سواء كنت تدير جراجاً ميدانياً أو ساحة انتظار بعمال، أو تمتلك مساحات ركن في عقار تجاري أو مول — إركن بتوفرلك الشراكة الرقمية الذكية لملء الأماكن وضمان دخل مستمر."
            />
          </p>
        </Reveal>
      </div>

      {/* ── 2 Staggered Feature Story Cards ────────────────────────────── */}
      <div className="space-y-12 md:space-y-16">

        {/* ── Persona 1: Parking Providers & Licensed Sayes / Attendants ── */}
        <Reveal delay={0.1}>
          <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Visual Frame */}
              <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] rounded-[2rem] overflow-hidden shadow-md">
                <Image
                  src="/images/egyptian-garage-attendant.jpg"
                  alt="Egyptian parking attendant verifying driver reservation on smartphone"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[11px] font-bold font-enHeading uppercase tracking-wider backdrop-blur-md">
                    <Smartphone className="w-3.5 h-3.5" />
                    <Translate en="No Extra Devices Needed" ar="يعمل على موبايل العامل الموجود" />
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold font-enHeading bg-brand-accent/10 text-brand-accent uppercase tracking-wider border border-brand-accent/25">
                      <Translate en="Category 01" ar="الفئة الأولى" />
                    </span>
                    <span className="text-xs font-bold text-slate-500 font-enHeading uppercase tracking-wider">
                      <Translate en="Ground Operations" ar="التشغيل الميداني" />
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-enHeading text-slate-900 tracking-tight mb-2 rtl:leading-[1.3]">
                    <Translate
                      en="Parking Providers & Licensed Operators"
                      ar="مشغلو المواقف، الجراجات، السايس "
                    />
                  </h3>

                  <div className="text-xs font-semibold text-brand-accent mb-5">
                    <Translate
                      en="Private garages, street-level lots, and valet teams across Cairo & Giza"
                      ar="الجراجات الخاصة، ساحات الانتظار، وفرق الفاليه في القاهرة والجيزة"
                    />
                  </div>

                  {/* Pain & Reality Context */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-xs text-slate-700 leading-relaxed rtl:leading-[1.7]">
                    <span className="font-bold text-slate-900 block mb-1">
                      <Translate en="The Core Challenge:" ar="التحدي الحقيقي:" />
                    </span>
                    <Translate
                      en="Off-peak lulls leave your bays empty, while manual paper tickets create shift handover disputes and cash leakage."
                      ar="أوقات الركود بتسيب أماكنك فاضية، والتذاكر الورقية والحساب اليدوي بيعملوا مشاكل في تسليم الورديات وفقدان جزء من الدخل."
                    />
                  </div>

                  {/* Concrete Benefits */}
                  <ul className="space-y-3 mb-8">
                    {[
                      {
                        en: "Fill empty bays with drivers searching for parking in your area on irken.eg",
                        ar: "املأ الأماكن الفاضية بسائقين بيدوروا فعلاً على ركنة في منطقتك عبر irken.eg"
                      },
                      {
                        en: "Instant gate check-in using your attendant's existing Android or iPhone — zero new hardware",
                        ar: "تحقق فوري عند البوابة باستخدام موبايل العامل العادي — من غير ما تشتري أي جهاز جديد"
                      },
                      {
                        en: "Shift tracking and transparent audit logs to eliminate revenue leakage",
                        ar: "متابعة دقيقة للورديات وسجلات تدقيق واضحة لمنع أي تسريب نقدي"
                      },
                      {
                        en: "Fast bank settlements to your approved Egyptian account in 2–3 business days",
                        ar: "تسوية مالية سريعة وتحويل لحسابك البنكي خلال 2-3 أيام عمل من طلب السحب"
                      }
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span><Translate en={b.en} ar={b.ar} /></span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <PrimaryButton
                    en="Partner With Us as an Operator"
                    ar="انضم كشريك تشغيل مجاناً"
                    href="#operator-onboard"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs active:scale-[0.98]"
                  />
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* ── Persona 2: Property & Asset Owners, Facility Managers ────── */}
        <Reveal delay={0.16}>
          <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Story Content */}
              <div className="flex flex-col justify-between h-full order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold font-enHeading bg-emerald-50 text-emerald-700 uppercase tracking-wider border border-emerald-200">
                      <Translate en="Category 02" ar="الفئة الثانية" />
                    </span>
                    <span className="text-xs font-bold text-slate-500 font-enHeading uppercase tracking-wider">
                      <Translate en="Asset Monetization" ar="استثمار الأصول" />
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-enHeading text-slate-900 tracking-tight mb-2 rtl:leading-[1.3]">
                    <Translate
                      en="Property & Asset Owners, Facility Managers"
                      ar="ملاك العقارات والأصول، ومديرو المرافق التجارية"
                    />
                  </h3>

                  <div className="text-xs font-semibold text-emerald-700 mb-5">
                    <Translate
                      en="Commercial real estate, shopping centers, office parks, and mixed-use developments"
                      ar="المولات التجارية، مجمعات المكاتب والشركات، والعقارات متعددة الاستخدامات"
                    />
                  </div>

                  {/* Pain & Reality Context */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-xs text-slate-700 leading-relaxed rtl:leading-[1.7]">
                    <span className="font-bold text-slate-900 block mb-1">
                      <Translate en="The Core Challenge:" ar="التحدي الحقيقي:" />
                    </span>
                    <Translate
                      en="Basement and dedicated parking structures sit underutilized for large parts of the week, generating subpar returns on prime land value."
                      ar="مساحات الجراجات في البدروم والمباني المخصصة بتفضل غير مستغلة معظم أيام الأسبوع وبتحقق عائد ضعيف مقارنة بقيمة الأرض والعقار."
                    />
                  </div>

                  {/* Concrete Benefits */}
                  <ul className="space-y-3 mb-8">
                    {[
                      {
                        en: "Transform fixed parking spaces into high-yield recurring digital revenue assets",
                        ar: "تحويل مساحات الركن الثابتة لأصول مدرة لدخل رقمي متكرر وعالي العائد"
                      },
                      {
                        en: "Zero expensive civil construction or hardware overhaul needed to get started",
                        ar: "بدون أي مصاريف إنشائية باهظة أو استبدال للأجهزة وبوابات الدخول الحالية"
                      },
                      {
                        en: "Centralized management dashboard with real-time occupancy heatmaps and financial auditing",
                        ar: "لوحة تحكم موحدة مع تحليلات لحظية لنسب الإشغال وسجلات مالية شفافة بالكامل"
                      },
                      {
                        en: "Increase property commercial valuation by integrating into Egypt's digital reservation network",
                        ar: "رفع القيمة الاستثمارية والتشغيلية للعقار بربطه بشبكة الحجز الرقمي في مصر"
                      }
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><Translate en={b.en} ar={b.ar} /></span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <PrimaryButton
                    en="Monetize Commercial Assets"
                    ar="استثمر مساحات عقارك كشريك"
                    href="#operator-onboard"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs bg-slate-900 hover:bg-slate-800 active:scale-[0.98]"
                  />
                </div>
              </div>

              {/* Visual Frame */}
              <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] rounded-[2rem] overflow-hidden shadow-md order-1 lg:order-2">
                <Image
                  src="/images/egyptian-facility-manager.jpg"
                  alt="Egyptian commercial facility manager checking parking analytics on tablet"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-[11px] font-bold font-enHeading uppercase tracking-wider backdrop-blur-md">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <Translate en="Digital Asset Monetization" ar="إدارة وتسييل الأصول رقمياً" />
                  </span>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
