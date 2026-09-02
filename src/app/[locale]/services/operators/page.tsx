import React from 'react';
import type { Metadata } from 'next';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { PrimaryButton } from '@/components/ui/Buttons';
import {
  Search,
  ShieldCheck,
  TrendingUp,
  Zap
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'وفر حجز مواقف السيارات لعملائك بسرعة وسهولة | إركن سوليوشنز'
      : 'Quick and easy parking reservation for your customers | Irken',
    description: isArabic
      ? 'حوّل الأماكن الشاغرة في جراجك إلى دخل رقمي مضمون. صفر مصاريف تأسيس، ظهور مباشر للسائقين على irken، وتسوية مستحقات دورية بدون أجهزة جديدة.'
      : 'Monetize vacant parking bays into guaranteed digital revenue. Zero hardware CapEx, direct in-app driver discovery on irken, and pre-settled daily payouts in Egypt.',
    keywords: [
      'مشغلي المواقف',
      'اركن',
      'إركن',
      'اركن فين',
      'ركنة',
      'باركينج',
      'جراج',
      'ساحات انتظار',
      'سايس',
      'السايس',
      'حجز ركنة',
      'استثمار الجراجات',
      'irken operators',
      'Irken Solutions',
    ],
    alternates: {
      canonical: `https://irken.com.eg/${locale}/services/operators`,
      languages: {
        ar: 'https://irken.com.eg/ar/services/operators',
        en: 'https://irken.com.eg/en/services/operators',
      },
    },
  };
}

export default function OperatorsSolutionPage() {
  const operatorPillars = [
    {
      icon: Search,
      title: { en: "1. Direct In-App Driver Discovery", ar: "1. ظهور مباشر للسائقين على irken.eg" },
      description: {
        en: "When drivers search for parking near your zone on the irken app, your facility is matched instantly for advance reservation.",
        ar: "لما السائقين يبحثوا عن ركنة قريبة من وجهتهم على تطبيق irken، جراجك بيظهرلهم فوراً للحجز المسبق."
      }
    },
    {
      icon: Zap,
      title: { en: "2. Zero Hardware CapEx (Works With Existing Gates)", ar: "2. بدون شراء أجهزة جديدة (متوافق مع بواباتك)" },
      description: {
        en: "No expensive servers or barrier replacement. We overlay directly on FAAC, BFT, CAME, ZKTeco, RFID, LPR, or manual attendant apps in 48 hours.",
        ar: "مش هتحتاج تشتري بوابات أو سيرفرات جديدة. نظامنا بيركب على بواباتك الحالية وكاميراتك أو تطبيق العمال خلال 48 ساعة فقط."
      }
    },
    {
      icon: TrendingUp,
      title: { en: "3. Guaranteed Advance Spot Cashflow", ar: "3. دخل مسبق ومضمون من الأماكن الفاضية" },
      description: {
        en: "Turn slow, off-peak hours into steady income. Drivers reserve and pay before they even start their engine.",
        ar: "حوّل أوقات الركود والهدوء لدخل ثابت. السائق بيحجز ويدفع إلكترونياً قبل ما يتحرك بعربيته."
      }
    },
    {
      icon: ShieldCheck,
      title: { en: "4. Rapid Pre-Settled Daily Payouts", ar: "4. تسوية مالية يومية سريعة وآمنة" },
      description: {
        en: "All revenue is processed via an accredited, secure payment gateway in Egypt and deposited directly into your bank account.",
        ar: "كل المعاملات بتتم عبر بوابة دفع إلكترونية آمنة ومعتمدة في مصر وتتحول لحسابك البنكي بانتظام وبدون تأخير."
      }
    }
  ];

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero
        titleEn="Transform Vacant Parking Bays into Guaranteed Digital Revenue."
        titleAr="حوّل أماكن الركنة الفاضية في جراجك لدخل يومي مضمون."
        descriptionEn="Egypt's premier parking marketplace connects your facility directly with high-intent drivers searching on irken.eg — with zero hardware costs and 48-hour activation."
        descriptionAr="شبكة حجز إركن بتوصل جراجك بآلاف السائقين الجاهزين للدفع في مصر — بدون أي مصاريف تأسيس وبدون شراء أجهزة جديدة، وتفعيل كامل خلال 48 ساعة."
        badgeEn="FOR PARKING OPERATORS"
        badgeAr="لأصحاب ومشغلي الجراجات"
      />

      {/* ── Who, What, How Summary Card ───────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-2 block">
                WHO WE ARE
              </span>
              <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                <Translate en="Egypt's Digital Parking Network" ar="شبكة حجز المواقف الرقمية" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate
                  en="Irken is a technology platform connecting parking spaces with thousands of Egyptian drivers."
                  ar="إركن منصة تقنية متخصصة في ربط أماكن الإنتظار (الركنة) بآلاف السائقين في القاهرة والجيزة وكافة المحافظات."
                />
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-emerald-600 mb-2 block">
                WHAT YOU GET
              </span>
              <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                <Translate en="Higher Occupancy & Zero Cash Leakage" ar="إشغال أعلى ومنع التسريب" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate
                  en="Fill empty off-peak spaces with pre-paid advance reservations, automated check-in, and instant digital settlements."
                  ar="ملء المساحات الفاضية في أوقات الهدوء بحجوزات مسبقة ومضمونة، ومطابقة مالية دقيقة لكل قرش يدخل جراجك."
                />
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-2 block">
                HOW IT WORKS
              </span>
              <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                <Translate en="48-Hour Instant Activation" ar="تفعيل سريع خلال 48 ساعة" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate
                  en="Register for free (0 EGP) -> Connect existing gates/staff -> Start receiving advance driver reservations immediately."
                  ar="سجل مجاناً (0 جنيه) -> اربط جراجك -> استقبل حجوزاتك عملائك."
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Growth Pillars ──────────────────────────────────────────── */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-3 block">
            <Translate en="OPERATOR VALUE ENGINE" ar="محرك القيمة للمشغلين" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight">
            <Translate
              en="Four Direct Advantages for Every Garage in Egypt"
              ar="أربع مزايا مباشرة لكل صاحب ومشغل جراج في مصر"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operatorPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-enHeading text-slate-900 mb-3 tracking-tight">
                      <Translate en={pillar.title.en} ar={pillar.title.ar} />
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal max-w-prose">
                      <Translate en={pillar.description.en} ar={pillar.description.ar} />
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── Dual Tier Options (Free Starter vs Pro) ────────────────────── */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold font-enHeading text-slate-900 tracking-tight mb-3">
              <Translate en="Operator Control Panel Tiers" ar="باقات لوحة تحكم المشغلين" />
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              <Translate
                en="Start completely free or unlock advanced dynamic pricing and shift auditing."
                ar="ابدأ مجاناً تماماً أو اشترك في اللوحة المتقدمة للتسعير الديناميكي ومتابعة ورديات العمال."
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between">
              <div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold font-enHeading bg-slate-200 text-slate-700 uppercase tracking-wider">
                  STARTER TIER
                </span>
                <div className="text-3xl font-bold font-enHeading text-slate-900 mt-4 mb-2 tabular-nums">
                  0 EGP / <span className="text-sm font-normal text-slate-500">Forever Free</span>
                </div>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  <Translate
                    en="Full listing on irken.eg, spot counter, and daily pre-settled digital revenue."
                    ar="ظهور كامل على تطبيق السائقين irken.eg، عداد الأماكن الفاضية، وتسوية يومية للأرباح."
                  />
                </p>
              </div>
              <PrimaryButton
                en="List Your Facility for Free"
                ar="سجل جراجك مجاناً"
                href="/#operator-onboard"
                className="w-full text-xs py-3.5"
              />
            </div>

            <div className="bg-slate-950 text-white border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold font-enHeading bg-brand-accent text-white uppercase tracking-wider">
                  PRO SUBSCRIPTION
                </span>
                <div className="text-3xl font-bold font-enHeading text-emerald-400 mt-4 mb-2 tabular-nums">
                  Flexible Tier / <span className="text-sm font-normal text-slate-400">Monthly/Annual</span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  <Translate
                    en="AI dynamic surge pricing, occupancy heatmaps, and cash leakage prevention shift audits."
                    ar="تسعير ديناميكي ذكي في أوقات الذروة، خرائط حرارية للإشغال، ومنع التسريب النقدي."
                  />
                </p>
              </div>
              <PrimaryButton
                en="Request Pro Demo"
                ar="طلب تجربة الباقة المتقدمة"
                href="/contact"
                className="w-full text-xs py-3.5 bg-brand-accent hover:bg-brand-accent/90"
              />
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA
        titleEn="Ready to monetize your empty parking bays?"
        titleAr="جاهز تبدأ في تحويل أماكن الركنة الفاضية لأرباح؟"
        descriptionEn="Join Egypt's fastest growing parking network. Complete the 2-minute registration and our technical team will activate your lot within 24 hours."
        descriptionAr="انضم لأكبر شبكة حجز مواقف في مصر. سجل بياناتك خلال دقيقتين وفريقنا الفني هيتواصل معاك ويفعل جراجك خلال 24 ساعة."
        primaryButtonTextEn="List Your Facility (0 EGP Free Plan)"
        primaryButtonTextAr="سجل جراجك الآن (مجاناً 0 جنيه)"
        primaryButtonHref="/#operator-onboard"
      />
    </main>
  );
}
