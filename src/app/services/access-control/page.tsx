import React from 'react';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { ToggleRight, Link as LinkIcon, SmartphoneNfc, KeySquare } from 'lucide-react';

export default function AccessControlPage() {
  const features = [
    {
      icon: <LinkIcon />,
      titleEn: "Hardware Agnostic",
      titleAr: "مستقل عن الأجهزة",
      descriptionEn: "Integrates seamlessly with legacy barriers, gates, and bollards via our IoT edge nodes.",
      descriptionAr: "يتكامل بسلاسة مع الحواجز والبوابات القديمة عبر عقد إنترنت الأشياء الخاصة بنا."
    },
    {
      icon: <ToggleRight />,
      titleEn: "Automated Triggers",
      titleAr: "محفزات آلية",
      descriptionEn: "Zero-touch entry mapping to reservation IDs or license plates.",
      descriptionAr: "دخول آلي بالكامل مرتبط بمعرفات الحجز أو لوحات الترخيص."
    },
    {
      icon: <SmartphoneNfc />,
      titleEn: "Digital Keys",
      titleAr: "مفاتيح رقمية",
      descriptionEn: "Mobile-based access credentials (NFC, QR, Bluetooth) for residents and VIPs.",
      descriptionAr: "بيانات اعتماد وصول تعتمد على الهاتف (NFC، QR، بلوتوث) للمقيمين وكبار الشخصيات."
    },
    {
      icon: <KeySquare />,
      titleEn: "Centralized Command",
      titleAr: "قيادة مركزية",
      descriptionEn: "Remote override and monitoring of all physical access points.",
      descriptionAr: "تجاوز ومراقبة عن بُعد لجميع نقاط الوصول الفعلية."
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
