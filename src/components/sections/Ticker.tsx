'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function Ticker() {
  const content = (
    <>
      <span><Translate en="URBAN MOBILITY" ar="التنقل الحضري" /></span> <span>•</span>
      <span><Translate en="DIGITAL TRANSFORMATION" ar="التحول الرقمي" /></span> <span>•</span>
      <span><Translate en="REAL ESTATE DEVELOPERS" ar="المطورين العقاريين" /></span> <span>•</span>
      <span><Translate en="MUNICIPALITIES" ar="البلديات والجهات الحكومية" /></span> <span>•</span>
      <span><Translate en="SMART PARKING" ar="المواقف الذكية" /></span> <span>•</span>
    </>
  );

  return (
    <div className="w-full border-y border-brand-secondary bg-brand-primary overflow-hidden py-4">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="flex whitespace-nowrap text-brand-accent/70 font-enHeading text-xs uppercase tracking-[3px] overflow-hidden group">
          <div className="flex shrink-0 items-center justify-around min-w-full gap-8 pe-8 animate-marquee rtl:animate-marquee-rtl group-hover:[animation-play-state:paused]">
            {content}
          </div>
          <div className="flex shrink-0 items-center justify-around min-w-full gap-8 pe-8 animate-marquee rtl:animate-marquee-rtl group-hover:[animation-play-state:paused]" aria-hidden="true">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
