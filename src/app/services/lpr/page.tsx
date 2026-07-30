import React from 'react';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { Camera, Zap, FileSearch, ShieldCheck } from 'lucide-react';

export default function LPRPage() {
  const features = [
    {
      icon: <Camera />,
      titleEn: "99.8% Accuracy",
      titleAr: "دقة 99.8%",
      descriptionEn: "Machine learning models trained specifically on Egyptian and regional license plate formats.",
      descriptionAr: "نماذج تعلم آلي تم تدريبها خصيصاً على تنسيقات لوحات الترخيص المصرية والإقليمية."
    },
    {
      icon: <Zap />,
      titleEn: "Sub-second Processing",
      titleAr: "معالجة في أقل من ثانية",
      descriptionEn: "Edge-computed recognition ensures barriers open instantly without network latency.",
      descriptionAr: "المعالجة الطرفية تضمن فتح الحواجز على الفور دون تأخير في الشبكة."
    },
    {
      icon: <FileSearch />,
      titleEn: "Blacklist Monitoring",
      titleAr: "مراقبة القائمة السوداء",
      descriptionEn: "Automated alerts for unauthorized or flagged vehicles attempting entry.",
      descriptionAr: "تنبيهات تلقائية للمركبات غير المصرح لها أو المشبوهة التي تحاول الدخول."
    },
    {
      icon: <ShieldCheck />,
      titleEn: "Ticketless Entry",
      titleAr: "دخول بدون تذاكر",
      descriptionEn: "The license plate becomes the identity. Frictionless flow for pre-booked and monthly subscribers.",
      descriptionAr: "لوحة الترخيص تصبح هي الهوية. تدفق سلس للمشتركين مسبقاً والشهريين."
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
