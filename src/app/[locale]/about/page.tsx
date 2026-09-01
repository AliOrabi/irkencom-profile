import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { ExternalLink, Mail } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'من نحن | إركن سوليوشنز — بناء شبكة حجز مواقف السيارات الرقمية في مصر'
      : "About Irken Solutions — Building Egypt's Digital Parking Network",
    description: isArabic
      ? 'تعرف على قصة إركن ورؤيتنا في القضاء على أزمة البحث عن ركنة وعشوائية السايس، عبر رقمنة الجراجات وساحات الانتظار في القاهرة ومصر بدون أي مصاريف تأسيس.'
      : "Discover Irken's mission to digitize parking reservations across Egypt, connecting licensed garage operators with drivers through an asset-light marketplace.",
    keywords: [
      'من نحن إركن',
      'اركن',
      'إركن',
      'اركن سوليوشنز',
      'ركنة',
      'باركينج',
      'جراج',
      'موقف',
      'ساحات انتظار',
      'سايس',
      'بديل السايس',
      'حجز ركنة',
      'شركة إركن',
      'علي عرابي',
      'Irken Solutions',
      'irken',
    ],
    alternates: {
      canonical: `https://irken.com.eg/${locale}/about`,
      languages: {
        ar: 'https://irken.com.eg/ar/about',
        en: 'https://irken.com.eg/en/about',
      },
    },
  };
}

/* ── Team data ─────────────────────────────────────────────────────────── */
const team = [
  {
    id: 'ali-orabi',
    nameEn: 'Ali Orabi',
    nameAr: 'علي عرابي',
    roleEn: 'Founder & CEO',
    roleAr: 'المؤسس والرئيس التنفيذي',
    bioEn:
      "Driving Irken's mission to build and digitize the parking reservation network across Egypt's cities — connecting operators and drivers through a frictionless digital marketplace.",
    bioAr:
      'يقود رسالة إركن لبناء ورقمنة شبكة حجوزات مواقف السيارات في مدن مصر، بربط المشغلين بالسائقين عبر سوق رقمي سلس وبدون تعقيد.',
    photo: '/images/team/ali-orabi.jpg',
    linkedin: 'https://www.linkedin.com/in/aliorabi/',
    email: 'a.orabi@irken.com.eg',
    isReal: true,
  },
  {
    id: 'cto',
    nameEn: 'Chief Technology Officer',
    nameAr: 'المدير التقني',
    roleEn: 'CTO',
    roleAr: 'المدير التقني',
    bioEn:
      'Architecting the platform infrastructure behind irken.eg — real-time reservation flows, operator dashboards, and the mapping layer connecting supply to demand.',
    bioAr:
      'مسؤول عن بنية المنصة التقنية لإركن — تدفقات الحجز الفوري ولوحات تحكم المشغلين وطبقة الخرائط التي تربط العرض بالطلب.',
    photo: null,
    linkedin: null,
    email: null,
    isReal: false,
  },
  {
    id: 'cfo',
    nameEn: 'Chief Financial Officer',
    nameAr: 'المدير المالي',
    roleEn: 'CFO',
    roleAr: 'المدير المالي',
    bioEn:
      'Overseeing financial strategy, operator revenue-share models, and the fiscal frameworks that keep Irken asset-light and sustainable through every growth stage.',
    bioAr:
      'يشرف على الاستراتيجية المالية ونماذج مشاركة إيرادات المشغلين والأطر المالية التي تبقي إركن خفيف الموجودات ومستدامًا في كل مرحلة نمو.',
    photo: null,
    linkedin: null,
    email: null,
    isReal: false,
  },
];

/* ── Anonymous Avatar ───────────────────────────────────────────────────── */
function AnonymousAvatar({ role }: { role: string }) {
  const initials = role
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
      <span className="text-3xl font-bold font-enHeading text-slate-400 select-none">
        {initials}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero
        titleEn="Digitizing Egypt's Parking Network, Bay by Bay."
        titleAr="رقمنة شبكة مواقف السيارات في مصر، مساحة تلو الأخرى."
        descriptionEn="Irken connects licensed parking operators with thousands of daily drivers across Cairo, Giza, and Egyptian cities — transforming vacant bays into steady digital revenue with zero hardware investment."
        descriptionAr="إركن بتربط أصحاب ومشغلي الجراجات بآلاف السائقين يومياً في القاهرة والجيزة والمحافظات — لتحويل الأماكن الفاضية لدخل رقمي مضمون بدون أي استثمار في أجهزة جديدة."
        badgeEn="WHO WE ARE & OUR MISSION"
        badgeAr="من نحن ورسالتنا"
      />

      {/* Mission / Vision */}
      <MissionVisionSection />

      {/* ── Leadership Team ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative" aria-labelledby="team-heading">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">

          <Reveal direction="up" delay={0.1}>
            <div className="mb-16 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold font-enHeading uppercase tracking-[0.14em] mb-4">
                <span><Translate en="LEADERSHIP" ar="فريق القيادة" /></span>
              </div>
              <h2
                id="team-heading"
                className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 mb-4"
              >
                <Translate en="The people building Irken." ar="الفريق الذي يبني إركن." />
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                <Translate
                  en="A focused team combining domain expertise in Egyptian urban mobility, platform engineering, and financial strategy."
                  ar="فريق متخصص يجمع بين الخبرة في التنقل الحضري المصري وهندسة المنصات والاستراتيجية المالية."
                />
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Reveal key={member.id} direction="up" delay={0.1 + i * 0.1}>
                <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">

                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-2xl mb-6 overflow-hidden relative border border-slate-200 shrink-0">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.nameEn}
                        fill
                        className="object-cover object-top"
                        sizes="96px"
                      />
                    ) : (
                      <AnonymousAvatar role={member.roleEn} />
                    )}
                  </div>

                  {/* Name + Role */}
                  <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-1">
                    <Translate en={member.nameEn} ar={member.nameAr} />
                  </h3>
                  <p className="text-brand-accent text-xs font-bold font-enHeading uppercase tracking-[0.12em] mb-4">
                    <Translate en={member.roleEn} ar={member.roleAr} />
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    <Translate en={member.bioEn} ar={member.bioAr} />
                  </p>

                  {/* Social links — only for real members */}
                  {member.isReal && (
                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.nameEn} on LinkedIn`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-bold font-enHeading hover:bg-brand-accent/10 hover:text-brand-accent transition-colors"
                        >
                          <span>in</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          aria-label={`Email ${member.nameEn}`}
                          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-accent/10 hover:text-brand-accent transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA
        titleEn="Want to join our network as a parking operator?"
        titleAr="هل تريد الانضمام لشبكتنا كمشغل موقف سيارات؟"
        descriptionEn="Zero setup fees. Zero hardware. Start receiving pre-paid reservations from drivers searching for parking near your location."
        descriptionAr="بدون رسوم إعداد. بدون أجهزة. ابدأ في استقبال حجوزات مدفوعة مسبقاً من سائقين يبحثون عن موقف بالقرب منك."
      />
    </main>
  );
}
