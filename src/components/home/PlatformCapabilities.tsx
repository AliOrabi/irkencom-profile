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
  CreditCard,
  QrCode,
  Zap,
  Sparkles,
  TicketCheckIcon
} from 'lucide-react';

/* ── Capability Card Data ──────────────────────────────────────────────── */
const capabilities = [
  {
    icon: CalendarCheck2,
    titleEn: "Reservation Management",
    titleAr: "إدارة الحجوزات المباشرة",
    descEn: "Every advance reservation drivers make on irken.eg lands directly in your control panel — with driver name, plate number, arrival time, and spot assignment.",
    descAr: "كل حجز مسبق يتم عبر irken.eg يصلك مباشرة على لوحة التحكم — باسم السائق ورقم اللوحة وميعاد الوصول والمكان المخصص.",
    bullets: [
      { en: "Live incoming reservation feed with driver details", ar: "بث لحظي للحجوزات الواردة مع تفاصيل السائق" },
      { en: "Instant check-in verification at the gate — QR scan or plate lookup", ar: "تحقق فوري عند البوابة — مسح QR أو استعلام برقم اللوحة" },
      { en: "Full reservation history log — searchable by date, driver, or bay", ar: "سجل كامل للحجوزات قابل للبحث بالتاريخ أو السائق أو الموقف" }
    ],
    accentColor: 'text-brand-accent',
    bgAccent: 'bg-brand-accent/10',
    borderAccent: 'group-hover:border-brand-accent/40'
  },
  {
    icon: Wallet,
    titleEn: "Revenue & Settlements",
    titleAr: "الإيرادات والتسويات البنكية",
    descEn: "Every driver pays securely online before arriving. Your earnings are tracked in real time, and settlements are transferred to your approved Egyptian bank account within 2–3 business days of a withdrawal request.",
    descAr: "كل سائق يدفع إلكترونياً بأمان قبل الوصول. أرباحك تتابع لحظياً، وتتم تسوية مستحقاتك وتحويلها إلى حسابك البنكي خلال 2-3 أيام عمل من طلب السحب.",
    bullets: [
      { en: "Real-time earnings dashboard — see today's revenue at a glance", ar: "لوحة إيرادات لحظية لمعرفة دخل اليوم في ثوانٍ" },
      { en: "Withdrawal requests processed to any approved Egyptian bank in 2–3 business days", ar: "تحويل طلبات السحب لأي بنك مصري معتمد خلال 2-3 أيام عمل" },
      { en: "Full financial ledger with per-reservation transaction records", ar: "سجل مالي شفاف ومفصل لكل عملية حجز على حدة" }
    ],
    accentColor: 'text-emerald-600',
    bgAccent: 'bg-emerald-50',
    borderAccent: 'group-hover:border-emerald-400/40'
  },
  {
    icon: BarChart3,
    titleEn: "Smart Pricing & Analytics",
    titleAr: "التسعير الذكي والتحليلات",
    descEn: "The dashboard shows you when your facility reaches peak occupancy, when it has vacant bays, and highlights optimal pricing strategies to maximize overall yield.",
    descAr: "لوحة التحكم توضح لك أوقات الذروة وفترات الركود، وتقترح تلقائياً أنسب أسعار لتعظيم العائد في مختلف ساعات اليوم.",
    bullets: [
      { en: "Occupancy heatmap — see busiest hours and days at a glance", ar: "خريطة حرارية للإشغال توضح أوقات وأيام الذروة بنظرة واحدة" },
      { en: "Automated smart rate suggestions for peak hours to maximize yield", ar: "اقتراحات تسعير ذكية في أوقات الذروة لتعظيم الإيرادات" },
      { en: "Performance reports — weekly and monthly revenue trends", ar: "تقارير أداء دورية توضح اتجاهات الإيراد أسبوعياً وشهرياً" }
    ],
    accentColor: 'text-violet-600',
    bgAccent: 'bg-violet-50',
    borderAccent: 'group-hover:border-violet-400/40'
  },
  {
    icon: Users,
    titleEn: "Staff & Gate Control",
    titleAr: "إدارة موظفي البوابات",
    descEn: "Your gate attendants use the smartphones they already have. Track shifts, verify incoming vehicle check-ins, and eliminate cash handling discrepancies remotely.",
    descAr: "موظفو البوابات يستخدمون هواتفهم الذكية الحالية. تابع الورديات وتأكد من تسجيل كل سيارة تمنع أي تسرب نقدي — عن بُعد وبكل سهولة.",
    bullets: [
      { en: "Shift tracking per attendant — who's on gate, when, and for how long", ar: "متابعة دقيقة للورديات وساعات عمل كل موظف على البوابة" },
      { en: "Per-transaction attribution — link every reservation to the attendant who verified it", ar: "ربط كل حجز بالعامل الذي قام بالتحقق منه لضمان الشفافية" },
      { en: "Cash leakage audit — catch discrepancies between expected and actual intake", ar: "منع تسرب النقدية ورصد أي تفاوت بين الدخل المتوقع والفعلي" }
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
    en: "1. Search: Drivers look for available parking near their destination.",
    ar: "١. البحث: يبحث السائق عن مكان ركن متاح بالقرب من وجهته.",
    badge: { en: "Downtown", ar: "وسط البلد", color: 'text-brand-accent' }
  },
  {
    icon: CreditCard,
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/40',
    en: "2. Reserve: Driver reserves the spot and pre-pays securely online.",
    ar: "٢. الحجز: يحجز مكانه مسبقاً ويدفع بأمان عبر التطبيق.",
    badge: { en: "Guaranteed Spot", ar: "مكان مؤكد", color: 'text-emerald-400' }
  },
  {
    icon: TicketCheckIcon,
    color: 'text-brand-accent',
    borderHover: 'hover:border-brand-accent/40',
    en: "3. Arrive & Park: Driver shows digital pass; attendant scans QR at the gate.",
    ar: "٣. عند الوصول: يبرز تصريح الحجز الذكي ويمسح رمز QR عند البوابة.",
    badge: { en: "QR Pass", ar: "تذكرة ذكية", color: 'text-brand-accent', hasIcon: true }
  }
];

const driverFeatures = [
  { en: "Search & discover parking near current location", ar: "البحث واكتشاف أقرب ركنة لموقعك الحالي" },
  { en: "Compare live hourly, daily, and monthly rates side by side", ar: "مقارنة فورية لأسعار الركنة بالساعة واليوم" },
  { en: "Guaranteed advance spot reservation before driving", ar: "حجز مسبق ومضمون لركنتك قبل الانطلاق" },
  { en: "100% cashless digital payment (InstaPay, Meeza, Wallets)", ar: "دفع سلس عبر إنستاباي، ميزة، والمحافظ الإلكترونية" },
  { en: "Instant digital entry pass via plate number or QR scan", ar: "تصريح دخول ذكي برقم اللوحة أو مسح رمز QR" }
];

export default function PlatformCapabilities() {
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
                en="Complete operational control with zero new hardware"
                ar="تحكم تشغيلي ومالي كامل بدون أي أجهزة جديدة"
              />
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed rtl:leading-[1.8] max-w-2xl mx-auto">
              <Translate
                en="Manage incoming reservations, track gate staff shifts, and review live earnings in real time while Irken brings you pre-paid drivers."
                ar="تابع الحجوزات الواردة، نظّم ورديات عمال البوابات، وراقب إيراداتك لحظياً بينما تجلب لك إركن تدفقاً مستمراً من السائقين."
              />
            </p>
          </Reveal>

          {/* Launch period banner */}
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-enHeading">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <Translate
                en="Free access for all partners during the launch period"
                ar="وصول مجاني لجميع الشركاء والمشغلين خلال فترة الإطلاق"
              />
            </div>
          </Reveal>
        </div>

        {/* ── 4 Capability Cards — 2×2 Grid ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
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

        {/* ── Driver Platform Panel ───────────────────────────────────── */}
        <Reveal delay={0.25}>
          <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Ambient glow */}
            <div className="absolute top-0 ltr:right-0 rtl:left-0 w-96 h-96 bg-brand-accent/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold font-enHeading text-brand-accent uppercase tracking-widest">
                    <Translate en="Driver Platform Overview" ar="كيف تعمل إركن؟" />
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-enHeading text-white tracking-tight mb-4 rtl:leading-[1.3]">
                  Irken — <Translate en="Egypt's Digital Parking Reservation Platform" ar="منصة حجز أماكن الركنة في مصر" />
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl rtl:leading-[1.8]">
                  <Translate
                    en="Irken directs drivers directly to your bays. Drivers search their destination, reserve their spot in advance, and pay online before arrival."
                    ar="إركن توجه السائقين مباشرة لموقفك. السائق يبحث عن وجهته، يحجز مكانه مسبقاً، ويدفع إلكترونياً قبل وصوله."
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
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white font-enHeading text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-brand-accent/25 active:scale-[0.98]"
                >
                  <span><Translate en="Visit Irken Driver App" ar="اكتشف تطبيق السائقين" /></span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 3-step consumer flow widget */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col backdrop-blur-xl shadow-2xl">
                <div className="text-[11px] font-mono text-slate-400 mb-5 flex items-center justify-between border-b border-slate-800 pb-3">
                  <span>IRKEN · <Translate en="DRIVER FLOW" ar="رحلة السائق" /></span>
                  <span className="text-brand-accent font-bold"><Translate en="100% DIGITAL" ar="100% رقمية" /></span>
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

                {/* Driver volume signal */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                  <Translate
                    en="Every reservation on Irken automatically syncs to your Operator Dashboard in real time."
                    ar="كل عملية حجز على إركن تظهر في لوحة تحكم المشغل الخاصة بك تلقائياً وبشكل فوري."
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
