import React from 'react';
import { Feature } from '@/types';
import PageHero from '@/components/sections/PageHero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ConversionCTA from '@/components/sections/ConversionCTA';

export default function AccessControlPage() {
  const features: Feature[] = [
    {
      icon: "LinkIcon",
      title: { en: "Hardware Agnostic", ar: "توافق مع الأنظمة الحالية" },
      description: { en: "Integrates seamlessly with your existing barriers and cameras. No new hardware required.", ar: "يتكامل بسلاسة مع البوابات والكاميرات الحالية. لا يتطلب أي معدات جديدة." },
      id: "f1",
      order: 1
    },
    {
      icon: "ToggleRight",
      title: { en: "Automated Entry", ar: "دخول تلقائي" },
      description: { en: "Barrier gates open instantly for recognized license plates or active reservations, ensuring smooth traffic flow.", ar: "تُفتح البوابات فوراً للوحات السيارات المتعرفة عليها أو الحجوزات النشطة، مما يضمن تدفقاً سلساً للمرور." },
      id: "f2",
      order: 2
    },
    {
      icon: "SmartphoneNfc",
      title: { en: "Digital Access", ar: "وصول رقمي" },
      description: { en: "Mobile-based entry credentials for staff, residents, and VIPs without physical fobs.", ar: "بيانات دخول تعتمد على الهاتف للموظفين والمقيمين وكبار الشخصيات بدون بطاقات بلاستيكية." },
      id: "f3",
      order: 3
    },
    {
      icon: "KeySquare",
      title: { en: "Centralized Command", ar: "تحكم مركزي" },
      description: { en: "Monitor and control all physical access points remotely from a single operational dashboard.", ar: "راقب وتحكم في جميع نقاط الدخول عن بُعد من خلال لوحة تشغيل مركزية واحدة." },
      id: "f4",
      order: 4
    }
  ];

  return (
    <main>
      <PageHero 
        titleEn="Smart Access Control"
        titleAr="التحكم الذكي في الدخول"
        descriptionEn="Zero CapEx integration. Connect your existing barrier gates to our cloud platform to automate entry and eliminate bottlenecks."
        descriptionAr="تكامل برمجي بدون نفقات رأسمالية. اربط بواباتك الحالية بمنصتنا السحابية لأتمتة الدخول والقضاء على الطوابير."
      />

      <FeatureGrid features={features} columns={2} />

      <ConversionCTA 
        titleEn="Ready to automate your facility?"
        titleAr="هل أنت مستعد لأتمتة منشأتك؟"
        descriptionEn="Calculate your revenue potential with our Zero CapEx access solutions."
        descriptionAr="احسب أرباحك المحتملة باستخدام حلول الدخول الخالية من النفقات الرأسمالية (Zero CapEx)."
      />
    </main>
  );
}
