'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import LocalizedLink from '@/components/ui/LocalizedLink';
import { ArrowRight, Car, KeyRound, BarChart3 } from 'lucide-react';

export default function CoreFeaturesSection() {
  const features = [
    {
      titleEn: "Parking Management",
      titleAr: "إدارة المواقف الذكية",
      descEn: "Optimize revenue, automate turnover, and track live facility capacity with our intelligent yield engine. Zero CapEx required.",
      descAr: "حسّن الإيرادات وأتمتة حركة الدخول وتتبع السعة اللحظية لمنشأتك بدون أي نفقات رأسمالية جديدة.",
      color: "bg-cyan-500",
      icon: <Car className="w-8 h-8 text-cyan-600" />,
      link: "/services/parking-management"
    },
    {
      titleEn: "Valet & Hospitality",
      titleAr: "عمليات الفاليه والضيافة",
      descEn: "Digitize ticketless valet operations, live vehicle retrieval tracking, and VIP guest experiences for five-star venues.",
      descAr: "رقمنة كاملة لخدمات الفاليه بدون تذاكر ورقية مع تتبع تسليم المركبات اللحظي للفنادق والمراكز الفاخرة.",
      color: "bg-brand-accent",
      icon: <KeyRound className="w-8 h-8 text-brand-accent" />,
      link: "/services/valet-parking"
    },
    {
      titleEn: "Unified Mobility Analytics",
      titleAr: "تحليلات التنقل الموحدة",
      descEn: "Consolidated real-time operational insights, occupancy heatmaps, and automated financial reconciliation across all locations.",
      descAr: "لوحة تحكم مركزية للرؤى التشغيلية والخرائط الحرارية للإشغال والمطابقة المالية الآلية لجميع الفروع.",
      color: "bg-indigo-500",
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      link: "/services/parking-management"
    }
  ];

  return (
    <section id="solutions" className="py-28 px-6 max-w-[1280px] mx-auto overflow-hidden">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading mb-5 text-slate-900 tracking-tight">
            <Translate en="Everything you need to modernize mobility" ar="كل ما تحتاجه لتحديث وإدارة عمليات التنقل" />
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            <Translate 
              en="A comprehensive suite of asset-light software products designed to handle your parking, access, and mobility operations seamlessly." 
              ar="مجموعة متكاملة من الحلول البرمجية المرنة المصممة لتشغيل مواقفك والتحكم بالوصول بكفاءة استثنائية." 
            />
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {features.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="relative group h-full">
              {/* Offset Decorative Background */}
              <div 
                className={`absolute inset-0 rounded-[2rem] transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 opacity-80 ${item.color}`}
                style={{ transform: 'translate(10px, 10px)' }}
                aria-hidden="true"
              />
              
              {/* Foreground Card */}
              <div className="relative bg-white border border-slate-200/80 p-8 sm:p-9 rounded-[2rem] h-full flex flex-col shadow-sm group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 bg-slate-50 border border-slate-100 shadow-inner">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3.5 text-slate-900 font-enHeading tracking-tight">
                  <Translate en={item.titleEn} ar={item.titleAr} />
                </h3>
                
                <p className="text-slate-600 mb-8 flex-1 leading-relaxed text-sm sm:text-base">
                  <Translate en={item.descEn} ar={item.descAr} />
                </p>
                
                <div className="mt-auto pt-2">
                  <LocalizedLink 
                    href={item.link}
                    className="inline-flex items-center gap-2 font-bold text-xs text-brand-accent hover:text-brand-accent-hover transition-colors font-enHeading uppercase tracking-wider"
                  >
                    <Translate en="Learn more" ar="اعرف المزيد" />
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
