'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    id: 'step-connect',
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5H14M17.5 10V14M6.5 10V17.5H14" strokeDasharray="1.5 1.5" />
      </svg>
    ),
    title: { en: 'Connect', ar: 'اتصل' },
    body: { en: 'Plug into your existing infrastructure. No new hardware required — we work with what you already have.', ar: 'نربط نظامنا ببنيتك التحتية الحالية. لا حاجة لأي أجهزة جديدة.' },
  },
  {
    id: 'step-track',
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2" /><path d="M6 18V12M10 18V8M14 18V14" strokeWidth="2" /><line x1="2" y1="6" x2="22" y2="6" strokeDasharray="2 2" />
      </svg>
    ),
    title: { en: 'Track', ar: 'تتبّع' },
    body: { en: 'Real availability — calculated live by comparing your total capacity against active reservations. Always accurate.', ar: 'سعة حقيقية — تُحسب لحظياً بمقارنة طاقتك الكلية بالحجوزات النشطة.' },
  },
  {
    id: 'step-manage',
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M6 9L9 12L6 15" strokeWidth="2" /><line x1="12" y1="15" x2="17" y2="15" strokeWidth="2" />
      </svg>
    ),
    title: { en: 'Manage', ar: 'أدر' },
    body: { en: 'Occupancy rates, peak hours, revenue reports — all visible the moment you open your dashboard. Zero manual counting.', ar: 'نسب الإشغال، أوقات الذروة، والإيرادات — جميعها في لوحة تحكمك فوراً.' },
  },
  {
    id: 'step-earn',
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 rtl:-scale-x-100" aria-hidden="true">
        <path d="M3 21H21" /><path d="M3 17L9 11L13 15L21 5" strokeWidth="2" /><polyline points="15 5 21 5 21 11" />
      </svg>
    ),
    title: { en: 'Earn', ar: 'اكسب' },
    body: { en: 'Payments collected, commissions deducted automatically. Your net revenue arrives without lifting a finger.', ar: 'المدفوعات تُجمع والعمولات تُخصم آلياً. إيراداتك الصافية تصلك مباشرة.' },
  },
];

export default function PlatformSection() {
  return (
    <section id="platform" className="py-24 relative border-t border-brand-secondary overflow-hidden" aria-labelledby="platform-heading">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-16 max-w-3xl">
            <h2 id="platform-heading" className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="Zero CapEx. Zero friction. Just revenue." ar="بدون معدات. بدون تعقيد. فقط إيرادات." />
            </h2>
            <p className="text-base text-text-secondary max-w-2xl">
              <Translate
                en="Most parking systems require massive upfront hardware investments. We don't. We connect seamlessly to your existing barrier gates and cameras, unlocking your facility's earning potential instantly."
                ar="تتطلب معظم أنظمة المواقف استثمارات ضخمة في البنية التحتية. نظامنا لا يحتاج لذلك، فهو يتكامل بسلاسة مع بواباتك وكاميراتك الحالية ليضاعف أرباح منشأتك فوراً."
              />
            </p>
          </div>
        </Reveal>

        {/* ── Step cards ─────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.1}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {steps.map((step, i) => (
              <li
                key={step.id}
                role="listitem"
                className="group relative border border-brand-secondary bg-brand-primary/80 p-8 flex flex-col hover:border-brand-accent/60 transition-all duration-300 cursor-default rounded-md"
              >
                {/* Top-edge cyan bar — slides in on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-md" aria-hidden="true" />

                {/* Step number */}
                <span className="text-[11px] font-enHeading tracking-[0.2em] text-text-secondary mb-5 tabular-nums" aria-label={`Step ${step.num}`}>
                  {step.num}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-accent/10 text-brand-accent rounded-md group-hover:bg-brand-accent/20 transition-colors">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-enHeading text-text-highlight mb-3">
                  <Translate en={step.title.en} ar={step.title.ar} />
                </h3>

                {/* Body */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  <Translate en={step.body.en} ar={step.body.ar} />
                </p>

                {/* Connector arrow (hidden on last card) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute ltr:-right-3 rtl:-left-3 top-1/2 -translate-y-1/2 z-10 text-brand-accent/30" aria-hidden="true">
                    <svg width="6" height="12" viewBox="0 0 6 12" className="rtl:rotate-180"><polyline points="0 0 6 6 0 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
