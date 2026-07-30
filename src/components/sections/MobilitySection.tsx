'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function MobilitySection() {
  return (
    <section id="mobility" className="section section-border-top">
      <div className="container">
        <div className="section-header">
          <span className="sub-badge">
            <Translate en="Mobility Ecosystem" ar="نظام التنقل البيئي" />
          </span>
          <h2>
            <Translate en="Transforming Urban Mobility." ar="تحويل التنقل الحضري." />
          </h2>
          <p>
            <Translate 
              en="By digitizing physical parking assets, we actively eliminate urban traffic congestion caused by cruising. Our systemic intelligence routes drivers directly to available capacity." 
              ar="من خلال رقمنة أصول المواقف الفيزيائية، نقوم فعلياً بالقضاء على الازدحام المروري الحضري الناتج عن البحث العشوائي. نظامنا الذكي يوجه السائقين مباشرة للسعة المتاحة." 
            />
          </p>
        </div>

        <div className="mobility-diagram">
          <div className="mobility-node">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-text-primary)" strokeWidth="1.5" strokeLinecap="square" style={{ marginBottom: '16px' }}>
              <rect x="3" y="3" width="18" height="18"></rect><line x1="3" y1="9" x2="21" y2="9"></line>
            </svg>
            <div style={{ fontFamily: 'var(--font-en-heading)', fontSize: '14px', color: 'var(--brand-text-highlight)', marginBottom: '4px' }}>
              <Translate en="Static Physical Asset" ar="أصل فيزيائي ثابت" />
            </div>
            <div style={{ fontSize: '11px', color: 'var(--brand-text-secondary)', textTransform: 'uppercase' }}>
              <Translate en="Underutilized Space" ar="مساحة غير مستغلة" />
            </div>
          </div>

          <div>
            <svg width="40" height="24" viewBox="0 0 40 24">
              <line x1="0" y1="12" x2="40" y2="12" className="mobility-route-line"></line>
              <polyline points="32 6 38 12 32 18" fill="none" stroke="var(--brand-accent)" strokeWidth="2" strokeLinecap="square"></polyline>
            </svg>
          </div>

          <div className="mobility-node" style={{ borderColor: 'var(--brand-accent)', background: 'rgba(10, 25, 47, 0.95)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="square" style={{ marginBottom: '16px' }}>
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"></polygon>
              <polyline points="2 8.5 12 15.5 22 8.5"></polyline>
              <line x1="12" y1="22" x2="12" y2="15.5"></line>
            </svg>
            <div style={{ fontFamily: 'var(--font-en-heading)', fontSize: '18px', color: 'var(--brand-accent)', marginBottom: '4px' }}>
              <Translate en="Dynamic Capacity Engine" ar="محرك السعة الديناميكي" />
            </div>
            <div style={{ fontSize: '12px', color: 'var(--brand-text-secondary)', textTransform: 'uppercase' }}>
              <Translate en="Algorithmic Routing" ar="توجيه خوارزمي" />
            </div>
          </div>

          <div>
            <svg width="40" height="24" viewBox="0 0 40 24">
              <line x1="0" y1="12" x2="40" y2="12" className="mobility-route-line"></line>
              <polyline points="32 6 38 12 32 18" fill="none" stroke="var(--brand-accent)" strokeWidth="2" strokeLinecap="square"></polyline>
            </svg>
          </div>

          <div className="mobility-node">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-text-primary)" strokeWidth="1.5" strokeLinecap="square" style={{ marginBottom: '16px' }}>
              <circle cx="12" cy="12" r="10" strokeDasharray="4 4"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <div style={{ fontFamily: 'var(--font-en-heading)', fontSize: '14px', color: 'var(--brand-text-highlight)', marginBottom: '4px' }}>
              <Translate en="Frictionless Mobility" ar="تنقل بلا احتكاك" />
            </div>
            <div style={{ fontSize: '11px', color: 'var(--brand-text-secondary)', textTransform: 'uppercase' }}>
              <Translate en="Zero Congestion" ar="صفر ازدحام" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
