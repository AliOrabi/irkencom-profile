'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import LocalizedLink from '@/components/ui/LocalizedLink';
import { cn } from '@/lib/utils';

// ── Common Button Props ──────────────────────────────────────────────────────
export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  en?: string;
  ar?: string;
  children?: React.ReactNode;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
}

// ── PrimaryButton ────────────────────────────────────────────────────────────
export function PrimaryButton({
  en,
  ar,
  children,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  target,
  rel,
  id,
  'aria-label': ariaLabel,
  ...rest
}: BaseButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2.5',
    'px-7 py-3.5',
    'bg-brand-accent text-white font-semibold',
    'font-enHeading text-xs uppercase tracking-[0.14em]',
    'border border-brand-accent shadow-sm',
    'rounded-full',
    'transition-all duration-200 ease-out',
    'hover:bg-brand-accent-hover hover:border-brand-accent-hover hover:shadow-md hover:-translate-y-0.5',
    'active:translate-y-0 active:scale-[0.98]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none disabled:transform-none',
    'min-h-[44px] cursor-pointer select-none',
    className
  );

  const content = children || (en && ar ? <Translate en={en} ar={ar} /> : null);

  if (href) {
    return (
      <LocalizedLink 
        href={href} 
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>} 
        className={baseClasses} 
        target={target}
        rel={rel}
        id={id}
        aria-label={ariaLabel}
      >
        {content}
        {icon && <span className="shrink-0">{icon}</span>}
      </LocalizedLink>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={baseClasses}
      id={id}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}

// ── GhostButton ──────────────────────────────────────────────────────────────
export function GhostButton({
  en,
  ar,
  children,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  target,
  rel,
  id,
  'aria-label': ariaLabel,
  ...rest
}: BaseButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2.5',
    'px-7 py-3.5',
    'bg-white/10 hover:bg-white/20 text-white font-semibold',
    'backdrop-blur-md',
    'font-enHeading text-xs uppercase tracking-[0.14em]',
    'border border-white/30 hover:border-white/60',
    'rounded-full',
    'transition-all duration-200 ease-out',
    'hover:shadow-md hover:-translate-y-0.5',
    'active:translate-y-0 active:scale-[0.98]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none disabled:transform-none',
    'min-h-[44px] cursor-pointer select-none',
    className
  );

  const content = children || (en && ar ? <Translate en={en} ar={ar} /> : null);

  if (href) {
    return (
      <LocalizedLink 
        href={href} 
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>} 
        className={baseClasses} 
        target={target}
        rel={rel}
        id={id}
        aria-label={ariaLabel}
      >
        {content}
        {icon && <span className="shrink-0">{icon}</span>}
      </LocalizedLink>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={baseClasses}
      id={id}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}

// ── SecondaryButton ──────────────────────────────────────────────────────────
export function SecondaryButton({
  en,
  ar,
  children,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  target,
  rel,
  id,
  'aria-label': ariaLabel,
  ...rest
}: BaseButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2.5',
    'px-7 py-3.5',
    'bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold',
    'font-enHeading text-xs uppercase tracking-[0.14em]',
    'border border-slate-200 hover:border-slate-300',
    'rounded-full',
    'transition-all duration-200 ease-out',
    'hover:shadow-sm hover:-translate-y-0.5',
    'active:translate-y-0 active:scale-[0.98]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'min-h-[44px] cursor-pointer select-none',
    className
  );

  const content = children || (en && ar ? <Translate en={en} ar={ar} /> : null);

  if (href) {
    return (
      <LocalizedLink 
        href={href} 
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>} 
        className={baseClasses} 
        target={target}
        rel={rel}
        id={id}
        aria-label={ariaLabel}
      >
        {content}
        {icon && <span className="shrink-0">{icon}</span>}
      </LocalizedLink>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={baseClasses}
      id={id}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
