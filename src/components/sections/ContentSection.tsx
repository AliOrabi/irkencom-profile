import React from 'react';
import Translate from '@/components/ui/Translate';
import Image from 'next/image';

interface ContentSectionProps {
  titleEn: string;
  titleAr: string;
  contentEn: React.ReactNode;
  contentAr: React.ReactNode;
  imageSrc?: string;
  imageAltEn?: string;
  imageAltAr?: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

export default function ContentSection({ 
  titleEn, 
  titleAr, 
  contentEn, 
  contentAr,
  imageSrc,
  imageAltEn = "",
  imageAltAr = "",
  imagePosition = 'right',
  className = ''
}: ContentSectionProps) {
  return (
    <section className={`section content-section ${className}`} style={{ padding: 'var(--space-2xl) 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: imageSrc ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
          gap: 'var(--space-xl)',
          alignItems: 'center'
        }}>
          <div style={{ order: imagePosition === 'left' ? 2 : 1 }}>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>
              <Translate en={titleEn} ar={titleAr} />
            </h2>
            <div style={{ color: 'var(--brand-text-secondary)', lineHeight: 1.8 }}>
              <Translate en={contentEn} ar={contentAr} />
            </div>
          </div>
          
          {imageSrc && (
            <div style={{ order: imagePosition === 'left' ? 1 : 2, position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <Image 
                src={imageSrc} 
                alt={imageAltEn} // In a real app we'd switch based on locale, but for Next.js Image component it's ok to use EN for now or a generic alt.
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
