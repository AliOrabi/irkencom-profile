'use client';

import React from 'react';
import Image from 'next/image';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import {
  Search,
  Wallet,
  Headphones,
  FileX2,
  ScanLine,
  Smartphone,
  Cpu,
  ShieldCheck
} from 'lucide-react';

export default function OperatorValue() {
  const pillars = [
    {
      icon: ShieldCheck,
      titleEn: "Zero cost. Zero risks. If you don't win, neither do we.",
      titleAr: "صفر تكلفة. صفر مخاطرة. إذا لم تربح، فلن نربح نحن أيضاً.",
      descEn: "No setup fees, no monthly software costs, and no hardware to buy. We earn a small commission only when a driver successfully reserves and pays — making your partnership 100% risk-free from day one.",
      descAr: "بدون أي رسوم اشتراك لأول 6 أشهر، وبدون مصاريف برمجيات، وبدون شراء أي أجهزة جديدة. عمولة إركن تحتسب على عمليات الحجز المؤكدة والمدفوعة فقط — شراكتك معنا خالية تماماً من المخاطر.",
      proofEn: "Zero Cost · Zero Risk",
      proofAr: "6 أشهر بدون رسوم اشتراك · بدون مخاطر رأسمالية"
    },
    {
      icon: Search,
      titleEn: "We bring you new drivers who are already looking for parking near you.",
      titleAr: "نجلب لك سائقين يبحثون بالفعل عن موقف سيارات بالقرب منك.",
      descEn: "Stop relying only on cars passing by chance. Drivers actively searching for parking near hospitals, offices, and commercial centers in your area on Irken are routed directly to your facility — before they get in their car.",
      descAr: "لا تعتمد فقط على السيارات العابرة بالصدفة في الشارع. السائقون الذين يبحثون عن ركنة قريبة من وجهاتهم في منطقتك على منصة إركن يتم توجيههم مباشرة لجراجك قبل انطلاقهم.",
      proofEn: "Active drivers searching in your area",
      proofAr: "سائقون يبحثون فعلياً في منطقتك"
    },
    {
      icon: Headphones,
      titleEn: "24/7 Dedicated Support — for you and your staff",
      titleAr: "دعم مخصص 24/7 — لك ولفريقك",
      descEn: "Our support team is available 24/7 via WhatsApp and direct channels to assist facility managers and gate staff, alongside ongoing operational consulting.",
      descAr: "فريق الدعم لدينا متوفر على مدار الساعة عبر واتساب وقنوات الدعم المباشرة لمساعدة مديري المرافق وموظفي البوابات، بالإضافة إلى الاستشارات التشغيلية لتنمية أرباحك.",
      proofEn: "WhatsApp support · Operational advisory",
      proofAr: "دعم واتساب مباشر · استشارات تشغيلية"
    },
    {
      icon: Wallet,
      titleEn: "Confirmed reservations directly to your account",
      titleAr: "حجوزات مؤكدة مباشرة لحسابك",
      descEn: "Drivers pay securely through the Irken platform before arriving at your location. Earnings are tracked in real time and transferred within 2–3 business days of your payout request.",
      descAr: "يدفع السائقون بشكل آمن عبر منصة إركن قبل الوصول لموقفك. وبمجرد تسجيل الوصول، تتم معالجة مستحقاتك وتحويلها إلى حسابك خلال 2-3 أيام عمل من طلب السحب.",
      proofEn: "Bank accounts, InstaPay, and mobile wallets",
      proofAr: "حسابات بنكية، إنستاباي، ومحافظ إلكترونية"
    }
  ];

  const compatibilityModes = [
    { icon: Smartphone, labelEn: "Attendant's Own Smartphone", labelAr: "على موبايل موظف البوابة أو (السايس)" },
    { icon: ScanLine, labelEn: "Instant QR Scan at the Gate", labelAr: "مسح QR فوري عند البوابة" },
    { icon: Search, labelEn: "Plate or Reservation ID Lookup", labelAr: "استعلام برقم اللوحة أو رقم الحجز" },
    { icon: Cpu, labelEn: "Works with Existing Automated Gates", labelAr: "متوافق مع بواباتك الإلكترونية الحالية" }
  ];

  return (
    <section id="why-operators" className="py-16 md:py-24 overflow-hidden">

      {/* ── Context Banner ─────────────────────────────────────────────────── */}
      <Reveal>
        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-8 mb-16">
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)]">
            <Image
              src="/images/egyptian-garage-attendant.jpg"
              alt="Irken gate attendant scanning a driver's QR code in a Cairo parking facility"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

            {/* Inset caption */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <Reveal delay={0.1}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-[11px] font-bold font-enHeading uppercase tracking-widest mb-3 backdrop-blur-sm w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <Translate en="Zero Hardware · Works from Day One" ar="بدون أجهزة جديدة · يبدأ العمل من اليوم الأول" />
                </span>
              </Reveal>
              <Reveal delay={0.15}>
                <h3 className="text-white font-bold font-enHeading text-xl sm:text-2xl md:text-3xl leading-snug max-w-md rtl:leading-relaxed">
                  <Translate
                    en="Your attendant already has everything he needs."
                    ar="موظف البوابة لديه كل ما يحتاجه بالفعل."
                  />
                </h3>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Section Header ──────────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest font-enHeading mb-4 border border-brand-accent/20">
              <Translate en="Why Partner with Irken" ar="لماذا تنضم كمشغل مع إركن؟" />
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-5 rtl:leading-[1.3]">
              <Translate en="Every empty parking space is missed revenue." ar="كل مساحة ركن شاغرة = إيراد ضائع يصعب تعويضه" />
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed rtl:leading-[1.8]">
              <Translate
                en="Irken helps you fill your empty bays by routing pre-paid drivers straight to your facility every single day."
                ar="إركن تساعدك على ملء المساحات الشاغرة بتوجيه سائقين بحجوزات مسبقة مباشرة إلى موقفك يومياً."
              />
            </p>
          </Reveal>
        </div>

        {/* ── 4 Value Pillar Cards ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <Reveal key={idx} delay={0.05 + idx * 0.08}>
                <div className="bg-white border border-slate-200/90 rounded-[2rem] p-8 sm:p-10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:border-brand-accent/40 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-105 group-hover:bg-brand-accent/10 transition-all duration-300 shadow-inner">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-enHeading text-slate-900 tracking-tight mb-3 rtl:leading-[1.4]">
                      <Translate en={pillar.titleEn} ar={pillar.titleAr} />
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 rtl:leading-[1.8]">
                      <Translate en={pillar.descEn} ar={pillar.descAr} />
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold font-enHeading text-brand-accent uppercase tracking-wider">
                    <FileX2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span><Translate en={pillar.proofEn} ar={pillar.proofAr} /></span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Hardware & Access Compatibility Strip ───────────────────────── */}
        <Reveal delay={0.25}>
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-brand-accent/15 text-brand-accent flex items-center justify-center shrink-0 shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold font-enHeading uppercase tracking-widest text-brand-accent">
                  <Translate en="Zero New Hardware Required" ar="بدون الحاجة لشراء أجهزة جديدة" />
                </div>
                <h4 className="text-base sm:text-lg font-bold font-enHeading text-slate-900 rtl:leading-[1.4]">
                  <Translate en="Works with Your Existing Gate & Attendant Setup" ar="تعمل مباشرة مع بوابتك وطاقم العمل الحالي" />
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {compatibilityModes.map((mode, i) => {
                const ModeIcon = mode.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    <ModeIcon className="w-3.5 h-3.5 text-brand-accent" />
                    <span><Translate en={mode.labelEn} ar={mode.labelAr} /></span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
