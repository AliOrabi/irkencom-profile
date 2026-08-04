'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

export default function PlatformSection() {
  return (
    <section id="platform" className="py-24 relative border-t border-brand-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-16 max-w-3xl">
            <span className="inline-block px-3 py-1 border border-brand-secondary text-brand-accent text-xs font-enHeading uppercase tracking-[2px] mb-6 bg-brand-secondary/30">
              <Translate en="How It Works" ar="كيف يعمل النظام" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="No sensors. No civil works. Just results." ar="بدون معدات. بدون حفر. فقط نتائج." />
            </h2>
            <p className="text-base text-text-secondary">
              <Translate
                en="Most parking systems need you to drill holes, run cables, and buy hardware. Ours doesn't. We connect to what you already have and get you up and running — fast."
                ar="تتطلب معظم أنظمة المواقف حفريات، تمديدات، وأجهزة باهظة. نظامنا لا يحتاج لأي من ذلك. نرتبط بأنظمتك الحالية ونبدأ فوراً."
              />
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500"></div>
              <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-secondary/50 border border-brand-secondary text-brand-accent group-hover:border-brand-accent/30 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className="w-6 h-6">
                  <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect>
                  <path d="M10 6.5H14M17.5 10V14M6.5 10V17.5H14" strokeDasharray="1.5 1.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-enHeading text-text-highlight mb-3">
                <Translate en="Connect once. Track everything." ar="اتصل مرة واحدة. تتبع كل شيء." />
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                <Translate
                  en="We plug into your existing setup and start tracking space availability across your entire facility — no new hardware required."
                  ar="نربط نظامنا ببنيتك التحتية ونبدأ بتتبع المساحات المتاحة في منشأتك — دون الحاجة لشراء معدات جديدة."
                />
              </p>
            </div>

            <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500"></div>
              <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-secondary/50 border border-brand-secondary text-brand-accent group-hover:border-brand-accent/30 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20"></rect>
                  <path d="M6 18V12M10 18V8M14 18V14" strokeWidth="2"></path>
                  <line x1="2" y1="6" x2="22" y2="6" strokeDasharray="2 2"></line>
                </svg>
              </div>
              <h3 className="text-xl font-enHeading text-text-highlight mb-3">
                <Translate en="Always know what's available." ar="ابقَ على اطلاع دائم بالسعة المتاحة." />
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                <Translate
                  en="Our system compares your total capacity against active bookings to show real availability — updated live, always accurate."
                  ar="يقارن النظام السعة الإجمالية بالحجوزات الحالية لتحديد المساحات الشاغرة — محدّثة لحظة بلحظة وبدقة متناهية."
                />
              </p>
            </div>

            <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500"></div>
              <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-secondary/50 border border-brand-secondary text-brand-accent group-hover:border-brand-accent/30 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className="w-6 h-6">
                  <rect x="2" y="4" width="20" height="16"></rect>
                  <path d="M6 9L9 12L6 15" strokeWidth="2"></path>
                  <line x1="12" y1="15" x2="17" y2="15" strokeWidth="2"></line>
                </svg>
              </div>
              <h3 className="text-xl font-enHeading text-text-highlight mb-3">
                <Translate en="Run everything from your desk." ar="أدر عملياتك بالكامل من مكتبك." />
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                <Translate
                  en="See occupancy rates, peak hours, and revenue reports the moment you open your dashboard. No more manual counts or guesswork."
                  ar="راقب نسب الإشغال، أوقات الذروة، والإيرادات من خلال لوحة تحكم متكاملة. لا مزيد من العد اليدوي أو التخمين."
                />
              </p>
            </div>

            <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500"></div>
              <div className="w-12 h-12 flex items-center justify-center mb-6 bg-brand-secondary/50 border border-brand-secondary text-brand-accent group-hover:border-brand-accent/30 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className="w-6 h-6">
                  <path d="M3 21H21"></path><path d="M3 17L9 11L13 15L21 5" strokeWidth="2"></path><polyline points="15 5 21 5 21 11"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-enHeading text-text-highlight mb-3">
                <Translate en="Your money, straight to you." ar="إيراداتك تتوجه إليك مباشرة." />
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                <Translate
                  en="Payments are collected, commissions deducted automatically, and your net revenue arrives without lifting a finger."
                  ar="يتم تجميع المدفوعات آلياً وخصم العمولات، لتصلك إيراداتك الصافية بشكل مباشر ودون أي عناء."
                />
              </p>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
