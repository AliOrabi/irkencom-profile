'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Search, 
  CreditCard, 
  QrCode 
} from 'lucide-react';
import { PrimaryButton } from '@/components/ui/Buttons';
import { cn } from '@/lib/utils';

export default function SandboxDualProducts() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const freeFeatures = [
    { en: "Direct listing on irken.eg driver search app", ar: "ظهور مباشر لجراجك على تطبيق السائقين irken.eg" },
    { en: "Real-time spot availability counter", ar: "عداد لحظي للأماكن الفاضية والمشغولة" },
    { en: "Driver reservation check-in & verification list", ar: "كشف فوري بأسماء السائقين القادمين وأرقام العربيات" },
    { en: "Direct daily payouts via a secure payment gateway", ar: "تسوية يومية سريعة للأرباح عبر بوابة دفع آمنة ومعتمدة" }
  ];

  const proFeatures = [
    { en: "Everything in Free Starter, plus:", ar: "كل مميزات باقة البداية المجانية، بالإضافة إلى:" },
    { en: "AI dynamic surge pricing (maximize peak hour yield)", ar: "تسعير ديناميكي ذكي لمضاعفة أرباح ساعات الذروة تلقائياً" },
    { en: "Advanced occupancy forecasting & peak heatmaps", ar: "تحليلات متقدمة لنسب الإشغال وساعات الضغط في جراجك" },
    { en: "Multi-lot centralized management control panel", ar: "لوحة موحدة لإدارة عدة جراجات وفروع من مكان واحد" },
    { en: "Ground attendant shift tracking & cash leakage audit", ar: "متابعة دقيقة لورديات العمال ومنع أي تسريب نقدي" }
  ];

  const driverFeatures = [
    { en: "Search & discover parking near any Egyptian landmark", ar: "البحث واكتشاف أقرب ركنة لأي وجهة في مصر" },
    { en: "Compare live hourly, daily, and monthly rates", ar: "مقارنة فورية لأسعار الركنة بالساعة واليوم" },
    { en: "Guaranteed advance spot reservation before departure", ar: "حجز مسبق ومضمون للمكان قبل التحرك بالعربية" },
    { en: "100% cashless digital payment (InstaPay, Meeza, Wallets)", ar: "دفع إلكتروني سلس عبر إنستاباي، ميزة، والمحافظ الإلكترونية" },
    { en: "Vehicle profile & instant active digital QR pass", ar: "تصريح دخول ذكي ومباشر برقم العربية أو كود QR" }
  ];

  return (
    <section id="control-panel" className="py-24 px-6 bg-slate-50/60 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest font-enHeading mb-4 border border-brand-accent/20">
              <Translate en="Two Integrated Objectives" ar="منظومة متكاملة لخدمة المشغل والسائق" />
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-5">
              <Translate en="The Operator Control Panel & Driver Platform" ar="لوحة تحكم المشغلين وتطبيق حجز السائقين" />
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              <Translate 
                en="Irken pairs powerful B2B operator tools with Egypt's digital parking reservation marketplace." 
                ar="إركن بتجمع بين لوحة تحكم ذكية لإدارة الجراج وسوق حجز إلكتروني بيوصلك بآلاف السائقين في مصر." 
              />
            </p>
          </Reveal>
        </div>

        {/* ── B2B Section: Operator Control Panel Plans (Free vs Pro) ──── */}
        <div className="mb-20">
          
          {/* Header & Apple-style Segmented Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                <LayoutDashboard className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <span className="text-[11px] font-bold font-enHeading text-brand-accent uppercase tracking-widest">
                  <Translate en="Objective 1 (B2B For Operators)" ar="الهدف الأول: لأصحاب ومشغلي الجراجات" />
                </span>
                <h3 className="text-2xl font-bold font-enHeading text-slate-900">
                  <Translate en="Irken Operator Control Panel" ar="لوحة تحكم مشغلي الجراجات" />
                </h3>
              </div>
            </div>

            {/* Apple Segmented Control for Billing Cycle */}
            <div className="inline-flex items-center p-1 bg-slate-200/70 rounded-full border border-slate-300/60 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  'px-4 py-1.5 rounded-full text-xs font-bold font-enHeading uppercase tracking-wider transition-all duration-200 cursor-pointer',
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <Translate en="Monthly Billing" ar="اشتراك شهري" />
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={cn(
                  'px-4 py-1.5 rounded-full text-xs font-bold font-enHeading uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5',
                  billingCycle === 'annual'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <span><Translate en="Annual Billing" ar="اشتراك سنوي" /></span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-extrabold">
                  <Translate en="SAVE 20%" ar="وفر 20%" />
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Starter Tier */}
            <Reveal delay={0.1}>
              <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between h-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold font-enHeading bg-slate-100 text-slate-700 uppercase tracking-[0.14em] border border-slate-200">
                        <Translate en="Starter Plan" ar="باقة البداية" />
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-bold font-enHeading text-slate-900 mt-3 tracking-tight">
                        <Translate en="Free Control Panel" ar="لوحة تحكم مجانية (0 جنيه)" />
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold font-enHeading text-slate-900 tabular-nums tracking-tight">0 EGP</div>
                      <div className="text-xs text-slate-500 font-medium tracking-wide"><Translate en="Forever free" ar="مجاناً للأبد" /></div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8 font-normal max-w-prose">
                    <Translate 
                      en="Essential tools for licensed lot owners to list their facility on the Irken reservation network and receive advance bookings." 
                      ar="كل الأدوات الأساسية اللي محتاجها عشان تسجل جراجك على شبكة إركن وتبدأ تستقبل حجوزات السائقين المسبقة فوراً." 
                    />
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {freeFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span><Translate en={f.en} ar={f.ar} /></span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PrimaryButton 
                  en="Get Started for Free"
                  ar="سجل جراجك مجاناً"
                  href="#operator-onboard"
                  className="w-full py-3.5 text-xs bg-slate-900 hover:bg-slate-800 active:scale-[0.98]"
                />
              </div>
            </Reveal>

            {/* Pro Subscription */}
            <Reveal delay={0.16}>
              <div className="relative bg-white border-2 border-brand-accent rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between h-full shadow-[0_20px_50px_-10px_rgba(86,155,170,0.18)]">
                {/* Apple-style floating pill badge */}
                <div className="absolute -top-3.5 ltr:right-8 rtl:left-8">
                  <span className="px-4 py-1 rounded-full text-xs font-bold font-enHeading bg-brand-accent text-white uppercase tracking-[0.14em] shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <Translate en="Recommended for Operators" ar="الخيار الأفضل لأعلى أرباح" />
                  </span>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold font-enHeading bg-brand-accent/10 text-brand-accent uppercase tracking-[0.14em] border border-brand-accent/30">
                        <Translate en="Pro Subscription" ar="الاشتراك المتقدم" />
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-bold font-enHeading text-slate-900 mt-3 flex items-center gap-2 tracking-tight">
                        <span><Translate en="Operator Pro Dashboard" ar="لوحة التحكم المتقدمة" /></span>
                        <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold font-enHeading text-slate-900 tabular-nums tracking-tight">
                        {billingCycle === 'annual' ? 'Flexible Annual' : 'Monthly Tier'}
                      </div>
                      <div className="text-xs text-brand-accent font-bold tracking-wide">
                        <Translate en="Advanced Yield & Surge" ar="تسعير ذكي وإشغال أعلى" />
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8 font-normal max-w-prose">
                    <Translate 
                      en="Empower your operations with algorithmic dynamic pricing, occupancy forecasting heatmaps, and multi-lot centralized governance." 
                      ar="زود أرباحك بخوارزميات التسعير الذكي في أوقات الذروة، وتحليلات الإشغال، وإدارة فروعك بالكامل من شاشة واحدة." 
                    />
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {proFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-900 font-semibold leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span><Translate en={f.en} ar={f.ar} /></span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PrimaryButton 
                  en="Upgrade to Pro Control Panel"
                  ar="اشترك في اللوحة المتقدمة"
                  href="#operator-onboard"
                  className="w-full py-3.5 text-xs shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── B2C Section: Driver Platform (irken.eg) ─────────────────── */}
        <Reveal delay={0.2}>
          <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold font-enHeading text-brand-accent uppercase tracking-widest">
                    <Translate en="Objective 2 (B2C Driver Marketplace)" ar="الهدف الثاني: تطبيق السائقين وحجز الأماكن" />
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-enHeading text-white tracking-tight mb-4">
                  irken.eg — <Translate en="Egypt's Online Parking Reservation Engine" ar="محرك حجز أماكن الركنة في مصر" />
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                  <Translate 
                    en="Our consumer platform brings ready-to-pay drivers directly to your facility. Vehicle owners search their destination, reserve their bay in advance, and pay digitally before arrival." 
                    ar="تطبيقنا بيجيبلك السواقين الجاهزين للدفع لجراجك مباشرة. السواق بيدور على وجهته، يحجز مكانه مسبقاً، ويدفع إلكترونياً قبل ما يتحرك بالعربية." 
                  />
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {driverFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                      <div className="w-4 h-4 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span><Translate en={f.en} ar={f.ar} /></span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="https://irken.eg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent/90 text-white font-enHeading text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
                  >
                    <span><Translate en="Visit Driver Platform (irken.eg)" ar="زيارة تطبيق السائقين (irken.eg)" /></span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Visual preview box (Apple-style 3-step consumer flow) */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-2xl">
                <div className="text-[11px] font-mono text-slate-400 mb-5 flex items-center justify-between border-b border-slate-800 pb-3">
                  <span>IRKEN.EG // CONSUMER FLOW</span>
                  <span className="text-brand-accent font-bold">100% DIGITAL</span>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between hover:border-brand-accent/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-slate-300 font-medium">
                      <Search className="w-4 h-4 text-brand-accent" />
                      <span>1. Search & Compare Rates</span>
                    </div>
                    <span className="text-brand-accent font-bold font-mono">Cairo / Giza</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between hover:border-emerald-400/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-slate-300 font-medium">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>2. Advance Guaranteed Spot</span>
                    </div>
                    <span className="text-emerald-400 font-bold font-mono">Locked Bay</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between hover:border-brand-accent/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-slate-300 font-medium">
                      <CreditCard className="w-4 h-4 text-brand-accent" />
                      <span>3. Secure Payment & QR Pass</span>
                    </div>
                    <span className="text-brand-accent font-bold font-mono flex items-center gap-1">
                      <QrCode className="w-3.5 h-3.5" />
                      InstaPay
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
