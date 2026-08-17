'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      titleEn: "Highest Success Rates",
      titleAr: "أعلى معدلات النجاح",
      descEn: "Our smart routing engine ensures every transaction and operation has the highest probability of success.",
      descAr: "يضمن محرك التوجيه الذكي لدينا أن كل معاملة وعملية تحظى بأعلى احتمالية للنجاح.",
      icon: <Zap className="w-8 h-8 text-brand-accent" />
    },
    {
      titleEn: "Developer Friendly",
      titleAr: "سهل للمطورين",
      descEn: "Clean APIs, thorough documentation, and SDKs that your engineering team will love integrating.",
      descAr: "واجهات برمجة تطبيقات نظيفة وتوثيق شامل وحزم تطوير برمجيات سيحب فريق الهندسة لديك دمجها.",
      icon: <CheckCircle2 className="w-8 h-8 text-brand-accent" />
    },
    {
      titleEn: "Bank-Grade Security",
      titleAr: "أمان بمستوى بنكي",
      descEn: "PCI-DSS Level 1 certified. Your data and your customers' data is always protected and compliant.",
      descAr: "معتمد من PCI-DSS من المستوى الأول. بياناتك وبيانات عملائك محمية ومتوافقة دائمًا.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />
    }
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold font-enHeading mb-20 text-center text-slate-900">
            <Translate en="Built for convenience" ar="مصمم لراحتك" />
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-16">
          {benefits.map((feature, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 font-enHeading">
                  <Translate en={feature.titleEn} ar={feature.titleAr} />
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-sm">
                  <Translate en={feature.descEn} ar={feature.descAr} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
