'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

export default function CompetitiveDiff() {
  return (
    <section className="py-24 relative border-t border-brand-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
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

        <Reveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-brand-secondary bg-brand-primary/50 p-10 opacity-70">
              <div className="text-xs font-enHeading tracking-[2px] uppercase text-text-secondary mb-6 border border-brand-secondary inline-block px-3 py-1">
                <Translate en="The Old Way" ar="الطريقة القديمة" />
              </div>
              <h3 className="text-2xl font-enHeading text-text-primary mb-4">
                <Translate en="Sensors, cables, and constant maintenance." ar="مستشعرات، كابلات، وصيانة لا تنتهي." />
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                <Translate
                  en="You install sensors in every spot, run cables, hope they don't fail — and when they do, you call a technician. High costs. Inaccurate reports. Constant headaches."
                  ar="تقوم بتركيب مستشعرات في كل موقف، وتمديد الكابلات، وتأمل ألا تتعطل. وعندما يحدث ذلك، تبدأ رحلة المعاناة مع فرق الصيانة. تكاليف مرتفعة، تقارير غير دقيقة، وإرهاق مستمر."
                />
              </p>
            </div>

            <div className="border border-brand-accent bg-brand-primary/90 p-10 relative shadow-[0_0_30px_rgba(100,255,218,0.1)]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent shadow-[0_0_10px_#64FFDA]"></div>
              <div className="text-xs font-enHeading tracking-[2px] uppercase text-brand-accent mb-6 border border-brand-accent inline-block px-3 py-1 bg-brand-accent/10">
                <Translate en="The Irken Way" ar="طريقة إركن" />
              </div>
              <h3 className="text-2xl font-enHeading text-brand-accent mb-4">
                <Translate en="Real-time tracking. Nothing to maintain." ar="تتبع فوري. وبدون أي أعطال." />
              </h3>
              <p className="text-sm text-text-primary leading-relaxed">
                <Translate
                  en="We calculate available spaces by comparing your total capacity against active bookings — live, accurate, and hardware-free. The only thing you'll notice is the revenue."
                  ar="نحسب المساحات المتاحة من خلال مطابقة السعة الإجمالية مع الحجوزات النشطة — بشكل فوري، دقيق، ودون الحاجة لمعدات. الشيء الوحيد الذي ستلاحظه هو تصاعد الإيرادات."
                />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
