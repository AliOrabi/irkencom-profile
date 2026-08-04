import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PartnerForm from '@/components/sections/PartnerForm';

export default function AttendantManagementPage() {
  const features: Feature[] = [
    {
      icon: "Smartphone",
      title: { en: "Mobile-First Interface", ar: "واجهة تعتمد على الهاتف المحمول" },
      description: { en: "Deploy instantly on any device. No proprietary hardware required.", ar: "انشر فوراً على أي جهاز. لا يتطلب أجهزة خاصة." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Activity",
      title: { en: "Real-Time Sync", ar: "مزامنة في الوقت الفعلي" },
      description: { en: "Live capacity tracking and instant booking verification.", ar: "تتبع السعة المباشر والتحقق الفوري من الحجز." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Shield",
      title: { en: "Fraud Prevention", ar: "منع الاحتيال" },
      description: { en: "Digital audit trails eliminate cash leakage and unauthorized entry.", ar: "مسارات التدقيق الرقمية تقضي على تسرب النقود والدخول غير المصرح به." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Zap",
      title: { en: "Shift Automation", ar: "أتمتة المناوبات" },
      description: { en: "Automated shift reporting and performance analytics.", ar: "تقارير المناوبات الآلية وتحليلات الأداء." },
      id: "f" + Math.random().toString(),
      order: 1
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="Attendant Management"
        titleAr="إدارة الحاضرين"
        descriptionEn="Empower your ground staff with enterprise-grade operational tools designed for maximum throughput and minimum friction."
        descriptionAr="مكّن موظفيك الميدانيين بأدوات تشغيلية على مستوى المؤسسات مصممة لتحقيق أقصى قدر من الإنتاجية والحد الأدنى من الاحتكاك."
      />

      <FeatureGrid features={features} columns={2} />

      <PartnerForm />
    </main>
  );
}
