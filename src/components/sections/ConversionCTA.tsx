import React from 'react';
import Translate from '@/components/ui/Translate';
import Link from 'next/link';

interface ConversionCTAProps {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  primaryButtonTextEn?: string;
  primaryButtonTextAr?: string;
  primaryButtonHref?: string;
}

export default function ConversionCTA({ 
  titleEn, 
  titleAr, 
  descriptionEn, 
  descriptionAr,
  primaryButtonTextEn = "Architect Your Solution",
  primaryButtonTextAr = "صمم حلك",
  primaryButtonHref = "/contact"
}: ConversionCTAProps) {
  return (
    <section className="section cta-section" style={{ padding: 'var(--space-2xl) 0', backgroundColor: 'rgba(100, 255, 218, 0.02)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: 'var(--space-sm)' }}>
          <Translate en={titleEn} ar={titleAr} />
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--brand-text-secondary)', marginBottom: 'var(--space-xl)' }}>
          <Translate en={descriptionEn} ar={descriptionAr} />
        </p>
        <div>
          <Link href={primaryButtonHref} className="btn btn-primary" style={{ display: 'inline-block' }}>
            <Translate en={primaryButtonTextEn} ar={primaryButtonTextAr} />
          </Link>
        </div>
      </div>
    </section>
  );
}
