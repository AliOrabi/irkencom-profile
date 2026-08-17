import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

export default function ClientLogosPlaceholder() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-enHeading text-slate-400 uppercase tracking-widest mb-8">
            <Translate en="Trusted By Industry Leaders" ar="محل ثقة قادة الصناعة" />
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
            {/* Replace these divs with actual logo imgs when ready */}
            <div className="w-32 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-xs text-slate-400">Logo 1</div>
            <div className="w-32 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-xs text-slate-400">Logo 2</div>
            <div className="w-32 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-xs text-slate-400">Logo 3</div>
            <div className="w-32 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-xs text-slate-400">Logo 4</div>
            <div className="w-32 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-xs text-slate-400">Logo 5</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
