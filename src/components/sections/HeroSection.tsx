'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

import DashboardShowcase from '@/components/sections/DashboardShowcase';

export default function HeroSection() {
  return (
    <section className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="tech-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <Translate en="Egypt's #1 Online Parking Reservation Engine" ar="محرك حجز مواقف السيارات رقم 1 في مصر عبر الإنترنت" />
          </div>
          <h1>
            <Translate 
              en={<>Architecting<br/>Urban Mobility.</>} 
              ar={<>هندسة<br/>التنقل الحضري.</>} 
            />
          </h1>
          <p>
            <Translate 
              en="We build scalable, Asset-Light digital infrastructure. Powering Egypt's top parking reservation platform, we convert underutilized spaces into dynamic revenue streams for developers, municipalities, and smart cities." 
              ar="نحن نبني بنية تحتية رقمية قابلة للتطوير بأقل قدر من الأصول. نقوم بتشغيل منصة حجز مواقف السيارات الرائدة في مصر، ونحول المساحات غير المستغلة إلى تدفقات إيرادات ديناميكية للمطورين والبلديات والمدن الذكية." 
            />
          </p>
          
          <div style={{ marginTop: 'var(--space-lg)', display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <a href="#integration" className="btn-primary">
              <Translate en="Architect Your Solution" ar="صمم حلك" />
            </a>
            <a href="#platform" className="btn-secondary">
              <Translate en="Explore Platform" ar="استكشف المنصة" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <DashboardShowcase />
        </div>
      </div>
    </section>
  );
}
