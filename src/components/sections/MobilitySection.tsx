'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

export default function MobilitySection() {
  return (
    <section id="mobility" className="py-24 relative border-t border-brand-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-16 max-w-3xl">
            <span className="inline-block px-3 py-1 border border-brand-secondary text-brand-accent text-xs font-enHeading uppercase tracking-[2px] mb-6 bg-brand-secondary/30">
              <Translate en="Urban Impact" ar="الأثر الحضري" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="One driver parked = one less car circling the block." ar="سيارة واحدة تم إيقافها = سيارة أقل تجوب الشوارع بحثاً عن موقف." />
            </h2>
            <p className="text-base text-text-secondary">
              <Translate
                en="When drivers find their spot in seconds, traffic eases, emissions drop, and city streets breathe again. That's what a connected parking network does."
                ar="عندما يجد السائق موقفه في ثوانٍ، تقل الكثافة المرورية وينخفض الضغط على البنية التحتية. هذا هو الأثر الحقيقي لشبكة المواقف المتصلة."
              />
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-16 p-8 border border-brand-secondary bg-brand-primary/50 relative overflow-hidden group">
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent group-hover:animate-[scanline_3s_linear_infinite]"></div>

            <div className="flex flex-col items-center text-center p-6 border border-brand-secondary bg-brand-primary/90 w-full lg:w-auto flex-1 z-10">
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-brand-accent border border-brand-secondary bg-brand-secondary/50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <rect x="3" y="3" width="18" height="18"></rect><line x1="3" y1="9" x2="21" y2="9"></line>
                </svg>
              </div>
              <div className="font-enHeading text-sm text-text-highlight mb-1">
                <Translate en="Idle Parking Space" ar="موقف فارغ وغير مستغل" />
              </div>
              <div className="text-[11px] text-text-secondary uppercase tracking-widest">
                <Translate en="Lost Revenue, Every Hour" ar="خسارة بتتكرر كل ساعة" />
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center px-4 z-10 text-brand-accent opacity-50">
              <svg width="40" height="24" viewBox="0 0 40 24">
                <line x1="0" y1="12" x2="40" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"></line>
                <polyline points="32 6 38 12 32 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"></polyline>
              </svg>
            </div>

            <div className="flex flex-col items-center text-center p-8 border border-brand-accent bg-brand-primary w-full lg:w-auto flex-[1.5] shadow-[0_0_20px_rgba(100,255,218,0.1)] z-10 relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent shadow-[0_0_10px_#64FFDA]"></div>
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-brand-accent border border-brand-accent/50 bg-brand-accent/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"></polygon>
                  <polyline points="2 8.5 12 15.5 22 8.5"></polyline>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                </svg>
              </div>
              <div className="font-enHeading text-lg text-brand-accent mb-2">
                <Translate en="Irken Smart Network" ar="شبكة إركن الذكية" />
              </div>
              <div className="text-xs text-text-secondary uppercase tracking-widest">
                <Translate en="Real-Time. Accurate. Always On." ar="لحظية. دقيقة. لا تتوقف." />
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center px-4 z-10 text-brand-accent opacity-50">
              <svg width="40" height="24" viewBox="0 0 40 24">
                <line x1="0" y1="12" x2="40" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"></line>
                <polyline points="32 6 38 12 32 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"></polyline>
              </svg>
            </div>

            <div className="flex flex-col items-center text-center p-6 border border-brand-secondary bg-brand-primary/90 w-full lg:w-auto flex-1 z-10">
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-brand-accent border border-brand-secondary bg-brand-secondary/50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <circle cx="12" cy="12" r="10" strokeDasharray="4 4"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div className="font-enHeading text-sm text-text-highlight mb-1">
                <Translate en="Driver Finds a Spot. Instantly." ar="السائق يلاقي موقفه. فوراً." />
              </div>
              <div className="text-[11px] text-text-secondary uppercase tracking-widest">
                <Translate en="Less Traffic. More Revenue." ar="أقل ازدحام. أكثر إيرادات." />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
