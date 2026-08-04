import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ConversionCTA from '@/components/sections/ConversionCTA';

export default function AccessControlPage() {
  const features: Feature[] = [
    {
      icon: "LinkIcon",
      title: { en: "Hardware Agnostic", ar: "مستقل عن الأجهزة" },
      description: { en: "Integrates seamlessly with legacy barriers, gates, and bollards via our IoT edge nodes.", ar: "يتكامل بسلاسة مع الحواجز والبوابات القديمة عبر عقد إنترنت الأشياء الخاصة بنا." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "ToggleRight",
      title: { en: "Automated Triggers", ar: "محفزات آلية" },
      description: { en: "Zero-touch entry mapping to reservation IDs or license plates.", ar: "دخول آلي بالكامل مرتبط بمعرفات الحجز أو لوحات الترخيص." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "SmartphoneNfc",
      title: { en: "Digital Keys", ar: "مفاتيح رقمية" },
      description: { en: "Mobile-based access credentials (NFC, QR, Bluetooth) for residents and VIPs.", ar: "بيانات اعتماد وصول تعتمد على الهاتف (NFC، QR، بلوتوث) للمقيمين وكبار الشخصيات." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "KeySquare",
      title: { en: "Centralized Command", ar: "قيادة مركزية" },
      description: { en: "Remote override and monitoring of all physical access points.", ar: "تجاوز ومراقبة عن بُعد لجميع نقاط الوصول الفعلية." },
      id: "f" + Math.random().toString(),
      order: 1
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="Access Control"
        titleAr="التحكم في الوصول"
        descriptionEn="Asset-Light hardware integration. Connect your existing barriers to the Irken cloud without expensive overhauls."
        descriptionAr="تكامل الأجهزة بأقل الأصول. قم بتوصيل حواجزك الحالية بسحابة إركن دون الحاجة إلى تعديلات مكلفة."
      />

      <FeatureGrid features={features} columns={2} />

      <ConversionCTA 
        titleEn="Modernize Your Infrastructure"
        titleAr="تحديث البنية التحتية الخاصة بك"
        descriptionEn="Speak with our engineers to map out your IoT integration architecture."
        descriptionAr="تحدث مع مهندسينا لتخطيط بنية تكامل إنترنت الأشياء الخاصة بك."
      />
    </main>
  );
}
