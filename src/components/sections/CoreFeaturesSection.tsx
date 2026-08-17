'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CoreFeaturesSection() {
  const features = [
    {
      titleEn: "Parking Management",
      titleAr: "إدارة المواقف",
      descEn: "Optimize revenue and capacity with our live tracking engine. Zero CapEx required.",
      descAr: "حسّن الإيرادات والسعة من خلال محرك التتبع المباشر. بدون نفقات رأسمالية.",
      color: "bg-blue-500",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      ),
      link: "/services/parking-management"
    },
    {
      titleEn: "Valet Operations",
      titleAr: "عمليات الفاليه",
      descEn: "Digitize ticket management and vehicle tracking for five-star hospitality venues.",
      descAr: "رقمنة إدارة التذاكر وتتبع المركبات لأماكن الضيافة ذات الخمس نجوم.",
      color: "bg-brand-accent",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/services/valet-parking"
    },
    {
      titleEn: "Unified Analytics",
      titleAr: "تحليلات موحدة",
      descEn: "Get real-time insights across your entire mobility portfolio in one dashboard.",
      descAr: "احصل على رؤى فورية عبر محفظة التنقل الخاصة بك في لوحة تحكم واحدة.",
      color: "bg-purple-500",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      link: "/company/about"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-[1280px] mx-auto overflow-hidden">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <Reveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-6 uppercase tracking-widest font-enHeading">
            <Translate en="Core Solutions" ar="الحلول الأساسية" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-enHeading mb-6 text-slate-900">
            <Translate en="Everything you need to grow" ar="كل ما تحتاجه للنمو" />
          </h2>
          <p className="text-lg text-slate-500">
            <Translate 
              en="We offer a comprehensive suite of products designed to handle your parking and mobility operations seamlessly." 
              ar="نقدم مجموعة شاملة من المنتجات المصممة لإدارة عمليات المواقف والتنقل بسلاسة." 
            />
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {features.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="relative group h-full">
              {/* Offset Decorative Background */}
              <div 
                className={`absolute inset-0 rounded-[2rem] transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3 ${item.color}`}
                style={{ transform: 'translate(12px, 12px)' }}
                aria-hidden="true"
              />
              
              {/* Foreground Card */}
              <div className="relative bg-white border border-slate-100 p-8 rounded-[2rem] h-full flex flex-col shadow-sm group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 ${item.color}/10 text-slate-700`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900 font-enHeading">
                  <Translate en={item.titleEn} ar={item.titleAr} />
                </h3>
                
                <p className="text-slate-500 mb-10 flex-1 leading-relaxed">
                  <Translate en={item.descEn} ar={item.descAr} />
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href={item.link}
                    className="inline-flex items-center gap-2 font-semibold text-sm text-brand-accent hover:text-brand-accent-hover transition-colors font-enHeading uppercase tracking-wide"
                  >
                    <Translate en="Learn more" ar="اعرف المزيد" />
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
