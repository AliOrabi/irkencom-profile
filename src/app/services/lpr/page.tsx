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
      description: { en: "Machine learning models trained specifically on Egyptian license plate formats for unmatched accuracy.", ar: "نماذج تعلم آلي تم تدريبها خصيصاً على تنسيقات اللوحات المصرية لضمان دقة لا مثيل لها." },
      id: "f1",
      order: 1
    },
    {
      icon: "Zap",
      title: { en: "Instant Recognition", ar: "تعرف فوري" },
      description: { en: "Edge-computed recognition ensures barriers open instantly, maximizing traffic throughput.", ar: "تضمن المعالجة الطرفية فتح الحواجز على الفور، مما يعظم من سرعة تدفق المرور." },
      id: "f2",
      order: 2
    },
    {
      icon: "FileSearch",
      title: { en: "Security & Monitoring", ar: "أمان ومراقبة" },
      description: { en: "Automated alerts for unauthorized vehicles, integrating seamlessly with your facility's security protocols.", ar: "تنبيهات تلقائية للمركبات غير المصرح لها، مع تكامل سلس مع بروتوكولات الأمان في منشأتك." },
      id: "f3",
      order: 3
    },
    {
      icon: "ShieldCheck",
      title: { en: "Ticketless Operations", ar: "عمليات بدون تذاكر" },
      description: { en: "The license plate becomes the identity. Frictionless flow for subscribed drivers, reducing operational overhead.", ar: "تصبح لوحة الترخيص هي الهوية. تدفق سلس للسائقين المشتركين، مما يقلل من النفقات التشغيلية." },
      id: "f4",
      order: 4
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="AI License Plate Recognition"
        titleAr="التعرف بالذكاء الاصطناعي على اللوحات"
        descriptionEn="High-throughput computer vision. Eliminate paper tickets and accelerate entry workflows without costly infrastructure."
        descriptionAr="رؤية حاسوبية عالية الإنتاجية. تخلص من التذاكر الورقية وسرّع سير العمل بدون بنية تحتية مكلفة."
      />

      <FeatureGrid features={features} columns={2} />

      <ConversionCTA 
        titleEn="Ready to eliminate tickets?"
        titleAr="هل أنت مستعد للتخلص من التذاكر؟"
        descriptionEn="Digitize your entry points and calculate your revenue potential with our smart LPR solutions."
        descriptionAr="قم برقمنة نقاط الدخول الخاصة بك واحسب أرباحك المحتملة مع حلول التعرف على اللوحات الذكية لدينا."
      />
    </main>
  );
}
