'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { 
  Car, 
  Building2, 
  Users, 
  CheckCircle2
} from 'lucide-react';
import { PrimaryButton } from '@/components/ui/Buttons';

export default function SandboxTargetAudiences() {
  const audiences = [
    {
      id: "operators",
      icon: Car,
      tagEn: "PRIMARY STAKEHOLDER",
      tagAr: "الفئة الأساسية",
      titleEn: "Licensed Parking Operators",
      titleAr: "مشغلو مواقف السيارات المعتمدون",
      subEn: "Private & Public Parking Lot Operators",
      subAr: "مشغلو المواقف العامة والخاصة",
      painEn: "Off-peak hours leave parking bays empty and revenue lost to chance drive-bys.",
      painAr: "ساعات الركود تترك المواقف فارغة وتجعل الإيرادات رهينة للسيارات العابرة عشوائياً.",
      benefits: [
        { en: "Fill vacant spaces with guaranteed advance driver reservations", ar: "شغل المساحات الشاغرة بحجوزات مسبقة ومؤكدة للسائقين" },
        { en: "Direct matching with drivers searching near your zone on irken.eg", ar: "ظهور مباشر للسائقين اللي بيدوروا على ركنة في منطقتك عبر irken.eg" },
        { en: "Free Control Panel for inventory & live booking management", ar: "لوحة تحكم مجانية لإدارة السعة والحجوزات اللحظية" },
        { en: "Pro subscription for dynamic surge pricing & revenue analytics", ar: "اشتراك متقدم للتسعير الديناميكي وتحليلات مضاعفة العائد" }
      ],
      accentBg: "bg-teal-600",
      ctaEn: "List Facility as Operator",
      ctaAr: "انضم كمشغل معتمد"
    },
    {
      id: "investors",
      icon: Building2,
      tagEn: "ASSET MONETIZATION",
      tagAr: "تسييل واستثمار الأصول",
      titleEn: "Parking Asset Investors",
      titleAr: "مستثمرو أصول ومساحات المواقف",
      subEn: "Commercial Real Estate & Land Owners",
      subAr: "ملاك الأراضي والعقارات التجارية",
      painEn: "Fixed parking real estate generates subpar yield due to lack of digital distribution.",
      painAr: "الأصول العقارية للمواقف تحقق عائداً منخفضاً بسبب غياب التوزيع الرقمي الذكي.",
      benefits: [
        { en: "Transform fixed spaces into lean, high-yield digital revenue assets", ar: "تحويل المساحات الثابتة إلى أصول رقمية مرنة عالية العائد" },
        { en: "Zero expensive hardware construction or heavy CapEx required", ar: "بدون أي تكاليف إنشائية باهظة أو استبدال للأجهزة" },
        { en: "Transparent digital revenue auditing & daily bank deposits", ar: "تقارير مالية شفافة وإيداعات بنكية يومية مؤتمتة" },
        { en: "Elevate commercial property valuation with smart digital booking", ar: "رفع القيمة الاستثمارية للعقار بدمج الحجز الإلكتروني" }
      ],
      accentBg: "bg-brand-accent",
      ctaEn: "Monetize Parking Assets",
      ctaAr: "استثمر مساحاتك العقارية"
    },
    {
      id: "professionals",
      icon: Users,
      tagEn: "INDUSTRY EXPERTS",
      tagAr: "محترفو إدارة العمليات",
      titleEn: "Valet & Parking Professionals",
      titleAr: "محترفو قطاع الفاليه والمواقف",
      subEn: "Licensed Valet & Ground Management Teams",
      subAr: "فرق إدارة الفاليه والتشغيل الميداني",
      painEn: "Manual paper tickets, cash reconciliation, and shift handovers cause operational friction.",
      painAr: "التذاكر الورقية والتسوية النقدية اليدوية تسبب فاقداً تشغيلياً ونزاعات مستمرة.",
      benefits: [
        { en: "Digital shift tracking and transparent cashier audit logs", ar: "متابعة رقمية للورديات وسجلات تدقيق مالية دقيقة" },
        { en: "Eliminate paper ticket loss and vehicle check-in disputes", ar: "القضاء على فقدان التذاكر ونزاعات دخول السيارات" },
        { en: "Pre-paid online reservations for smooth VIP & guest flow", ar: "حجوزات مسبقة مدفوعة لانسيابية تامة لرواد الفاليه" },
        { en: "Professional operational dashboard on any tablet or mobile device", ar: "لوحة تشغيل احترافية تعمل على أي جهاز لوحي أو هاتف" }
      ],
      accentBg: "bg-slate-800",
      ctaEn: "Empower Valet Operations",
      ctaAr: "طور عمليات الفاليه"
    }
  ];

  return (
    <section id="audiences" className="py-24 px-6 max-w-[1280px] mx-auto w-full overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Reveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest font-enHeading mb-4 border border-brand-accent/20">
            <Translate en="Who We Serve" ar="الفئات المستهدفة في irken.com.eg" />
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-5">
            <Translate en="Tailored for Parking Leaders & Asset Owners" ar="حلول مخصصة لقادة التشغيل والمستثمرين" />
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            <Translate 
              en="Whether you manage public parking, own commercial parking real estate, or run professional valet services — Irken provides the digital bridge to maximum yield." 
              ar="سواء كنت تدير مواقف عامة، أو تمتلك مساحات عقارية، أو تدير خدمات الفاليه — توفر لك إركن الجسر الرقمي لتحقيق أعلى عائد." 
            />
          </p>
        </Reveal>
      </div>

      {/* 3 Audience Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {audiences.map((aud, idx) => {
          const IconComp = aud.icon;
          return (
            <Reveal key={aud.id} delay={0.05 + idx * 0.08}>
              <div className="relative group h-full flex flex-col">
                {/* Offset Color Depth Layer */}
                <div 
                  className={`absolute inset-0 rounded-[2.5rem] transition-transform duration-300 opacity-60 ${aud.accentBg}`}
                  style={{ transform: 'translate(8px, 8px)' }}
                  aria-hidden="true"
                />

                {/* Main Card (Apple HIG Inset style) */}
                <div className="relative bg-white border border-slate-200/90 p-8 sm:p-9 rounded-[2.5rem] h-full flex flex-col shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] group-hover:-translate-y-1.5 group-hover:-translate-x-1 transition-all duration-300">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-900 group-hover:scale-105 transition-transform shadow-inner">
                      <IconComp className="w-7 h-7 text-brand-accent" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider font-enHeading bg-slate-100 text-slate-700 uppercase border border-slate-200">
                      <Translate en={aud.tagEn} ar={aud.tagAr} />
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-enHeading text-slate-900 tracking-tight mb-1">
                    <Translate en={aud.titleEn} ar={aud.titleAr} />
                  </h3>
                  <div className="text-xs font-semibold text-brand-accent mb-4">
                    <Translate en={aud.subEn} ar={aud.subAr} />
                  </div>

                  {/* Pain Quote Inset */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 mb-6 text-xs font-medium text-slate-700 leading-relaxed italic">
                    &ldquo;<Translate en={aud.painEn} ar={aud.painAr} />&rdquo;
                  </div>

                  {/* Bulleted Deliverables */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {aud.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span><Translate en={b.en} ar={b.ar} /></span>
                      </li>
                    ))}
                  </ul>

                  {/* Card CTA */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <PrimaryButton 
                      en={aud.ctaEn}
                      ar={aud.ctaAr}
                      href="#operator-onboard"
                      className="w-full py-3.5 text-xs active:scale-[0.98]"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
