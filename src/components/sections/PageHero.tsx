import React from 'react';
import Translate from '@/components/ui/Translate';

interface PageHeroProps {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export default function PageHero({ titleEn, titleAr, descriptionEn, descriptionAr }: PageHeroProps) {
  return (
    <section className="section hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '50vh' }}>
      {/* CSS-based Grid Background Layer */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(100, 255, 218, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 218, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: 'var(--space-md)' }}>
          <Translate en={titleEn} ar={titleAr} />
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--brand-text-secondary)', lineHeight: 1.6 }}>
          <Translate en={descriptionEn} ar={descriptionAr} />
        </p>
      </div>
    </section>
  );
}
