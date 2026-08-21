import React from 'react';
import type { Metadata } from 'next';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { 
  Building, 
  MapPin, 
  ShieldCheck, 
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Municipalities & Smart Zones | Irken Solutions',
  description: 'Digital curb and parking flow management to decongest Egyptian urban corridors. 100% digital, ticketless, and hardware-agnostic.',
};

export default function MunicipalitiesSolutionPage() {
  const urbanPillars = [
    {
      icon: MapPin,
      title: { en: "1. Urban Corridor Congestion Mitigation", ar: "1. تخفيف التكدس المروري في المحاور الحيوية" },
      description: { 
        en: "Guide drivers directly to available off-street and public parking bays via irken.eg before they enter congested city centers.", 
        ar: "توجيه السائقين مباشرة للمواقف المتاحة عبر تطبيق irken.eg قبل الوصول للمناطق المزدحمة، مما يقلل التجول العشوائي بحثاً عن ركنة." 
      }
    },
    {
      icon: Activity,
      title: { en: "2. Real-Time City-Wide Parking Data", ar: "2. بيانات لحظية لتدفق المواقف على مستوى المدينة" },
      description: { 
        en: "Live telemetry feeds and heatmaps identifying bottleneck zones, peak demand hours, and average curb turnover across districts.", 
        ar: "خرائط تدفق وبيانات لحظية تحدد أوقات الذروة والمناطق الأكثر ضغطاً، لدعم التخطيط المروري واتخاذ القرارات." 
      }
    },
    {
      icon: ShieldCheck,
      title: { en: "3. 100% Cashless Digital Compliance", ar: "3. تحصيل رقمي غير نقدي بنسبة 100%" },
      description: { 
        en: "Automate toll and parking fees with full transparency, audited digital logs, and zero cash leakages.", 
        ar: "أتمتة كاملة للرسوم والمطابقات المالية بشفافية تامة وسجلات رقمية موثقة تمنع أي هدر أو تسريب مالي." 
      }
    },
    {
      icon: Building,
      title: { en: "4. Rapid Multi-District Scalability", ar: "4. قابلية التوسع عبر مختلف الأحياء والمدن" },
      description: { 
        en: "Cloud-native platform deployable across multiple districts in Cairo, Giza, New Administrative Capital, and Alexandria with zero civil disruption.", 
        ar: "بنية برمجية سحابية قابلة للتطبيق السريع في القاهرة، الجيزة، العاصمة الإدارية، والإسكندرية بدون أي أعمال حفر." 
      }
    }
  ];

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Digital Infrastructure for Urban Corridors & Smart Cities."
        titleAr="بنية رقمية ذكية لإدارة تدفق المواقف في المدن والمحاور الرئيسية."
        descriptionEn="Organize curbside and off-street parking demand across Egyptian cities. Reduce traffic circling, eliminate cash leakage, and digitize municipal assets."
        descriptionAr="تنظيم ذكي لمواقف السيارات العامة والخاصة في المدن المصرية، لتقليل التكدس المروري، ومطابقة الرسوم إلكترونياً بدون أي نفقات إنشائية."
        badgeEn="FOR MUNICIPALITIES & SMART ZONES"
        badgeAr="للهيئات والمدن الذكية"
      />

      {/* ── Who, What, How ────────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-2 block">
                WHO WE ARE
              </span>
              <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                <Translate en="Digital Mobility Enabler" ar="الممكن الرقمي للتنقل الحضري" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate 
                  en="Irken is Egypt's parking marketplace and technology layer connecting public and private facilities into a unified digital network." 
                  ar="إركن هي الطبقة البرمجية وشبكة الحجز التي توحد المواقف العامة والخاصة في منظومة رقمية متكاملة." 
                />
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-emerald-600 mb-2 block">
                WHAT YOU GET
              </span>
              <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                <Translate en="Decongested Streets & Audited Revenue" ar="سيولة مرورية وعوائد موثقة" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate 
                  en="Reduce up to 30% of traffic caused by parking search cruising, with fully transparent digital financial logs." 
                  ar="تقليل ما يصل إلى 30% من الكثافات المرورية الناتجة عن البحث عن ركنة، مع تحصيل إلكتروني كامل وموثق." 
                />
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-2 block">
                HOW IT WORKS
              </span>
              <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                <Translate en="Zero Civil Disruption" ar="تطبيق فوري بدون حفر" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate 
                  en="Overlay our software on existing municipal gates or deploy mobile attendant apps in under 48 hours." 
                  ar="ربط برمجي مع البوابات القائمة أو تشغيل أجهزة نقاط البيع وتطبيقات المشرفين خلال 48 ساعة فقط." 
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars ───────────────────────────────────────────────────── */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-3 block">
            <Translate en="URBAN INFRASTRUCTURE ENGINE" ar="محرك البنية الحضرية" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight">
            <Translate 
              en="Data-Driven Parking Orchestration for Egyptian Cities" 
              ar="إدارة وتنظيم ذكي لمواقف السيارات في المدن المصرية" 
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {urbanPillars.map((pillar, idx) => {
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

      <ConversionCTA 
        titleEn="Partner with Irken for municipal parking transformation"
        titleAr="ابدأ في رقمنة وتنظيم مواقف مدينتك مع إركن"
        descriptionEn="Discover how our asset-light digital platform helps public authorities and urban developers organize parking and reduce congestion across Egypt."
        descriptionAr="تعرف على كيفية مساعدة منصة إركن البرمجية للهيئات العامة والمدن الذكية في تنظيم حركة المواقف وتحقيق أعلى كفاءة مرورية."
        primaryButtonTextEn="Schedule Municipal Briefing"
        primaryButtonTextAr="طلب جلسة تعريفية للهيئات"
        primaryButtonHref="/contact"
      />
    </main>
  );
}
