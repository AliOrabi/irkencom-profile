'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function PlatformSection() {
  return (
    <section id="platform" className="section section-border-top">
      <div className="container">
        <div className="section-header">
          <span className="sub-badge">
            <Translate en="Platform & Technology" ar="المنصة والتكنولوجيا" />
          </span>
          <h2>
            <Translate en="Asset-Light Infrastructure." ar="بنية تحتية مرنة الأصول." />
          </h2>
          <p>
            <Translate 
              en="Eliminate expensive hardware sensors. Our ecosystem operates on pure architectural logic, seamless software integrations, and precise data calculation to maximize yield." 
              ar="تخلص من مستشعرات الأجهزة المكلفة. تعمل منظومتنا على المنطق المعماري البحت، والتكامل البرمجي السلس، وحساب البيانات الدقيق لزيادة العوائد إلى أقصى حد." 
            />
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect>
                <path d="M10 6.5H14M17.5 10V14M6.5 10V17.5H14" strokeDasharray="1.5 1.5"></path>
              </svg>
            </div>
            <h3>
              <Translate en="Asset-Light Integration" ar="تكامل مرن الأصول" />
            </h3>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              <Translate 
                en="Deploy enterprise capacity tracking without heavy physical infrastructure upgrades." 
                ar="نشر تتبع سعة المؤسسات دون الحاجة لترقيات فيزيائية ثقيلة للبنية التحتية." 
              />
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <rect x="2" y="2" width="20" height="20"></rect>
                <path d="M6 18V12M10 18V8M14 18V14" strokeWidth="2"></path>
                <line x1="2" y1="6" x2="22" y2="6" strokeDasharray="2 2"></line>
              </svg>
            </div>
            <h3>
              <Translate en="Dynamic Capacity" ar="سعة ديناميكية" />
            </h3>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              <Translate 
                en="Calculates availability by comparing total static space against real-time active bookings." 
                ar="حساب التوافر بدقة عن طريق مقارنة إجمالي المساحة الثابتة مع الحجوزات النشطة في الوقت الفعلي." 
              />
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <rect x="2" y="4" width="20" height="16"></rect>
                <path d="M6 9L9 12L6 15" strokeWidth="2"></path>
                <line x1="12" y1="15" x2="17" y2="15" strokeWidth="2"></line>
              </svg>
            </div>
            <h3>
              <Translate en="Operator Terminal" ar="لوحة المشغلين" />
            </h3>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              <Translate 
                en="An elite dashboard granting real-time control over inventory and financial reporting." 
                ar="لوحة تحكم متقدمة تمنح تحكماً في الوقت الفعلي على المخزون والتقارير المالية." 
              />
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M3 21H21"></path><path d="M3 17L9 11L13 15L21 5" strokeWidth="2"></path><polyline points="15 5 21 5 21 11"></polyline>
              </svg>
            </div>
            <h3>
              <Translate en="Yield Routing" ar="توجيه العوائد" />
            </h3>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              <Translate 
                en="Securely collects payments, deducts commissions, and routes net yields to operators." 
                ar="جمع المدفوعات بأمان، خصم العمولات، وتوجيه الصافي للمشغلين." 
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
