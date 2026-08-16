'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { X, Check } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

const oldWayPoints = [
  { id: 'ow-1', en: 'Heavy capital expenditure on hardware', ar: 'نفقات رأسمالية باهظة على المعدات' },
  { id: 'ow-2', en: 'Expensive civil works and cabling',         ar: 'أعمال مدنية وتمديد كابلات مكلفة' },
  { id: 'ow-3', en: 'Ongoing maintenance fees and downtime',    ar: 'رسوم صيانة مستمرة وفترات توقف' },
  { id: 'ow-4', en: 'Revenue loss during installation', ar: 'خسارة إيرادات أثناء فترة التركيب' },
];

const irkenWayPoints = [
  { id: 'iw-1', en: 'Asset-light integration — Zero CapEx', ar: 'تكامل برمجي مرن — بدون نفقات رأسمالية' },
  { id: 'iw-2', en: 'Plug into existing barrier gates & cameras',  ar: 'ربط مباشر مع البوابات والكاميرات الحالية' },
  { id: 'iw-3', en: 'Maximize yield from day one',       ar: 'تعظيم العوائد من اليوم الأول' },
];

export default function CompetitiveDiff() {
  return (
    <section id="comparison" className="py-24 relative border-t border-brand-secondary overflow-hidden" aria-labelledby="comp-heading">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 id="comp-heading" className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="There's a smarter way to do this." ar="هناك دائماً طريقة أذكى." />
            </h2>
            <p className="text-base text-text-secondary">
              <Translate
                en="Traditional parking systems drain your budget with heavy hardware and maintenance costs. We took a Zero CapEx approach."
                ar="تستنزف أنظمة المواقف التقليدية ميزانيتك في شراء المعدات وتكاليف صيانتها. نحن اتخذنا مساراً يعفيك من النفقات الرأسمالية تماماً."
              />
            </p>
          </div>
        </Reveal>

        {/* ── Comparison grid ────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Old Way */}
            <div className="border border-brand-secondary bg-brand-primary/40 p-10 relative opacity-70 hover:opacity-80 transition-opacity duration-300 rounded-md cursor-pointer">
              <div className="text-[10px] font-enHeading tracking-[0.2em] uppercase text-text-secondary mb-6 border border-brand-secondary inline-block px-3 py-1 rounded-md">
                <Translate en="The Old Way" ar="الطريقة القديمة" />
              </div>
              <h3 className="text-2xl font-enHeading text-text-primary mb-4">
                <Translate en="Heavy CapEx, cables, and constant downtime." ar="نفقات رأسمالية ضخمة، كابلات، وتوقف مستمر." />
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                <Translate
                  en="You buy expensive hardware, run miles of cables, shut down your facility for weeks, and hope it doesn't break."
                  ar="تشتري معدات باهظة، تمدد كيلومترات من الكابلات، توقف عمل منشأتك لأسابيع، وتأمل ألا تتعطل."
                />
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {oldWayPoints.map((pt) => (
                  <li key={pt.id} className="text-sm text-text-secondary font-enBody flex items-start gap-2">
                    <Icon icon={X} className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <Translate en={pt.en} ar={pt.ar} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Irken Way */}
            <div className="border border-brand-accent bg-brand-primary/90 p-10 relative rounded-md cursor-pointer">
              {/* Cyan top bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-accent rounded-t-md" aria-hidden="true" />

              <div className="text-[10px] font-enHeading tracking-[0.2em] uppercase text-brand-accent mb-6 border border-brand-accent inline-block px-3 py-1 bg-brand-accent/10 rounded-md">
                <Translate en="The Irken Way" ar="طريقة إركن" />
              </div>
              <h3 className="text-2xl font-enHeading text-brand-accent mb-4">
                <Translate en="Zero CapEx. Live in days." ar="بدون نفقات رأسمالية. جاهز في أيام." />
              </h3>
              <p className="text-sm text-text-primary leading-relaxed mb-6">
                <Translate
                  en="We integrate directly with your existing barrier gates and cameras. No civil works, no new hardware, just instant revenue."
                  ar="نتكامل فوراً مع بواباتك وكاميراتك الحالية. بدون أعمال مدنية، وبدون معدات جديدة، فقط إيرادات فورية."
                />
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {irkenWayPoints.map((pt) => (
                  <li key={pt.id} className="text-sm text-brand-accent font-enBody flex items-start gap-2">
                    <Icon icon={Check} className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
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
