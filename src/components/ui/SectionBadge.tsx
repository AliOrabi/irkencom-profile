'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionBadgeProps {
  en: string;
  ar: string;
  /** 'default' | 'active' — active adds cyan glow treatment */
  variant?: 'default' | 'active';
  className?: string;
}

export default function SectionBadge({ en, ar, variant = 'default', className = '' }: SectionBadgeProps) {
  const isDefault = variant === 'default';

  return (
    <Badge
      variant={isDefault ? 'outline' : 'default'}
      className={cn(
        "px-3 py-1 font-enHeading uppercase tracking-[0.15em] mb-6 select-none",
        isDefault 
          ? "border-text-secondary text-brand-accent bg-brand-secondary/30" 
          : "border-brand-accent text-brand-accent bg-brand-accent/10",
        className
      )}
    >
      {variant === 'active' && (
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-brand-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 bg-brand-accent" />
        </span>
      )}
      <Translate en={en} ar={ar} />
    </Badge>
  );
}
