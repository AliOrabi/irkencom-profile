import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PartnerForm from '@/components/sections/PartnerForm';

export default function ReservationPage() {
  const features: Feature[] = [
    {
      icon: "CalendarCheck",
      title: { en: "Pre-Booking Engine", ar: "محرك الحجز المسبق" },
      description: { en: "Enable users to secure spots in advance, guaranteeing revenue before arrival.", ar: "تمكين المستخدمين من تأمين الأماكن مسبقاً، مما يضمن الإيرادات قبل الوصول." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "TrendingUp",
      title: { en: "Yield Optimization", ar: "تحسين العوائد" },
      description: { en: "Dynamic capacity allocation algorithms that maximize occupancy rates.", ar: "خوارزميات تخصيص السعة الديناميكية التي تزيد من معدلات الإشغال." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Map",
      title: { en: "Interactive Mapping", ar: "خرائط تفاعلية" },
      description: { en: "Visual spot selection and real-time availability broadcasting.", ar: "اختيار المواقف بصرياً وبث التوافر في الوقت الفعلي." },
      id: "f" + Math.random().toString(),
      order: 1
    },
    {
      icon: "Clock",
      title: { en: "Flexible Durations", ar: "مدد مرنة" },
      description: { en: "Support for hourly, daily, and monthly subscription models.", ar: "دعم لنماذج الاشتراك بالساعة واليومية والشهرية." },
      id: "f" + Math.random().toString(),
      order: 1
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="Reservation Systems"
        titleAr="أنظمة الحجز"
        descriptionEn="Integrate with Egypt's #1 parking reservation network. Turn unpredictable traffic into guaranteed, recurring revenue."
        descriptionAr="اندماج مع شبكة حجز المواقف الأولى في مصر. حول حركة المرور غير المتوقعة إلى إيرادات متكررة ومضمونة."
      />

      <FeatureGrid features={features} columns={2} />

      <PartnerForm />
    </main>
  );
}
