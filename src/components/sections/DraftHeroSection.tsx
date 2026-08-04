'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import Image from 'next/image';

export default function DraftHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpeg" 
          alt="City at night" 
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-20">
        <div className="flex flex-col items-start w-full lg:w-2/3">
          <Reveal delay={0.1}>
            <div className="tech-badge bg-black/50 border-brand-accent/50 text-white backdrop-blur-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="text-brand-accent">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <Translate en="Egypt & MENA · Urban Parking Intelligence" ar="مصر ومنطقة الشرق الأوسط وشمال إفريقيا · ذكاء المواقف الحضرية" />
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-enHeading text-white leading-tight mb-6 drop-shadow-lg">
              <Translate 
                en={<>Your parking lot<br/>is worth more<br/>than you think.</>} 
                ar={<>موقفك يساوي<br/>أكثر مما تتوقع.</>} 
              />
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl drop-shadow-md">
              <Translate 
                en="We help developers, operators, and cities turn idle parking spaces into steady, trackable revenue — using software, not sensors." 
                ar="نساعد المطورين والمشغلين والمدن على تحويل المواقف الفارغة إلى دخل حقيقي يمكن قياسه — بالبرمجيات، لا بالمعدات." 
              />
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#integration" className="px-8 py-3 bg-brand-accent text-brand-primary font-enHeading uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors duration-300">
                <Translate en="Talk to Our Team" ar="تحدث مع فريقنا" />
              </a>
              <a href="#platform" className="px-8 py-3 bg-black/50 text-white border border-white/30 font-enHeading uppercase tracking-widest text-sm hover:bg-white/10 backdrop-blur-sm transition-colors duration-300">
                <Translate en="See How It Works" ar="اكتشف كيف يعمل" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
