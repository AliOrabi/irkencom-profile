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
    questionEn: "Where can I park in Cairo, and how does Irken secure guaranteed parking spots?",
    questionAr: "اركن فين في مصر؟ وكيف تساعدني منصة إركن في حجز ركنة سيارة مضمونة؟",
    answerEn: "Irken connects drivers directly with verified commercial parking garages, lots, and waiting yards across Cairo and Giza. You simply search your destination on irken.eg, compare rates, and reserve a guaranteed spot in advance with digital payment.",
    answerAr: "منصة إركن تجيب على سؤال 'اركن فين' من خلال ربطك بأقرب جراجات وساحات انتظار معتمدة ومرخصة في القاهرة والجيزة. تبحث عن وجهتك، تختار الموقف أو الباركينج المناسب، وتحجز ركنتك مسبقاً وتدفع إلكترونياً لتصل وتجد مكانك جاهزاً ومحجوزاً باسمك.",
  },
  {
    questionEn: "Is Irken an organized digital alternative to informal street parking and traditional attendants (Sayece)?",
    questionAr: "هل منصة إركن بديل رقمي منظم للسايس وإدارة ساحات الانتظار العشوائية؟",
    answerEn: "Yes. Irken replaces informal street parking uncertainty and traditional attendant friction with a transparent, digital reservation network. Drivers get pre-set pricing and confirmed slots, while facility operators manage spaces with verified gate tools without cash disputes.",
    answerAr: "نعم. تقدم إركن حلاً تكنولوجياً حضارياً يقضي على عشوائية السايس وأزمات البحث عن ركنة. المنصة توفر تسعيراً رسمياً وشفافاً، وتمنح السائقين أمان الحجز المسبق، كما تُمكّن مسؤولي ساحات الانتظار والجراجات من تدقيق ومتابعة الدخول والخروج رقمياً ومنع تسريب الإيرادات.",
  },
  {
    questionEn: "What is Irken and how does it work for parking lot and garage operators?",
    questionAr: "ما هي منصة إركن وكيف تعمل لمشغلي وملاك الجراجات وساحات الانتظار؟",
    answerEn: "Irken is Egypt's digital parking reservation network. We list your facility on our driver platform (irken.eg), routing drivers who pre-pay for guaranteed spots directly to your lot without requiring any new gate hardware.",
    answerAr: "إركن هي شبكة حجز مواقف السيارات الرقمية في مصر. نقوم بإدراج موقفك أو ساحة الانتظار على منصة السائقين (irken.eg) لتوجيه سائقين بحجوزات مسبقة ومؤكدة مباشرة إلى جراجك بدون شراء أي أجهزة جديدة.",
  },
  {
    questionEn: "Do I need to buy expensive automated barrier arms or new computers?",
    questionAr: "هل أحتاج لشراء بوابات إلكترونية ذراعية أو أجهزة كمبيوتر جديدة لإدراج موقفي؟",
    answerEn: "No. Irken is 100% software-defined. Your gate attendants use the smartphones they already have to scan driver QR passes or verify plate numbers in under 3 seconds.",
    answerAr: "لا. منصة إركن تعمل بالكامل برمجياً. يستخدم موظفو البوابات والساحات هواتفهم الذكية الحالية لمسح رمز QR أو التأكد من رقم لوحة السيارة خلال أقل من 3 ثوانٍ.",
  },
  {
    questionEn: "How much does Irken cost to use?",
    questionAr: "كم تبلغ تكلفة الاشتراك أو استخدام منصة إركن لساحات الانتظار؟",
    answerEn: "There are zero setup fees and zero hardware costs. Platform access is completely free during the launch period, with a small transparent commission applied only on successfully completed driver reservations.",
    answerAr: "لا توجد أي رسوم إعداد أو مصاريف شراء أجهزة. استخدام المنصة مجاني بالكامل لجميع الشركاء خلال فترة الإطلاق التجريبي، مع احتساب عمولة بسيطة وشفافة على الحجوزات المكتملة فقط.",
  },
  {
    questionEn: "How and when do I receive payouts for driver reservations?",
    questionAr: "كيف ومتى أستلم أرباح ومستحقات حجز الركنات في جراجي؟",
    answerEn: "Earnings accumulate in real time on your Operator Dashboard. You can request a payout anytime, and funds are transferred directly to your approved Egyptian bank account or InstaPay within 2 to 3 business days.",
    answerAr: "تتجمع إيراداتك لحظياً في لوحة تحكم المشغل. يمكنك طلب السحب في أي وقت، وتُحول المستحقات مباشرة إلى حسابك البنكي المعتمد في مصر أو إنستاباي خلال 2 إلى 3 أيام عمل.",
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
