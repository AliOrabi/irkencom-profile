import React from 'react';
import PageHero from '@/components/sections/PageHero';
import ContentSection from '@/components/sections/ContentSection';
import ConversionCTA from '@/components/sections/ConversionCTA';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        titleEn="We turn concrete into cash flow."
        titleAr="بنحوّل الخرسانة لدخل حقيقي."
        descriptionEn="Irken Solutions builds the software that makes parking facilities earn their keep — for real estate developers, operators, and cities across Egypt and MENA."
        descriptionAr="إيركن سولوشنز بتبني البرمجيات اللي بتخلي مواقف السيارات تكسب فعلاً — للمطورين العقاريين والمشغلين والمدن في مصر ومنطقة الشرق الأوسط وشمال إفريقيا."
      />

      <ContentSection
        titleEn="Smart systems. No heavy investment."
        titleAr="أنظمة ذكية. من غير استثمار ضخم."
        contentEn={
          <>
            <p>Most parking facilities are sitting on untapped value. The problem isn't the space — it's how it's managed. We fix that by layering our smart software over what you already have, so you start generating revenue without buying a single piece of hardware.</p>
            <p style={{ marginTop: '1rem' }}>We run the technology. You keep the revenue.</p>
          </>
        }
        contentAr={
          <>
            <p>معظم مرافق المواقف فيها قيمة مش متكسّبة. المشكلة مش في المساحة — المشكلة في طريقة الإدارة. إحنا بنحل ده عن طريق إضافة برمجياتنا الذكية فوق اللي عندك موجود، عشان تبدأ تكسب من غير ما تشتري أي جهاز.</p>
            <p style={{ marginTop: '1rem' }}>إحنا بنشغّل التكنولوجيا. أنت بتحتفظ بالإيرادات.</p>
          </>
        }
      />

      <ConversionCTA
        titleEn="Curious how much your facility could earn?"
        titleAr="عايز تعرف موقفك ممكن يكسب كام؟"
        descriptionEn="Talk to our team. We'll assess your current setup and give you a clear picture — no commitment needed."
        descriptionAr="كلّم فريقنا. هنقيّم وضعك الحالي ونوريك الصورة كاملة — من غير أي التزام."
      />
    </main>
  );
}
