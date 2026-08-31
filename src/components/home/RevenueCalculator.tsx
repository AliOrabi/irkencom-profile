'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Calculator, TrendingUp, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

type LocationTier = 'high_density' | 'commercial' | 'residential';

export default function RevenueCalculator() {
  const [bays, setBays] = useState(60);
  const [hourlyRate, setHourlyRate] = useState(20);
  const [turnoverHours, setTurnoverHours] = useState(10);
  const [locationTier, setLocationTier] = useState<LocationTier>('high_density');

  // Location tier multipliers based on Egyptian urban density & parking demand
  const tierConfig: Record<LocationTier, {
    liftPercent: number;
    baselineOccupancy: number;
    nameEn: string;
    nameAr: string;
    areasEn: string;
    areasAr: string;
  }> = {
    high_density: {
      liftPercent: 35,
      baselineOccupancy: 50,
      nameEn: "High-Traffic Commercial Hubs",
      nameAr: "مناطق تجارية ومحاور رئيسية مزدحمة",
      areasEn: "Downtown, Tahrir, Mohandiseen, Nasr City, Dokki",
      areasAr: "وسط البلد، التحرير، المهندسين، مدينة نصر، الدقي"
    },
    commercial: {
      liftPercent: 25,
      baselineOccupancy: 45,
      nameEn: "Business & Shopping Districts",
      nameAr: "مناطق شركات ومولات وأعمال",
      areasEn: "New Cairo (5th Settlement), Sheikh Zayed, Maadi, Heliopolis",
      areasAr: "التجمع الخامس، الشيخ زايد، المعادي، مصر الجديدة"
    },
    residential: {
      liftPercent: 18,
      baselineOccupancy: 40,
      nameEn: "Residential & Mixed-Use Areas",
      nameAr: "مناطق سكنية ومختلطة",
      areasEn: "Shobra, Haram, Faisal, Giza Residential, 6th October",
      areasAr: "شبرا، الهرم، فيصل، مناطق الجيزة، ٦ أكتوبر"
    }
  };

  const currentTier = tierConfig[locationTier];

  // Baseline Monthly Revenue: bays * hourlyRate * operatingHours * 30 days * baselineOccupancy
  const baselineMonthly = Math.round(
    bays * hourlyRate * turnoverHours * 30 * (currentTier.baselineOccupancy / 100)
  );

  // Irken Lift Calculation: baseline * liftPercent
  const additionalMonthlyLift = Math.round(
    baselineMonthly * (currentTier.liftPercent / 100)
  );
  
  const totalProjectedMonthly = baselineMonthly + additionalMonthlyLift;
  const annualizedLift = additionalMonthlyLift * 12;
  const projectedOccupancy = currentTier.baselineOccupancy + currentTier.liftPercent;

  const handleApplyToForm = () => {
    const onboardSection = document.getElementById('operator-onboard');
    if (onboardSection) {
      onboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="yield-calculator" className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto w-full overflow-hidden">
      <Reveal>
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] relative overflow-hidden">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 mb-10 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold font-enHeading uppercase tracking-widest mb-3 border border-brand-accent/20">
                <Calculator className="w-3.5 h-3.5" />
                <Translate en="Operator Yield Simulator" ar="حاسبة مضاعفة العائد للمشغلين" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight rtl:leading-[1.3]">
                <Translate en="Estimate Your Facility's Revenue Lift" ar="احسب الزيادة المتوقعة في إيرادات موقفك" />
              </h3>
            </div>
            <div className="text-xs text-slate-600 max-w-xs leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80 rtl:leading-[1.6]">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                <Translate en="Cairo & Giza Ground Reality" ar="تقدير واقعي لسوق القاهرة والجيزة" />
              </div>
              <Translate 
                en="Simulated numbers reflect actual driver search demand and off-peak bay filling in your district." 
                ar="الأرقام مبنية على حركة طلب السائقين ومعدلات شغل الأماكن الفاضية في أوقات الركود بحيّك." 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
            
            {/* ── Left: Controls & Realistic District Selector ─────────────── */}
            <div className="space-y-6">
              
              {/* District & Demand Profile Presets */}
              <div className="bg-slate-50/90 p-5 rounded-3xl border border-slate-200/80 space-y-3">
                <label className="text-xs font-bold font-enHeading text-slate-800 uppercase tracking-wider block">
                  <Translate en="Select Facility Location / Demand Profile" ar="اختر موقع جراجك وطبيعة المنطقة" />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(['high_density', 'commercial', 'residential'] as LocationTier[]).map((tierKey) => {
                    const tier = tierConfig[tierKey];
                    const isSelected = locationTier === tierKey;
                    return (
                      <button
                        key={tierKey}
                        type="button"
                        onClick={() => setLocationTier(tierKey)}
                        className={`p-3.5 rounded-2xl text-left rtl:text-right border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-white border-brand-accent text-brand-accent shadow-sm ring-2 ring-brand-accent/20'
                            : 'bg-white/60 border-slate-200/90 text-slate-700 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold font-enHeading mb-1 rtl:leading-[1.4]">
                            <Translate en={tier.nameEn} ar={tier.nameAr} />
                          </div>
                          <div className="text-[10px] text-slate-500 line-clamp-2 leading-tight">
                            <Translate en={tier.areasEn} ar={tier.areasAr} />
                          </div>
                        </div>
                        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                          <span className="text-emerald-600">+{tier.liftPercent}% <Translate en="Lift" ar="زيادة" /></span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider 1: Total Bays */}
              <div className="bg-slate-50/80 p-5 rounded-3xl border border-slate-200/60 hover:border-brand-accent/30 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-bold font-enHeading text-slate-800 uppercase tracking-wider">
                    <Translate en="Number of Parking Bays (Capacity)" ar="عدد المساحات (السعة الإجمالية)" />
                  </label>
                  <span className="text-base font-bold font-enHeading text-brand-accent px-3.5 py-1 bg-white border border-brand-accent/30 rounded-full shadow-sm tabular-nums">
                    {bays} <Translate en="Spaces" ar="موقف" />
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="10"
                  value={bays}
                  aria-label={`Number of parking bays: ${bays}`}
                  onChange={(e) => setBays(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>20 <Translate en="Bays" ar="موقف" /></span>
                  <span>150 <Translate en="Bays" ar="موقف" /></span>
                  <span>300+ <Translate en="Bays" ar="موقف" /></span>
                </div>
              </div>

              {/* Slider 2: Average Hourly Rate (10 to 50 EGP/hr) */}
              <div className="bg-slate-50/80 p-5 rounded-3xl border border-slate-200/60 hover:border-brand-accent/30 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-bold font-enHeading text-slate-800 uppercase tracking-wider">
                    <Translate en="Average Hourly Rate (EGP)" ar="متوسط سعر الساعة (جنيه)" />
                  </label>
                  <span className="text-base font-bold font-enHeading text-brand-accent px-3.5 py-1 bg-white border border-brand-accent/30 rounded-full shadow-sm tabular-nums">
                    {hourlyRate} EGP
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={hourlyRate}
                  aria-label={`Average hourly rate: ${hourlyRate} EGP`}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>10 EGP</span>
                  <span>25 EGP (Cairo Avg)</span>
                  <span>50 EGP</span>
                </div>
              </div>

              {/* Slider 3: Daily Active Operating Hours */}
              <div className="bg-slate-50/80 p-5 rounded-3xl border border-slate-200/60 hover:border-brand-accent/30 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-bold font-enHeading text-slate-800 uppercase tracking-wider">
                    <Translate en="Daily Operating / Active Hours" ar="ساعات التشغيل اليومية" />
                  </label>
                  <span className="text-base font-bold font-enHeading text-brand-accent px-3.5 py-1 bg-white border border-brand-accent/30 rounded-full shadow-sm tabular-nums">
                    {turnoverHours} <Translate en="Hrs/Day" ar="ساعة/يوم" />
                  </span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="24"
                  step="2"
                  value={turnoverHours}
                  aria-label={`Daily operating hours: ${turnoverHours}`}
                  onChange={(e) => setTurnoverHours(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>6 <Translate en="Hrs" ar="ساعات" /></span>
                  <span>12 <Translate en="Hrs (Standard)" ar="ساعة (المعتاد)" /></span>
                  <span>24 <Translate en="Hrs (24/7 Facility)" ar="ساعة (طوال اليوم)" /></span>
                </div>
              </div>

            </div>

            {/* ── Right: Clear Breakdown & Impact Card ───────────────────── */}
            <div className="relative">
              <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white p-8 sm:p-10 rounded-[2.2rem] shadow-2xl border border-slate-700/80 relative overflow-hidden flex flex-col justify-between">
                
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/15 blur-[80px] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-6">
                    <span className="text-xs font-bold font-enHeading text-slate-400 uppercase tracking-wider">
                      <Translate en="Projected Monthly Gain" ar="صافي الزيادة المتوقعة شهرياً" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +{currentTier.liftPercent}% Lift
                    </span>
                  </div>

                  {/* Big Number: Net Additional Revenue */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold font-enHeading text-brand-accent uppercase tracking-widest mb-1">
                      <Translate en="Additional Monthly Earnings" ar="أرباح إضافية صافية كل شهر" />
                    </div>
                    <div className="text-4xl sm:text-5xl font-black font-enHeading text-emerald-400 tracking-tight tabular-nums flex items-baseline gap-2">
                      <span>+{additionalMonthlyLift.toLocaleString()}</span>
                      <span className="text-sm sm:text-base font-normal text-slate-300">EGP / <Translate en="mo" ar="شهر" /></span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      ≈ +{annualizedLift.toLocaleString()} EGP <Translate en="annualized additional revenue" ar="زيادة سنوية إضافية في الدخل" />
                    </div>
                  </div>

                  {/* Concrete Breakdown Metrics */}
                  <div className="space-y-3 pt-6 border-t border-slate-700/80 mb-8 text-xs">
                    <div className="flex justify-between items-center text-slate-300">
                      <span><Translate en="Baseline Current Revenue:" ar="الإيراد الحالي التقديري:" /></span>
                      <span className="font-mono font-bold text-slate-200 tabular-nums">
                        {baselineMonthly.toLocaleString()} EGP
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span><Translate en="Total Projected Revenue:" ar="إجمالي الإيراد بعد إركن:" /></span>
                      <span className="font-mono font-bold text-brand-accent tabular-nums">
                        {totalProjectedMonthly.toLocaleString()} EGP
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span><Translate en="Estimated Occupancy Shift:" ar="تغير نسبة الإشغال:" /></span>
                      <span className="font-mono font-bold text-emerald-400">
                        {currentTier.baselineOccupancy}% → {projectedOccupancy}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link to Onboard Form */}
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full py-4 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold font-enHeading text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/30 cursor-pointer active:scale-[0.98]"
                >
                  <span><Translate en="Lock in Your Facility's Lift" ar="سجل موقفك وضاعف إيرادك الآن" /></span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>

              </div>
            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}
