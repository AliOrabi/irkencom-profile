import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

interface PageHeroProps {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export default function PageHero({ titleEn, titleAr, descriptionEn, descriptionAr }: PageHeroProps) {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center relative overflow-hidden bg-brand-primary border-b border-brand-secondary">
      {/* CSS-based Grid Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(theme(colors.brand.accent)_1px,transparent_1px),linear-gradient(90deg,theme(colors.brand.accent)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
      
      <Reveal delay={0.2} direction="up">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-enHeading text-text-primary mb-6">
            <Translate en={titleEn} ar={titleAr} />
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            <Translate en={descriptionEn} ar={descriptionAr} />
          </p>
        </div>
      </Reveal>
    </section>
  );
}
