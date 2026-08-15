import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

export default function ClientLogosPlaceholder() {
  return (
    <section className="py-16 bg-brand-primary border-t border-brand-secondary">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-enHeading text-text-secondary uppercase tracking-widest mb-8">
            <Translate en="Trusted By Industry Leaders" ar="محل ثقة قادة الصناعة" />
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Replace these divs with actual logo imgs when ready */}
            <div className="w-32 h-12 bg-brand-secondary/30 rounded flex items-center justify-center text-xs text-text-secondary">Logo 1</div>
            <div className="w-32 h-12 bg-brand-secondary/30 rounded flex items-center justify-center text-xs text-text-secondary">Logo 2</div>
            <div className="w-32 h-12 bg-brand-secondary/30 rounded flex items-center justify-center text-xs text-text-secondary">Logo 3</div>
            <div className="w-32 h-12 bg-brand-secondary/30 rounded flex items-center justify-center text-xs text-text-secondary">Logo 4</div>
            <div className="w-32 h-12 bg-brand-secondary/30 rounded flex items-center justify-center text-xs text-text-secondary">Logo 5</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
