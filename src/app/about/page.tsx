import React from 'react';
import Image from 'next/image';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import SectionBadge from '@/components/ui/SectionBadge';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import { Briefcase, Code } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10 mb-24">
        <Reveal direction="up" delay={0.05}>
          <div className="mb-8 max-w-3xl">
            <SectionBadge en="About Irken" ar="عن إركن" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-enHeading text-text-highlight mb-6">
              <Translate 
                en="Transforming urban mobility, one parking spot at a time." 
                ar="نحدث ثورة في التنقل الحضري، موقفاً تلو الآخر." 
              />
            </h1>
            <p className="text-lg text-text-secondary">
              <Translate 
                en="We are building the digital infrastructure that connects drivers, operators, and cities in a seamless, zero-friction ecosystem." 
                ar="نحن نبني البنية التحتية الرقمية التي تربط بين السائقين والمشغلين والمدن في نظام بيئي سلس وخالٍ من الاحتكاك." 
              />
            </p>
          </div>
        </Reveal>
      </div>

      {/* Mission / Vision Component */}
      <MissionVisionSection />

      {/* Founders / Team Section */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10 mt-32">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-16">
            <SectionBadge en="Our Team" ar="فريقنا" />
            <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-4">
              <Translate en="The minds behind Irken." ar="العقول وراء إركن." />
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Founder 1 */}
          <Reveal direction="up" delay={0.2}>
            <div className="border border-brand-secondary bg-brand-primary/50 rounded-md p-6 group hover:border-brand-accent/50 transition-colors">
              <div className="w-24 h-24 rounded-full bg-brand-secondary/50 mb-6 overflow-hidden relative">
                 <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Founder 1" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" unoptimized />
              </div>
              <h3 className="text-xl font-bold font-enHeading text-text-primary mb-1">Ahmed Hassan</h3>
              <p className="text-brand-accent text-sm font-enHeading uppercase tracking-[0.1em] mb-4">CEO & Co-Founder</p>
              <p className="text-sm text-text-secondary mb-6">
                <Translate 
                  en="Former smart city consultant with 10+ years of experience in proptech and urban planning across the MENA region." 
                  ar="مستشار سابق للمدن الذكية بخبرة تزيد عن 10 سنوات في مجال تكنولوجيا العقارات والتخطيط الحضري في منطقة الشرق الأوسط وشمال أفريقيا." 
                />
              </p>
              <div className="flex items-center gap-4 text-text-secondary">
                <a href="#" className="hover:text-brand-accent transition-colors"><Briefcase className="w-5 h-5" /></a>
              </div>
            </div>
          </Reveal>

          {/* Founder 2 */}
          <Reveal direction="up" delay={0.3}>
            <div className="border border-brand-secondary bg-brand-primary/50 rounded-md p-6 group hover:border-brand-accent/50 transition-colors">
              <div className="w-24 h-24 rounded-full bg-brand-secondary/50 mb-6 overflow-hidden relative">
                 <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Founder 2" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" unoptimized />
              </div>
              <h3 className="text-xl font-bold font-enHeading text-text-primary mb-1">Nour Al-Sayed</h3>
              <p className="text-brand-accent text-sm font-enHeading uppercase tracking-[0.1em] mb-4">CTO & Co-Founder</p>
              <p className="text-sm text-text-secondary mb-6">
                <Translate 
                  en="AI and systems architect. Passionate about building scalable, zero-capex solutions that solve real-world logistical problems." 
                  ar="مهندسة ذكاء اصطناعي وأنظمة. شغوفة ببناء حلول قابلة للتطوير بدون نفقات رأسمالية لحل المشاكل اللوجستية الواقعية." 
                />
              </p>
              <div className="flex items-center gap-4 text-text-secondary">
                <a href="#" className="hover:text-brand-accent transition-colors"><Briefcase className="w-5 h-5" /></a>
                <a href="#" className="hover:text-brand-accent transition-colors"><Code className="w-5 h-5" /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
