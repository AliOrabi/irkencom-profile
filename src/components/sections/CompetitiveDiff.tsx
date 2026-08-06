'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import SectionBadge from '@/components/ui/SectionBadge';

const oldWayPoints = [
  { id: 'ow-1', en: '✗ Buy and install sensors in every space', ar: '✗ شراء وتركيب مستشعرات في كل موقف' },
  { id: 'ow-2', en: '✗ Run cables and plan civil works',         ar: '✗ تمديد كابلات وأعمال مدنية مكلفة' },
  { id: 'ow-3', en: '✗ Pay for ongoing hardware maintenance',    ar: '✗ صيانة دورية مستمرة وتكاليف مرتفعة' },
  { id: 'ow-4', en: '✗ Inaccurate binary reports: available/not', ar: '✗ تقارير غير دقيقة: متاح أو غير متاح فقط' },
];

const irkenWayPoints = [
  { id: 'iw-1', en: '✓ Live capacity calculation — no sensors', ar: '✓ حساب السعة الفوري — بدون معدات' },
  { id: 'iw-2', en: '✓ Zero hardware installs or civil works',  ar: '✓ لا تركيبات ولا أعمال مدنية' },
  { id: 'iw-3', en: '✓ Automated revenue, direct to you',       ar: '✓ إيرادات آلية تصلك مباشرة' },
];

export default function CompetitiveDiff() {
  return (
    <section id="comparison" className="py-24 relative border-t border-brand-secondary overflow-hidden" aria-labelledby="comp-heading">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <SectionBadge en="Why Irken" ar="لماذا إركن" />
            <h2 id="comp-heading" className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="There's a smarter way to do this." ar="هناك دائماً طريقة أذكى." />
            </h2>
            <p className="text-base text-text-secondary">
              <Translate
                en="Traditional parking systems make you buy expensive hardware, then pay to maintain it. We took a different approach."
                ar="تجبرك أنظمة المواقف التقليدية على شراء معدات باهظة وتحمّل تكاليف صيانتها. نحن اتخذنا مساراً مختلفاً تماماً."
              />
            </p>
          </div>
        </Reveal>

        {/* ── Comparison grid ────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Old Way */}
            <div className="border border-brand-secondary bg-brand-primary/40 p-10 relative opacity-70 hover:opacity-80 transition-opacity duration-300 rounded-md">
              <div className="text-[10px] font-enHeading tracking-[0.2em] uppercase text-text-secondary mb-6 border border-brand-secondary inline-block px-3 py-1 rounded-md">
                <Translate en="The Old Way" ar="الطريقة القديمة" />
              </div>
              <h3 className="text-2xl font-enHeading text-text-primary mb-4">
                <Translate en="Sensors, cables, and constant maintenance." ar="مستشعرات، كابلات، وصيانة لا تنتهي." />
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                <Translate
                  en="You install sensors in every spot, run cables, hope they don't fail — and when they do, you call a technician."
                  ar="تقوم بتركيب مستشعرات في كل موقف وتمديد الكابلات وتأمل ألا تتعطل."
                />
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {oldWayPoints.map((pt) => (
                  <li key={pt.id} className="text-sm text-text-secondary font-enBody flex items-start gap-2">
                    <Translate en={pt.en} ar={pt.ar} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Irken Way */}
            <div className="border border-brand-accent bg-brand-primary/90 p-10 relative shadow-glow-accent rounded-md">
              {/* Cyan top bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-accent shadow-glow-accent-sm rounded-t-md" aria-hidden="true" />

              <div className="text-[10px] font-enHeading tracking-[0.2em] uppercase text-brand-accent mb-6 border border-brand-accent inline-block px-3 py-1 bg-brand-accent/10 rounded-md">
                <Translate en="The Irken Way" ar="طريقة إركن" />
              </div>
              <h3 className="text-2xl font-enHeading text-brand-accent mb-4">
                <Translate en="Real-time tracking. Nothing to maintain." ar="تتبع فوري. وبدون أي أعطال." />
              </h3>
              <p className="text-sm text-text-primary leading-relaxed mb-6">
                <Translate
                  en="We calculate available spaces by comparing your total capacity against active bookings — live, accurate, and hardware-free."
                  ar="نحسب المساحات المتاحة من خلال مطابقة السعة الإجمالية مع الحجوزات النشطة — فوري، دقيق، ودون أجهزة."
                />
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {irkenWayPoints.map((pt) => (
                  <li key={pt.id} className="text-sm text-brand-accent font-enBody flex items-start gap-2">
                    <Translate en={pt.en} ar={pt.ar} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
