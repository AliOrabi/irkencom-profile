'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { 
  TrendingUp, 
  Search, 
  DollarSign, 
  Layers, 
  CheckCircle2,
  Cpu,
  ScanLine,
  Camera,
  Smartphone,
  ShieldCheck
} from 'lucide-react';

export default function SandboxOperatorValue() {
  const pillars = [
    {
      icon: TrendingUp,
      titleEn: "Fill Empty & Off-Peak Bays",
      titleAr: "استثمار الأماكن الفاضية في أوقات الهدوء",
      descEn: "An empty parking bay is perishable revenue lost forever. Irken connects your open spaces directly to drivers searching near your zone, turning idle bays into guaranteed digital income.",
      descAr: "أي مكان ركنة بيفضل فاضي في جراجك هو خسارة مالية بتضيع للأبد. إركن بتعرض سعتك المتاحة للسواقين اللي بيدوروا على ركنة في منطقتك عشان تضمن إشغال مستمر ودخل أعلى."
    },
    {
      icon: Search,
      titleEn: "In-App Driver Matching & Discovery",
      titleAr: "ظهور مباشر للسواقين على تطبيق إركن",
      descEn: "Stop relying only on random street drive-bys. When drivers search for parking near their destination on irken.eg, your facility appears first with real-time rates and availability.",
      descAr: "بلاش تعتمد بس على العربيات اللي بتعدي صدفة في الشارع. لما السواق يدور على باركينج على تطبيق irken.eg، جراجك بيظهرله في أول النتايج بالأسعار والمساحات المتاحة."
    },
    {
      icon: DollarSign,
      titleEn: "Guaranteed Advance Reservations",
      titleAr: "حجز مسبق ومضمون وتسوية سريعة",
      descEn: "Drivers reserve and pay online before arrival through a secure digital payment gateway. You receive confirmed advance bookings and predictable daily cash flow.",
      descAr: "السواق بيحجز ويدفع أونلاين قبل ما يوصل عبر بوابة دفع إلكترونية آمنة ومعتمدة في مصر. بتستلم حجوزات مسبقة ومضمونة وفلوسك بتتحولك بتسوية سريعة."
    },
    {
      icon: Layers,
      titleEn: "Zero CapEx (No New Hardware)",
      titleAr: "بدون أي مصاريف أو شراء أجهزة جديدة",
      descEn: "We don't require expensive hardware overhauls or construction costs. We connect your existing gates, cameras, or attendants to the Irken network in 48 hours.",
      descAr: "مش هتدفع أي مصاريف تأسيس أو تشتري بوابات جديدة. بنربط جراجك ونظامك الحالي بالشبكة خلال 48 ساعة بس وتبدأ تستقبل حجوزات فوراً."
    }
  ];

  const compatibilityModes = [
    { icon: ScanLine, labelEn: "QR / Barcode Scanners", labelAr: "ماسحات الباركود وQR" },
    { icon: Camera, labelEn: "LPR Plate Cameras", labelAr: "كاميرات قراءة اللوحات" },
    { icon: Cpu, labelEn: "Automatic RFID Gates", labelAr: "بوابات الكروت الإلكترونية" },
    { icon: Smartphone, labelEn: "Attendant Mobile App", labelAr: "تطبيق المنظم الميداني" }
  ];

  return (
    <section id="why-operators" className="py-24 px-6 max-w-[1280px] mx-auto w-full overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest font-enHeading mb-4 border border-brand-accent/20">
            <Translate en="Value for Parking Operators" ar="مميزات الانضمام لمشغلي الجراجات" />
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-5">
            <Translate en="Why Parking Operators Choose Irken" ar="ليه أصحاب ومشغلي الجراجات بيختاروا إركن؟" />
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            <Translate 
              en="Transform your physical facility from a static, unpredictable cost center into an active, high-yield digital revenue engine." 
              ar="حوّل جراجك من مجرد مكان انتظار بيعتمد على الحظ لمشروع رقمي منظم بأعلى نسبة إشغال ودخل يومي مضمون." 
            />
          </p>
        </Reveal>
      </div>

      {/* 4 Inset Value Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
        {pillars.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <Reveal key={idx} delay={0.05 + idx * 0.08}>
              <div className="bg-white border border-slate-200/90 rounded-[2rem] p-8 sm:p-10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:border-brand-accent/40 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-105 group-hover:bg-brand-accent/10 transition-all duration-300 shadow-inner">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold font-enHeading text-slate-900 tracking-tight mb-3">
                    <Translate en={pillar.titleEn} ar={pillar.titleAr} />
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    <Translate en={pillar.descEn} ar={pillar.descAr} />
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold font-enHeading text-brand-accent uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  <span><Translate en="Guaranteed Operator Advantage" ar="ميزة حصرية ومؤكدة لجراجك" /></span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ── Hardware & Access Compatibility Reassurance Strip ── */}
      <Reveal delay={0.25}>
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-brand-accent/15 text-brand-accent flex items-center justify-center shrink-0 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold font-enHeading uppercase tracking-widest text-brand-accent">
                <Translate en="Zero Hardware Overhaul Required" ar="بدون أي تكاليف استبدال للأجهزة (Zero CapEx)" />
              </div>
              <h4 className="text-base sm:text-lg font-bold font-enHeading text-slate-900">
                <Translate en="Works with Your Existing Gate & Attendant Setup" ar="متوافق تماماً مع بواباتك وعمالك الحاليين في مصر" />
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {compatibilityModes.map((mode, i) => {
              const ModeIcon = mode.icon;
              return (
                <div 
                  key={i} 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
                >
                  <ModeIcon className="w-3.5 h-3.5 text-brand-accent" />
                  <span><Translate en={mode.labelEn} ar={mode.labelAr} /></span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
