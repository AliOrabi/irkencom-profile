import React from 'react';
import SandboxHeader from '@/components/sandbox/SandboxHeader';
import SandboxHero from '@/components/sandbox/SandboxHero';
import SandboxOperatorValue from '@/components/sandbox/SandboxOperatorValue';
import SandboxDualProducts from '@/components/sandbox/SandboxDualProducts';
import SandboxRevenueLiftCalculator from '@/components/sandbox/SandboxRevenueLiftCalculator';
import SandboxTargetAudiences from '@/components/sandbox/SandboxTargetAudiences';
import SandboxOperatorForm from '@/components/sandbox/SandboxOperatorForm';
import Translate from '@/components/ui/Translate';
import LocalizedLink from '@/components/ui/LocalizedLink';
import { ExternalLink, Radio } from 'lucide-react';

export default function SandboxPage() {
  return (
    <div className="relative bg-white min-h-screen selection:bg-brand-accent/20 selection:text-brand-accent">
      
      {/* ── Dynamic Island Status Banner (Sticky Top) ──────────────────── */}
      <div className="sticky top-0 z-[60] bg-slate-950/95 backdrop-blur-md text-white px-4 py-2 text-xs border-b border-slate-800/80 shadow-md">
        <div className="flex items-center gap-3 max-w-[1280px] mx-auto w-full justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Radio className="w-3.5 h-3.5 text-brand-accent hidden sm:inline" />
            <span className="font-bold font-enHeading uppercase tracking-widest text-brand-accent text-[11px]">
              <Translate en="Online Reservation Sandbox" ar="بيئة تجربة شبكة الحجز الإلكتروني" />
            </span>
            <span className="text-slate-400 hidden md:inline text-[11px] font-medium border-l border-slate-700 pl-2.5 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-2.5">
              <Translate 
                en="Live simulation of Egypt's parking marketplace & operator control panel." 
                ar="محاكاة حية لسوق مواقف السيارات الإلكتروني ولوحة تحكم المشغلين في مصر." 
              />
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href="https://irken.eg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-brand-accent hover:text-brand-accent/80 transition-colors text-[11px]"
            >
              <span>irken.eg</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <LocalizedLink 
              href="/"
              className="text-[11px] font-bold text-slate-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              <Translate en="Back to Live Home" ar="العودة للرئيسية الحالية" />
            </LocalizedLink>
          </div>
        </div>
      </div>

      {/* ── Sandbox Dedicated Frosted Glass Navigation Header ─────────── */}
      <SandboxHeader />

      {/* ── Main Landing Flow (Strictly in Sandbox) ───────────────────────── */}
      <main className="pt-16">
        {/* 1. Hero: Demand Generation & Digital Reservation Network */}
        <SandboxHero />

        {/* 2. Operator Core Value: Fill Empty Bays, Map Discoverability, Advance Cashflow */}
        <SandboxOperatorValue />

        {/* 3. Dual Products: Operator Control Panel (Free vs Pro) + Driver App irken.eg */}
        <SandboxDualProducts />

        {/* 4. Interactive Operator Yield & Revenue Lift Simulator */}
        <SandboxRevenueLiftCalculator />

        {/* 5. Target Audiences: Licensed Operators, Parking Investors, Valet Pros */}
        <SandboxTargetAudiences />

        {/* 6. Operator Onboarding & Facility Listing Form */}
        <SandboxOperatorForm />
      </main>
    </div>
  );
}
