import React from 'react';
import PageHero from '@/components/sections/PageHero';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import ContentSection from '@/components/sections/ContentSection';
import ConversionCTA from '@/components/sections/ConversionCTA';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        titleEn="We turn concrete into cash flow."
        titleAr="نحوّل المساحات الخرسانية إلى تدفقات نقدية مستدامة."
        descriptionEn="Irken Solutions builds the software that makes parking facilities earn their keep — for real estate developers, operators, and cities across Egypt and MENA."
        descriptionAr="تبني إركن سوليوشنز البرمجيات التي تضاعف من ربحية مواقف السيارات — لخدمة المطورين العقاريين، المشغلين، والمدن في مصر ومنطقة الشرق الأوسط وشمال إفريقيا."
      />

      <MissionVisionSection />

      <ContentSection
        titleEn="Smart systems. Zero CapEx."
        titleAr="أنظمة ذكية. بدون نفقات رأسمالية."
        contentEn={
          <>
            <p>Most parking facilities are sitting on untapped value. The problem isn&apos;t the space — it&apos;s how it&apos;s managed. We fix that by layering our smart software over what you already have, so you start generating revenue without any capital expenditure (Zero CapEx).</p>
            <p style={{ marginTop: '1rem' }}>We run the technology. You keep the revenue.</p>
          </>
        }
        contentAr={
          <>
            <p>تخفي معظم مرافق المواقف قيمة اقتصادية غير مستغلة. المشكلة ليست في المساحة، بل في طريقة الإدارة. نحن نحل هذه المشكلة عبر إضافة طبقة برمجياتنا الذكية فوق بنيتك التحتية الحالية، لتبدأ بتوليد الإيرادات دون الحاجة لشراء أي أجهزة جديدة.</p>
            <p style={{ marginTop: '1rem' }}>نحن نتولى تشغيل التكنولوجيا. وأنت تحتفظ بالإيرادات.</p>
          </>
        }
      />

      <ConversionCTA
        titleEn="Curious how much your facility could earn?"
        titleAr="هل ترغب في معرفة العائد المحتمل لمواقفك؟"
        descriptionEn="Talk to our team. We'll assess your current setup and give you a clear picture — no commitment needed."
        descriptionAr="تحدث إلى فريقنا. سنقوم بتقييم وضعك الحالي وتقديم صورة متكاملة للفرص المتاحة — دون أي التزامات."
      />
    </main>
  );
}
