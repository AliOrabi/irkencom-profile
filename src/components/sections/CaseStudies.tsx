'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      metric: "+42%",
      metricLabel: { en: "Revenue Increase", ar: "زيادة في الإيرادات" },
      title: { en: "Downtown Commercial Complex", ar: "مجمع تجاري بوسط البلد" },
      description: { 
        en: "Implemented dynamic pricing and real-time availability, eliminating manual ticketing leaks without any new hardware.", 
        ar: "تطبيق التسعير الديناميكي والتوافر اللحظي، مما قضى على تسريبات التذاكر اليدوية بدون أي أجهزة جديدة." 
      }
    },
    {
      id: 2,
      metric: "Zero",
      metricLabel: { en: "CapEx Required", ar: "نفقات رأسمالية مطلوبة" },
      title: { en: "Mixed-Use Development", ar: "مشروع متعدد الاستخدامات" },
      description: { 
        en: "Integrated with existing barriers to launch an automated LPR ecosystem in under 48 hours.", 
        ar: "التكامل مع الحواجز الحالية لإطلاق نظام التعرف على اللوحات الآلي في أقل من 48 ساعة." 
      }
    },
    {
      id: 3,
      metric: "-60%",
      metricLabel: { en: "Operational Costs", ar: "تكاليف التشغيل" },
      title: { en: "Regional Hospital Parking", ar: "مواقف مستشفى إقليمي" },
      description: { 
        en: "Replaced 3 shifts of manual attendants with a centralized digital management dashboard.", 
        ar: "استبدال 3 ورديات من العمال اليدويين بلوحة تحكم رقمية مركزية للإدارة." 
      }
    },
    {
      id: 4,
      metric: "100%",
      metricLabel: { en: "Digital Payments", ar: "مدفوعات رقمية" },
      title: { en: "Smart City Infrastructure", ar: "بنية المدن الذكية" },
      description: { 
        en: "Converted a massive municipality parking network to fully digital and cashless payments via the Irken platform.", 
        ar: "تحويل شبكة مواقف ضخمة لبلدية إلى مدفوعات رقمية بالكامل وغير نقدية عبر منصة إركن." 
      }
    }
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 w-full">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-enHeading text-slate-900 mb-6">
            <Translate en="Proven Results" ar="نتائج مثبتة" />
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            <Translate 
              en="See how leading developers and operators in Egypt are transforming their facilities into high-yield assets with Irken." 
              ar="اكتشف كيف يقوم المطورون والمشغلون الرائدون في مصر بتحويل منشآتهم إلى أصول عالية العائد مع إركن." 
            />
          </p>
        </div>

        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {caseStudies.map(study => (
              <SwiperSlide key={study.id} className="h-auto">
                <div className="bg-white p-8 flex flex-col gap-6 rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] transition-all group h-full cursor-grab active:cursor-grabbing border border-slate-100">
                  <div className="border-b border-slate-100 pb-6">
                    <div className="text-4xl md:text-5xl font-mono font-bold text-brand-accent mb-2">
                      {study.metric}
                    </div>
                    <div className="text-sm font-enHeading tracking-[0.1em] text-slate-400 uppercase">
                      <Translate en={study.metricLabel.en} ar={study.metricLabel.ar} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-3">
                      <Translate en={study.title.en} ar={study.title.ar} />
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      <Translate en={study.description.en} ar={study.description.ar} />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Global override for swiper pagination dots to match brand colors */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet {
          background-color: var(--text-secondary, #94A3B8);
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: theme(colors.brand.accent);
          opacity: 1;
        }
      `}} />
    </section>
  );
}
