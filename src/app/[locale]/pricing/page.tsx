import React from 'react';
import type { Metadata } from 'next';
import PricingTable from '@/components/pricing/PricingTable';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'أسعار إركن | باقات مجانية واشتراكات مشغلي الجراجات وساحات الانتظار'
      : 'Irken Pricing | Zero-CapEx Plans for Parking Operators & Drivers in Egypt',
    description: isArabic
      ? 'تسعير بسيط وشفاف بدون أي مصاريف تأسيس أو شراء أجهزة. باقة إدراج مجانية لساحات الانتظار والجراجات وباقات احترافية لتحليلات الإشغال.'
      : 'Transparent, zero-CapEx pricing for parking facility operators and drivers. Free listing with instant pre-paid reservations.',
    keywords: [
      'أسعار إركن',
      'اركن',
      'إركن',
      'اسعار الجراجات',
      'تكلفة إدارة ساحات الانتظار',
      'حجز ركنة',
      'سعر ركنة العربية',
      'irken pricing',
      'Irken Solutions',
    ],
    alternates: {
      canonical: `https://irken.com.eg/${locale}/pricing`,
      languages: {
        ar: 'https://irken.com.eg/ar/pricing',
        en: 'https://irken.com.eg/en/pricing',
      },
    },
  };
}

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
