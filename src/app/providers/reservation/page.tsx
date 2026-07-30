import React from 'react';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PartnerForm from '@/components/sections/PartnerForm';
import { CalendarCheck, Map, Clock, TrendingUp } from 'lucide-react';

export default function ReservationPage() {
  const features = [
    {
      icon: <CalendarCheck />,
      titleEn: "Pre-Booking Engine",
      titleAr: "محرك الحجز المسبق",
      descriptionEn: "Enable users to secure spots in advance, guaranteeing revenue before arrival.",
      descriptionAr: "تمكين المستخدمين من تأمين الأماكن مسبقاً، مما يضمن الإيرادات قبل الوصول."
    },
    {
      icon: <TrendingUp />,
      titleEn: "Yield Optimization",
      titleAr: "تحسين العوائد",
      descriptionEn: "Dynamic capacity allocation algorithms that maximize occupancy rates.",
      descriptionAr: "خوارزميات تخصيص السعة الديناميكية التي تزيد من معدلات الإشغال."
    },
    {
      icon: <Map />,
      titleEn: "Interactive Mapping",
      titleAr: "خرائط تفاعلية",
      descriptionEn: "Visual spot selection and real-time availability broadcasting.",
      descriptionAr: "اختيار المواقف بصرياً وبث التوافر في الوقت الفعلي."
    },
    {
      icon: <Clock />,
      titleEn: "Flexible Durations",
      titleAr: "مدد مرنة",
      descriptionEn: "Support for hourly, daily, and monthly subscription models.",
      descriptionAr: "دعم لنماذج الاشتراك بالساعة واليومية والشهرية."
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
