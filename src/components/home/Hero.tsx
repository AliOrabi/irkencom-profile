'use client';

import React, { useState, useEffect } from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons';
import {
  Search,
  CalendarCheck,
  ArrowUpRight,
  Activity,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [activeReservations, setActiveReservations] = useState(843);
  const [searchImpressions, setSearchImpressions] = useState(14290);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReservations(prev => prev + (Math.floor(Math.random() * 5) - 2));
      setSearchImpressions(prev => prev + Math.floor(Math.random() * 8) + 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-950"
    >
      {/* Hero Background Image */}
      <Image
        src="/hero_parking_cairo_v2.jpg"
        alt="Modern digital parking facility in Cairo with QR check-in kiosk — powered by Irken"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center opacity-85 z-0 pointer-events-none"
      />

      {/* Balanced ambient overlay for crisp text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A1118]/70 via-[#0A1118]/45 to-[#0A1118]/80 z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto my-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex flex-col items-start">

          {/* Program Pill & Beta Badge */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-xs font-bold font-enHeading uppercase tracking-widest backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <Translate en="1# Parking Network in Egypt" ar="شبكة مواقف السيارات الأولى في مصر" />
              </span>
            </div>
          </Reveal>

          {/* H1 Primary Headline */}
          <Reveal delay={0.1}>
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-enHeading text-white leading-[1.25] sm:leading-[1.2] md:leading-[1.25] rtl:leading-[1.35] sm:rtl:leading-[1.4] mb-5 tracking-tight"
            >
              <Translate
                en="Quick and easy parking reservations for your customers!"
                ar="وفر لعملائك حجز موقف لسياراتهم بسرعة وسهولة!"
              />
            </h1>
          </Reveal>

          {/* AEO Standalone Extraction Block */}
          <Reveal delay={0.15}>
            <div className="my-2 text-sm sm:text-base text-slate-200 leading-relaxed rtl:leading-[1.8] max-w-xl font-normal">
              <Translate
                en="Irken is a parking reservation platform in Egypt, connecting parking operators with drivers looking for guaranteed parking ."
                ar="إركن هي منصة لحجز مواقف السيارات في مصر، تربط مشغلي مواقف السيارات بسائقين يبحثون عن مواقف مضمونة."
              />
            </div>
          </Reveal>

          {/* Psychological Proof & Core Value Proposition */}
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-slate-300 my-5 max-w-xl font-normal leading-relaxed rtl:leading-[1.8]">
              <Translate
                en="Zero setup costs, zero hardware purchases. Fill empty off-peak bays by routing pre-paid drivers straight to your entrance, backed by 24/7 dedicated operational support."
                ar="بدون أي مصاريف إعداد، وبدون شراء أجهزة جديدة. املأ الأماكن الشاغرة في أوقات الهدوء بسائقين يدفعون مسبقاً قبل وصولهم، مع دعم فني وتشغيلي مخصص على مدار الساعة."
              />
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <PrimaryButton
                en="List your Parking Now"
                ar="سجّل جراجك الآن"
                href="#operator-onboard"
                className="w-full sm:w-auto py-3.5 px-8 text-xs font-semibold shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
              />
              <GhostButton
                en="Learn More"
                ar="اكتشف المزيد"
                href="#yield-calculator"
                className="w-full sm:w-auto py-3.5 px-6 text-xs text-white border-white/25 hover:border-white/60 active:scale-[0.98]"
              />
            </div>
          </Reveal>

          {/* Value Micro-Signals */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span><Translate en="Free during launch period" ar="مجاني بالكامل خلال فترة الإطلاق" /></span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-brand-accent" />
                <span><Translate en="Direct driver demand discovery" ar="جلب سائقين يبحثون في منطقتك" /></span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-brand-accent" />
                <span><Translate en="Weekly bank & InstaPay payouts" ar="تحويلات بنكية وإنستاباي منتظمة" /></span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Live Operator Widget */}
        <Reveal delay={0.2} className="w-full">
          <div className="relative z-10 w-full max-w-lg mx-auto">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 to-teal-500/20 rounded-[2.2rem] blur-xl opacity-60 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative border border-slate-700/60 bg-[#0F172A]/90 backdrop-blur-2xl overflow-hidden p-7 sm:p-8 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] shadow-inner">
              <Image
                src="/irken-logo-light.svg"
                alt=""
                width={180}
                height={180}
                className="absolute -bottom-[10%] -right-[5%] w-[180px] opacity-[0.03] pointer-events-none"
              />

              <div className="flex justify-between items-start border-b border-slate-800/80 pb-5 mb-6">
                <div>
                  <div className="text-[10px] font-bold font-enHeading text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-brand-accent" />
                    <Translate en="Operator Dashboard" ar="لوحة تحكم المشغل" />
                  </div>
                  <h3 className="font-enHeading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>
                      <Translate en="Cairo Downtown Facility #04" ar="جراج وسط البلد رقم 4" />
                    </span>
                  </h3>
                </div>
                <div className="text-[10px] font-enHeading text-brand-accent flex items-center gap-1.5 uppercase tracking-wider bg-brand-accent/15 px-3 py-1 rounded-full border border-brand-accent/30 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <Translate en="LIVE" ar="متصل" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-brand-accent/30 p-4 bg-brand-accent/10 rounded-2xl backdrop-blur-md">
                  <div className="text-[10px] font-enHeading text-brand-accent uppercase tracking-wider mb-1.5">
                    <Translate en="Prepaid reservations" ar="حجوزات مؤكدة" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-enHeading text-brand-accent mb-1 tracking-tight tabular-nums">
                    {activeReservations.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-300 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                    <Translate en="Drivers arriving today" ar="السائقون يصلون اليوم" />
                  </div>
                </div>

                <div className="border border-slate-800/80 p-4 bg-slate-900/60 rounded-2xl backdrop-blur-md">
                  <div className="text-[10px] font-enHeading text-slate-400 uppercase tracking-wider mb-1.5">
                    <Translate en="Nearby Driver Searches" ar="عمليات بحث قريبة منك" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-enHeading text-white mb-1 tracking-tight tabular-nums">
                    {searchImpressions.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    <Translate en="via Irken platform" ar="على منصة إركن" />
                  </div>
                </div>
              </div>

              <div className="border border-slate-800/80 bg-slate-950/70 p-4 text-[11px] font-enHeading text-slate-300 leading-relaxed rounded-2xl space-y-1.5 shadow-inner">
                <div className="flex items-center justify-between text-slate-400 font-medium border-b border-slate-800/60 pb-1 text-[10px] uppercase tracking-wider">
                  <span><Translate en="Live Reservation Feed" ar="سجل الحجوزات المباشر" /></span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <Translate en="Synced" ar="مباشر" />
                  </span>
                </div>
                <div><Translate en="Plate:" ar="رقم اللوحة:" /> <span className="text-brand-accent font-bold">ق س د ٩٢٨١</span> · <Translate en="Bay:" ar="المكان:" /> <span className="text-white font-bold">Section A-12</span></div>
                <div><Translate en="Payment:" ar="الدفع:" /> <span className="text-emerald-400 font-bold"><Translate en="Online — Pre-settled" ar="إلكتروني — مدفوع مسبقاً" /></span></div>
                <div className="text-slate-400"><Translate en="Arrival:" ar="الوصول:" /> 02:00 – 06:00 · <Translate en="Guaranteed Spot" ar="مكان مؤكد" /></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
