import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PartnerForm from '@/components/sections/PartnerForm';

export default function AttendantManagementPage() {
  const features: Feature[] = [
    {
      icon: "Smartphone",
      title: { en: "Mobile-First Interface", ar: "واجهة تعتمد على الهاتف الذكي" },
      description: { en: "Deploy instantly on any smartphone. Zero CapEx on proprietary handheld devices.", ar: "انشر النظام فوراً على أي هاتف ذكي. بدون نفقات رأسمالية على أجهزة مخصصة." },
      id: "f1",
      order: 1
    },
    {
      icon: "Activity",
      title: { en: "Live Capacity Sync", ar: "مزامنة السعة المباشرة" },
      description: { en: "Instant updates on available spaces, ensuring operators never overbook the facility.", ar: "تحديثات فورية للمساحات المتاحة، لضمان عدم تجاوز السعة الاستيعابية للمنشأة." },
      id: "f2",
      order: 2
    },
    {
      icon: "Shield",
      title: { en: "Revenue Security", ar: "تأمين الإيرادات" },
      description: { en: "Digital audit trails track every vehicle entry and exit, eliminating cash leakage completely.", ar: "مسارات تدقيق رقمية تتبع دخول وخروج كل مركبة، وتقضي تماماً على تسرب الإيرادات النقدية." },
      id: "f3",
      order: 3
    },
    {
      icon: "Zap",
      title: { en: "Automated Shift Reports", ar: "تقارير المناوبات الآلية" },
      description: { en: "End-of-shift reconciliations happen automatically, saving hours of manual accounting.", ar: "تسويات نهاية المناوبة تتم آلياً، مما يوفر ساعات من المحاسبة اليدوية." },
      id: "f4",
      order: 4
    }
  ];

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Attendant Management System"
        titleAr="نظام إدارة موظفي المواقف"
        descriptionEn="Digitize your operations and eliminate cash leakage. Empower your on-ground staff with a mobile-first tool that speeds up entry and secures your revenue."
        descriptionAr="قم برقمنة عملياتك وتخلص من تسرب الإيرادات النقدية. مكّن موظفيك الميدانيين بأداة لتسريع الدخول وتأمين أرباحك."
      />

      <FeatureGrid features={features} columns={2} />

      <PartnerForm />
    </main>
  );
}
