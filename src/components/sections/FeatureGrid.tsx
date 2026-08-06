import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Feature } from '@/types';

// Map icon strings to strict geometric SVGs
const TechIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Database':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'BarChart3':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
          <path d="M2 20h20" />
        </svg>
      );
    case 'Network':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
          <path d="M12 8v3" />
        </svg>
      );
    case 'Settings':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'Camera':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4v13h16V7h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    case 'Zap':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'FileSearch':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6v20h12V8l-4-6z" />
          <path d="M14 2v6h6" />
          <circle cx="11" cy="13" r="2" />
          <path d="m15 17-2.5-2.5" />
        </svg>
      );
    case 'ShieldCheck':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'LinkIcon':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case 'ToggleRight':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="6" />
          <circle cx="16" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case 'SmartphoneNfc':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
          <path d="M9 10a4 4 0 0 1 6 0" />
          <path d="M10 13a2 2 0 0 1 4 0" />
        </svg>
      );
    case 'KeySquare':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m14 9-5 5" />
          <circle cx="15.5" cy="7.5" r="1.5" />
          <path d="M11 12v-2" />
          <path d="M9 14v-2" />
        </svg>
      );
    default:
      // Fallback geometric shape
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
  }
};

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
    <section className="py-24 bg-brand-primary relative border-t border-brand-secondary">
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <div className={`grid gap-8 ${gridClass}`}>
          {features.map((feature, index) => (
            <Reveal key={feature.id || index} delay={index * 0.1}>
              <div className="border border-brand-secondary p-8 bg-brand-secondary/50 group hover:border-brand-accent transition-all duration-300 hover:shadow-glow-accent h-full relative rounded-md">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right duration-300 rounded-t-md" aria-hidden="true" />
                
                <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform origin-left rtl:origin-right flex items-center justify-start bg-brand-accent/10 w-12 h-12 rounded-full justify-center">
                  <TechIcon name={feature.icon as string} />
                </div>
                
                <h3 className="text-xl font-enHeading text-text-primary mb-4">
                  <Translate en={feature.title.en} ar={feature.title.ar} />
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  <Translate en={feature.description.en} ar={feature.description.ar} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
