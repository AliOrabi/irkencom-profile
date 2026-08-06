'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

interface SectionBadgeProps {
  en: string;
  ar: string;
  /** 'default' | 'active' — active adds cyan glow treatment */
  variant?: 'default' | 'active';
  className?: string;
}

export default function SectionBadge({ en, ar, variant = 'default', className = '' }: SectionBadgeProps) {
  const base =
    'inline-flex items-center gap-2 px-3 py-1 text-xs font-enHeading uppercase tracking-[0.15em] mb-6 select-none';
  const variants = {
    default: 'border border-brand-text-secondary text-brand-accent bg-brand-secondary/30',
    active:  'border border-brand-accent  text-brand-accent bg-brand-accent/10 shadow-glow-accent-sm',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {/* Pulse dot */}
      {variant === 'active' && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-brand-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 bg-brand-accent" />
        </span>
      )}
      <Translate en={en} ar={ar} />
    </span>
  );
}
