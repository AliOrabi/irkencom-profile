'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import DashboardShowcase from '@/components/sections/DashboardShowcase';

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center py-16 pt-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex flex-col items-start w-full">
          <Reveal delay={0.1}>
            <div className="tech-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <Translate en="Egypt & MENA · Urban Parking Intelligence" ar="مصر ومنطقة الشرق الأوسط وشمال إفريقيا · ذكاء المواقف الحضرية" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-enHeading text-text-primary leading-tight mb-6">
              <Translate 
                en={<>Your parking lot<br/>is worth more<br/>than you think.</>} 
                ar={<>موقفك يساوي<br/>أكثر مما تتوقع.</>} 
              />
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-base text-text-secondary mb-8 max-w-xl">
              <Translate 
                en="We help developers, operators, and cities turn idle parking spaces into steady, trackable revenue — using software, not sensors." 
                ar="نساعد المطورين والمشغلين والمدن على تحويل المواقف الفارغة إلى دخل حقيقي يمكن قياسه — بالبرمجيات، لا بالمعدات." 
              />
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#integration" className="btn-primary">
                <Translate en="Talk to Our Team" ar="تحدث مع فريقنا" />
              </a>
              <a href="#platform" className="btn-secondary">
                <Translate en="See How It Works" ar="شوف كيف يعمل" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative w-full">
          <Reveal delay={0.5} direction="left">
            <DashboardShowcase />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
