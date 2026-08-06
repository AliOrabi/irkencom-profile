'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import SectionBadge from '@/components/ui/SectionBadge';

const kpis = [
  { id: 'kpi-1', value: '−23%', label: { en: 'Traffic Congestion', ar: 'تقليل الازدحام' } },
  { id: 'kpi-2', value: '< 3s', label: { en: 'Time to Find a Spot', ar: 'وقت إيجاد موقف' } },
  { id: 'kpi-3', value: '0',    label: { en: 'Hardware Required',   ar: 'أجهزة مطلوبة' } },
];

export default function MobilitySection() {
  return (
    <section id="mobility" className="py-24 relative border-t border-brand-secondary overflow-hidden" aria-labelledby="mobility-heading">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-16 max-w-3xl">
            <SectionBadge en="Urban Impact" ar="الأثر الحضري" />
            <h2 id="mobility-heading" className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="One driver parked = one less car circling the block." ar="سيارة واحدة تم إيقافها = سيارة أقل تجوب الشوارع بحثاً عن موقف." />
            </h2>
            <p className="text-base text-text-secondary max-w-2xl">
              <Translate
                en="When drivers find their spot in seconds, traffic eases, emissions drop, and city streets breathe again. That's what a connected parking network does."
                ar="عندما يجد السائق موقفه في ثوانٍ، تقل الكثافة المرورية وينخفض الضغط على البنية التحتية."
              />
            </p>
          </div>
        </Reveal>

        {/* ── Flow diagram ───────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.12}>
          <div
            className="flex flex-col lg:flex-row items-stretch justify-between gap-4 p-8 border border-brand-secondary bg-brand-primary/50 relative overflow-hidden group rounded-md"
            role="img"
            aria-label="Irken Smart Network flow: idle space connects to platform, driver finds spot instantly"
          >
            {/* Animated scanline */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent group-hover:animate-scanline pointer-events-none rounded-md" aria-hidden="true" />

            {/* Node 1 — Idle Space */}
            <div className="flex flex-col items-center text-center p-6 border border-brand-secondary bg-brand-primary/90 w-full lg:flex-1 z-10 opacity-75 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-brand-accent bg-brand-accent/10 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" />
                </svg>
              </div>
              <div className="font-enHeading text-sm text-text-highlight mb-1">
                <Translate en="Idle Parking Space" ar="موقف فارغ وغير مستغل" />
              </div>
              <div className="text-[10px] text-text-secondary uppercase tracking-widest">
                <Translate en="Lost Revenue, Every Hour" ar="خسارة بتتكرر كل ساعة" />
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center justify-center px-4 z-10 text-brand-accent/50 shrink-0" aria-hidden="true">
              <svg width="40" height="24" viewBox="0 0 40 24" className="rtl:-scale-x-100">
                <line x1="0" y1="12" x2="40" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite" />
                </line>
                <polyline points="32 6 38 12 32 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Node 2 — Irken Hub (highlighted) */}
            <div className="flex flex-col items-center text-center p-8 border border-brand-accent bg-brand-primary w-full lg:flex-[1.5] shadow-glow-accent z-10 relative rounded-md">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-accent shadow-glow-accent-sm rounded-t-md" aria-hidden="true" />
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-brand-accent bg-brand-accent/20 rounded-full">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                  <polyline points="2 8.5 12 15.5 22 8.5" />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                </svg>
              </div>
              <div className="font-enHeading text-lg text-brand-accent mb-2">
                <Translate en="Irken Smart Network" ar="شبكة إركن الذكية" />
              </div>
              <div className="text-[10px] text-text-secondary uppercase tracking-widest">
                <Translate en="Real-Time. Accurate. Always On." ar="لحظية. دقيقة. لا تتوقف." />
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center justify-center px-4 z-10 text-brand-accent/50 shrink-0" aria-hidden="true">
              <svg width="40" height="24" viewBox="0 0 40 24" className="rtl:-scale-x-100">
                <line x1="0" y1="12" x2="40" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite" begin="0.4s" />
                </line>
                <polyline points="32 6 38 12 32 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Node 3 — Driver */}
            <div className="flex flex-col items-center text-center p-6 border border-brand-secondary bg-brand-primary/90 w-full lg:flex-1 z-10 opacity-75 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-brand-accent bg-brand-accent/10 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" strokeDasharray="4 4" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="font-enHeading text-sm text-text-highlight mb-1">
                <Translate en="Driver Finds a Spot. Instantly." ar="السائق يلاقي موقفه. فوراً." />
              </div>
              <div className="text-[10px] text-text-secondary uppercase tracking-widest">
                <Translate en="Less Traffic. More Revenue." ar="أقل ازدحام. أكثر إيرادات." />
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── KPI row ────────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.2}>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.id}
                className="border border-brand-secondary bg-brand-primary/60 px-6 py-5 flex flex-col items-center text-center hover:border-brand-accent/40 transition-colors duration-200 rounded-md"
              >
                <dt className="text-[10px] font-enHeading uppercase tracking-[0.15em] text-text-secondary order-2 mt-1">
                  <Translate en={kpi.label.en} ar={kpi.label.ar} />
                </dt>
                <dd className="text-2xl md:text-3xl font-bold font-enHeading text-brand-accent tabular-nums order-1">
                  <span dir="ltr" className="inline-block">{kpi.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
