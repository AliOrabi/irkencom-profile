'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Target, Lightbulb } from 'lucide-react'; 
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function MissionVisionSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-brand-primary overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, theme(colors.brand.accent) 1px, transparent 1px), linear-gradient(to bottom, theme(colors.brand.accent) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.03,
          }}
        />
        {/* Cyan edge glow top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <Reveal direction="up" delay={0.1}>
            <Card className="group relative h-full bg-[#0d1f3b]/50 border-brand-accent/20 transition-colors hover:border-brand-accent/50 hover:bg-[#0d1f3b]/80 backdrop-blur-sm rounded-md shadow-none p-0 overflow-visible">
              <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-brand-accent rounded-tl-md" />
              <div className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t border-r border-brand-accent rounded-tr-md" />
              <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b border-l border-brand-accent rounded-bl-md" />
              <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-brand-accent rounded-br-md" />
              
              <CardHeader className="flex flex-row items-center gap-4 p-8 lg:p-12 pb-6 space-y-0">
                <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-md">
                  <Lightbulb size={24} className="group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-2xl font-enHeading text-text-highlight uppercase tracking-[0.1em] m-0">
                  <Translate en="Our Vision" ar="رؤيتنا" />
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 lg:px-12 pb-8 lg:pb-12 pt-0">
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                  <Translate
                    en="To create frictionless, interconnected urban mobility networks where idle real estate is transformed into intelligent, high-yield infrastructure."
                    ar="خلق شبكات تنقل حضرية سلسة ومترابطة حيث تتحول الأصول العقارية الشاغرة إلى بنية تحتية ذكية وعالية العائد."
                  />
                </p>
              </CardContent>
            </Card>
          </Reveal>

          {/* Mission Card */}
          <Reveal direction="up" delay={0.2}>
            <Card className="group relative h-full bg-[#0d1f3b]/50 border-brand-accent/20 transition-colors hover:border-brand-accent/50 hover:bg-[#0d1f3b]/80 backdrop-blur-sm rounded-md shadow-none p-0 overflow-visible">
              <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-brand-accent rounded-tl-md" />
              <div className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t border-r border-brand-accent rounded-tr-md" />
              <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b border-l border-brand-accent rounded-bl-md" />
              <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-brand-accent rounded-br-md" />
              
              <CardHeader className="flex flex-row items-center gap-4 p-8 lg:p-12 pb-6 space-y-0">
                <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-md">
                  <Target size={24} className="group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-2xl font-enHeading text-text-highlight uppercase tracking-[0.1em] m-0">
                  <Translate en="Our Mission" ar="مهمتنا" />
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 lg:px-12 pb-8 lg:pb-12 pt-0">
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                  <Translate
                    en="To deploy asset-light, deeply integrated capacity engines that maximize parking yield for operators without the need for sensors, civil works, or hardware upgrades."
                    ar="نشر محركات سعة مرنة الأصول ومدمجة بعمق تزيد من عائد المواقف للمشغلين دون الحاجة إلى أجهزة استشعار أو أعمال مدنية أو ترقيات للمعدات."
                  />
                </p>
              </CardContent>
            </Card>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
