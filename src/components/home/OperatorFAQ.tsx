'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}

const faqs: FAQItem[] = [
  {
    questionEn: "What is Irken and how does it work for parking lot and operators?",
    questionAr: "ما هي منصة إركن وكيف تعمل لمشغلي الجراجات وساحات الانتظار؟",
    answerEn: "Irken is an online parking reservation platform in Egypt. By listing your parking to our platform, you appear to thousands of drivers looking for a guaranteed parking space in your erea. You don't need to buy new equipment, just add the capacity of your parking lot, specify youe working hours, the hourly/subscription price, and the features of your lot - and start receiving prepaid bookings.",
    answerAr: "إركن هي منصة حجز مواقف السيارات عن طريق الإنترنت في مصر. عن طريق أضافة ساحة الانتظار الخاصة بك على منصتنا, تظهر لآلاف السائقين الذين يبحثون عن موقف مضمون وتبدأ في استقبال الحجوزات المدفوعة مسبقًا , لا تحتاج إلى شراء أجهزة جديدة, فقط قم بإضافة السعة الخاصة بموقفك , تحديد عدد ساعات عملك, سعر الساعة / الإشتراك, ومميزات ساحتك.",
  },
  {
    questionEn: "Is Irken an organized digital alternative to informal street parking and traditional attendants (Sayes)?",
    questionAr: "هل منصة إركن بديل رقمي منظم للسايس وإدارة ساحات الانتظار العشوائية؟",
    answerEn: "Yes. Irken offers a simple solution that eliminates the problem of parking attendants and the hassle of finding a parking space. The platform provides official and transparent pricing, gives drivers the security of pre-booking and guaranteed parking spaces even before arrival, and enables parking attendants (Sayes) and parking lot operators to reach new customers, track entry and exit, and prevent revenue leakage through our integrated control panel.",
    answerAr: "نعم. تقدم إركن حلاً سهلًا يقضي على مشكلة (السايس) وأزمة البحث عن ركنة. المنصة توفر تسعيراً رسمياً وشفافاً، وتمنح السائقين أمان الحجز المسبقوأماكن ركنة مضمونة حتى قبل الوصول، كما تُمكّن السايس و مشغلي ساحات الانتظار من الوصول لعملاء جدد ومتابعة حركة الدخول والخروج ومنع تسريب الإيرادات, عن طريق لوحة التحكم المتكاملة التي توفرها منصتنا.",
  },
  {
    questionEn: "Do I need to buy expensive automated barrier arms or new equipment?",
    questionAr: "هل أحتاج لشراء بوابات إلكترونيةأو أجهزة جديدة للعمل مع إركن؟",
    answerEn: "No, Irken 100% cloud-based. Gate staff use their smartphones or QR code readers to scan drivers' permits via QR code or verify booking numbers in less than 3 seconds.",
    answerAr: "لا، نظام Irken قائم بالكامل على الحوسبة السحابية. يستخدم موظفو البوابة هواتفهم الذكية أو قارئات رمز الاستجابة السريعة QR-readers لمسح تصاريح السائقين عبر رمز الاستجابة السريعة أو التحقق من أرقام الحجز في أقل من 3 ثوانٍ.",
  },
  {
    questionEn: "How much does Irken cost to use?",
    questionAr: "كم تبلغ تكلفة الاشتراك أو استخدام منصة إركن لساحات الانتظار؟",
    answerEn: "For parking operators, there are no setup fees or hardware costs. Access to all platform features is completely free during the launch period (for new partners). A small and transparent commission is only charged on successfully paid driver bookings, which is added to each customer's booking and is not deducted from operators' dues.",
    answerAr: "لمشغلي المواقف لا توجد رسوم إعداد ولا تكاليف للأجهزة. الوصول إلى جميع ميزات المنصة مجاني تمامًا خلال فترة الإطلاق (للشركاء الجدد)، يتم احتساب عمولة صغيرة وشفافة فقط على حجوزات السائقين المدفوعة بنجاح, حيث يتم اضافتها على كل عملية حجز خاصة بالعميل ولا تحتسب على مستحقات المشغلين",
  },
  {
    questionEn: "How and when do I receive payouts for driver reservations?",
    questionAr: "كيف ومتى أستلم مستحقاتي من الركنات في جراجي؟",
    answerEn: "Earnings accumulate in real time on your Operator Dashboard. You can request a payout anytime after completing your client service, and funds are transferred directly to your bank account or mobile wallet within 2 to 3 business days.",
    answerAr: "تتجمع إيراداتك لحظياً في لوحة التحكم الخاصة بك. ويمكنك طلب السحب في أي وقت بعد اتمام الخدمة كاملة، وتُحول المستحقات بعد معالجتها مباشرة إلى حسابك المصرفي او محفظتك الإلكترونية خلال 2 إلى 3 أيام عمل.",
  },
  {
    questionEn: "Can I choose how many spots to allocate to the platform?",
    questionAr: "هل يمكنني التحكم في عدد الأماكن المتاحة للحجز في ساحة الانتظار؟",
    answerEn: "Yes. You maintain 100% control over your bay inventory. You can allocate 10 bays during off-peak morning hours and reclaim them for regular walk-in traffic during peak evening rushes.",
    answerAr: "نعم. لك كامل الحرية في تحديد عدد المساحات المتاحة في ساحة الانتظار. يمكنك تخصيص 10 أماكن في فترات الهدوء الصباحية، واستعادتها لزبائن الدخول المباشر في أوقات الذروة والمناسبات.",
  },
];

export default function OperatorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Structured FAQ Schema for Answer Engine Optimization (AEO)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.questionAr,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answerAr,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-6 max-w-[1280px] mx-auto w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest font-enHeading mb-4 border border-brand-accent/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <Translate en="Frequently Asked Questions" ar="الأسئلة الشائعة حول إركن وحجز المواقف" />
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 tracking-tight mb-5 rtl:leading-[1.3]">
            <Translate
              en="Everything You Need to Know About Irken Parking Network"
              ar="كل ما تحتاج معرفته عن حجز المواقف والشراكة مع إركن"
            />
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed rtl:leading-[1.8]">
            <Translate
              en="Clear, standalone answers to the most common questions from Egyptian parking operators, garage owners, and drivers."
              ar="إجابات واضحة ومباشرة عن أكثر الأسئلة شيوعاً حول حجز الركنات، إدارة ساحات الانتظار، وشراكة الجراجات مع إركن."
            />
          </p>
        </Reveal>
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Reveal key={idx} delay={0.05 + idx * 0.05}>
              <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left rtl:text-right p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg font-bold font-enHeading text-slate-900 leading-snug rtl:leading-[1.4]">
                    <Translate en={faq.questionEn} ar={faq.questionAr} />
                  </h3>
                  <div className={cn(
                    "w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-300",
                    isOpen && "rotate-180 bg-brand-accent text-white"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed rtl:leading-[1.8] border-t border-slate-100 mt-1">
                        <Translate en={faq.answerEn} ar={faq.answerAr} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
