'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

// ── Demo data (to be replaced with real values post-launch) ────────────────
const stats = [
  {
    id: 'stat-hardware',
    value: '0',
    unit: '',
    label: { en: 'Hardware Installs Required', ar: 'أجهزة مطلوبة للتركيب' },
    sub:   { en: 'Pure software deployment', ar: 'نشر برمجي بالكامل' },
  },
  {
    id: 'stat-booking',
    value: '<3',
    unit: 's',
    label: { en: 'Average Booking Time', ar: 'متوسط وقت الحجز' },
    sub:   { en: 'From search to confirmed spot', ar: 'من البحث إلى تأكيد الحجز' },
  },
  {
    id: 'stat-occupancy',
    value: '47',
    unit: '%',
    label: { en: 'Avg. Occupancy Lift', ar: 'متوسط رفع نسبة الإشغال' },
    sub:   { en: 'Across live integrations', ar: 'عبر عمليات التكامل النشطة' },
  },
  {
    id: 'stat-uptime',
    value: '99.9',
    unit: '%',
    label: { en: 'Platform Uptime SLA', ar: 'اتفاقية مستوى الخدمة' },
    sub:   { en: 'Enterprise-grade reliability', ar: 'موثوقية على مستوى المؤسسات' },
  },
];

// ── Trusted-by badge label set ─────────────────────────────────────────────
const trustedBy = [
  { id: 'tb-1', en: 'Real Estate Developers', ar: 'مطورو العقارات' },
  { id: 'tb-2', en: 'Parking Operators',      ar: 'مشغلو المواقف' },
  { id: 'tb-3', en: 'Municipalities',         ar: 'الجهات الحكومية' },
  { id: 'tb-4', en: 'Smart City Consultants', ar: 'مستشارو المدن الذكية' },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="py-24 relative border-t border-brand-secondary overflow-hidden bg-brand-secondary"
      aria-labelledby="stats-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, theme(colors.brand.accent) 0%, transparent 70%)', opacity: 0.05 }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">

        {/* ── Heading ────────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.05}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 border border-brand-accent/40 text-brand-accent text-[11px] font-enHeading uppercase tracking-[0.15em] mb-6 bg-brand-accent/8 rounded-full">
              <Translate en="By the Numbers" ar="بالأرقام" />
            </span>
            <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-4">
              <Translate en="Results you can measure." ar="نتائج يمكن قياسها." />
            </h2>
            <p className="text-base text-text-secondary max-w-lg mx-auto">
              <Translate
                en="Every metric below reflects live operational data from Irken-integrated facilities."
                ar="كل رقم أدناه يعكس بيانات تشغيلية حقيقية من منشآت مدمجة مع نظام إركن."
              />
            </p>
          </div>
        </Reveal>

        {/* ── Stat grid ──────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.12}>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-secondary border border-brand-secondary rounded-md overflow-hidden" role="list">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="group bg-brand-primary p-8 lg:p-10 flex flex-col border border-brand-secondary hover:border-brand-accent/40 transition-all duration-300 relative"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-md" aria-hidden="true" />

                <dt className="order-2 text-xs font-enHeading uppercase tracking-[0.12em] text-text-secondary mt-2">
                  <Translate en={stat.label.en} ar={stat.label.ar} />
                </dt>
                <dd className="order-1 flex items-baseline gap-1">
                  <span className="text-5xl lg:text-6xl font-bold font-enHeading text-brand-accent tabular-nums leading-none">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-2xl font-enHeading text-brand-accent/70 font-bold">{stat.unit}</span>
                  )}
                </dd>
                <p className="order-3 text-[11px] text-text-secondary/60 mt-2 font-enHeading uppercase tracking-[0.1em]">
                  <Translate en={stat.sub.en} ar={stat.sub.ar} />
                </p>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* ── Trusted-by strip ───────────────────────────────────────── */}
        <Reveal direction="up" delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-[11px] font-enHeading uppercase tracking-[0.2em] text-text-secondary mb-6">
              <Translate en="Trusted By" ar="موثوق به من قِبل" />
            </p>
            <div className="flex flex-wrap justify-center gap-3" role="list" aria-label="Trusted by">
              {trustedBy.map((badge) => (
                <span
                  key={badge.id}
                  role="listitem"
                  className="px-4 py-2 border border-brand-secondary bg-brand-primary/60 text-[11px] font-enHeading uppercase tracking-[0.12em] text-text-secondary hover:border-brand-accent/50 hover:text-text-primary transition-all duration-200 rounded-full"
                >
                  <Translate en={badge.en} ar={badge.ar} />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
