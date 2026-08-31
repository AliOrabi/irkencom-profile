import React from 'react';
import type { Metadata } from 'next';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';
import { 
  ClipboardCheck, 
  MapPin, 
  Banknote, 
  ShieldCheck, 
  Smartphone, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Irken Works for Parking Operators | كيف تعمل منصة إركن للمشغلين',
  description:
    "Discover how easy it is to list your parking facility on irken.eg. 3 simple steps: Register online, quick activation, and start receiving guaranteed pre-paid reservations from Egyptian drivers.",
  openGraph: {
    title: 'How Irken Works — Operator Onboarding in 3 Steps',
    description: 'Zero hardware costs. Zero upfront fees. Monetize vacant parking bays in Cairo and Egyptian cities.',
    url: 'https://irken.com.eg/how-it-works',
  },
};

const steps = [
  {
    stepNumber: '01',
    icon: ClipboardCheck,
    titleEn: 'Submit Facility Details (2 Minutes)',
    titleAr: 'سجّل بيانات الموقف في دقيقتين',
    descEn:
      'Fill out the simple onboarding form with your facility location, capacity, operating hours, and standard rates. Zero upfront fees or paperwork hassle.',
    descAr:
      'املأ نموذج التسجيل السريع بموقع الموقف، السعة الاستيعابية، ساعات العمل، والتعريفة المعتادة. بدون أي رسوم اشتراك أو إجراءات معقدة.',
    bulletsEn: [
      'No hardware or barrier purchases required',
      'Works with all lot types (private, commercial, street attendants)',
      'Free listing on the irken.eg driver search map',
    ],
    bulletsAr: [
      'لا يشترط شراء بوابات أو كاميرات جديدة',
      'متوافق مع كل أنواع المواقف (جراج خاص، منشأة تجارية، ساحة مرخصة)',
      'ظهور مجاني ومباشر على خريطة بحث السائقين irken.eg',
    ],
  },
  {
    stepNumber: '02',
    icon: MapPin,
    titleEn: 'Field Verification & Instant Setup',
    titleAr: 'المعاينة الميدانية والتفعيل الفوري',
    descEn:
      'Our operations representative visits your facility or connects via WhatsApp to verify bay allocation, set up your Operator Dashboard, and hand over your simple QR validation desk.',
    descAr:
      'يقوم ممثل فريق العمليات بزيارة الموقف أو التواصل عبر واتساب لتأكيد عدد الأماكن المخصصة، ضبط لوحة تحكم المشغل، وتزويدك بآلية مسح الباركود البسيطة.',
    bulletsEn: [
      'Dedicated operations rep assigned to your facility',
      'Free training for gate attendants and security staff',
      'Customized booking rules based on your peak times',
    ],
    bulletsAr: [
      'مسؤول عمليات مخصص لمتابعة وتجهيز موقفك',
      'تدريب مجاني وسريع لطاقم البوابة والحراسة',
      'تحديد أوقات الحجز حسب أوقات الذروة والفراغ لديك',
    ],
  },
  {
    stepNumber: '03',
    icon: Banknote,
    titleEn: 'Receive Guaranteed Pre-Paid Drivers',
    titleAr: 'استقبل حجوزات مؤكدة ومدفوعة مقدماً',
    descEn:
      'Drivers searching for parking in your area reserve and pay online via irken.eg. You validate their reservation at the gate and receive automated payouts with full transparency.',
    descAr:
      'السائقون القريبون من موقعك يحجزون ويدفعون مسبقاً عبر irken.eg. كل ما عليك هو التحقق من الحجز عند الدخول واستلام مستحقاتك بتحويلات بنكية منتظمة.',
    bulletsEn: [
      '100% pre-paid reservations eliminate cash leakage',
      'Instant SMS / WhatsApp notifications for incoming vehicles',
      'Regular automated revenue settlement to your bank / wallet',
    ],
    bulletsAr: [
      'حجوزات مدفوعة إلكترونياً تمنع تسرب الإيرادات النقدية',
      'إشعارات فورية عبر الرسائل وواتساب بالسيارات القادمة',
      'تسوية مالية دورية ومباشرة لحسابك البنكي أو المحفظة الإلكترونية',
    ],
  },
];

const faqs = [
  {
    qEn: 'Do I need expensive gates, cameras, or computers?',
    qAr: 'هل أحتاج لشراء بوابات إلكترونية أو كاميرات أو أجهزة باهظة الثمن؟',
    aEn:
      'No. Irken is 100% asset-light. All you need is a smartphone to verify driver reservations via QR code or reservation ID.',
    aAr:
      'لا على الإطلاق. نموذج إركن لا يتطلب أي أجهزة إضافية (Asset-Light). يكفيك هاتف ذكي لمسح رمز الحجز (QR) أو تأكيد رقم السيارة.',
  },
  {
    qEn: 'How much does it cost to list my parking lot?',
    qAr: 'كم تبلغ تكلفة تسجيل الجراج أو الموقف على المنصة؟',
    aEn:
      'Joining Irken is completely free. There are no setup fees, listing fees, or monthly subscription charges on the Free tier. We only succeed when you make money.',
    aAr:
      'التسجيل مجاني 100%. لا توجد أي مصاريف إعداد أو رسوم اشتراك شهرية في الباقة الأساسية. نقتطع نسبة بسيطة فقط عند نجاح الحجز الفعلي.',
  },
  {
    qEn: 'How and when do I receive my revenue payouts?',
    qAr: 'كيف ومتى يتم تحويل الأرباح ومستحقات الحجوزات؟',
    aEn:
      'All bookings are paid in advance by drivers. Payouts are settled automatically on a weekly or bi-weekly cycle directly into your Egyptian bank account or mobile wallet (InstaPay / Vodafone Cash).',
    aAr:
      'كل الحجوزات مدفوعة مسبقاً إلكترونياً. نقوم بتسوية مستحقاتك وتحويلها دورياً (أسبوعياً أو كل أسبوعين) مباشرة إلى حسابك البنكي أو محفظتك الإلكترونية (إنستاباي / فودافون كاش).',
  },
  {
    qEn: 'Can I choose how many spots to allocate to Irken?',
    qAr: 'هل يمكنني تحديد عدد أماكن مخصص فقط لإركن والاحتفاظ بالباقي للزبائن العاديين؟',
    aEn:
      'Yes! You maintain full control. You can allocate 5 spots, 50 spots, or your entire lot, and dynamically adjust availability based on peak hours.',
    aAr:
      'نعم بكل تأكيد. لك كامل التحكم في تحديد عدد الأماكن المعروضة (مثلاً 10 أماكن أو كامل السعة)، وتستطيع تعديل الإتاحة في أوقات الذروة حسب رغبتك.',
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero
        titleEn="How Irken Works for Parking Operators"
        titleAr="كيف تعمل منصة إركن لمشغلي المواقف"
        descriptionEn="A simple, 3-step digital bridge between your vacant parking bays and thousands of Egyptian drivers looking for guaranteed parking every day."
        descriptionAr="جسر رقمي بسيط من 3 خطوات يربط أماكنك الفاضية بآلاف السائقين الباحثين عن موقف سيارات مضمون يومياً في مصر."
        badgeEn="SIMPLE 3-STEP ONBOARDING"
        badgeAr="خطوات الانضمام والتفعيل"
      />

      {/* ── 3 Steps Visual Flow ────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50/60 relative overflow-hidden" aria-labelledby="steps-heading">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <Reveal direction="up" delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold font-enHeading uppercase tracking-[0.14em] mb-4">
                <span><Translate en="THE PROCESS" ar="خطوات العمل" /></span>
              </div>
              <h2 id="steps-heading" className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 mb-4">
                <Translate en="From Empty Bay to Digital Revenue" ar="من مساحة شاغرة إلى دخل رقمي مضمون" />
              </h2>
              <p className="text-slate-600 text-base">
                <Translate
                  en="No complicated tech integrations. Go live and receive your first reserved driver in less than 48 hours."
                  ar="بدون تعقيدات تقنية أو أجهزة مكلفة. ابدأ في استقبال أول حجز خلال أقل من 48 ساعة."
                />
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.stepNumber} direction="up" delay={0.15 + idx * 0.1}>
                  <div className="bg-white border border-slate-200/80 rounded-[2rem] p-8 sm:p-10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative group">
                    {/* Step Number Watermark */}
                    <span className="absolute top-6 right-8 rtl:right-auto rtl:left-8 text-4xl font-black font-enHeading text-slate-100 group-hover:text-brand-accent/10 transition-colors select-none">
                      {step.stepNumber}
                    </span>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-white transition-all shrink-0">
                      <Icon className="w-7 h-7" strokeWidth={1.75} />
                    </div>

                    <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-3">
                      <Translate en={step.titleEn} ar={step.titleAr} />
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      <Translate en={step.descEn} ar={step.descAr} />
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <ul className="flex flex-col gap-2.5">
                        {step.bulletsEn.map((bulletEn, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                            <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                            <span>
                              <Translate en={bulletEn} ar={step.bulletsAr[bIdx]} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" delay={0.4}>
            <div className="mt-14 text-center">
              <PrimaryButton
                en="Join as Parking Partner Now"
                ar="سجّل موقفك الآن وابدأ الاستقبال"
                href="/#operator-onboard"
                className="py-3.5 px-8 text-sm shadow-xl shadow-brand-accent/20"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Key Advantages Grid ─────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="advantages-heading">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-10 h-10 text-brand-accent mb-4" />
                <h4 className="text-lg font-bold font-enHeading text-slate-900 mb-2">
                  <Translate en="Zero Risk & Zero CapEx" ar="بدون مخاطرة وبدون تكاليف" />
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <Translate
                    en="No barrier contracts, no hardware maintenance fees. If you do not earn from reservations, you pay nothing."
                    ar="لا توجد عقود صيانة أو تكاليف توريد أجهزة. إذا لم تحقق أرباحاً من الحجوزات الفعلية، فلن تدفع أي شيء."
                  />
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
                <Smartphone className="w-10 h-10 text-brand-accent mb-4" />
                <h4 className="text-lg font-bold font-enHeading text-slate-900 mb-2">
                  <Translate en="Smartphone-First Simplicity" ar="سهولة تامة عبر الهاتف" />
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <Translate
                    en="Your gate staff or parking attendants can validate incoming drivers in 3 seconds using any basic smartphone."
                    ar="يستطيع حارس البوابة أو المشغل تأكيد حجز السائق في 3 ثوانٍ فقط باستخدام أي هاتف محمول."
                  />
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
                <Clock className="w-10 h-10 text-brand-accent mb-4" />
                <h4 className="text-lg font-bold font-enHeading text-slate-900 mb-2">
                  <Translate en="24/7 Operations Support" ar="دعم ميداني وعملياتي 24/7" />
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <Translate
                    en="Our operations and customer service team handles driver inquiries and booking assistance around the clock."
                    ar="فريق الدعم الفني وخدمة العملاء لدينا يتابع السائقين ويساندهم على مدار الساعة لضمان تجربة سلسة."
                  />
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-100" aria-labelledby="faq-heading">
        <div className="max-w-[960px] mx-auto px-6 lg:px-8 w-full">
          <Reveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold font-enHeading uppercase tracking-[0.14em] mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                <span><Translate en="FREQUENTLY ASKED QUESTIONS" ar="الأسئلة الشائعة" /></span>
              </div>
              <h2 id="faq-heading" className="text-3xl font-bold font-enHeading text-slate-900 mb-4">
                <Translate en="Got questions? We have answers." ar="لديك استفسار؟ إليك كل ما تحتاج لمعرفته." />
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, fIdx) => (
              <Reveal key={fIdx} direction="up" delay={0.15 + fIdx * 0.08}>
                <div className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-8 shadow-sm">
                  <h3 className="text-lg font-bold font-enHeading text-slate-900 mb-3 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ?
                    </span>
                    <span><Translate en={faq.qEn} ar={faq.qAr} /></span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed ltr:pl-9 rtl:pr-9">
                    <Translate en={faq.aEn} ar={faq.aAr} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conversion CTA ──────────────────────────────────────────────── */}
      <ConversionCTA
        titleEn="Ready to turn vacant parking spots into guaranteed income?"
        titleAr="جاهز لتحويل الأماكن الشاغرة لدخل مضمون وثابت؟"
        descriptionEn="Join Egypt's fastest growing digital parking network today. Zero setup fees, zero hardware required."
        descriptionAr="انضم لأكبر شبكة رقمية لحجز المواقف في مصر اليوم. بدون أي رسوم تسجيل وبدون أي أجهزة."
      />
    </main>
  );
}
