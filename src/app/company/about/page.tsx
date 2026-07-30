import React from 'react';
import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import ConversionCTA from '@/components/sections/ConversionCTA';

export default function AboutPage() {
  return (
    <main>
      <PageHero 
        titleEn="Architecting the Future of Urban Mobility"
        titleAr="هندسة مستقبل التنقل الحضري"
        descriptionEn="We are the engineers behind Egypt's #1 Online Parking Reservation platform, transforming static assets into dynamic digital ecosystems."
        descriptionAr="نحن المهندسون وراء منصة حجز مواقف السيارات الأكبر في مصر، نحول الأصول الثابتة إلى أنظمة رقمية ديناميكية."
      />

      <ContentSection 
        titleEn="Asset-Light Philosophy"
        titleAr="فلسفة الأصول الخفيفة"
        contentEn={
          <>
            <p>Our methodology focuses on maximizing yield from existing infrastructure rather than pouring capital into new construction. By layering our proprietary software stack over underutilized physical spaces, we unlock new revenue streams with near-zero CapEx.</p>
            <p style={{ marginTop: '1rem' }}>We operate the technology, you capture the value.</p>
          </>
        }
        contentAr={
          <>
            <p>تركز منهجيتنا على تعظيم العائد من البنية التحتية الحالية بدلاً من ضخ رأس المال في بناء جديد. من خلال تطبيق حزمة برمجياتنا الخاصة على المساحات الفعلية غير المستغلة، نفتح مصادر إيرادات جديدة بنفقات رأسمالية تكاد تكون معدومة.</p>
            <p style={{ marginTop: '1rem' }}>نحن ندير التكنولوجيا، وأنت تحصد القيمة.</p>
          </>
        }
      />

      <ConversionCTA 
        titleEn="Deploy Our Architecture"
        titleAr="انشر بنيتنا التحتية"
        descriptionEn="Ready to digitize your parking infrastructure and connect to Egypt's largest reservation network?"
        descriptionAr="هل أنت مستعد لرقمنة بنية مواقف السيارات الخاصة بك والانضمام إلى أكبر شبكة حجز في مصر؟"
      />
    </main>
  );
}
