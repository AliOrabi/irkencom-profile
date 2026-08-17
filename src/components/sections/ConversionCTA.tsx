'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons';
import { ArrowRight, Sparkles } from 'lucide-react';
import { usePostHog } from 'posthog-js/react';

interface ConversionCTAProps {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  primaryButtonTextEn?: string;
  primaryButtonTextAr?: string;
  primaryButtonHref?: string;
  secondaryButtonTextEn?: string;
  secondaryButtonTextAr?: string;
  secondaryButtonHref?: string;
}

export default function ConversionCTA({ 
  titleEn, 
  titleAr, 
  descriptionEn, 
  descriptionAr,
  primaryButtonTextEn = "Request Integration Assessment",
  primaryButtonTextAr = "طلب تقييم الربط والتكامل",
  primaryButtonHref = "/contact",
  secondaryButtonTextEn = "Calculate ROI",
  secondaryButtonTextAr = "احسب العائد على الاستثمار",
  secondaryButtonHref = "/services/parking-management/calculate"
}: ConversionCTAProps) {
  const posthog = usePostHog();

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
        <Reveal direction="up" delay={0.1}>
          {/* Main rounded container */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0F172A] via-[#162234] to-[#0A1118] p-10 sm:p-14 lg:p-20 text-center text-white shadow-2xl border border-slate-800">
            {/* Ambient background blur */}
            <div 
              className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-brand-accent/15 rounded-full blur-[90px] pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-accent text-xs font-semibold font-enHeading uppercase tracking-[0.14em] mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span><Translate en="ZERO CAPEX DEPLOYMENT" ar="تكامل بدون نفقات رأسمالية" /></span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-white mb-6 leading-tight">
                <Translate en={titleEn} ar={titleAr} />
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                <Translate en={descriptionEn} ar={descriptionAr} />
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <PrimaryButton
                  href={primaryButtonHref}
                  onClick={() => posthog?.capture('cta_clicked', { cta_name: primaryButtonTextEn })}
                  icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
                >
                  <Translate en={primaryButtonTextEn} ar={primaryButtonTextAr} />
                </PrimaryButton>

                {secondaryButtonHref && (
                  <GhostButton
                    href={secondaryButtonHref}
                    onClick={() => posthog?.capture('cta_secondary_clicked', { cta_name: secondaryButtonTextEn })}
                  >
                    <Translate en={secondaryButtonTextEn} ar={secondaryButtonTextAr} />
                  </GhostButton>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
