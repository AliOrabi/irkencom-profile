'use client';

import React, { useState, useEffect } from 'react';
import LocalizedLink from '@/components/ui/LocalizedLink';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Translate from '@/components/ui/Translate';
import { mainNav } from '@/config/navigation';
import { PrimaryButton } from '@/components/ui/Buttons';
import { usePostHog } from 'posthog-js/react';

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

  const navLinkClass =
    'text-[11px] font-enHeading tracking-[0.15em] text-slate-500 hover:text-brand-accent uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent';

  return (
    <>
      {/* ── Skip to content ───────────────────────────────────────────── */}
      <a
        href="#hero-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-brand-accent focus:text-brand-primary focus:font-enHeading focus:text-xs focus:uppercase focus:tracking-widest"
      >
        <Translate en="Skip to content" ar="انتقل إلى المحتوى" />
      </a>

      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-[12px] border-b border-slate-100 shadow-sm'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
        role="banner"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full flex items-center justify-between h-18 md:h-20">

          {/* ── Logo ────────────────────────────────────────────────────── */}
          <LocalizedLink href="/" aria-label="Irken Solutions — Home" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/irken-logo-ligth.png"
              alt="Irken Solutions"
              className="h-7 md:h-9 w-auto block"
            />
          </LocalizedLink>

          {/* ── Desktop nav ─────────────────────────────────────────────── */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {mainNav.map((item) => (
              <div
                key={item.id}
                className="relative group py-6"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subItems ? (
                  <>
                    <button
                      className={navLinkClass}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.id}
                    >
                      <Translate en={item.label.en} ar={item.label.ar} />
                    </button>
                    {/* Dropdown */}
                    <div
                      className={[
                        'absolute top-full left-0 w-64',
                        'bg-white border border-slate-100 shadow-lg',
                        'p-5 flex flex-col gap-4 rounded-2xl',
                        'transition-all duration-200',
                        activeDropdown === item.id
                          ? 'opacity-100 pointer-events-auto translate-y-0'
                          : 'opacity-0 pointer-events-none -translate-y-1',
                      ].join(' ')}
                      role="menu"
                    >
                      {/* Cyan top bar */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent" />
                      {item.subItems.map((sub) => (
                        <LocalizedLink
                          key={sub.id}
                          href={sub.href || '#'}
                          role="menuitem"
                          className="text-[11px] font-enHeading text-slate-500 hover:text-brand-accent uppercase tracking-[0.15em] transition-colors"
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
            {/* Socials */}
            <div className="flex items-center gap-4 border-r border-slate-200 pr-5" aria-label="Social media links">
              <a href="https://linkedin.com/company/irken-solutions" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true"><rect x="2" y="2" width="20" height="20" /><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://x.com/irken_solutions" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors" aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
            </div>
            {/* Language toggle */}
            <button
              onClick={() => {
                const newLocale = language === 'en' ? 'ar' : 'en';
                toggleLanguage();
                posthog?.capture('language_changed', { new_locale: newLocale });
              }}
              className="text-slate-500 hover:text-brand-accent transition-colors flex items-center gap-1.5 text-[11px] font-enHeading tracking-[0.15em] uppercase min-h-[44px] min-w-[44px] justify-center"
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span>{language === 'en' ? 'ع' : 'EN'}</span>
            </button>
            {/* CTA */}
            <PrimaryButton en="Request Integration" ar="طلب تكامل" href="#integration" className="py-3 text-[11px]" />
          </div>

          {/* ── Mobile hamburger ─────────────────────────────────────────── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 text-slate-900 hover:text-brand-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer overlay ────────────────────────────────────────── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'fixed inset-0 z-40 lg:hidden',
          'bg-white flex flex-col',
          'transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to right, theme(colors.brand.accent) 1px, transparent 1px), linear-gradient(to bottom, theme(colors.brand.accent) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top bar (matches header height) */}
        <div className="flex items-center justify-between px-6 h-18 md:h-20 shrink-0 border-b border-slate-100 relative z-10">
          <LocalizedLink href="/" onClick={() => setMobileOpen(false)} aria-label="Irken Solutions — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/irken-logo-ligth.png" alt="Irken Solutions" className="block h-7 md:h-9 w-auto" />
          </LocalizedLink>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-11 h-11 flex items-center justify-center text-slate-500 hover:text-brand-accent transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-8 relative z-10">
          {mainNav.map((item, i) => (
            <div key={item.id}>
              {item.subItems ? (
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-enHeading tracking-[0.15em] text-slate-400 uppercase border-b border-slate-100 pb-3">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </span>
                  {item.subItems.map((sub) => (
                    <LocalizedLink
                      key={sub.id}
                      href={sub.href || '#'}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-enHeading text-slate-900 hover:text-brand-accent transition-colors pl-4 border-l-2 border-transparent hover:border-brand-accent"
                    >
                      <Translate en={sub.label.en} ar={sub.label.ar} />
                    </LocalizedLink>
                  ))}
                </div>
              ) : (
                <LocalizedLink
                  href={item.href || '#'}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-enHeading text-slate-900 hover:text-brand-accent transition-colors block"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <Translate en={item.label.en} ar={item.label.ar} />
                </LocalizedLink>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="px-6 pb-10 pt-6 border-t border-slate-100 flex flex-col gap-4 relative z-10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                const newLocale = language === 'en' ? 'ar' : 'en';
                toggleLanguage();
                posthog?.capture('language_changed', { new_locale: newLocale });
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-enHeading text-slate-500 hover:text-brand-accent transition-colors uppercase tracking-widest min-h-[44px]"
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" />
              </svg>
              {language === 'en' ? 'عربي' : 'English'}
            </button>
            <div className="flex items-center gap-4 text-slate-400" aria-label="Social media links">
              <a href="https://linkedin.com/company/irken-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true"><rect x="2" y="2" width="20" height="20" /><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://x.com/irken_solutions" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
            </div>
          </div>
          <PrimaryButton en="Request Integration" ar="طلب تكامل" href="#integration" className="w-full justify-center py-4" />
        </div>
      </div>
    </>
  );
}
