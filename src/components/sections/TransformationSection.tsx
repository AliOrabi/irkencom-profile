'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function TransformationSection() {
  return (
    <section id="transformation" className="section section-border-top">
      <div className="container">
        <div className="section-header">
          <span className="sub-badge">
            <Translate en="Digital Transformation Services" ar="خدمات التحول الرقمي" />
          </span>
          <h2>
            <Translate en="Digitizing the Parking Sector." ar="رقمنة قطاع المواقف." />
          </h2>
          <p>
            <Translate 
              en="We do not just install software; we engineer a complete paradigm shift. We transition legacy parking facilities into automated, data-driven digital assets." 
              ar="نحن لا نقوم بتثبيت البرمجيات فحسب؛ بل نهندس نقلة نوعية كاملة. نحول مرافق المواقف القديمة إلى أصول رقمية مؤتمتة تعتمد على البيانات." 
            />
          </p>
        </div>

        <div className="solutions-grid">
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-text-primary)" strokeWidth="1.5" strokeLinecap="square">
                <rect x="3" y="3" width="18" height="18"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>
              <Translate en="1. Infrastructure Audit" ar="1. تدقيق البنية التحتية" />
            </h3>
            <p style={{ fontSize: '15px' }}>
              <Translate 
                en="Mapping physical capacity and identifying revenue leakages in current legacy systems." 
                ar="تخطيط السعة الفيزيائية وتحديد تسرب الإيرادات في الأنظمة الإدارية القديمة." 
              />
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="square">
                <rect x="2" y="4" width="20" height="16"></rect><path d="M6 9L9 12L6 15" strokeWidth="2"></path><line x1="12" y1="15" x2="17" y2="15" strokeWidth="2"></line>
              </svg>
            </div>
            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>
              <Translate en="2. Asset-Light Deployment" ar="2. نشر البنية المرنة" />
            </h3>
            <p style={{ fontSize: '15px' }}>
              <Translate 
                en="Overlaying our systemic intelligence software engine without requiring expensive hardware." 
                ar="إضافة طبقة برمجيات الذكاء المنهجي الخاصة بنا دون الحاجة إلى أجهزة مادية مكلفة." 
              />
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
               <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="square">
                <path d="M3 21H21"></path><path d="M3 17L9 11L13 15L21 5" strokeWidth="2"></path><polyline points="15 5 21 5 21 11"></polyline>
              </svg>
            </div>
            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>
              <Translate en="3. Yield Digitization" ar="3. رقمنة العوائد" />
            </h3>
            <p style={{ fontSize: '15px' }}>
              <Translate 
                en="Converting real-time occupancy data into direct financial yield, fully managed via the Terminal." 
                ar="تحويل بيانات الإشغال في الوقت الفعلي إلى عوائد مالية مباشرة، تدار بالكامل عبر لوحة التحكم." 
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
