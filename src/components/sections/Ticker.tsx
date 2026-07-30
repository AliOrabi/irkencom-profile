'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function Ticker() {
  return (
    <div className="ticker-section">
      <div className="container">
        <div className="ticker-track">
          {/* Group 1 */}
          <span><Translate en="URBAN MOBILITY" ar="التنقل الحضري" /></span> <span>•</span>
          <span><Translate en="DIGITAL TRANSFORMATION" ar="التحول الرقمي" /></span> <span>•</span>
          <span><Translate en="REAL ESTATE DEVELOPERS" ar="المطورين العقاريين" /></span> <span>•</span>
          <span><Translate en="MUNICIPALITIES" ar="البلديات والجهات الحكومية" /></span> <span>•</span>
          <span><Translate en="SMART PARKING" ar="المواقف الذكية" /></span> <span>•</span>
          {/* Group 2 (Duplicate for seamless scroll) */}
          <span><Translate en="URBAN MOBILITY" ar="التنقل الحضري" /></span> <span>•</span>
          <span><Translate en="DIGITAL TRANSFORMATION" ar="التحول الرقمي" /></span> <span>•</span>
          <span><Translate en="REAL ESTATE DEVELOPERS" ar="المطورين العقاريين" /></span> <span>•</span>
          <span><Translate en="MUNICIPALITIES" ar="البلديات والجهات الحكومية" /></span> <span>•</span>
          <span><Translate en="SMART PARKING" ar="المواقف الذكية" /></span> <span>•</span>
        </div>
      </div>
    </div>
  );
}
