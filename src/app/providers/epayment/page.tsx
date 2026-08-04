import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PartnerForm from '@/components/sections/PartnerForm';

export default function EPaymentPage() {
  const features: Feature[] = [
    {
      icon: "CreditCard",
      title: { en: "Cashless Operations", ar: "عمليات غير نقدية" },
      description: { en: "Support for Apple Pay, Google Pay, local wallets, and credit cards out of the box.", ar: "دعم لـ Apple Pay و Google Pay والمحافظ المحلية وبطاقات الائتمان مباشرة." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "RefreshCcw",
      title: { en: "Dynamic Pricing", ar: "تسعير ديناميكي" },
      description: { en: "Algorithmic price adjustments based on demand, time of day, and event schedules.", ar: "تعديلات الأسعار الخوارزمية بناءً على الطلب والوقت وجداول الأحداث." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Lock",
      title: { en: "Bank-Grade Security", ar: "أمان بمستوى البنوك" },
      description: { en: "PCI-DSS compliant transaction processing with end-to-end encryption.", ar: "معالجة المعاملات المتوافقة مع PCI-DSS مع تشفير من طرف إلى طرف." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "PieChart",
      title: { en: "Revenue Analytics", ar: "تحليلات الإيرادات" },
      description: { en: "Real-time dashboards for yield monitoring and payout reconciliations.", ar: "لوحات تحكم في الوقت الفعلي لمراقبة العوائد وتسويات الدفع." },
      id: "f" + Math.random().toString(),
      order: 1
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
