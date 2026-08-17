'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { solutions } from '@/config/content';
import * as LucideIcons from 'lucide-react';
import { LucideIcon as LucideIconType } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 relative border-t border-brand-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="Built for the people who run our cities." ar="مصمم للقادة الذين يديرون مدننا." />
            </h2>
            <p className="text-base text-text-secondary">
              <Translate
                en="Whether you manage a building, a parking lot, or an entire city — we have a solution that fits your operation."
                ar="سواء كنت تدير مبنى تجارياً، أو منشأة مواقف مخصصة، أو مدينة بأكملها — لدينا الحل التقني الأمثل لعملك."
              />
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const LucideIcon = LucideIcons[solution.icon as keyof typeof LucideIcons] as LucideIconType;
            return (
              <Reveal key={solution.id} delay={0.2 + (index * 0.1)} direction="up">
                <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative h-full rounded-md cursor-pointer">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500 rounded-t-md"></div>
                  {LucideIcon && (
                    <div className="bg-brand-accent/10 w-12 h-12 rounded-md flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                      <Icon icon={LucideIcon} className="text-brand-accent w-6 h-6 group-hover:scale-110 transition-transform origin-left rtl:origin-right" />
                    </div>
                  )}
                  <h3 className="text-xl font-enHeading text-text-highlight mb-4">
                    <Translate en={solution.title.en} ar={solution.title.ar} />
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <Translate en={solution.description.en} ar={solution.description.ar} />
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
