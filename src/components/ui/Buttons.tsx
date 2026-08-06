'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

// ── PrimaryButton ────────────────────────────────────────────────────────────
interface PrimaryButtonProps {
  en: string;
  ar: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  'aria-describedby'?: string;
}

export function PrimaryButton({
  en, ar, href, onClick, type = 'button', disabled = false, className = '', ...rest
}: PrimaryButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2',
    'px-8 py-4',
    'bg-brand-accent text-brand-on-accent',
    'font-enHeading text-xs uppercase tracking-[0.15em]',
    'border-2 border-brand-accent',
    'transition-all duration-200',
    'hover:bg-brand-accent-hover hover:border-brand-accent-hover',
    'hover:shadow-glow-accent-sm',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary',
    'disabled:opacity-40 disabled:pointer-events-none',
    'min-h-[44px]',
    'rounded-md',
    className,
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        <Translate en={en} ar={ar} />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      <Translate en={en} ar={ar} />
    </button>
  );
}

// ── GhostButton ──────────────────────────────────────────────────────────────
interface GhostButtonProps {
  en: string;
  ar: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export function GhostButton({
  en, ar, href, onClick, type = 'button', disabled = false, className = '',
}: GhostButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2',
    'px-8 py-4',
    'bg-transparent text-text-primary',
    'font-enHeading text-xs uppercase tracking-[0.15em]',
    'border-2 border-text-primary',
    'transition-all duration-200',
    'hover:bg-text-primary hover:text-brand-primary',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary',
    'disabled:opacity-40 disabled:pointer-events-none',
    'min-h-[44px]',
    'rounded-md',
    className,
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        <Translate en={en} ar={ar} />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      <Translate en={en} ar={ar} />
    </button>
  );
}
