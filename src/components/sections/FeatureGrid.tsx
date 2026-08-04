import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Feature } from '@/types';
import * as LucideIcons from 'lucide-react';

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridClass = 
    columns === 2 ? 'md:grid-cols-2' : 
    columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 
    'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-24 bg-brand-primary">
      <div className="max-w-[1280px] mx-auto px-8 w-full">
        <div className={`grid gap-8 ${gridClass}`}>
          {features.map((feature, index) => {
            const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <Reveal key={feature.id || index} delay={index * 0.1}>
                <div className="border border-brand-secondary p-8 bg-brand-primary/50 group hover:border-brand-accent transition-colors h-full">
                  {Icon && (
                    <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform origin-left">
                      <Icon size={24} />
                    </div>
                  )}
                  <h3 className="text-xl font-enHeading text-text-primary mb-4">
                    <Translate en={feature.title.en} ar={feature.title.ar} />
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <Translate en={feature.description.en} ar={feature.description.ar} />
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
