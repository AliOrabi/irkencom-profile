'use client';

import React, { useState, useEffect } from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';
import { 
  Search, 
  CalendarCheck, 
  ArrowUpRight,
  Activity,
  ShieldCheck
} from 'lucide-react';
import Image from 'next/image';

export default function SandboxHero() {
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
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20 z-0 pointer-events-none"
        poster="/videos/irken-hero-poster.webp"
      >
        <source src="/videos/irken-hero-bg.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A1118]/90 via-[#0A1118]/85 to-[#0A1118]/95 z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-accent/15 blur-[120px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto my-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex flex-col items-start">
          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-2 border border-brand-accent/40 bg-brand-accent/10 px-4 py-1.5 font-enHeading text-xs text-brand-accent uppercase tracking-widest mb-6 backdrop-blur-xl rounded-full shadow-[0_2px_10px_rgba(86,155,170,0.15)]">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <Translate
                en="Egypt's Digital Parking Reservation Network"
                ar="شبكة حجز أماكن الركنة الرقمية في مصر"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-enHeading text-white leading-[1.15] mb-6 tracking-tight"
            >
              <Translate
                en="Transform Vacant Parking Spaces into Guaranteed Digital Revenue."
                ar="حوّل أماكن الركنة الفاضية في جراجك لدخل يومي مضمون."
              />
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl font-normal leading-relaxed">
              <Translate
                en="When drivers search for parking near your zone on irken.eg, your facility appears directly for instant pre-arrival reservation and secure digital payment — turning empty off-peak bays into steady cash flow without buying any new hardware."
                ar="لما السواقين يدوروا على ركنة قريبة من وجهتهم على تطبيق irken.eg، جراجك بيظهرلهم مباشرة للحجز المسبق والدفع الإلكتروني — عشان تستفيد من الأماكن الفاضية وتضمن دخل يومي ثابت من غير ما تشتري أي أجهزة جديدة."
              />
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <PrimaryButton
                en="List Your Parking Facility"
                ar="سجل جراجك وابدأ الحجز"
                href="#operator-onboard"
                className="w-full sm:w-auto py-3.5 px-8 text-xs font-semibold shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
              />
              <SecondaryButton
                en="Explore Operator Control Panel"
                ar="استكشف لوحة تحكم المشغلين"
                href="#control-panel"
                className="w-full sm:w-auto py-3.5 px-6 text-xs text-white border-white/20 hover:border-brand-accent hover:bg-white/10 active:scale-[0.98]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-brand-accent" />
                <span><Translate en="In-App Driver Matching" ar="ظهور مباشر للسواقين في منطقتك" /></span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-brand-accent" />
                <span><Translate en="Pre-Arrival Driver Reservations" ar="حجوزات مسبقة ومضمونة" /></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span><Translate en="Secure Payment Gateway" ar="بوابة دفع إلكترونية آمنة ومعتمدة" /></span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="w-full">
          <div className="relative z-10 w-full max-w-lg mx-auto">
            <div 
              className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 to-teal-500/20 rounded-[2.2rem] blur-xl opacity-60 pointer-events-none"
              aria-hidden="true" 
            />
            
            <div className="relative border border-slate-700/60 bg-[#0F172A]/90 backdrop-blur-2xl overflow-hidden p-7 sm:p-8 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] shadow-inner">
              <Image 
                src="/newiRkenLogo.png" 
                alt="" 
                width={180} 
                height={180} 
                className="absolute -bottom-[10%] -right-[5%] w-[180px] opacity-[0.03] pointer-events-none" 
              />
              
              <div className="flex justify-between items-start border-b border-slate-800/80 pb-5 mb-6">
                <div>
                  <div className="text-[10px] font-bold font-enHeading text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-brand-accent" />
                    <Translate en="Irken Operator Control Panel" ar="لوحة تحكم مشغلي إركن" />
                  </div>
                  <h3 className="font-enHeading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>Cairo Downtown Facility #04</span>
                  </h3>
                </div>
                <div className="text-[10px] font-enHeading text-brand-accent flex items-center gap-1.5 uppercase tracking-wider bg-brand-accent/15 px-3 py-1 rounded-full border border-brand-accent/30 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 
                  <Translate en="LIVE ON IRKEN.EG" ar="متصل بالتطبيق IRKEN.EG" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-brand-accent/30 p-4 bg-brand-accent/10 rounded-2xl backdrop-blur-md">
                  <div className="text-[10px] font-enHeading text-brand-accent uppercase tracking-wider mb-1.5">
                    <Translate en="Advance Reservations" ar="حجوزات مسبقة ومؤكدة" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-enHeading text-brand-accent mb-1 tracking-tight tabular-nums">
                    {activeReservations.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-300 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                    <Translate en="Drivers arriving today" ar="سواقين حاجزين النهاردة" />
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
                    <Translate en="via irken.eg driver app" ar="على تطبيق السائقين irken.eg" />
                  </div>
                </div>
              </div>

              <div className="border border-slate-800/80 bg-slate-950/70 p-4 text-[11px] font-mono text-slate-300 leading-relaxed rounded-2xl space-y-1.5 shadow-inner">
                <div className="flex items-center justify-between text-slate-400 font-medium border-b border-slate-800/60 pb-1 text-[10px]">
                  <span>DISPATCH TELEMETRY // REAL-TIME</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SYNCED
                  </span>
                </div>
                <div>PLATE: <span className="text-brand-accent font-bold">ق س د ٩٢٨١</span> · BAY: <span className="text-white font-bold">SECTION A-12</span></div>
                <div>PAYMENT: <span className="text-emerald-400 font-bold">ONLINE SECURE PRE-SETTLED</span></div>
                <div className="text-slate-400">ARRIVAL WINDOW: 14:00 - 18:00 (GUARANTEED SPOT)</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
