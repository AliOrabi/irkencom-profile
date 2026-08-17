import React from 'react';
import { solutions } from '@/config/content';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { CheckCircle2, LucideIcon as LucideIconType } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-20 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="Built for the people who run our cities." ar="مصمم للقادة الذين يديرون مدننا." />
            </h1>
            <p className="text-lg text-text-secondary">
              <Translate 
                en="Whether you manage a building, a parking lot, or an entire city — we have a solution that fits your operation." 
                ar="سواء كنت تدير مبنى تجارياً، أو منشأة مواقف مخصصة، أو مدينة بأكملها — لدينا الحل التقني الأمثل لعملك." 
              />
            </p>
          </div>
        </Reveal>

        {/* Audience Paths */}
        <div className="space-y-32">
          {solutions.map((solution, index) => {
            const LucideIcon = LucideIcons[solution.icon as keyof typeof LucideIcons] as React.ElementType;
            const isEven = index % 2 === 0;

            return (
              <div key={solution.id} className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Visual / Image Placeholder */}
                <Reveal direction={isEven ? "right" : "left"} delay={0.1} className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-md border border-brand-secondary bg-brand-primary/50 relative overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent"></div>
                    {LucideIcon && (
                      <Icon icon={LucideIcon as LucideIconType} className="w-32 h-32 text-brand-secondary/50 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                    )}
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal direction={isEven ? "left" : "right"} delay={0.2} className="w-full lg:w-1/2">
                  <div className="flex flex-col">
                    {LucideIcon && (
                      <div className="bg-brand-accent/10 w-16 h-16 rounded-md flex items-center justify-center mb-6">
                        <Icon icon={LucideIcon as LucideIconType} className="text-brand-accent w-8 h-8" />
                      </div>
                    )}
                    
                    <h2 className="text-3xl font-bold font-enHeading text-text-highlight mb-6">
                      <Translate en={solution.title.en} ar={solution.title.ar} />
                    </h2>
                    
                    <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                      <Translate en={solution.description.en} ar={solution.description.ar} />
                    </p>
                    
                    {/* Benefits List */}
                    <ul className="space-y-4">
                      {[1, 2, 3].map((_, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icon icon={CheckCircle2} className="w-6 h-6 text-brand-accent flex-shrink-0" />
                          <span className="text-text-primary">
                            <Translate 
                              en="Specific benefit tailored to this audience segment highlighting ROI and ease of use." 
                              ar="فائدة محددة مصممة خصيصًا لهذه الفئة المستهدفة تسلط الضوء على عائد الاستثمار وسهولة الاستخدام." 
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
