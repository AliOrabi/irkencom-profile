import React from 'react';
import Translate from '@/components/ui/Translate';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

interface ContentSectionProps {
  titleEn: string;
  titleAr: string;
  contentEn: React.ReactNode;
  contentAr: React.ReactNode;
  imageSrc?: string;
  imageAltEn?: string;
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
  imagePosition = 'right',
  className = ''
}: ContentSectionProps) {
  return (
    <section className={`py-24 relative border-b border-brand-secondary overflow-hidden ${className}`}>
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <Reveal direction="up" delay={0.1}>
          <div className={`grid ${imageSrc ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-12 items-center`}>
            
            <div className={imagePosition === 'left' ? 'order-2' : 'order-1'}>
              <h2 className="text-3xl md:text-4xl font-enHeading text-text-primary mb-6">
                <Translate en={titleEn} ar={titleAr} />
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-4">
                <Translate en={contentEn} ar={contentAr} />
              </div>
            </div>
            
            {imageSrc && (
              <div className={`relative w-full aspect-video border border-brand-secondary bg-brand-primary/50 overflow-hidden ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
                <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none z-10"></div>
                <Image 
                  src={imageSrc} 
                  alt={imageAltEn} 
                  fill 
                  className="object-cover"
                />
              </div>
            )}
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
