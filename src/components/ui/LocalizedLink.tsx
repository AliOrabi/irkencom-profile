'use client';

import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';

type LocalizedLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps;

export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { language } = useLanguage();
  
  let localizedHref = href;
  if (typeof href === 'string') {
    if (href.startsWith('/') && !href.startsWith(`/${language}`)) {
      localizedHref = href === '/' ? `/${language}` : `/${language}${href}`;
    }
  } else if (href && typeof href === 'object' && href.pathname && href.pathname.startsWith('/')) {
    if (!href.pathname.startsWith(`/${language}`)) {
      localizedHref = { ...href, pathname: href.pathname === '/' ? `/${language}` : `/${language}${href.pathname}` };
    }
  }

  // Handle pure anchor links natively to avoid Next.js routing issues if needed
  if (typeof localizedHref === 'string' && localizedHref.startsWith('#')) {
    return <a href={localizedHref} {...props as any} />;
  }

  return <NextLink href={localizedHref} {...props} />;
}
