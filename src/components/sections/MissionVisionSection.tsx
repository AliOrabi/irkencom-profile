'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Target, Lightbulb } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-50/50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <Reveal direction="up" delay={0.1}>
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 h-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                <Lightbulb className="w-7 h-7" strokeWidth={1.75} />
              </div>
              
              <span className="text-[11px] font-semibold font-enHeading uppercase tracking-widest text-brand-accent mb-2 block">
                <Translate en="STRATEGIC DIRECTION" ar="التوجه الاستراتيجي" />
              </span>

              <h3 className="text-2xl sm:text-3xl font-enHeading font-bold text-slate-900 mb-4">
                <Translate en="Our Vision" ar="رؤيتنا" />
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <Translate
                  en="To create frictionless, interconnected urban mobility networks where idle real estate is transformed into intelligent, high-yield digital infrastructure across the MENA region."
                  ar="خلق شبكات تنقل حضرية سلسة ومترابطة حيث تتحول الأصول العقارية الشاغرة إلى بنية تحتية رقمية ذكية وعالية العائد في جميع أنحاء منطقة الشرق الأوسط وشمال أفريقيا."
                />
              </p>
            </div>
          </Reveal>

          {/* Mission Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 h-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                <Target className="w-7 h-7" strokeWidth={1.75} />
              </div>
              
              <span className="text-[11px] font-semibold font-enHeading uppercase tracking-widest text-brand-accent mb-2 block">
                <Translate en="OPERATIONAL OBJECTIVE" ar="الهدف التشغيلي" />
              </span>

              <h3 className="text-2xl sm:text-3xl font-enHeading font-bold text-slate-900 mb-4">
                <Translate en="Our Mission" ar="مهمتنا" />
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <Translate
                  en="To deploy asset-light, deeply integrated capacity engines that maximize parking yield for operators without the need for sensors, civil works, or costly hardware overhauls."
                  ar="نشر محركات سعة مرنة الأصول ومدمجة بعمق تزيد من عائد المواقف للمشغلين دون الحاجة إلى أجهزة استشعار أو أعمال مدنية أو استبدال مكلف للمعدات."
                />
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
