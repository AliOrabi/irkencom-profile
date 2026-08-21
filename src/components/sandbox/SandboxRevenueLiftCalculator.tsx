'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Calculator, TrendingUp, Sparkles } from 'lucide-react';
import { PrimaryButton } from '@/components/ui/Buttons';
import { motion, AnimatePresence } from 'framer-motion';

export default function SandboxRevenueLiftCalculator() {
  const [bays, setBays] = useState(120);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [turnoverHours, setTurnoverHours] = useState(8);

  // Baseline Monthly Revenue Calculation
  // bays * hourlyRate * turnoverHours * 30 days * 55% current occupancy baseline
  const baselineMonthly = Math.round(bays * hourlyRate * turnoverHours * 30 * 0.55);
  
  // Irken Lift Calculation (+38% average increase through advance reservations and off-peak filling)
  const additionalMonthlyLift = Math.round(baselineMonthly * 0.38);
  const totalProjectedMonthly = baselineMonthly + additionalMonthlyLift;
  const annualizedLift = additionalMonthlyLift * 12;

  return (
    <section id="yield-calculator" className="py-24 px-6 max-w-[1200px] mx-auto w-full overflow-hidden">
      <Reveal>
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] relative overflow-hidden">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 mb-10 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold font-enHeading uppercase tracking-widest mb-3 border border-brand-accent/20">
                <Calculator className="w-3.5 h-3.5" />
                <Translate en="Operator Yield Simulator" ar="حاسبة مضاعفة العائد للمشغلين" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight">
                <Translate en="Estimate Your Facility's Revenue Lift" ar="احسب الزيادة المتوقعة في إيرادات موقفك" />
              </h3>
            </div>
            <div className="text-xs text-slate-500 max-w-xs leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60">
              <Translate 
                en="Simulated algorithm based on actual empirical data from facilities digitized on the Irken network in Egypt." 
                ar="نموذج حسابي مبني على بيانات واقعية للمواقف الرقمية المنضمة لشبكة حجز إركن في مصر." 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
            
            {/* ── Left: Apple HIG Tactile Sliders ─────────────────────────── */}
            <div className="space-y-8">
              
              {/* Slider 1: Total Bays */}
              <div className="bg-slate-50/80 p-5 rounded-3xl border border-slate-200/60 hover:border-brand-accent/30 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-bold font-enHeading text-slate-800 uppercase tracking-wider">
                    <Translate en="Number of Parking Bays (Capacity)" ar="عدد المساحات (السعة الإجمالية)" />
                  </label>
                  <span className="text-base sm:text-lg font-bold font-enHeading text-brand-accent px-3 py-1 bg-white border border-brand-accent/30 rounded-full shadow-sm tabular-nums">
                    {bays} <Translate en="Spaces" ar="موقف" />
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={bays}
                  onChange={(e) => setBays(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>20 Bays</span>
                  <span>250 Bays</span>
                  <span>500+ Bays</span>
                </div>
              </div>

              {/* Slider 2: Average Hourly Rate */}
              <div className="bg-slate-50/80 p-5 rounded-3xl border border-slate-200/60 hover:border-brand-accent/30 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-bold font-enHeading text-slate-800 uppercase tracking-wider">
                    <Translate en="Average Hourly Rate (EGP)" ar="متوسط سعر الساعة (جنيه)" />
                  </label>
                  <span className="text-base sm:text-lg font-bold font-enHeading text-brand-accent px-3 py-1 bg-white border border-brand-accent/30 rounded-full shadow-sm tabular-nums">
                    {hourlyRate} EGP
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>10 EGP</span>
                  <span>50 EGP</span>
                  <span>100 EGP</span>
                </div>
              </div>

              {/* Slider 3: Daily Active Operating Hours */}
              <div className="bg-slate-50/80 p-5 rounded-3xl border border-slate-200/60 hover:border-brand-accent/30 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-bold font-enHeading text-slate-800 uppercase tracking-wider">
                    <Translate en="Active Operating Hours Per Day" ar="ساعات التشغيل اليومية" />
                  </label>
                  <span className="text-base sm:text-lg font-bold font-enHeading text-brand-accent px-3 py-1 bg-white border border-brand-accent/30 rounded-full shadow-sm tabular-nums">
                    {turnoverHours} <Translate en="Hours" ar="ساعات" />
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  step="2"
                  value={turnoverHours}
                  onChange={(e) => setTurnoverHours(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>4 hrs (Short Shift)</span>
                  <span>12 hrs (Standard)</span>
                  <span>24 hrs (Full Day)</span>
                </div>
              </div>
            </div>

            {/* ── Right: Results macOS / iOS Style Telemetry Box ──────────── */}
            <div className="bg-slate-950 text-white rounded-[2.2rem] p-7 sm:p-9 flex flex-col justify-between shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-2 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <Translate en="Projected Monthly Revenue Lift" ar="الزيادة الشهرية المتوقعة" />
                </div>
                
                {/* Additional Lift Display with Apple-smooth transition */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-enHeading text-emerald-400 mb-1 tracking-tight tabular-nums">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={additionalMonthlyLift}
                      initial={{ opacity: 0.8, y: -2 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      +{additionalMonthlyLift.toLocaleString()} EGP
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="text-xs text-slate-400 mb-6 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                  <Translate en="Extra recurring revenue from advance bookings & off-peak fills" ar="إيراد إضافي متكرر من الحجز المسبق وشغل فترات الركود" />
                </div>

                {/* Visual Occupancy Bar Comparison */}
                <div className="space-y-2 mb-6 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex justify-between text-[11px] text-slate-300 font-semibold">
                    <span><Translate en="Facility Occupancy Lift" ar="معدل نمو الإشغال" /></span>
                    <span className="text-emerald-400 font-bold">55% → 93% (+38%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="h-full bg-slate-600 rounded-l-full" style={{ width: '55%' }} title="Baseline: 55%" />
                    <div className="h-full bg-emerald-400 rounded-r-full animate-pulse" style={{ width: '38%' }} title="Irken Lift: +38%" />
                  </div>
                </div>

                {/* Tabular Telemetry breakdown */}
                <div className="space-y-3 py-4 border-y border-slate-800 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span><Translate en="Estimated Current Baseline" ar="الإيراد الحالي التقديري" /></span>
                    <span className="font-mono text-slate-200 tabular-nums">{baselineMonthly.toLocaleString()} EGP</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span><Translate en="Annualized Revenue Growth" ar="النمو السنوي الإجمالي" /></span>
                    <span className="font-mono tabular-nums">+{annualizedLift.toLocaleString()} EGP / yr</span>
                  </div>
                  <div className="flex justify-between text-white font-bold pt-2 border-t border-slate-800/80">
                    <span><Translate en="Total Projected Monthly" ar="إجمالي الإيراد الشهري المتوقع" /></span>
                    <span className="font-mono text-emerald-400 text-sm tabular-nums">{totalProjectedMonthly.toLocaleString()} EGP</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-2 relative z-10">
                <PrimaryButton
                  en="Claim This Yield Lift"
                  ar="ابدأ بتحقيق هذا العائد"
                  href="#operator-onboard"
                  className="w-full py-4 text-xs shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
                />
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
