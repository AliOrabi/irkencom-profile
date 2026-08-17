'use client';

import React, { useState, useEffect } from 'react';
import LocalizedLink from '@/components/ui/LocalizedLink';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Translate from '@/components/ui/Translate';
import { mainNav } from '@/config/navigation';
import { PrimaryButton } from '@/components/ui/Buttons';
import { usePostHog } from 'posthog-js/react';
import Image from 'next/image';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const posthog = usePostHog();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  /* ── Scroll handler ─────────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close mobile on route change / resize ──────────────────────────── */
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  /* ── Lock body scroll when mobile menu open ─────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = pathname === '/' || pathname === '/en' || pathname === '/ar';
  const isLightHeader = scrolled || !isHome;

  const navLinkClass = cn(
    'text-xs font-medium font-enHeading tracking-[0.14em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent py-2',
    isLightHeader ? 'text-slate-700 hover:text-brand-accent' : 'text-slate-200 hover:text-white'
  );

  return (
    <>
      {/* ── Skip to content ───────────────────────────────────────────── */}
      <a
        href="#hero-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-brand-accent focus:text-white focus:font-enHeading focus:text-xs focus:uppercase focus:tracking-widest rounded-full"
      >
        <Translate en="Skip to content" ar="انتقل إلى المحتوى" />
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isLightHeader
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        )}
        role="banner"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full flex items-center justify-between">

          {/* ── Logo ────────────────────────────────────────────────────── */}
          <LocalizedLink href="/" aria-label="Irken Solutions — Home" className="flex items-center shrink-0">
            {isLightHeader ? (
              <Image
                src="/irken-logo-ligth.png"
                alt="Irken Solutions"
                width={140}
                height={36}
                className="h-8 md:h-9 w-auto block"
                priority
              />
            ) : (
              <Image
                src="/newiRkenLogo.png"
                alt="Irken Solutions"
                width={140}
                height={36}
                className="h-8 md:h-9 w-auto block"
                priority
              />
            )}
          </LocalizedLink>

          {/* ── Desktop nav ─────────────────────────────────────────────── */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {mainNav.map((item) => (
              <div
                key={item.id}
                className="relative group py-2"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subItems ? (
                  <>
                    <button
                      className={cn(navLinkClass, 'flex items-center gap-1 cursor-pointer')}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.id}
                    >
                      <Translate en={item.label.en} ar={item.label.ar} />
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div
                      className={cn(
                        'absolute top-full left-0 w-64',
                        'bg-white border border-slate-100 shadow-xl',
                        'p-4 flex flex-col gap-2 rounded-2xl overflow-hidden',
                        'transition-all duration-200',
                        activeDropdown === item.id
                          ? 'opacity-100 pointer-events-auto translate-y-2'
                          : 'opacity-0 pointer-events-none translate-y-0'
                      )}
                      role="menu"
                    >
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-accent" />
                      {item.subItems.map((sub) => (
                        <LocalizedLink
                          key={sub.id}
                          href={sub.href || '#'}
                          role="menuitem"
                          className="text-xs font-enHeading text-slate-700 hover:text-brand-accent hover:bg-slate-50 px-3 py-2.5 rounded-xl uppercase tracking-[0.12em] transition-all"
                        >
                          <Translate en={sub.label.en} ar={sub.label.ar} />
                        </LocalizedLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <LocalizedLink href={item.href || '#'} className={navLinkClass}>
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </LocalizedLink>
                )}
              </div>
            ))}
          </nav>

          {/* ── Desktop actions ──────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language toggle */}
            <button
              onClick={() => {
                const newLocale = language === 'en' ? 'ar' : 'en';
                toggleLanguage();
                posthog?.capture('language_changed', { new_locale: newLocale });
              }}
              className={cn(
                'flex items-center gap-2 text-xs font-semibold font-enHeading tracking-[0.14em] uppercase px-3 py-2 rounded-full border transition-all cursor-pointer',
                isLightHeader
                  ? 'text-slate-700 border-slate-200 hover:border-brand-accent hover:text-brand-accent'
                  : 'text-slate-200 border-white/20 hover:border-white hover:text-white bg-white/5'
              )}
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* CTA */}
            <PrimaryButton 
              en="Request Integration" 
              ar="طلب تكامل" 
              href="/contact" 
              className="py-2.5 px-6 text-xs shadow-none" 
            />
          </div>

          {/* ── Mobile hamburger ─────────────────────────────────────────── */}
          <button
            className={cn(
              'lg:hidden flex items-center justify-center w-11 h-11 rounded-full border transition-colors cursor-pointer',
              isLightHeader
                ? 'text-slate-900 border-slate-200 hover:border-brand-accent'
                : 'text-white border-white/20 bg-white/10 hover:border-white'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer overlay ────────────────────────────────────────── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          'bg-white flex flex-col',
          'transition-all duration-300 ease-out',
          mobileOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'
        )}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5 shrink-0 border-b border-slate-100">
          <LocalizedLink href="/" onClick={() => setMobileOpen(false)} aria-label="Irken Solutions — Home">
            <Image src="/irken-logo-ligth.png" alt="Irken Solutions" width={130} height={32} className="block h-8 w-auto" />
          </LocalizedLink>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:text-brand-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          {mainNav.map((item) => (
            <div key={item.id}>
              {item.subItems ? (
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-enHeading font-bold tracking-wider text-slate-400 uppercase">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </span>
                  <div className="flex flex-col gap-1.5 pl-3 border-l-2 border-slate-100 rtl:border-l-0 rtl:border-r-2 rtl:pr-3">
                    {item.subItems.map((sub) => (
                      <LocalizedLink
                        key={sub.id}
                        href={sub.href || '#'}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm font-medium font-enHeading text-slate-800 hover:text-brand-accent py-2 transition-colors"
                      >
                        <Translate en={sub.label.en} ar={sub.label.ar} />
                      </LocalizedLink>
                    ))}
                  </div>
                </div>
              ) : (
                <LocalizedLink
                  href={item.href || '#'}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-bold font-enHeading text-slate-900 hover:text-brand-accent transition-colors block py-1"
                >
                  <Translate en={item.label.en} ar={item.label.ar} />
                </LocalizedLink>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="px-6 pb-8 pt-5 border-t border-slate-100 flex flex-col gap-4 bg-slate-50/60">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                const newLocale = language === 'en' ? 'ar' : 'en';
                toggleLanguage();
                posthog?.capture('language_changed', { new_locale: newLocale });
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 text-xs font-bold font-enHeading text-slate-700 hover:text-brand-accent transition-colors uppercase tracking-wider py-2"
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
          <PrimaryButton 
            en="Request Integration" 
            ar="طلب تكامل" 
            href="#integration" 
            onClick={() => setMobileOpen(false)}
            className="w-full justify-center py-4" 
          />
        </div>
      </div>
    </>
  );
}
