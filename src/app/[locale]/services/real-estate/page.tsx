import React from 'react';
import type { Metadata } from 'next';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { 
  Coins, 
  ShieldCheck, 
  TrendingUp, 
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Real Estate Developers | Irken Solutions',
  description: 'Asset-light monetization of commercial, residential, and mixed-use parking allocations in Egypt. Zero civil disruptions, automated tenant validation, and maximum asset yield.',
};

export default function RealEstateSolutionPage() {
  const propTechPillars = [
    {
      icon: Coins,
      title: { en: "1. Asset-Light Parking Monetization", ar: "1. تسييل الأصول العقارية بدون تكاليف" },
      description: { 
        en: "Transform allocated commercial and residential parking bays into recurring, high-margin revenue without civil work or hardware replacement.", 
        ar: "حوّل مساحات المواقف في مشروعك العقاري لمصدر دخل دوري ومربح بدون أي تكسير أو أعمال إنشائية أو شراء أجهزة مكلفة." 
      }
    },
    {
      icon: Zap,
      title: { en: "2. Fast 48-Hour Barrier Overlay", ar: "2. ربط برمجي سلس على البوابات الحالية" },
      description: { 
        en: "Our software connects directly to existing barrier systems (FAAC, BFT, CAME, ZKTeco) with zero disruption to active tenant operations.", 
        ar: "برمجياتنا بتتكامل مباشرة مع بوابات الدخول الحالية بدون أي تعطيل لحركة المستأجرين أو الزوار اليومية." 
      }
    },
    {
      icon: ShieldCheck,
      title: { en: "3. Automated Tenant & Visitor Control", ar: "3. تنظيم ذكي للمستأجرين والزوار" },
      description: { 
        en: "Segment dedicated resident/tenant bays from public visitor spaces with digital whitelist passcodes, QR passes, and automated LPR.", 
        ar: "فصل ذكي بين مواقف السكان والمستأجرين الثابتة وبين مواقف الزوار المدفوعة من خلال تصاريح QR وكاميرات قراءة اللوحات." 
      }
    },
    {
      icon: TrendingUp,
      title: { en: "4. Multi-Property Centralized Governance", ar: "4. إدارة مركزية لكافة مشاريعك ومبانيك" },
      description: { 
        en: "Oversee parking occupancy, cashflow, and access logs across your entire development portfolio from a single executive dashboard.", 
        ar: "متابعة لحظية لنسب الإشغال والإيرادات وسجلات الدخول لكافة مشاريعك وأبراجك من لوحة تحكم تنفيذية واحدة." 
      }
    }
  ];

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Asset-Light Monetization for Commercial & Residential Properties."
        titleAr="تسييل ذكي لمواقف المشروعات العقارية والتجارية في مصر."
        descriptionEn="Turn underutilized parking spaces in malls, office towers, and mixed-use developments into steady digital revenue with zero civil disruption."
        descriptionAr="حوّل المساحات الشاغرة في المولات والأبراج الإدارية والمشروعات السكنية لمصدر دخل يومي متكرر بدون أي أعباء تشغيلية أو مصاريف بنية تحتية."
        badgeEn="FOR REAL ESTATE DEVELOPERS"
        badgeAr="للمطورين العقاريين وإدارة الأصول"
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
                <Translate en="Digital Infrastructure Partner" ar="شريك البنية الرقمية للمطورين" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate 
                  en="Irken is a PropTech parking network providing asset managers in Egypt with seamless software overlays on existing gates." 
                  ar="إركن هي المنصة التقنية اللي بتمكن مديري الأصول العقارية في مصر من إدارة وتسييل مواقف السيارات برمجياً بدون تكاليف إضافية." 
                />
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-emerald-600 mb-2 block">
                WHAT YOU GET
              </span>
              <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                <Translate en="Higher ROI & Flawless Access" ar="عائد استثماري أعلى وتنظيم دقيق" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate 
                  en="Unlock up to +35% yield from commercial parking allocations while maintaining strict tenant security and ticketless entry." 
                  ar="تحقيق زيادة تصل إلى 35% في أرباح المساحات الشاغرة، مع ضمان أعلى درجات الأمان والتحكم في وصول الزوار والمستأجرين." 
                />
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-2 block">
                HOW IT WORKS
              </span>
              <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                <Translate en="Zero Civil Downtime" ar="بدون أي تعطيل للموقع" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <Translate 
                  en="Fast cloud API integration with your existing gates, instant driver discovery on irken.eg, and centralized portfolio reporting." 
                  ar="ربط سحابي فوري مع البوابات، توجيه السائقين للأماكن المتاحة عبر irken.eg، وتقارير مالية وتشغيلية موحدة." 
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Value Pillars ────────────────────────────────────────── */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-3 block">
            <Translate en="PROPTECH MONETIZATION ENGINE" ar="محرك القيمة للمشروعات العقارية" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight">
            <Translate 
              en="Transforming Property Parking from a Cost Center to a Profit Engine" 
              ar="تحويل مواقف المشروع من مركز تكلفة إلى مصدر أرباح مستمر" 
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {propTechPillars.map((pillar, idx) => {
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
        titleEn="Want to monetize your development's parking inventory?"
        titleAr="هل تريد تسييل مساحات المواقف في مشروعاتك العقارية؟"
        descriptionEn="Speak with our PropTech integration specialists. We design custom asset monetization models for malls, office parks, and mixed-use portfolios."
        descriptionAr="تواصل مع خبراء تكامل الأنظمة العقارية في إركن. نصمم نماذج مشاركة إيرادات مخصصة للمولات، المجمعات الإدارية، والمشروعات متعددة الاستخدامات."
        primaryButtonTextEn="Request Developer Consultation"
        primaryButtonTextAr="طلب استشارة عقارية متخصصة"
        primaryButtonHref="/contact"
      />
    </main>
  );
}
