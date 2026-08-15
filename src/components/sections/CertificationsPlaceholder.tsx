import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';

export default function CertificationsPlaceholder() {
  return (
    <section className="py-16 bg-[#0a111a] border-t border-brand-secondary">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-enHeading text-text-secondary uppercase tracking-widest mb-8">
            <Translate en="Certified Quality & Security" ar="جودة وأمان معتمدان" />
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="w-24 h-24 bg-brand-secondary/30 rounded-full flex flex-col items-center justify-center text-xs text-text-secondary text-center p-2">ISO 27001<br/>Ready</div>
            <div className="w-24 h-24 bg-brand-secondary/30 rounded-full flex flex-col items-center justify-center text-xs text-text-secondary text-center p-2">GDPR<br/>Compliant</div>
            <div className="w-24 h-24 bg-brand-secondary/30 rounded-full flex flex-col items-center justify-center text-xs text-text-secondary text-center p-2">PCI-DSS<br/>Compliant</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
