'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LocalizedLink from '@/components/ui/LocalizedLink';
import Translate from '@/components/ui/Translate';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { usePostHog } from 'posthog-js/react';
import { PrimaryButton } from '@/components/ui/Buttons';
import {
  Menu,
  X,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const posthog = usePostHog();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strip locale prefix (/en/, /ar/) for route matching
  const strippedPath = pathname.replace(/^\/(?:en|ar)(?=\/|$)/, '') || '/';

  const isActive = (href: string) => {
    if (href === '/') return strippedPath === '/';
    // Ignore hash-only anchors (e.g. /#yield-calculator) — never mark as active
    if (href.startsWith('/#')) return false;
    return strippedPath.startsWith(href);
  };

  const navLinkClass = (href: string) => cn(
    'text-[11px] xl:text-xs font-semibold font-enHeading tracking-[0.06em] xl:tracking-[0.1em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent py-1.5 xl:py-2 px-2.5 xl:px-3.5 rounded-full whitespace-nowrap select-none',
    isActive(href)
      ? isScrolled
        ? 'text-brand-accent bg-brand-accent/10 hover:bg-brand-accent/15'
        : 'text-white bg-white/15 hover:bg-white/20'
      : isScrolled
        ? 'text-slate-700 hover:text-brand-accent hover:bg-slate-100/70'
        : 'text-slate-200 hover:text-white hover:bg-white/10'
  );

  return (
    <>
      {/* ── Skip to content ───────────────────────────────────────────── */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-brand-accent focus:text-white focus:font-enHeading focus:text-xs focus:uppercase focus:tracking-widest rounded-full"
      >
        <Translate en="Skip to content" ar="انتقل إلى المحتوى" />
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] py-2.5 xl:py-3'
            : 'bg-slate-950/60 backdrop-blur-xl border-b border-white/10 py-3 xl:py-3.5'
        )}
        role="banner"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">

          {/* Logo + Beta Badge + Operator Program Badge */}
          <LocalizedLink href="/" aria-label="Irken Solutions — Home" className="flex items-center gap-2 xl:gap-2.5 shrink-0 group">
            <Image
              src={isScrolled ? '/irken-logo-dark.svg' : '/irken-logo-light.svg'}
              alt="Irken Solutions"
              width={130}
              height={34}
              className="h-7 md:h-8 w-auto block transition-transform group-hover:scale-[1.02]"
              priority
            />
            {/* Beta Version Badge (علامة: نسخة تجريبية) */}
            <span className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold rounded-full border tracking-wide whitespace-nowrap shrink-0 transition-colors select-none",
              isScrolled
                ? "bg-amber-500/10 text-amber-700 border-amber-500/30"
                : "bg-amber-400/20 text-amber-300 border-amber-400/40 backdrop-blur-md"
            )}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <Translate en="BETA" ar="نسخة تجريبية" />
            </span>


          </LocalizedLink>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 min-w-0"
          >
            <LocalizedLink href="/how-it-works" className={navLinkClass('/how-it-works')}>
              <Translate en="How It Works" ar="كيف نعمل" />
            </LocalizedLink>

            <LocalizedLink href="/#yield-calculator" className={navLinkClass('/#yield-calculator')}>
              <Translate en="Yield Calculator" ar="حاسبة العائد" />
            </LocalizedLink>

            <LocalizedLink href="/about" className={navLinkClass('/about')}>
              <Translate en="About Us" ar="من نحن" />
            </LocalizedLink>

            <LocalizedLink href="/insights" className={navLinkClass('/insights')}>
              <Translate en="Insights" ar="الرؤى" />
            </LocalizedLink>

            <LocalizedLink href="/contact" className={navLinkClass('/contact')}>
              <Translate en="Contact" ar="تواصل معنا" />
            </LocalizedLink>

            {/* B2C Driver Platform External Link */}

          </nav>

          {/* Right Actions: Language toggle & CTA */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Language toggle */}
            <button
              onClick={() => {
                const newLocale = language === 'en' ? 'ar' : 'en';
                toggleLanguage();
                posthog?.capture('language_changed', { new_locale: newLocale });
              }}
              className={cn(
                'flex items-center gap-1.5 xl:gap-2 text-[11px] xl:text-xs font-bold font-enHeading tracking-[0.08em] xl:tracking-[0.12em] uppercase px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-full border transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0',
                isScrolled
                  ? 'border-slate-200/80 bg-slate-50/60 text-slate-700 hover:border-brand-accent hover:text-brand-accent hover:bg-white'
                  : 'border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20'
              )}
              aria-label={`Switch to ${language === 'en' ? 'Ar' : 'En'}`}
            >
              <Globe className="w-3.5 h-3.5 shrink-0 opacity-80" />
              <span>{language === 'en' ? 'ع' : 'En'}</span>
            </button>

            {/* Direct CTA */}
            <PrimaryButton
              en="Join as Partner"
              ar="انضم كشريك"
              href="/#operator-onboard"
              className="py-2 xl:py-2.5 px-4 xl:px-6 text-[11px] xl:text-xs shadow-md shadow-brand-accent/20 active:scale-[0.98] whitespace-nowrap"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'lg:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors cursor-pointer active:scale-95',
              isScrolled
                ? 'border-slate-200 text-slate-900 hover:border-brand-accent'
                : 'border-white/20 bg-white/10 text-white hover:border-white'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer overlay ────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-50 lg:hidden bg-white/95 backdrop-blur-2xl flex flex-col transition-all duration-300 ease-out',
          mobileOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 shrink-0 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <LocalizedLink href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/irken-logo-dark.svg" alt="Irken Solutions" width={130} height={32} className="block h-8 w-auto" />
            </LocalizedLink>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <Translate en="BETA" ar="نسخة تجريبية" />
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:text-brand-accent transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-3">
          <LocalizedLink
            href="/how-it-works"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 text-slate-900 hover:text-brand-accent transition-colors"
          >
            <Translate en="How It Works" ar="كيف نعمل" />
          </LocalizedLink>
          <LocalizedLink
            href="/#yield-calculator"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 text-slate-900 hover:text-brand-accent transition-colors"
          >
            <Translate en="Yield Calculator" ar="حاسبة العائد" />
          </LocalizedLink>
          <LocalizedLink
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 text-slate-900 hover:text-brand-accent transition-colors"
          >
            <Translate en="About Us" ar="من نحن" />
          </LocalizedLink>
          <LocalizedLink
            href="/insights"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 text-slate-900 hover:text-brand-accent transition-colors"
          >
            <Translate en="Insights" ar="الرؤى" />
          </LocalizedLink>
          <LocalizedLink
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 text-slate-900 hover:text-brand-accent transition-colors"
          >
            <Translate en="Contact & Support" ar="تواصل معنا" />
          </LocalizedLink>
          <a
            href="https://irken.eg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold font-enHeading text-brand-accent py-2.5 px-3 rounded-2xl flex items-center justify-between mt-2"
          >
            <span><Translate en="Irken Now" ar="احجز ركنتك" /></span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Trust anchor — fills drawer dead space purposefully */}
          <div className="mt-auto pt-6 pb-2">
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <Translate
                en="Egypt&rsquo;s online parking reservation network"
                ar="شبكة حجز مواقف السيارات في مصر"
              />
            </p>
          </div>
        </nav>

        <div className="px-6 pb-8 pt-5 border-t border-slate-100 flex flex-col gap-4 bg-slate-50/80">
          <button
            onClick={() => {
              const newLocale = language === 'en' ? 'ar' : 'en';
              toggleLanguage();
              posthog?.capture('language_changed', { new_locale: newLocale });
              setMobileOpen(false);
            }}
            className="flex items-center gap-2 text-xs font-bold font-enHeading text-slate-700 hover:text-brand-accent transition-colors uppercase tracking-wider py-2"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'ع' : 'En'}</span>
          </button>
          <PrimaryButton
            en="Join as Partner"
            ar="انضم كشريك"
            href="/#operator-onboard"
            onClick={() => setMobileOpen(false)}
            className="w-full justify-center py-3.5"
          />
        </div>
      </div>
    </>
  );
}
