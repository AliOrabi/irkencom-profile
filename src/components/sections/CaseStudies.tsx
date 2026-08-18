'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
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
    <section className="py-28 bg-slate-50/70 border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
        <Reveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-4">
              <Translate en="Measurable impact across enterprise facilities" ar="تأثير حقيقي وقابل للقياس لمنشآت الشركات" />
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              <Translate 
                en="See how leading developers and operators in Egypt are transforming their facilities into high-yield assets with Irken." 
                ar="اكتشف كيف يقوم المطورون والمشغلون الرائدون في مصر بتحويل منشآتهم إلى أصول عالية العائد مع إركن." 
              />
            </p>
          </div>
        </Reveal>

        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={28}
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
                <div className="bg-white p-8 flex flex-col gap-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group h-full cursor-grab active:cursor-grabbing border border-slate-200/80">
                  <div className="border-b border-slate-100 pb-5">
                    <div className="text-4xl md:text-5xl font-mono font-bold text-brand-accent mb-2 tracking-tight">
                      {study.metric}
                    </div>
                    <div className="text-xs font-enHeading tracking-[0.12em] text-slate-400 uppercase font-bold">
                      <Translate en={study.metricLabel.en} ar={study.metricLabel.ar} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold font-enHeading text-slate-900 mb-2.5 tracking-tight">
                      <Translate en={study.title.en} ar={study.title.ar} />
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      <Translate en={study.description.en} ar={study.description.ar} />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Global override for swiper pagination dots */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet {
          background-color: var(--muted-foreground, #64748B);
          opacity: 0.4;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          background-color: theme(colors.brand.accent);
          opacity: 1;
          width: 24px;
          border-radius: var(--radius);
        }
      `}} />
    </section>
  );
}
