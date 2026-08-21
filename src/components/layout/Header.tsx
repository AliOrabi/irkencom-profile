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
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: { en: string; ar: string };
  href?: string;
  subItems?: { id: string; label: { en: string; ar: string }; href: string }[];
}

const mainNav: NavItem[] = [
  {
    id: 'solutions',
    label: { en: 'Solutions', ar: 'الحلول' },
    subItems: [
      { id: 'developers', label: { en: 'For Real Estate Developers', ar: 'للمطورين العقاريين' }, href: '/services/real-estate' },
      { id: 'operators', label: { en: 'For Parking Operators', ar: 'لمشغلي المواقف' }, href: '/services/operators' },
      { id: 'municipalities', label: { en: 'For Municipalities', ar: 'للهيئات والمدن الذكية' }, href: '/services/municipalities' },
    ],
  },
  { id: 'pricing', label: { en: 'Pricing', ar: 'الأسعار' }, href: '/pricing' },
  { id: 'technology', label: { en: 'Technology', ar: 'التقنية' }, href: '/technology' },
  { id: 'about', label: { en: 'About Us', ar: 'من نحن' }, href: '/about' },
  { id: 'insights', label: { en: 'Insights', ar: 'المقالات' }, href: '/insights' },
];

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const posthog = usePostHog();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightHeader = isScrolled;
  const navLinkClass = cn(
    'text-xs font-semibold font-enHeading tracking-[0.12em] uppercase transition-colors py-1 whitespace-nowrap select-none',
    isLightHeader
      ? 'text-slate-600 hover:text-brand-accent'
      : 'text-slate-200 hover:text-white'
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
            : 'bg-transparent border-b border-transparent py-4 xl:py-5'
        )}
        role="banner"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-3">
          {/* Logo */}
          <LocalizedLink href="/" aria-label="Irken Solutions — Home" className="flex items-center shrink-0">
            {isLightHeader ? (
              <Image
                src="/irken-logo-ligth.png"
                alt="Irken Solutions"
                width={140}
                height={36}
                className="h-7 sm:h-8 md:h-9 w-auto block"
                priority
              />
            ) : (
              <Image
                src="/newiRkenLogo.png"
                alt="Irken Solutions"
                width={140}
                height={36}
                className="h-7 sm:h-8 md:h-9 w-auto block"
                priority
              />
            )}
          </LocalizedLink>

          {/* Floating Island Center Navigation */}
          <nav
            aria-label="Primary navigation"
            className={cn(
              'hidden lg:flex items-center gap-3 xl:gap-5 px-4 xl:px-6 py-2 rounded-full border transition-all duration-300 shrink-0',
              isLightHeader 
                ? 'bg-slate-50/90 border-slate-200/80 shadow-sm backdrop-blur-xl' 
                : 'bg-slate-900/60 border-white/15 shadow-2xl backdrop-blur-2xl'
            )}
          >
            {mainNav.map((item) => (
              <div
                key={item.id}
                className="relative group py-1"
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
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180 shrink-0" />
                    </button>
                    {/* Dropdown */}
                    <div
                      className={cn(
                        'absolute top-full ltr:left-0 rtl:right-0 min-w-[240px]',
                        'bg-white border border-slate-100 shadow-xl',
                        'p-3 flex flex-col gap-1.5 rounded-2xl overflow-hidden',
                        'transition-all duration-200 z-50',
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
                          className="text-xs font-enHeading text-slate-700 hover:text-brand-accent hover:bg-slate-50 px-3 py-2.5 rounded-xl uppercase tracking-[0.12em] transition-all whitespace-nowrap"
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

          {/* Actions with Network Beacon Pill */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 shrink-0">
            {/* Live Network Beacon */}
            <div className="hidden 2xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 whitespace-nowrap shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>IRKEN.EG LIVE</span>
            </div>

            {/* Language toggle */}
            <button
              onClick={() => {
                const newLocale = language === 'en' ? 'ar' : 'en';
                toggleLanguage();
                posthog?.capture('language_changed', { new_locale: newLocale });
              }}
              className={cn(
                'flex items-center gap-2 text-xs font-semibold font-enHeading tracking-[0.12em] uppercase px-3 py-2 rounded-full border transition-all cursor-pointer whitespace-nowrap shrink-0',
                isLightHeader
                  ? 'text-slate-700 border-slate-200 hover:border-brand-accent hover:text-brand-accent'
                  : 'text-slate-200 border-white/20 hover:border-white hover:text-white bg-white/5'
              )}
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* CTA */}
            <PrimaryButton 
              en="Request Integration" 
              ar="طلب تكامل" 
              href="/contact" 
              className="py-2.5 px-5 xl:px-6 text-xs shadow-lg shadow-brand-accent/20 whitespace-nowrap shrink-0" 
            />
          </div>

          {/* Mobile hamburger */}
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
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <Image
            src="/irken-logo-ligth.png"
            alt="Irken Solutions"
            width={130}
            height={32}
            className="h-7 w-auto"
          />
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:border-brand-accent cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          {mainNav.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              {item.subItems ? (
                <>
                  <div className="text-xs font-bold font-enHeading text-slate-400 uppercase tracking-widest">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </div>
                  <div className="flex flex-col gap-3 pl-3 border-l-2 border-slate-100 rtl:border-l-0 rtl:border-r-2 rtl:pr-3 rtl:pl-0 mt-1">
                    {item.subItems.map((sub) => (
                      <LocalizedLink
                        key={sub.id}
                        href={sub.href || '#'}
                        onClick={() => setMobileOpen(false)}
                        className="text-base font-medium text-slate-800 hover:text-brand-accent transition-colors py-1"
                      >
                        <Translate en={sub.label.en} ar={sub.label.ar} />
                      </LocalizedLink>
                    ))}
                  </div>
                </>
              ) : (
                <LocalizedLink
                  href={item.href || '#'}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold font-enHeading text-slate-800 hover:text-brand-accent transition-colors"
                >
                  <Translate en={item.label.en} ar={item.label.ar} />
                </LocalizedLink>
              )}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100 flex flex-col gap-4 bg-slate-50">
          <button
            onClick={() => {
              toggleLanguage();
              setMobileOpen(false);
            }}
            className="flex items-center justify-center gap-2 py-3 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold font-enHeading text-xs uppercase tracking-wider"
          >
            <Globe className="w-4 h-4 text-brand-accent" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
          
          <PrimaryButton
            en="Request Integration"
            ar="طلب تكامل"
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3.5 text-xs text-center"
          />
        </div>
      </div>
    </>
  );
}
