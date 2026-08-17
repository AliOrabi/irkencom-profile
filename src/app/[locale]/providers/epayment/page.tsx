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
      description: { en: "Seamless support for Apple Pay, Google Pay, local wallets, and credit cards.", ar: "دعم سلس لـ Apple Pay و Google Pay والمحافظ المحلية والبطاقات الائتمانية." },
      id: "f1",
      order: 1
    },
    {
      icon: "RefreshCcw",
      title: { en: "Dynamic Pricing", ar: "تسعير ديناميكي" },
      description: { en: "Algorithmic price adjustments based on demand, time of day, and event schedules to maximize daily yield.", ar: "تعديلات خوارزمية للأسعار بناءً على الطلب والوقت وجداول الفعاليات لتعظيم العائد اليومي." },
      id: "f2",
      order: 2
    },
    {
      icon: "Lock",
      title: { en: "Secure Transactions", ar: "معاملات آمنة" },
      description: { en: "PCI-DSS compliant transaction processing, eliminating cash handling risks completely.", ar: "معالجة معاملات متوافقة مع معايير PCI-DSS، مما يلغي تماماً مخاطر التعامل النقدي." },
      id: "f3",
      order: 3
    },
    {
      icon: "PieChart",
      title: { en: "Revenue Analytics", ar: "تحليلات الإيرادات" },
      description: { en: "Real-time dashboards for yield monitoring, automated reconciliation, and instant payout tracking.", ar: "لوحات تحكم لحظية لمراقبة العوائد، والتسوية الآلية، وتتبع المدفوعات فوراً." },
      id: "f4",
      order: 4
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="Digital Payment Solutions"
        titleAr="حلول الدفع الرقمي"
        descriptionEn="Digitize your cash flow and eliminate manual errors. Frictionless payment gateways designed to secure and accelerate your revenue collection."
        descriptionAr="قم برقمنة تدفقاتك النقدية وتخلص من الأخطاء اليدوية. بوابات دفع سلسة لتأمين وتسريع تحصيل إيراداتك."
      />

      <FeatureGrid features={features} columns={2} />

      <PartnerForm />
    </main>
  );
}
