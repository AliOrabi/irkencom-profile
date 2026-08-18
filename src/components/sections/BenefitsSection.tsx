'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Cpu, TrendingUp, ScanLine } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      titleEn: "Zero CapEx Deployment",
      titleAr: "بدون نفقات رأسمالية",
      descEn: "Integrate with your existing boom barriers, cameras, and ground loops in under 48 hours without costly hardware replacements.",
      descAr: "تكامل سلس وفوري مع بواباتك وكاميراتك الحالية في أقل من 48 ساعة دون أي تكاليف استبدال للأجهزة.",
      icon: <Cpu className="w-7 h-7 text-brand-accent" />
    },
    {
      titleEn: "Real-Time Capacity Intelligence",
      titleAr: "محرك عوائد وسعة فورية",
      descEn: "Live yield optimization algorithms track vehicle occupancy, predict peak periods, and eliminate manual ticketing revenue leakage.",
      descAr: "خوارزميات تحسين العوائد تتتبع إشغال المركبات اللحظي وتتنبأ بالذروة وتقضي تماماً على تسرب الإيرادات اليدوية.",
      icon: <TrendingUp className="w-7 h-7 text-brand-accent" />
    },
    {
      titleEn: "Frictionless Ticketless Flow",
      titleAr: "دخول انسيابي بدون تذاكر",
      descEn: "AI-driven License Plate Recognition (LPR) and mobile wallet validation deliver fast, queue-free ingress and egress.",
      descAr: "أنظمة التعرف الآلي على اللوحات (LPR) والمحافظ الإلكترونية تضمن تدفقاً فائق السرعة وبدون طوابير أو تذاكر ورقية.",
      icon: <ScanLine className="w-7 h-7 text-brand-accent" />
    }
  ];

  return (
    <section className="py-28 px-6 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-4">
              <Translate en="Engineered for maximum facility yield" ar="مصمم لتحقيق أعلى عائد لمنشأتك" />
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              <Translate 
                en="Turn parking from an operational cost center into a high-margin digital revenue stream." 
                ar="حوّل مواقفك من عبء تشغيلي وتكلفة إلى مركز أرباح رقمي عالي العائد." 
              />
            </p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {benefits.map((feature, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-brand-accent/40 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-7 shadow-sm group-hover:scale-110 group-hover:border-brand-accent/50 transition-all duration-300">
                  <div className="w-13 h-13 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 font-enHeading tracking-tight">
                  <Translate en={feature.titleEn} ar={feature.titleAr} />
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
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
