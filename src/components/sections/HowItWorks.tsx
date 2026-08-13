'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import SectionBadge from '@/components/ui/SectionBadge';
import { Network, Settings, Coins } from 'lucide-react';

const steps = [
  {
    id: 'step-1',
    icon: Network,
    title: { en: '1. Connect', ar: '١. الربط' },
    description: {
      en: 'We plug directly into your existing barrier gates, LPR cameras, and POS systems without heavy civil works or downtime.',
      ar: 'نقوم بالربط المباشر مع بواباتك وكاميراتك وأنظمة نقاط البيع الحالية بدون أعمال مدنية مكلفة أو فترات توقف.',
    },
  },
  {
    id: 'step-2',
    icon: Settings,
    title: { en: '2. Configure', ar: '٢. الضبط والإعداد' },
    description: {
      en: 'Set your dynamic pricing rules, access permissions, and operating hours through our centralized operator dashboard.',
      ar: 'قم بضبط قواعد التسعير الديناميكي، وصلاحيات الدخول، وساعات العمل من خلال لوحة التحكم المركزية.',
    },
  },
  {
    id: 'step-3',
    icon: Coins,
    title: { en: '3. Collect', ar: '٣. التحصيل' },
    description: {
      en: 'Launch instantly and watch revenue flow directly to your bank account with comprehensive reporting and zero cash leakage.',
      ar: 'أطلق نظامك فوراً وراقب تدفق إيراداتك مباشرة إلى حسابك البنكي مع تقارير شاملة وبدون أي تسرب نقدي.',
    },
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative border-t border-brand-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-16 max-w-3xl text-center md:text-start">
            <SectionBadge en="How It Works" ar="كيف نعمل" />
            <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="Three steps to automated revenue." ar="ثلاث خطوات لأتمتة إيراداتك." />
            </h2>
            <p className="text-base text-text-secondary">
              <Translate
                en="We don't just install software. We redesign how your parking facility earns — from day one."
                ar="نحن لا نكتفي بتركيب البرمجيات، بل نُحدث ثورة في آلية توليد الأرباح لمواقفك — منذ اليوم الأول."
              />
            </p>
          </div>
        </Reveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.id} delay={0.1 + (index * 0.1)} direction="up">
                <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative rounded-md h-full cursor-pointer">
                  {/* Top line hover effect */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500 rounded-t-md"></div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-accent/10 text-brand-accent rounded-full group-hover:bg-brand-accent/20 transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  
                  {/* Title & Desc */}
                  <h3 className="text-xl font-enHeading text-text-highlight mb-4">
                    <Translate en={step.title.en} ar={step.title.ar} />
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <Translate en={step.description.en} ar={step.description.ar} />
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
