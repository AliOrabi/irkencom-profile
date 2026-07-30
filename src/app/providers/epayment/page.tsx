import React from 'react';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PartnerForm from '@/components/sections/PartnerForm';
import { CreditCard, Lock, PieChart, RefreshCcw } from 'lucide-react';

export default function EPaymentPage() {
  const features = [
    {
      icon: <CreditCard />,
      titleEn: "Cashless Operations",
      titleAr: "عمليات غير نقدية",
      descriptionEn: "Support for Apple Pay, Google Pay, local wallets, and credit cards out of the box.",
      descriptionAr: "دعم لـ Apple Pay و Google Pay والمحافظ المحلية وبطاقات الائتمان مباشرة."
    },
    {
      icon: <RefreshCcw />,
      titleEn: "Dynamic Pricing",
      titleAr: "تسعير ديناميكي",
      descriptionEn: "Algorithmic price adjustments based on demand, time of day, and event schedules.",
      descriptionAr: "تعديلات الأسعار الخوارزمية بناءً على الطلب والوقت وجداول الأحداث."
    },
    {
      icon: <Lock />,
      titleEn: "Bank-Grade Security",
      titleAr: "أمان بمستوى البنوك",
      descriptionEn: "PCI-DSS compliant transaction processing with end-to-end encryption.",
      descriptionAr: "معالجة المعاملات المتوافقة مع PCI-DSS مع تشفير من طرف إلى طرف."
    },
    {
      icon: <PieChart />,
      titleEn: "Revenue Analytics",
      titleAr: "تحليلات الإيرادات",
      descriptionEn: "Real-time dashboards for yield monitoring and payout reconciliations.",
      descriptionAr: "لوحات تحكم في الوقت الفعلي لمراقبة العوائد وتسويات الدفع."
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="E-Payment Solutions"
        titleAr="حلول الدفع الإلكتروني"
        descriptionEn="Digitize your cash flow. Frictionless payment gateways designed to maximize user adoption and secure your revenue."
        descriptionAr="قم برقمنة تدفقاتك النقدية. بوابات دفع سلسة مصممة لزيادة تبني المستخدمين وتأمين إيراداتك."
      />

      <FeatureGrid features={features} columns={2} />

      <PartnerForm />
    </main>
  );
}
