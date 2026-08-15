'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

const tiers = [
  {
    id: 'b2c',
    name: { en: 'Driver App', ar: 'تطبيق السائق' },
    price: { en: 'Free to Use', ar: 'مجاني للاستخدام' },
    description: { en: 'Find and reserve parking spots instantly.', ar: 'ابحث واحجز مواقف السيارات فوراً.' },
    features: [
      { en: 'Real-time spot availability', ar: 'توفر المواقف في الوقت الفعلي', included: true },
      { en: 'Cashless payments', ar: 'دفع إلكتروني', included: true },
      { en: 'Booking management', ar: 'إدارة الحجوزات', included: true },
      { en: 'Operator dashboard access', ar: 'الوصول للوحة تحكم المشغلين', included: false },
    ],
    cta: { en: 'Download App', ar: 'حمّل التطبيق' },
    link: 'https://irken.eg',
    highlighted: false,
  },
  {
    id: 'b2b',
    name: { en: 'Operator Dashboard', ar: 'لوحة تحكم المشغلين' },
    price: { en: 'Zero CapEx', ar: 'بدون تكاليف مبدئية' },
    description: { en: 'Manage parking inventory and revenue.', ar: 'إدارة مخزون المواقف والإيرادات.' },
    features: [
      { en: 'Digital inventory management', ar: 'إدارة المخزون الرقمي', included: true },
      { en: 'Live revenue tracking', ar: 'تتبع الإيرادات المباشر', included: true },
      { en: 'Dynamic pricing tools', ar: 'أدوات التسعير الديناميكي', included: true },
      { en: 'Detailed analytics reports', ar: 'تقارير تحليلية مفصلة', included: true },
    ],
    cta: { en: 'Start Free Trial', ar: 'ابدأ التجربة المجانية' },
    link: 'https://app.irken.com.eg',
    highlighted: true,
  }
];

export default function PricingTable() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-enHeading font-bold text-text-primary mb-4">
          <Translate en="Simple, Transparent Pricing" ar="تسعير بسيط وشفاف" />
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          <Translate en="Whether you're looking for parking or managing a facility, we have the right tools for you." ar="سواء كنت تبحث عن موقف أو تدير منشأة، لدينا الأدوات المناسبة لك." />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {tiers.map((tier, idx) => (
          <Reveal key={tier.id} delay={idx * 0.1}>
            <div className={`relative flex flex-col h-full p-8 rounded-2xl border ${tier.highlighted ? 'border-brand-accent shadow-glow-accent bg-brand-primary/50' : 'border-brand-secondary bg-[#0a111a]'} transition-all duration-300`}>
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-accent text-[#0a111a] text-xs font-bold font-enHeading uppercase tracking-widest rounded-full">
                  <Translate en="Most Popular" ar="الأكثر شيوعاً" />
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-enHeading font-bold text-text-primary mb-2">
                  <Translate en={tier.name.en} ar={tier.name.ar} />
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-text-primary">
                    <Translate en={tier.price.en} ar={tier.price.ar} />
                  </span>
                </div>
                <p className="text-text-secondary">
                  <Translate en={tier.description.en} ar={tier.description.ar} />
                </p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-text-secondary/50 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-text-primary' : 'text-text-secondary/50'}>
                      <Translate en={feature.en} ar={feature.ar} />
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-md font-medium text-center transition-all duration-300 ${tier.highlighted ? 'bg-brand-accent text-[#0a111a] hover:bg-white hover:shadow-glow-accent' : 'border border-brand-secondary text-text-primary hover:border-brand-accent/50 hover:bg-brand-secondary/20'}`}
              >
                <Translate en={tier.cta.en} ar={tier.cta.ar} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
