'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import {
  CalendarCheck2,
  Wallet,
  BarChart3,
  Users,
  CheckCircle2,
  ExternalLink,
  Search,
  TrendingUp,
  CreditCard,
  QrCode,
  Zap,
  Sparkles
} from 'lucide-react';
import { PrimaryButton } from '@/components/ui/Buttons';

/* ── Capability Card Data ──────────────────────────────────────────────── */
const capabilities = [
  {
    icon: CalendarCheck2,
    titleEn: "Reservation Management",
    titleAr: "إدارة الحجوزات",
    descEn: "Every advance reservation your drivers make on irken.eg lands directly in your control panel — with driver name, plate number, arrival time, and spot assignment.",
    descAr: "كل حجز مسبق يعمله السائق على irken.eg بيوصلك مباشرة على لوحة التحكم — باسم السائق ورقم العربية وميعاد الوصول والمكان المخصص.",
    bullets: [
      { en: "Live incoming reservation feed with driver details", ar: "بث لحظي للحجوزات الواردة بتفاصيل السائق" },
      { en: "Instant check-in verification at the gate — QR scan or plate lookup", ar: "تحقق فوري عند البوابة — مسح QR أو استعلام برقم اللوحة" },
      { en: "Full reservation history log — searchable by date, driver, or bay", ar: "سجل كامل لكل الحجوزات — بيتبحث بالتاريخ أو السائق أو المكان" }
    ],
    accentColor: 'text-brand-accent',
    bgAccent: 'bg-brand-accent/10',
    borderAccent: 'group-hover:border-brand-accent/40'
  },
  {
    icon: Wallet,
    titleEn: "Revenue & Settlements",
    titleAr: "الإيرادات والتسويات البنكية",
    descEn: "Every driver pays securely online before arriving. Your earnings are tracked in real-time, and settlements are transferred to your approved Egyptian bank account within 2–3 business days of a withdrawal request.",
    descAr: "كل سائق بيدفع إلكترونياً بأمان قبل ما يوصل. أرباحك بتتابع في الوقت الفعلي، والتسوية بتتحول لحسابك البنكي المعتمد خلال 2-3 أيام عمل من طلب السحب.",
    bullets: [
      { en: "Real-time earnings dashboard — see today's revenue at a glance", ar: "لوحة إيرادات لحظية — شوف كسب اليوم في ثانية" },
      { en: "Withdrawal requests processed to any approved Egyptian bank in 2–3 business days", ar: "طلبات السحب تتحول لأي بنك مصري معتمد خلال 2-3 أيام عمل" },
      { en: "Full financial log with per-reservation transaction records", ar: "سجل مالي كامل مع تفاصيل كل حجز على حدة" }
    ],
    accentColor: 'text-emerald-600',
    bgAccent: 'bg-emerald-50',
    borderAccent: 'group-hover:border-emerald-400/40'
  },
  {
    icon: BarChart3,
    titleEn: "Smart Pricing & Analytics",
    titleAr: "التسعير الذكي والتحليلات",
    descEn: "The dashboard tells you exactly when your garage is full, when it's empty, and which hours drive the most revenue — then suggests optimal rates for peak and off-peak times automatically.",
    descAr: "لوحة التحكم بتقولك بالظبط امتى جراجك بيتملى، امتى بيكون فاضي، وأيه الساعات اللي بتجيبلك أعلى إيراد — وبتقترح تلقائياً أنسب سعر في كل وقت.",
    bullets: [
      { en: "Occupancy heatmap — see your busiest hours and days at a glance", ar: "خريطة حرارية للإشغال — شوف أيام وساعات ذروتك بنظرة واحدة" },
      { en: "Automated smart rate suggestions for peak hours to maximize yield", ar: "اقتراحات تسعير ذكية تلقائية في أوقات الذروة لتعظيم الإيراد" },
      { en: "Performance reports — weekly and monthly revenue trends", ar: "تقارير أداء — اتجاهات الإيراد أسبوعياً وشهرياً" }
    ],
    accentColor: 'text-violet-600',
    bgAccent: 'bg-violet-50',
    borderAccent: 'group-hover:border-violet-400/40'
  },
  {
    icon: Users,
    titleEn: "Staff & Gate Control",
    titleAr: "إدارة العمال والبوابات",
    descEn: "Your gate attendants don't need training, new devices, or app installations. They use the phone they already have. You track their shifts, see who checked in which driver, and catch any revenue gaps — remotely.",
    descAr: "عمال البوابة عندك ما محتاجوش تدريب، ولا أجهزة جديدة، ولا تثبيت أي تطبيقات. بيستخدموا موبايلهم الموجود. وأنت بتتابع ورديتهم، تشوف مين أدخل مين، وتلاقي أي فجوة في الإيرادات — عن بُعد.",
    bullets: [
      { en: "Shift tracking per attendant — who's on gate, when, and for how long", ar: "متابعة الورديات لكل عامل — مين على البوابة، امتى، وقديه" },
      { en: "Per-transaction attribution — link every reservation to the attendant who verified it", ar: "نسب كل حجز للعامل اللي وثّقه — شفافية كاملة في كل معاملة" },
      { en: "Cash leakage audit — catch discrepancies between expected and actual intake", ar: "رصد تسريب النقدية — اكتشف أي فرق بين الإيراد المتوقع والفعلي" }
    ],
    accentColor: 'text-amber-600',
    bgAccent: 'bg-amber-50',
    borderAccent: 'group-hover:border-amber-400/40'
  }
];

/* ── Driver Consumer Flow ─────────────────────────────────────────────── */
const consumerFlow = [
  {
    icon: Search,
    color: 'text-brand-accent',
    borderHover: 'hover:border-brand-accent/40',
    en: "1. Search & compare rates near your destination",
    ar: "١. ابحث وقارن الأسعار بالقرب من وجهتك",
    badge: { en: "Cairo / Giza", ar: "القاهرة / الجيزة", color: 'text-brand-accent' }
  },
  {
    icon: TrendingUp,
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/40',
    en: "2. Reserve your bay — it's locked just for you",
    ar: "٢. احجز مكانك — هيتحجزلك وحده",
    badge: { en: "Locked Bay", ar: "مكان محجوز", color: 'text-emerald-400' }
  },
  {
    icon: CreditCard,
    color: 'text-brand-accent',
    borderHover: 'hover:border-brand-accent/40',
    en: "3. Pay digitally & get your QR entry pass",
    ar: "٣. ادفع إلكترونياً وخد تصريح QR بتاعك",
    badge: { en: "InstaPay", ar: "إنستاباي", color: 'text-brand-accent', hasIcon: true }
  }
];

const driverFeatures = [
  { en: "Search & discover parking near any Egyptian landmark", ar: "البحث واكتشاف أقرب ركنة لأي وجهة في مصر" },
  { en: "Compare live hourly, daily, and monthly rates side by side", ar: "مقارنة فورية لأسعار الركنة بالساعة واليوم" },
  { en: "Guaranteed advance spot reservation before leaving home", ar: "حجز مسبق ومضمون للمكان قبل التحرك بالعربية" },
  { en: "100% cashless digital payment (InstaPay, Meeza, Wallets)", ar: "دفع إلكتروني سلس عبر إنستاباي، ميزة، والمحافظ الإلكترونية" },
  { en: "Instant digital entry pass via plate number or QR code scan", ar: "تصريح دخول ذكي ومباشر برقم العربية أو كود QR فوري" }
];

/* ── Component ───────────────────────────────────────────────────────── */
export default function SandboxDualProducts() {
  return (
    <section id="control-panel" className="py-16 md:py-24 px-6 bg-slate-50/60 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">

        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest font-enHeading mb-4 border border-brand-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              <Translate en="Operator Control Panel" ar="لوحة تحكم المشغلين" />
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-5 rtl:leading-[1.3]">
              <Translate
                en="Everything you need to run and grow your parking facility"
                ar="كل اللي محتاجه لتشغيل وتنمية جراجك"
              />
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed rtl:leading-[1.8] max-w-2xl mx-auto">
              <Translate
                en="One dashboard. Zero new hardware. Works from day one with your existing phones, gates, and attendants — while irken.eg brings you a steady stream of pre-paid driver reservations."
                ar="لوحة تحكم واحدة. من غير أي أجهزة جديدة. بتشتغل من أول يوم مع موبايلاتك وبواباتك وعمالك الحاليين — وفي نفس الوقت irken.eg بيجبلك سائقين بيحجزوا ويدفعوا مسبقاً."
              />
            </p>
          </Reveal>

          {/* GTM open-access banner */}
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-enHeading">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <Translate
                en="Full access — free for all operator partners during our launch phase"
                ar="وصول كامل — مجاناً لكل الشركاء المشغلين خلال مرحلة الإطلاق"
              />
            </div>
          </Reveal>
        </div>

        {/* ── 4 Capability Cards — 2×2 Grid ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <Reveal key={idx} delay={0.06 + idx * 0.07}>
                <div className={`group bg-white border border-slate-200/90 rounded-[2rem] p-8 sm:p-9 h-full flex flex-col hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.07)] transition-all duration-300 ${cap.borderAccent} hover:border`}>

                  {/* Card icon + title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${cap.bgAccent} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${cap.accentColor}`} />
                    </div>
                    <div>
                      <div className={`text-[10px] font-bold font-enHeading ${cap.accentColor} uppercase tracking-widest mb-1`}>
                        <Translate en={cap.titleEn} ar={cap.titleAr} />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed rtl:leading-[1.7]">
                        <Translate en={cap.descEn} ar={cap.descAr} />
                      </p>
                    </div>
                  </div>

                  {/* Concrete capability bullets */}
                  <ul className="space-y-2.5 mt-auto pt-4 border-t border-slate-100">
                    {cap.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-normal">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${cap.accentColor} shrink-0 mt-0.5`} />
                        <span><Translate en={b.en} ar={b.ar} /></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Single CTA ─────────────────────────────────────────────── */}
        <Reveal delay={0.32}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <PrimaryButton
              en="Register Your Facility for Free"
              ar="سجل جراجك مجاناً"
              href="#operator-onboard"
              className="px-10 py-4 text-xs active:scale-[0.98] shadow-lg shadow-brand-accent/20"
            />
            <span className="text-xs text-slate-500 font-medium rtl:leading-[1.6]">
              <Translate
                en="No contracts. No setup fees. Full access from day one."
                ar="من غير عقود. من غير رسوم إعداد. وصول كامل من أول يوم."
              />
            </span>
          </div>
        </Reveal>

        {/* ── Driver Platform Panel ───────────────────────────────────── */}
        <Reveal delay={0.38}>
          <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Ambient glow */}
            <div className="absolute top-0 ltr:right-0 rtl:left-0 w-96 h-96 bg-brand-accent/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold font-enHeading text-brand-accent uppercase tracking-widest">
                    <Translate en="What Brings Drivers to You" ar="ما الذي يجلب إليك السائقين" />
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-enHeading text-white tracking-tight mb-4 rtl:leading-[1.3]">
                  irken.eg — <Translate en="Egypt's Online Parking Reservation App" ar="تطبيق حجز أماكن الركنة في مصر" />
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl rtl:leading-[1.8]">
                  <Translate
                    en="Our consumer app brings ready-to-pay drivers directly to your facility. Drivers search their destination, reserve their bay in advance, and pay digitally — before they even start the engine."
                    ar="تطبيقنا بيجيبلك السواقين الجاهزين للدفع لجراجك مباشرة. السواق بيدور على وجهته، يحجز مكانه مسبقاً، ويدفع إلكترونياً — قبل ما يشعل عربيته."
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

                <a
                  href="https://irken.eg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent/90 text-white font-enHeading text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
                >
                  <span><Translate en="Visit Driver App (irken.eg)" ar="زيارة تطبيق السائقين (irken.eg)" /></span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 3-step consumer flow widget — fully bilingual */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col backdrop-blur-xl shadow-2xl">
                <div className="text-[11px] font-mono text-slate-400 mb-5 flex items-center justify-between border-b border-slate-800 pb-3">
                  <span>IRKEN.EG · <Translate en="DRIVER FLOW" ar="رحلة السائق" /></span>
                  <span className="text-brand-accent font-bold"><Translate en="100% DIGITAL" ar="١٠٠٪ إلكتروني" /></span>
                </div>

                <div className="space-y-3">
                  {consumerFlow.map((step, i) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={i} className={`p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between ${step.borderHover} transition-colors`}>
                        <div className="flex items-center gap-2.5 text-slate-300 font-medium min-w-0">
                          <StepIcon className={`w-4 h-4 ${step.color} shrink-0`} />
                          <span className="truncate"><Translate en={step.en} ar={step.ar} /></span>
                        </div>
                        <span className={`${step.badge.color} font-bold font-mono flex items-center gap-1 shrink-0 ms-2`}>
                          {step.badge.hasIcon && <QrCode className="w-3.5 h-3.5" />}
                          <Translate en={step.badge.en} ar={step.badge.ar} />
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Zap badge — driver volume signal */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <Translate
                    en="Every completed reservation on irken.eg flows into your operator panel automatically."
                    ar="كل حجز مكتمل على irken.eg بيوصل لوحة تحكمك تلقائياً."
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
