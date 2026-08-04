import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ConversionCTA from '@/components/sections/ConversionCTA';

export default function ParkingManagementPage() {
  const features: Feature[] = [
    {
      icon: "Database",
      title: { en: "Centralized Data Lake", ar: "بحيرة بيانات مركزية" },
      description: { en: "All transactional, access, and capacity data consolidated into a single pane of glass.", ar: "يتم توحيد جميع بيانات المعاملات والوصول والسعة في شاشة واحدة." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "BarChart3",
      title: { en: "Predictive Analytics", ar: "تحليلات تنبؤية" },
      description: { en: "Forecast peak loads and optimize pricing models utilizing historical trends.", ar: "توقع أوقات الذروة وتحسين نماذج التسعير باستخدام الاتجاهات التاريخية." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Network",
      title: { en: "Multi-Facility Rollup", ar: "تجميع متعدد المنشآت" },
      description: { en: "Manage portfolios of parking assets across the city from one dashboard.", ar: "إدارة محافظ أصول مواقف السيارات عبر المدينة من لوحة تحكم واحدة." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Settings",
      title: { en: "API Extensibility", ar: "قابلية التوسعة عبر API" },
      description: { en: "Integrate deeply with your existing ERP, accounting, or tenant management software.", ar: "تكامل عميق مع أنظمة تخطيط موارد المؤسسات أو المحاسبة أو إدارة المستأجرين الحالية." },
      id: "f" + Math.random().toString(),
      order: 1
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="Parking Management Dashboard"
        titleAr="لوحة تحكم إدارة مواقف السيارات"
        descriptionEn="The ultimate macro-pitch for our data-driven ecosystem. Complete operational visibility and control."
        descriptionAr="الملخص الشامل لنظامنا البيئي القائم على البيانات. رؤية وتحكم تشغيلي كامل."
      />

      <FeatureGrid features={features} columns={2} />

      <ConversionCTA 
        titleEn="Request a Demo"
        titleAr="طلب عرض توضيحي"
        descriptionEn="See the dashboard in action and understand how our infrastructure can optimize your portfolio."
        descriptionAr="شاهد لوحة التحكم أثناء العمل وافهم كيف يمكن لبنيتنا التحتية تحسين محفظتك."
      />
    </main>
  );
}
