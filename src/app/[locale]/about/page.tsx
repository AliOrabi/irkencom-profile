import React from 'react';
import Image from 'next/image';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { Briefcase, Code } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero
        titleEn="Digitizing Egypt's Parking Sector, Bay by Bay."
        titleAr="رقمنة منظومة مواقف السيارات في مصر، مساحة تلو الأخرى."
        descriptionEn="Irken connects licensed parking operators with thousands of daily drivers across Cairo, Giza, and Egyptian cities — transforming vacant bays into steady digital revenue with zero hardware investment."
        descriptionAr="إركن بتربط أصحاب ومشغلي الجراجات بآلاف السائقين يومياً في القاهرة والجيزة والمحافظات — لتحويل الأماكن الفاضية لدخل رقمي مضمون بدون أي استثمار في أجهزة جديدة."
        badgeEn="WHO WE ARE & OUR MISSION"
        badgeAr="من نحن ورسالتنا"
      />

      {/* Mission / Vision Component */}
      <MissionVisionSection />

      {/* Founders / Team Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
          <Reveal direction="up" delay={0.1}>
            <div className="mb-16 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold font-enHeading uppercase tracking-[0.14em] mb-4">
                <span><Translate en="LEADERSHIP" ar="فريق القيادة" /></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 mb-4">
                <Translate en="The minds driving Irken." ar="العقول التي تقود إركن." />
              </h2>
              <p className="text-slate-600 text-base">
                <Translate
                  en="Combining deep domain expertise in Egyptian proptech, urban mobility engineering, and enterprise cloud architecture."
                  ar="نجمع بين الخبرة العميقة في التكنولوجيا العقارية المصرية وهندسة التنقل الحضري والأنظمة السحابية للشركات."
                />
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <Reveal direction="up" delay={0.15}>
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-24 h-24 rounded-2xl bg-slate-100 mb-6 overflow-hidden relative border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                    alt="Ahmed Hassan"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-1">Ahmed Hassan</h3>
                <p className="text-brand-accent text-xs font-bold font-enHeading uppercase tracking-[0.12em] mb-4">CEO & Co-Founder</p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  <Translate
                    en="Former smart city consultant with 10+ years of experience in proptech and urban mobility across Egypt."
                    ar="مستشار سابق للمدن الذكية بخبرة تزيد عن 10 سنوات في مجال تكنولوجيا العقارات والتنقل الحضري في مصر."
                  />
                </p>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                    <Briefcase className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Founder 2 */}
            <Reveal direction="up" delay={0.25}>
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-24 h-24 rounded-2xl bg-slate-100 mb-6 overflow-hidden relative border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Nour Al-Sayed"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-1">Nour Al-Sayed</h3>
                <p className="text-brand-accent text-xs font-bold font-enHeading uppercase tracking-[0.12em] mb-4">CTO & Co-Founder</p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  <Translate
                    en="AI and systems architect. Passionate about building scalable, zero-capex solutions that solve real-world logistical problems."
                    ar="مهندسة ذكاء اصطناعي وأنظمة. شغوفة ببناء حلول قابلة للتطوير بدون نفقات رأسمالية لحل المشاكل اللوجستية الواقعية."
                  />
                </p>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                    <Code className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ConversionCTA
        titleEn="Want to join our mission or partner with us?"
        titleAr="هل ترغب في الانضمام لمهمتنا أو الشراكة معنا؟"
        descriptionEn="We are continuously expanding our operational footprint across Egypt and GCC."
        descriptionAr="نعمل باستمرار على توسيع نطاق عملياتنا في مصر ودول مجلس التعاون الخليجي."
      />
    </main>
  );
}
