'use client';

import React from 'react';
import { Check, X, ArrowRight, ExternalLink } from 'lucide-react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

const tiers = [
  {
    id: 'b2c',
    name: { en: 'Driver App', ar: 'تطبيق السائق' },
    badge: { en: 'CONSUMER APP', ar: 'تطبيق الأفراد' },
    price: { en: 'Free to Use', ar: 'مجاني للاستخدام' },
    description: { en: 'Find and reserve parking spots instantly across Egypt with ticketless entry.', ar: 'ابحث واحجز مواقف السيارات فوراً في جميع أنحاء مصر مع دخول بدون تذاكر.' },
    features: [
      { en: 'Real-time spot availability & navigation', ar: 'توفر المواقف في الوقت الفعلي والتوجيه', included: true },
      { en: '100% cashless digital wallet payments', ar: 'دفع إلكتروني كامل بالمحافظ الرقمية', included: true },
      { en: 'Automated ticketless barrier opening (LPR)', ar: 'فتح تلقائي للبوابات عبر التعرف على اللوحات', included: true },
      { en: 'Dedicated operator dashboard access', ar: 'الوصول للوحة تحكم المشغلين', included: false },
    ],
    cta: { en: 'Download Driver App', ar: 'تحميل تطبيق السائق' },
    link: 'https://irken.eg',
    highlighted: false,
  },
  {
    id: 'b2b',
    name: { en: 'Operator Platform', ar: 'منصة المشغلين' },
    badge: { en: 'ZERO CAPEX ENTERPRISE', ar: 'حل الشركات بدون تكلفة مبدئية' },
    price: { en: 'Zero CapEx', ar: 'بدون نفقات رأسمالية' },
    description: { en: 'Turn idle spaces into high-yield revenue. Overlay our software on your existing barriers in 48 hours.', ar: 'حوّل المساحات الشاغرة إلى إيرادات مجزية. اربط نظامنا ببواباتك الحالية خلال 48 ساعة.' },
    features: [
      { en: 'Digital inventory & dynamic yield management', ar: 'إدارة المخزون الرقمي والتسعير الديناميكي', included: true },
      { en: 'Real-time financial reconciliation & gate logs', ar: 'مطابقة مالية لحظية وسجلات دخول البوابات', included: true },
      { en: 'Hardware-agnostic barrier & camera overlay', ar: 'توافق كامل مع مختلف أنواع البوابات والكاميرات', included: true },
      { en: 'Enterprise SLA & dedicated 24/7 technical support', ar: 'اتفاقية مستوى خدمة للشركات ودعم فني على مدار الساعة', included: true },
    ],
    cta: { en: 'Request Integration', ar: 'طلب الربط والتكامل' },
    link: '/contact',
    highlighted: true,
  }
];

export default function PricingTable() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {tiers.map((tier, idx) => (
          <Reveal key={tier.id} delay={idx * 0.1} direction="up" className="h-full">
            <div 
              className={`relative flex flex-col justify-between h-full p-8 sm:p-10 rounded-[2rem] border transition-all duration-300 ${
                tier.highlighted 
                  ? 'bg-white border-brand-accent shadow-[0_20px_50px_-10px_rgba(86,155,170,0.15)] ring-1 ring-brand-accent/20' 
                  : 'bg-white border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)]'
              }`}
            >
              {/* Popular pill badge */}
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-white text-[11px] font-bold font-enHeading uppercase tracking-[0.14em] rounded-full shadow-sm">
                  <Translate en="Most Popular" ar="الأكثر طلباً" />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold font-enHeading uppercase tracking-widest text-slate-500">
                    <Translate en={tier.badge.en} ar={tier.badge.ar} />
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-enHeading font-bold text-slate-900 mb-2">
                  <Translate en={tier.name.en} ar={tier.name.ar} />
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  <Translate en={tier.description.en} ar={tier.description.ar} />
                </p>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 mb-8">
                  <span className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900">
                    <Translate en={tier.price.en} ar={tier.price.ar} />
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    <Translate en="Revenue-share or transactional model" ar="نموذج مشاركة إيرادات أو رسوم معاملات" />
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-900 mb-4">
                    <Translate en="What's included:" ar="ما يتضمنه الحل:" />
                  </h4>
                  <ul className="space-y-3.5" role="list">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-brand-accent/15 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 mt-0.5">
                            <X className="w-3.5 h-3.5" strokeWidth={2} />
                          </div>
                        )}
                        <span className={feature.included ? 'text-slate-700 font-medium' : 'text-slate-400 line-through'}>
                          <Translate en={feature.en} ar={feature.ar} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100">
                {tier.highlighted ? (
                  <PrimaryButton
                    href={tier.link}
                    className="w-full"
                    icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
                  >
                    <Translate en={tier.cta.en} ar={tier.cta.ar} />
                  </PrimaryButton>
                ) : (
                  <SecondaryButton
                    href={tier.link}
                    className="w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    <Translate en={tier.cta.en} ar={tier.cta.ar} />
                  </SecondaryButton>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
