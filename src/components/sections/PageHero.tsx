import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

interface PageHeroProps {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  badgeEn?: string;
  badgeAr?: string;
}

export default function PageHero({ 
  titleEn, 
  titleAr, 
  descriptionEn, 
  descriptionAr,
  badgeEn = "PLATFORM SOLUTIONS",
  badgeAr = "حلول المنصة"
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-36 pb-20 border-b border-slate-100">
      {/* Background subtle radial ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <Reveal delay={0.1} direction="up">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-semibold font-enHeading uppercase tracking-[0.14em] mb-6">
              <span><Translate en={badgeEn} ar={badgeAr} /></span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-enHeading text-slate-900 tracking-tight mb-6 leading-[1.15]">
              <Translate en={titleEn} ar={titleAr} />
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              <Translate en={descriptionEn} ar={descriptionAr} />
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
