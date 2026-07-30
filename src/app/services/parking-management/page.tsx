import React from 'react';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { Database, Network, BarChart3, Settings } from 'lucide-react';

export default function ParkingManagementPage() {
  const features = [
    {
      icon: <Database />,
      titleEn: "Centralized Data Lake",
      titleAr: "بحيرة بيانات مركزية",
      descriptionEn: "All transactional, access, and capacity data consolidated into a single pane of glass.",
      descriptionAr: "يتم توحيد جميع بيانات المعاملات والوصول والسعة في شاشة واحدة."
    },
    {
      icon: <BarChart3 />,
      titleEn: "Predictive Analytics",
      titleAr: "تحليلات تنبؤية",
      descriptionEn: "Forecast peak loads and optimize pricing models utilizing historical trends.",
      descriptionAr: "توقع أوقات الذروة وتحسين نماذج التسعير باستخدام الاتجاهات التاريخية."
    },
    {
      icon: <Network />,
      titleEn: "Multi-Facility Rollup",
      titleAr: "تجميع متعدد المنشآت",
      descriptionEn: "Manage portfolios of parking assets across the city from one dashboard.",
      descriptionAr: "إدارة محافظ أصول مواقف السيارات عبر المدينة من لوحة تحكم واحدة."
    },
    {
      icon: <Settings />,
      titleEn: "API Extensibility",
      titleAr: "قابلية التوسعة عبر API",
      descriptionEn: "Integrate deeply with your existing ERP, accounting, or tenant management software.",
      descriptionAr: "تكامل عميق مع أنظمة تخطيط موارد المؤسسات أو المحاسبة أو إدارة المستأجرين الحالية."
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
