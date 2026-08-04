import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';

interface ConversionCTAProps {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  primaryButtonTextEn?: string;
  primaryButtonTextAr?: string;
  primaryButtonHref?: string;
}

export default function ConversionCTA({ 
  titleEn, 
  titleAr, 
  descriptionEn, 
  descriptionAr,
  primaryButtonTextEn = "Architect Your Solution",
  primaryButtonTextAr = "صمم حلك",
  primaryButtonHref = "/contact"
}: ConversionCTAProps) {
  return (
    <section className="py-24 bg-brand-accent/5 border-y border-brand-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      <Reveal direction="up" delay={0.2}>
        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-enHeading text-text-primary mb-4">
            <Translate en={titleEn} ar={titleAr} />
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            <Translate en={descriptionEn} ar={descriptionAr} />
          </p>
          <div>
            <Link href={primaryButtonHref} className="inline-block px-8 py-4 bg-brand-accent/10 border border-brand-accent text-brand-accent font-enHeading text-sm uppercase tracking-[2px] hover:bg-brand-accent/20 hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] transition-all">
              <Translate en={primaryButtonTextEn} ar={primaryButtonTextAr} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
