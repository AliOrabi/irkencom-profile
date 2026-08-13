'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';

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
  const posthog = usePostHog();
  return (
    <section className="py-24 bg-brand-primary border-y border-brand-secondary relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-brand-accent/20"></div>
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-brand-accent/20"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,theme(colors.brand.accent)_0%,transparent_60%)] opacity-10 pointer-events-none"></div>
      
      <Reveal direction="up" delay={0.2}>
        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-enHeading text-text-primary mb-6">
            <Translate en={titleEn} ar={titleAr} />
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            <Translate en={descriptionEn} ar={descriptionAr} />
          </p>
          <div>
            <Link 
              href={primaryButtonHref} 
              onClick={() => posthog?.capture('cta_clicked', { cta_name: primaryButtonTextEn })}
              className="inline-block px-8 py-4 bg-transparent border border-brand-accent text-brand-accent font-enHeading text-sm uppercase tracking-[2px] hover:bg-brand-accent hover:text-brand-primary transition-all duration-300 hover:shadow-glow-accent relative overflow-hidden group rounded-md"
            >
              <span className="relative z-10"><Translate en={primaryButtonTextEn} ar={primaryButtonTextAr} /></span>
              <div className="absolute inset-0 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right duration-300 z-0"></div>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
