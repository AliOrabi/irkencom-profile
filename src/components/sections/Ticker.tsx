'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function Ticker() {
  return (
    <div className="w-full border-y border-brand-secondary bg-brand-primary overflow-hidden py-4">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="flex justify-between items-center whitespace-nowrap text-brand-accent/70 font-enHeading text-xs uppercase tracking-[3px] px-4 overflow-x-auto no-scrollbar gap-8">
          <span><Translate en="URBAN MOBILITY" ar="التنقل الحضري" /></span> <span>•</span>
          <span><Translate en="DIGITAL TRANSFORMATION" ar="التحول الرقمي" /></span> <span>•</span>
          <span><Translate en="REAL ESTATE DEVELOPERS" ar="المطورين العقاريين" /></span> <span>•</span>
          <span><Translate en="MUNICIPALITIES" ar="البلديات والجهات الحكومية" /></span> <span>•</span>
          <span><Translate en="SMART PARKING" ar="المواقف الذكية" /></span>
        </div>
      </div>
    </div>
  );
}
