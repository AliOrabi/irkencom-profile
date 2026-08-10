import React from 'react';
import Translate from '@/components/ui/Translate';

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
    }
  ];

  return (
    <section className="py-24 bg-brand-primary border-t border-brand-secondary">
      <div className="max-w-[1280px] mx-auto px-8 w-full">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-enHeading text-text-primary mb-6">
            <Translate en="Proven Results" ar="نتائج مثبتة" />
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            <Translate 
              en="See how leading developers and operators in Egypt are transforming their facilities into high-yield assets with Irken." 
              ar="اكتشف كيف يقوم المطورون والمشغلون الرائدون في مصر بتحويل منشآتهم إلى أصول عالية العائد مع إركن." 
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map(study => (
            <div key={study.id} className="border border-brand-secondary bg-brand-secondary/30 p-8 flex flex-col gap-6 rounded-md hover:border-brand-accent/50 transition-colors group">
              <div className="border-b border-brand-secondary pb-6">
                <div className="text-4xl md:text-5xl font-mono font-bold text-brand-accent mb-2">
                  {study.metric}
                </div>
                <div className="text-sm font-enHeading tracking-[0.1em] text-text-secondary uppercase">
                  <Translate en={study.metricLabel.en} ar={study.metricLabel.ar} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-enHeading text-text-primary mb-3">
                  <Translate en={study.title.en} ar={study.title.ar} />
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  <Translate en={study.description.en} ar={study.description.ar} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
