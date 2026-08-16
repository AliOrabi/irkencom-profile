import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Quote } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

export default function TestimonialsPlaceholder() {
  return (
    <section className="py-24 bg-brand-primary">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-12">
            <Translate en="What Our Partners Say" ar="ماذا يقول شركاؤنا" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#0a111a] border border-brand-secondary flex flex-col items-center text-center">
                <Icon icon={Quote} className="w-8 h-8 text-brand-accent/50 mb-6" />
                <p className="text-text-secondary mb-8 flex-1 italic">
                  <Translate 
                    en="Placeholder for a great review about how Irken increased parking revenue and solved operational headaches." 
                    ar="عنصر نائب لمراجعة رائعة حول كيفية زيادة إركن لإيرادات مواقف السيارات وحل المشاكل التشغيلية." 
                  />
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-secondary/30 rounded-full" />
                  <div className="text-left rtl:text-right">
                    <p className="font-bold text-text-primary">Partner {i}</p>
                    <p className="text-sm text-text-secondary">Facility Manager</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
