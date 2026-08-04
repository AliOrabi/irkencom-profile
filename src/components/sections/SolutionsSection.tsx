'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { solutions } from '@/config/content';
import * as LucideIcons from 'lucide-react';

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 relative border-t border-brand-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-16 max-w-3xl">
            <span className="inline-block px-3 py-1 border border-brand-secondary text-brand-accent text-xs font-enHeading uppercase tracking-[2px] mb-6 bg-brand-secondary/30">
              <Translate en="Who Do We Help" ar="من نساعد" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="Built for the people who run our cities." ar="مصمم للناس اللي بيديهم مدننا." />
            </h2>
            <p className="text-base text-text-secondary">
              <Translate
                en="Whether you manage a building, a parking lot, or an entire city — we have a solution that fits your operation."
                ar="سواء كنت بتدير عمارة أو موقفاً أو مدينة بالكامل — عندنا حل يناسب عملك."
              />
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = LucideIcons[solution.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <Reveal key={solution.id} delay={0.2 + (index * 0.1)} direction="up">
                <div className="border border-brand-secondary bg-brand-primary/80 p-8 hover:border-brand-accent/50 transition-colors duration-300 group relative h-full">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent/50 transition-all duration-500"></div>
                  {Icon && <Icon className="text-brand-accent mb-6 w-8 h-8 group-hover:scale-110 transition-transform origin-left" />}
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
