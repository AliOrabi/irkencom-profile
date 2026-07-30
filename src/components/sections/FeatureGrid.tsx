import React from 'react';
import Translate from '@/components/ui/Translate';
import '@/styles/components/feature-grid.css';

export interface FeatureItem {
  icon?: React.ReactNode;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <section className="section feature-grid-section">
      <div className="container">
        <div 
          className="feature-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(auto-fit, minmax(calc(100% / ${columns} - 2rem), 1fr))`,
            gap: 'var(--space-xl)'
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.icon && (
                <div className="feature-icon" style={{ color: 'var(--brand-accent)', marginBottom: 'var(--space-sm)' }}>
                  {feature.icon}
                </div>
              )}
              <h3 style={{ marginBottom: 'var(--space-xs)', fontSize: '1.25rem' }}>
                <Translate en={feature.titleEn} ar={feature.titleAr} />
              </h3>
              <p style={{ color: 'var(--brand-text-secondary)', lineHeight: 1.6 }}>
                <Translate en={feature.descriptionEn} ar={feature.descriptionAr} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
