import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ConversionCTA from '@/components/sections/ConversionCTA';

export default function LPRPage() {
  const features: Feature[] = [
    {
      icon: "Camera",
      title: { en: "99.8% Accuracy", ar: "دقة 99.8%" },
      description: { en: "Machine learning models trained specifically on Egyptian and regional license plate formats.", ar: "نماذج تعلم آلي تم تدريبها خصيصاً على تنسيقات لوحات الترخيص المصرية والإقليمية." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Zap",
      title: { en: "Sub-second Processing", ar: "معالجة في أقل من ثانية" },
      description: { en: "Edge-computed recognition ensures barriers open instantly without network latency.", ar: "المعالجة الطرفية تضمن فتح الحواجز على الفور دون تأخير في الشبكة." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "FileSearch",
      title: { en: "Blacklist Monitoring", ar: "مراقبة القائمة السوداء" },
      description: { en: "Automated alerts for unauthorized or flagged vehicles attempting entry.", ar: "تنبيهات تلقائية للمركبات غير المصرح لها أو المشبوهة التي تحاول الدخول." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "ShieldCheck",
      title: { en: "Ticketless Entry", ar: "دخول بدون تذاكر" },
      description: { en: "The license plate becomes the identity. Frictionless flow for pre-booked and monthly subscribers.", ar: "لوحة الترخيص تصبح هي الهوية. تدفق سلس للمشتركين مسبقاً والشهريين." },
      id: "f" + Math.random().toString(),
      order: 1
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="License Plate Recognition (ALPR)"
        titleAr="التعرف على لوحات الترخيص"
        descriptionEn="High-throughput, AI-powered computer vision. Eliminate tickets and accelerate entry workflows."
        descriptionAr="رؤية حاسوبية عالية الإنتاجية مدعومة بالذكاء الاصطناعي. تخلص من التذاكر وسرّع سير عمل الدخول."
      />

      <FeatureGrid features={features} columns={2} />

      <ConversionCTA 
        titleEn="Upgrade to Ticketless"
        titleAr="الترقية إلى الدخول بدون تذاكر"
        descriptionEn="Eliminate consumable costs and hardware maintenance. Let's architect your ALPR integration."
        descriptionAr="تخلص من التكاليف الاستهلاكية وصيانة الأجهزة. دعنا نصمم تكامل التعرف على لوحات الترخيص الخاص بك."
      />
    </main>
  );
}
