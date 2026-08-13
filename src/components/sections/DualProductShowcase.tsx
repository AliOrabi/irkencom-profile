'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import SectionBadge from '@/components/ui/SectionBadge';
import { Smartphone, LayoutDashboard, ArrowRight, Car, BarChart3, Zap, Users, CreditCard, Shield } from 'lucide-react';

const driverFeatures = [
  {
    id: 'df-1',
    icon: Car,
    en: 'Find & reserve parking instantly',
    ar: 'ابحث واحجز موقفك فوراً',
  },
  {
    id: 'df-2',
    icon: CreditCard,
    en: 'Pay digitally — no cash needed',
    ar: 'ادفع إلكترونياً — بدون كاش',
  },
  {
    id: 'df-3',
    icon: Zap,
    en: 'Ticketless entry with LPR',
    ar: 'دخول بدون تذاكر بتقنية LPR',
  },
];

const operatorFeatures = [
  {
    id: 'of-1',
    icon: BarChart3,
    en: 'Real-time revenue & occupancy dashboard',
    ar: 'لوحة تحكم لحظية للإيرادات والإشغال',
  },
  {
    id: 'of-2',
    icon: Users,
    en: 'Free tier to start — upgrade when you grow',
    ar: 'ابدأ مجاناً — وطوّر باشتراك عند النمو',
  },
  {
    id: 'of-3',
    icon: Shield,
    en: 'Eliminate cash leakage & manual errors',
    ar: 'تخلّص من التسرب النقدي والأخطاء اليدوية',
  },
];

export default function DualProductShowcase() {
  return (
    <section
      id="products"
      className="py-24 relative border-t border-brand-secondary overflow-hidden"
      aria-labelledby="products-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <SectionBadge en="Our Products" ar="منتجاتنا" variant="active" />
            <h2
              id="products-heading"
              className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6"
            >
              <Translate
                en="Two products. One ecosystem."
                ar="منتجان. منظومة واحدة."
              />
            </h2>
            <p className="text-base text-text-secondary">
              <Translate
                en="Whether you're a driver looking for parking or an operator managing a facility — Irken has you covered."
                ar="سواء كنت سائقاً تبحث عن موقف أو مشغّلاً يدير منشأة — إركن تغطيك."
              />
            </p>
          </div>
        </Reveal>

        {/* ── Product Cards Grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Driver Product Card ─────────────────────────────────────── */}
          <Reveal direction="up" delay={0.12}>
            <div className="relative border border-brand-secondary bg-brand-primary/80 p-8 lg:p-10 group hover:border-brand-accent/50 transition-all duration-300 rounded-md h-full flex flex-col cursor-pointer">
              {/* Top accent line */}
              <div
                className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/60 transition-all duration-500 rounded-t-md"
                aria-hidden="true"
              />

              {/* Product icon + label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-accent/10 text-brand-accent rounded-full group-hover:bg-brand-accent/20 transition-colors">
                  <Smartphone className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-enHeading uppercase tracking-[0.2em] text-text-secondary mb-1">
                    <Translate en="For Drivers" ar="للسائقين" />
                  </p>
                  <h3 className="text-2xl font-enHeading font-bold text-text-highlight">
                    irken.eg
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed mb-8">
                <Translate
                  en="Your city's parking, in your pocket. Find available spots, reserve ahead, pay digitally, and enter with zero friction."
                  ar="مواقف مدينتك في جيبك. ابحث عن الأماكن المتاحة، احجز مسبقاً، ادفع إلكترونياً، وادخل بدون أي تعقيدات."
                />
              </p>

              {/* Features list */}
              <ul className="flex flex-col gap-4 mb-8 flex-grow" role="list">
                {driverFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <li key={feat.id} className="flex items-start gap-3 text-sm text-text-primary">
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-accent/10 rounded-md">
                        <Icon className="w-4 h-4 text-brand-accent" strokeWidth={1.5} />
                      </div>
                      <span className="pt-1">
                        <Translate en={feat.en} ar={feat.ar} />
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <a
                href="https://irken.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center group/cta"
                aria-label="Visit irken.eg parking reservation platform"
              >
                <Translate en="Reserve Parking Now" ar="احجز موقفك الآن" />
                <ArrowRight className="w-4 h-4 ltr:ml-2 rtl:mr-2 group-hover/cta:translate-x-1 rtl:group-hover/cta:-translate-x-1 transition-transform" strokeWidth={2} />
              </a>
            </div>
          </Reveal>

          {/* ── Operator Product Card ───────────────────────────────────── */}
          <Reveal direction="up" delay={0.2}>
            <div className="relative border border-brand-accent bg-brand-primary/90 p-8 lg:p-10 group shadow-glow-accent rounded-md h-full flex flex-col cursor-pointer">
              {/* Cyan top bar */}
              <div
                className="absolute top-0 inset-x-0 h-[2px] bg-brand-accent shadow-glow-accent-sm rounded-t-md"
                aria-hidden="true"
              />

              {/* Product icon + label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-accent/15 text-brand-accent rounded-full group-hover:bg-brand-accent/25 transition-colors">
                  <LayoutDashboard className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-enHeading uppercase tracking-[0.2em] text-brand-accent mb-1">
                    <Translate en="For Operators" ar="للمشغّلين" />
                  </p>
                  <h3 className="text-2xl font-enHeading font-bold text-text-highlight">
                    app.irken.com.eg
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-primary leading-relaxed mb-8">
                <Translate
                  en="Your entire parking operation on one screen. Track revenue, manage access, and optimize pricing — start free, upgrade as you grow."
                  ar="عملياتك التشغيلية بالكامل على شاشة واحدة. تتبع الإيرادات، أدر الوصول، وحسّن التسعير — ابدأ مجاناً، وطوّر عند النمو."
                />
              </p>

              {/* Features list */}
              <ul className="flex flex-col gap-4 mb-8 flex-grow" role="list">
                {operatorFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <li key={feat.id} className="flex items-start gap-3 text-sm text-brand-accent">
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-accent/10 rounded-md">
                        <Icon className="w-4 h-4 text-brand-accent" strokeWidth={1.5} />
                      </div>
                      <span className="pt-1 text-text-primary">
                        <Translate en={feat.en} ar={feat.ar} />
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Pricing hint */}
              <div className="flex items-center gap-2 mb-6 text-xs font-enHeading uppercase tracking-[0.15em] text-brand-accent">
                <span className="w-3 h-px bg-brand-accent" aria-hidden="true" />
                <Translate en="Free Tier Available" ar="باقة مجانية متاحة" />
              </div>

              {/* CTA */}
              <a
                href="https://app.irken.com.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center group/cta"
                aria-label="Try the Irken operator dashboard"
              >
                <Translate en="Start Free — Try Dashboard" ar="ابدأ مجاناً — جرّب لوحة التحكم" />
                <ArrowRight className="w-4 h-4 ltr:ml-2 rtl:mr-2 group-hover/cta:translate-x-1 rtl:group-hover/cta:-translate-x-1 transition-transform" strokeWidth={2} />
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
