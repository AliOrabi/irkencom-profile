import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import OperatorValue from '@/components/home/OperatorValue';
import PlatformCapabilities from '@/components/home/PlatformCapabilities';
import RevenueCalculator from '@/components/home/RevenueCalculator';
import TargetPartners from '@/components/home/TargetPartners';
import OperatorFAQ from '@/components/home/OperatorFAQ';
import OperatorOnboardingForm from '@/components/home/OperatorOnboardingForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'إركن | شبكة حجز مواقف السيارات وساحات الانتظار في مصر (اركن - باركينج - جراج)'
      : "Irken Solutions — Egypt's Digital Parking Reservation Network (Parking, Garages, Lots)",
    description: isArabic
      ? 'اركن فين في مصر؟ احجز ركنة سيارة مسبقاً، واكتشف جراجات وساحات انتظار السيارات في القاهرة والجيزة. أو أدرج موقفك على شبكة إركن لتحقيق أرباح فورية بدون أجهزة وبديل منظم للسايس.'
      : 'Find where to park in Egypt. Reserve advance parking spaces or list your commercial garage and parking yard on Irken network for guaranteed pre-paid yield.',
    keywords: [
      'اركن',
      'إركن',
      'اركن فين',
      'ركنة',
      'ركنه',
      'باركينج',
      'Parkin',
      'Parking',
      'جراج',
      'جراجات',
      'موقف',
      'مواقف سيارات',
      'ساحات انتظار',
      'ساحة انتظار',
      'سايس',
      'السايس',
      'بديل السايس',
      'حجز ركنة',
      'حجز جراج',
      'إدارة ساحات الانتظار',
      'irken',
      'Irken',
      'Irken Solutions',
      'irken.eg',
      'parking in Cairo',
      'parking in Egypt',
    ],
    alternates: {
      canonical: `https://irken.com.eg/${locale}`,
      languages: {
        ar: 'https://irken.com.eg/ar',
        en: 'https://irken.com.eg/en',
      },
    },
    openGraph: {
      title: isArabic
        ? 'إركن | شبكة حجز مواقف السيارات وساحات الانتظار في مصر'
        : "Irken Solutions — Egypt's Digital Parking Reservation Network",
      description: isArabic
        ? 'احجز ركنتك أونلاين أو حوّل جراجك إلى مشروع استثماري عالي الأرباح عبر شبكة إركن الرقمية.'
        : 'Reserve your spot online or monetize your parking facility with zero hardware costs on Irken.',
      url: `https://irken.com.eg/${locale}`,
      siteName: 'Irken Solutions',
      locale: isArabic ? 'ar_EG' : 'en_US',
      type: 'website',
    },
  };
}

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "شبكة إركن لحجز وإدارة مواقف وساحات انتظار السيارات",
  alternateName: ["Irken Parking Network", "اركن", "حجز ركنات السيارات في مصر"],
  serviceType: "Digital Parking Reservation & Asset Monetization Network",
  provider: {
    "@type": "Organization",
    name: "Irken Solutions",
    url: "https://irken.com.eg",
  },
  areaServed: {
    "@type": "Country",
    name: "Egypt",
  },
  description:
    "منصة رقمية لربط سائقي السيارات بالركنات المتاحة مسبقاً في الجراجات وساحات الانتظار، وتمكين مشغلي المواقف من تنظيم وإدارة الإشغال بدون أجهزة باهظة.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EGP",
    description: "الباقة المجانية لإدراج المواقف والجراجات بدون مصاريف إعداد",
  },
};

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* 1. Hero: H1 + AEO Extraction Block + Primary CTAs */}
      <Hero />

      {/* 2. 4 Value Pillars: Empathy, Off-Peak Problem, Hardware Compatibility */}
      <OperatorValue />

      {/* 3. Operator Capabilities & Honest Operating Model Comparison */}
      <PlatformCapabilities />

      {/* 4. Interactive Cairo & Giza Revenue Lift Simulator */}
      <RevenueCalculator />

      {/* 5. Tailored Partner Models: Licensed Lot Operators & Commercial Asset Owners */}
      <TargetPartners />

      {/* 6. Operator FAQs: Standalone AEO Search & Citation Questions */}
      <OperatorFAQ />

      {/* 7. Operator Onboarding & Direct Lead Registration */}
      <OperatorOnboardingForm />
    </main>
  );
}
