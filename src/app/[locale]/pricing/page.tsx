import React from 'react';
import type { Metadata } from 'next';
import PricingTable from '@/components/pricing/PricingTable';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';

export const metadata: Metadata = {
  title: 'Pricing | Irken - Smart Parking Solutions',
  description: 'Transparent, asset-light pricing for facility operators and drivers. Zero CapEx deployment with immediate ROI.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      <PageHero 
        titleEn="Simple, Transparent Pricing"
        titleAr="تسعير بسيط وشفاف"
        descriptionEn="Whether you are managing commercial real estate facilities or seeking ticketless urban parking, we have the right model for you."
        descriptionAr="سواء كنت تدير منشآت تجارية أو تبحث عن مواقف سيارات ذكية بدون تذاكر، لدينا النموذج الأمثل لك."
        badgeEn="FLEXIBLE MODELS"
        badgeAr="نماذج مرنة"
      />

      <div className="py-12">
        <PricingTable />
      </div>

      <ConversionCTA 
        titleEn="Need a tailored enterprise contract?"
        titleAr="هل تحتاج إلى عقد مخصص لمنشآت كبرى؟"
        descriptionEn="We design custom SLAs and revenue-share models for multi-level garages, hospitals, and real estate portfolios."
        descriptionAr="نصمم اتفاقيات مستوى خدمة ونماذج مشاركة إيرادات مخصصة للمرائب متعددة الطوابق والمستشفيات والمشاريع العقارية."
      />
    </main>
  );
}
