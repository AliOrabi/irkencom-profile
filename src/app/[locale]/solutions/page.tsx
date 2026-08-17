import React from 'react';
import { solutions } from '@/config/content';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { PrimaryButton } from '@/components/ui/Buttons';
import { 
  CheckCircle2, 
  Building2, 
  SmartphoneNfc, 
  Coins, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

const solutionVisuals: Record<string, { icon: React.ElementType; color: string; badge: { en: string; ar: string }; bullets: { en: string; ar: string }[] }> = {
  'sol-3': {
    icon: SmartphoneNfc,
    color: 'bg-brand-accent',
    badge: { en: 'OPERATOR ENGINE', ar: 'محرك المشغلين' },
    bullets: [
      { en: 'Automated digital reconciliation eliminating cash leaks', ar: 'مطابقة رقمية آلية تمنع تسرب الإيرادات النقدية' },
      { en: 'Live occupancy heatmaps and dynamic rate management', ar: 'خرائط حرارية لحظية للإشغال وإدارة مرنة للتسعير' },
      { en: 'Single multi-site dashboard with real-time gate telemetry', ar: 'لوحة مركزية لجميع المواقع مع قراءات البوابات لحظياً' }
    ]
  },
  'sol-2': {
    icon: Coins,
    color: 'bg-indigo-500',
    badge: { en: 'PROPTECH ASSET MONETIZATION', ar: 'تسييل الأصول العقارية' },
    bullets: [
      { en: 'Zero hardware CapEx: 48-hour software overlay on existing barriers', ar: 'بدون نفقات رأسمالية: ربط برمجي خلال 48 ساعة على البوابات الحالية' },
      { en: 'Up to 35% yield increase through automated yield management', ar: 'زيادة العائد بنسبة تصل إلى 35% عبر التسعير الذكي' },
      { en: 'Seamless tenant & visitor validation workflows', ar: 'سير عمل مرن للتحقق من وصول المستأجرين والزوار' }
    ]
  },
  'sol-1': {
    icon: Building2,
    color: 'bg-cyan-500',
    badge: { en: 'URBAN MOBILITY GRID', ar: 'شبكة التنقل الحضري' },
    bullets: [
      { en: 'Municipal-scale parking data feeds to mitigate corridor congestion', ar: 'بيانات مواقف للمدن لتقليل الاختناقات المرورية في المحاور' },
      { en: '100% cashless, ticketless entry via AI License Plate Recognition', ar: 'دخول غير نقدي وغير ورقي بنسبة 100% عبر التعرف على اللوحات' },
      { en: 'Zero civil disruptions during deployment and integration', ar: 'انعدام أي تعطيل مروري أو أعمال حفر أثناء التكامل' }
    ]
  }
};

export default function SolutionsPage() {
  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Built for the people who run our cities."
        titleAr="مصمم للقادة الذين يديرون مدننا."
        descriptionEn="Whether you manage a commercial real estate portfolio, high-turnover venue, or city-scale infrastructure — we provide an asset-light solution."
        descriptionAr="سواء كنت تدير محفظة عقارية تجارية، أو منشأة عالية الكثافة، أو بنية تحتية لمدينة — نوفر لك حلاً تقنياً مرناً وخالياً من التعقيد."
        badgeEn="ENTERPRISE SOLUTIONS"
        badgeAr="حلول الشركات"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 w-full">
        {/* Audience Solutions */}
        <div className="space-y-24 lg:space-y-32">
          {solutions.map((solution, index) => {
            const visual = solutionVisuals[solution.id] || {
              icon: Cpu,
              color: 'bg-brand-accent',
              badge: { en: 'SOLUTIONS', ar: 'الحلول' },
              bullets: []
            };
            const VisualIcon = visual.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={solution.id} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Visual / Offset Layer Card */}
                <Reveal direction={isEven ? "right" : "left"} delay={0.1} className="w-full lg:w-1/2">
                  <div className="relative">
                    {/* Background Offset Block */}
                    <div 
                      className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full ${visual.color} opacity-20 rounded-[2.5rem]`} 
                      aria-hidden="true" 
                    />
                    
                    {/* Foreground White Card */}
                    <div className="relative bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] overflow-hidden">
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-brand-accent shadow-sm">
                          <VisualIcon className="w-8 h-8" strokeWidth={1.75} />
                        </div>
                        <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-enHeading text-[11px] font-semibold tracking-wider uppercase">
                          <Translate en={visual.badge.en} ar={visual.badge.ar} />
                        </span>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            <Translate en="Integration Time" ar="وقت الربط" />
                          </span>
                          <span className="text-sm font-bold font-enHeading text-slate-900">&lt; 48 Hours</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            <Translate en="Hardware Replacement" ar="استبدال المعدات" />
                          </span>
                          <span className="text-sm font-bold font-enHeading text-emerald-600">Zero (0) CapEx</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        <ShieldCheck className="w-4 h-4 text-brand-accent" />
                        <span><Translate en="Enterprise SLA & SOC2 Ready" ar="اتفاقية مستوى خدمة للشركات وأعلى معايير الأمان" /></span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal direction={isEven ? "left" : "right"} delay={0.2} className="w-full lg:w-1/2">
                  <div className="flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold font-enHeading uppercase tracking-widest mb-4">
                      <span><Translate en={visual.badge.en} ar={visual.badge.ar} /></span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 mb-5 leading-tight">
                      <Translate en={solution.title.en} ar={solution.title.ar} />
                    </h2>
                    
                    <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                      <Translate en={solution.description.en} ar={solution.description.ar} />
                    </p>
                    
                    {/* Benefits List */}
                    <ul className="space-y-4 mb-8 w-full" role="list">
                      {visual.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3.5">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm sm:text-base font-medium">
                            <Translate en={bullet.en} ar={bullet.ar} />
                          </span>
                        </li>
                      ))}
                    </ul>

                    <PrimaryButton 
                      href="/contact"
                      icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
                    >
                      <Translate en="Request Assessment" ar="طلب تقييم المنشأة" />
                    </PrimaryButton>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      <ConversionCTA 
        titleEn="Ready to upgrade your parking assets?"
        titleAr="هل أنت مستعد لتحديث منشآت المواقف لديك؟"
        descriptionEn="Our engineers can audit your site and provide a custom rollout timeline with zero CapEx commitment."
        descriptionAr="يمكن لمهندسينا فحص موقعك وتقديم جدول زمني مخصص للتكامل بدون أي التزام مالي."
      />
    </main>
  );
}
