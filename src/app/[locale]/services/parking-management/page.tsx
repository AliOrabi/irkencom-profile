import React from 'react';
import type { Metadata } from 'next';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
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
      ? 'نظام إدارة ساحات الانتظار والجراجات في مصر | إركن سوليوشنز'
      : 'Parking Management System & Facility Operations in Egypt | Irken Solutions',
    description: isArabic
      ? 'حل رقمي متكامل لإدارة ساحات الانتظار والجراجات في مصر. راقب الإشغال اللحظي، امنع التلاعب النقدي، واحصل على حجوزات مسبقة بدون أجهزة باهظة.'
      : 'Centralized parking management system for garage operators and property managers in Egypt. Real-time capacity monitoring and dynamic yield optimization.',
    keywords: [
      'إدارة ساحات الانتظار',
      'نظام إدارة الجراجات',
      'برنامج باركينج',
      'تنظيم مواقف السيارات',
      'اركن',
      'إركن',
      'ركنة',
      'بديل السايس',
      'parking management Egypt',
      'Irken Solutions',
    ],
    alternates: {
      canonical: `https://irken.com.eg/${locale}/services/parking-management`,
      languages: {
        ar: 'https://irken.com.eg/ar/services/parking-management',
        en: 'https://irken.com.eg/en/services/parking-management',
      },
    },
  };
}

export default function ParkingManagementPage() {
  const features: Feature[] = [
    {
      icon: "Database",
      title: { en: "Centralized Operations", ar: "عمليات مركزية" },
      description: { en: "Monitor transactions, capacity, and access data across your entire portfolio from a single, intuitive dashboard.", ar: "راقب بيانات المعاملات والسعة والدخول عبر محفظتك بالكامل من لوحة تحكم واحدة وسهلة الاستخدام." },
      id: "f1",
      order: 1
    },
    {
      icon: "BarChart3",
      title: { en: "Dynamic Pricing & Analytics", ar: "تسعير ديناميكي وتحليلات" },
      description: { en: "Forecast peak hours and automatically adjust pricing to maximize your revenue yield.", ar: "توقع أوقات الذروة واضبط الأسعار تلقائياً لتعظيم عوائدك بشكل مستمر." },
      id: "f2",
      order: 2
    },
    {
      icon: "Network",
      title: { en: "Multi-Facility Management", ar: "إدارة متعددة المنشآت" },
      description: { en: "Manage multiple parking assets effortlessly, with real-time aggregated metrics and site-specific controls.", ar: "أدر عدة مرافق لمواقف السيارات بسهولة، مع مقاييس مجمعة لحظية وتحكم خاص بكل موقع." },
      id: "f3",
      order: 3
    },
    {
      icon: "Settings",
      title: { en: "Seamless ERP Integration", ar: "تكامل سلس مع أنظمة الإدارة" },
      description: { en: "Integrate deeply with your existing accounting or property management software to streamline financial reporting.", ar: "تكامل بعمق مع برامج المحاسبة أو إدارة العقارات الحالية لتبسيط التقارير المالية." },
      id: "f4",
      order: 4
    }
  ];

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Smart Parking Management"
        titleAr="الإدارة الذكية للمواقف"
        descriptionEn="Take complete control of your operations. Maximize daily turnover, monitor real-time occupancy, and automate your revenue streams."
        descriptionAr="تحكم بالكامل في عملياتك. ضاعف معدلات التشغيل اليومية، وراقب الإشغال لحظياً، وأتمت مصادر إيراداتك."
      />

      <FeatureGrid features={features} columns={2} />

      <ConversionCTA 
        titleEn="Take Control of Your Revenue"
        titleAr="تحكم في إيراداتك"
        descriptionEn="See the platform in action and calculate the revenue uplift for your facilities."
        descriptionAr="شاهد المنصة أثناء العمل واحسب الزيادة المحتملة في إيرادات منشآتك."
        primaryButtonTextEn="Calculate Revenue Uplift"
        primaryButtonTextAr="احسب زيادة الإيرادات"
        primaryButtonHref="/services/parking-management/calculate"
      />
    </main>
  );
}
