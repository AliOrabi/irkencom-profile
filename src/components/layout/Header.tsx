'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Translate from '@/components/ui/Translate';
import { mainNav } from '@/config/navigation';
import { PrimaryButton } from '@/components/ui/Buttons';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled]     = useState(false);
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
    'text-[11px] font-enHeading tracking-[0.15em] text-text-secondary hover:text-brand-accent uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent';

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
            ? 'bg-brand-primary/90 backdrop-blur-[12px] border-b border-brand-secondary shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
        role="banner"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full flex items-center justify-between h-18 md:h-20">

          {/* ── Logo ────────────────────────────────────────────────────── */}
          <Link href="/" aria-label="Irken Solutions — Home" className="flex items-center shrink-0">
            <img
              src="/newiRkenLogo.png"
              alt="Irken Solutions"
              className="h-7 md:h-9 w-auto"
            />
          </Link>

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
                      aria-label={`${item.label.en} submenu`}
                    >
                      <Translate en={item.label.en} ar={item.label.ar} />
                    </button>
                    {/* Dropdown */}
                    <div
                      className={[
                        'absolute top-full left-0 w-64',
                        'bg-brand-primary border border-brand-secondary',
                        'p-5 flex flex-col gap-4',
                        'shadow-[0_16px_40px_rgba(0,0,0,0.6)]',
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
                        <Link
                          key={sub.id}
                          href={sub.href || '#'}
                          role="menuitem"
                          className="text-[11px] font-enHeading text-text-secondary hover:text-brand-accent uppercase tracking-[0.12em] transition-colors"
                        >
                          <Translate en={sub.label.en} ar={sub.label.ar} />
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href || '#'} className={navLinkClass}>
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* ── Desktop actions ──────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="text-text-secondary hover:text-brand-accent transition-colors flex items-center gap-1.5 text-[11px] font-enHeading tracking-widest uppercase min-h-[44px] min-w-[44px] justify-center"
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>
            {/* CTA */}
            <PrimaryButton en="Request Demo" ar="طلب عرض" href="#integration" className="py-3 text-[11px]" />
          </div>

          {/* ── Mobile hamburger ─────────────────────────────────────────── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 text-text-primary hover:text-brand-accent transition-colors"
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
          'bg-brand-primary flex flex-col',
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
        <div className="flex items-center justify-between px-6 h-18 md:h-20 shrink-0 border-b border-brand-secondary relative z-10">
          <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Irken Solutions — Home">
            <img src="/newiRkenLogo.png" alt="Irken Solutions" className="h-7 md:h-9 w-auto" />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-11 h-11 flex items-center justify-center text-text-secondary hover:text-brand-accent transition-colors"
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
                  <span className="text-xs font-enHeading tracking-[0.15em] text-text-secondary uppercase border-b border-brand-secondary pb-3">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </span>
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.id}
                      href={sub.href || '#'}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-enHeading text-text-primary hover:text-brand-accent transition-colors pl-4 border-l-2 border-transparent hover:border-brand-accent"
                    >
                      <Translate en={sub.label.en} ar={sub.label.ar} />
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href || '#'}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-enHeading text-text-primary hover:text-brand-accent transition-colors block"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <Translate en={item.label.en} ar={item.label.ar} />
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="px-6 pb-10 pt-6 border-t border-brand-secondary flex flex-col gap-4 relative z-10">
          <button
            onClick={() => { toggleLanguage(); setMobileOpen(false); }}
            className="flex items-center gap-2 text-sm font-enHeading text-text-secondary hover:text-brand-accent transition-colors uppercase tracking-widest min-h-[44px]"
            aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" />
            </svg>
            {language === 'en' ? 'عربي' : 'English'}
          </button>
          <PrimaryButton en="Request Demo" ar="طلب عرض" href="#integration" className="w-full justify-center py-4" />
        </div>
      </div>
    </>
  );
}
