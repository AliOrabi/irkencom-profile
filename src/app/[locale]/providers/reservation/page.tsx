import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PartnerForm from '@/components/sections/PartnerForm';

export default function ReservationPage() {
  const features: Feature[] = [
    {
      icon: "CalendarCheck",
      title: { en: "Guaranteed Revenue", ar: "إيرادات مضمونة" },
      description: { en: "Enable users to secure and pay for spots in advance, locking in revenue before they even arrive.", ar: "اسمح للمستخدمين بحجز ودفع قيمة المواقف مسبقاً، مما يضمن لك الإيرادات قبل وصولهم." },
      id: "f1",
      order: 1
    },
    {
      icon: "TrendingUp",
      title: { en: "Dynamic Capacity Allocation", ar: "تخصيص السعة الديناميكي" },
      description: { en: "Smart algorithms allocate spaces based on demand, ensuring your facility runs at maximum profitability.", ar: "خوارزميات ذكية تخصص المساحات بناءً على الطلب، لضمان تشغيل منشأتك بأقصى ربحية." },
      id: "f2",
      order: 2
    },
    {
      icon: "Map",
      title: { en: "Interactive Mapping", ar: "خرائط تفاعلية" },
      description: { en: "Drivers see exactly where to park via real-time availability maps, eliminating aimless circling.", ar: "يرى السائقون مكان وقوفهم بدقة عبر خرائط التوافر اللحظية، مما يقضي على الدوران العشوائي." },
      id: "f3",
      order: 3
    },
    {
      icon: "Clock",
      title: { en: "Subscription Models", ar: "نماذج الاشتراكات" },
      description: { en: "Create predictable cash flow with hourly, daily, and monthly recurring subscription plans.", ar: "حقق تدفقات نقدية يمكن التنبؤ بها من خلال خطط اشتراك دورية (بالساعة، باليوم، بالشهر)." },
      id: "f4",
      order: 4
    }
  ];

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Smart Reservation Systems"
        titleAr="أنظمة الحجز الذكية"
        descriptionEn="Turn unpredictable traffic into guaranteed revenue. Let drivers secure spots in advance, optimizing your facility's daily turnover."
        descriptionAr="حوّل حركة المرور العشوائية إلى إيرادات مضمونة. اسمح للسائقين بحجز مواقفهم مسبقاً، وضاعف معدل التشغيل اليومي لمنشأتك."
      />

      <FeatureGrid features={features} columns={2} />

      <PartnerForm />
    </main>
  );
}
