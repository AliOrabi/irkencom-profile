import React from 'react';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PartnerForm from '@/components/sections/PartnerForm';
import { Shield, Smartphone, Zap, Activity } from 'lucide-react';

export default function AttendantManagementPage() {
  const features = [
    {
      icon: <Smartphone />,
      titleEn: "Mobile-First Interface",
      titleAr: "واجهة تعتمد على الهاتف المحمول",
      descriptionEn: "Deploy instantly on any device. No proprietary hardware required.",
      descriptionAr: "انشر فوراً على أي جهاز. لا يتطلب أجهزة خاصة."
    },
    {
      icon: <Activity />,
      titleEn: "Real-Time Sync",
      titleAr: "مزامنة في الوقت الفعلي",
      descriptionEn: "Live capacity tracking and instant booking verification.",
      descriptionAr: "تتبع السعة المباشر والتحقق الفوري من الحجز."
    },
    {
      icon: <Shield />,
      titleEn: "Fraud Prevention",
      titleAr: "منع الاحتيال",
      descriptionEn: "Digital audit trails eliminate cash leakage and unauthorized entry.",
      descriptionAr: "مسارات التدقيق الرقمية تقضي على تسرب النقود والدخول غير المصرح به."
    },
    {
      icon: <Zap />,
      titleEn: "Shift Automation",
      titleAr: "أتمتة المناوبات",
      descriptionEn: "Automated shift reporting and performance analytics.",
      descriptionAr: "تقارير المناوبات الآلية وتحليلات الأداء."
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
