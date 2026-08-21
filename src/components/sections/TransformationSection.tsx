'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function TransformationSection() {
  return (
    <section id="transformation" className="py-24 relative border-t border-brand-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block px-3 py-1 border border-brand-secondary text-brand-accent text-xs font-enHeading uppercase tracking-[2px] mb-6 bg-brand-secondary/30 rounded-md">
            <Translate en="Our Process" ar="كيف نعمل" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
            <Translate en="Three steps from idle space to active income." ar="ثلاث خطوات من مساحة شاغرة إلى دخل مستدام." />
          </h2>
          <p className="text-base text-text-secondary">
            <Translate
              en="We don't just install software. We redesign how your parking facility earns — from day one."
              ar="نحن لا نكتفي بتركيب البرمجيات، بل نُحدث ثورة في آلية توليد الأرباح لمواقفك — منذ اليوم الأول."
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative rounded-md">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500 rounded-t-md"></div>
            <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-accent/10 text-brand-accent rounded-md group-hover:bg-brand-accent/20 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-enHeading text-text-highlight mb-4">
              <Translate en="1. We look at what you have." ar="١. تقييم الوضع الحالي." />
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              <Translate
                en="We assess your facility's layout and current operations to find where you're losing money — before touching anything."
                ar="نقوم بدراسة تصميم منشأتك وآلية عملها الحالية لنكتشف مناطق هدر الإيرادات — قبل الشروع في أي خطوة."
              />
            </p>
          </div>

          <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative rounded-md">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500 rounded-t-md"></div>
            <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-accent/10 text-brand-accent rounded-md group-hover:bg-brand-accent/20 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 9L9 12L6 15" strokeWidth="2"></path><line x1="12" y1="15" x2="17" y2="15" strokeWidth="2"></line>
              </svg>
            </div>
            <h3 className="text-xl font-enHeading text-text-highlight mb-4">
              <Translate en="2. We set everything up for you." ar="٢. تجهيز النظام بالكامل." />
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              <Translate
                en="We deploy our management system over your existing infrastructure. No drilling, no downtime, no disruption to your daily operations."
                ar="ننشر نظام الإدارة على بنيتك التحتية الحالية. دون الحاجة لأي أعمال مدنية، ودون أي تعطيل لعملياتك اليومية."
              />
            </p>
          </div>

          <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative rounded-md">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500 rounded-t-md"></div>
            <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-accent/10 text-brand-accent rounded-md group-hover:bg-brand-accent/20 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M3 21H21"></path><path d="M3 17L9 11L13 15L21 5" strokeWidth="2"></path><polyline points="15 5 21 5 21 11"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-enHeading text-text-highlight mb-4">
              <Translate en="3. Your spaces start earning." ar="٣. إطلاق النظام وتحقيق الإيرادات." />
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              <Translate
                en="Your facility goes live on our reservation network. Every reservation is tracked, every payment is recorded, and your revenue is reported automatically."
                ar="تندمج منشأتك فوراً ضمن شبكة الحجز الخاصة بنا. يتم تتبع كل حجز، وتسجيل كل دفعة مالية، وتصلك تقارير الإيرادات تلقائياً."
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
