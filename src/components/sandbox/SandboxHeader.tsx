'use client';

import React, { useState, useEffect } from 'react';
import LocalizedLink from '@/components/ui/LocalizedLink';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Translate from '@/components/ui/Translate';
import { PrimaryButton } from '@/components/ui/Buttons';
import { usePostHog } from 'posthog-js/react';
import Image from 'next/image';
import { 
  Globe, 
  Menu, 
  X, 
  ChevronDown, 
  Car, 
  Building2, 
  ExternalLink,
  Users,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SandboxHeader() {
  const { language, toggleLanguage } = useLanguage();
  const posthog = usePostHog();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  /* ── Scroll & Active Section Spy ────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['why-operators', 'control-panel', 'yield-calculator', 'partnership', 'operator-onboard'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close mobile on resize ─────────────────────────────────────────── */
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  /* ── Lock body scroll when mobile drawer open ───────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const getNavLinkClass = (sectionId: string) => cn(
    'text-[11px] xl:text-xs font-semibold font-enHeading tracking-[0.06em] xl:tracking-[0.1em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent py-1.5 xl:py-2 px-2.5 xl:px-3.5 rounded-full whitespace-nowrap select-none',
    activeSection === sectionId
      ? 'bg-brand-accent/15 text-brand-accent font-bold shadow-2xs'
      : 'text-slate-700 hover:text-brand-accent hover:bg-slate-100/70'
  );

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled 
            ? 'bg-white/90 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] py-2.5 xl:py-3' 
            : 'bg-white/75 backdrop-blur-xl border-b border-slate-200/50 py-3 xl:py-3.5'
        )}
        role="banner"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">

          {/* ── Logo + Sandbox Mode Indicator ──────────────────────────── */}
          <LocalizedLink href="/sandbox" aria-label="Irken Solutions Sandbox" className="flex items-center gap-2 xl:gap-3 shrink-0 group">
            <Image
              src="/irken-logo-ligth.png"
              alt="Irken Solutions"
              width={130}
              height={34}
              className="h-7 md:h-8 w-auto block transition-transform group-hover:scale-[1.02]"
              priority
            />
            <span className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold font-enHeading bg-brand-accent/10 text-brand-accent rounded-full border border-brand-accent/20 uppercase tracking-widest whitespace-nowrap shrink-0">
              <Sparkles className="w-3 h-3 text-brand-accent" />
              <Translate en="Operator Sandbox" ar="بيئة تجربة المشغلين" />
            </span>
          </LocalizedLink>

          {/* ── Desktop Navigation Bar ─────────────────────────────────── */}
          <nav aria-label="Sandbox Primary navigation" className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            
            {/* 1. Why Irken */}
            <a href="#why-operators" className={getNavLinkClass('why-operators')}>
              <Translate en="Why Irken" ar="لماذا إركن" />
            </a>

            <a href="#control-panel" className={getNavLinkClass('control-panel')}>
              <Translate en="How It Works" ar="كيف يعمل إركن" />
            </a>

            {/* 3. Yield Calculator */}
            <a href="#yield-calculator" className={getNavLinkClass('yield-calculator')}>
              <Translate en="Yield Calculator" ar="حاسبة العائد" />
            </a>

            {/* 4. Target Audiences Flyout */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setActiveDropdown('partnership')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  getNavLinkClass('partnership'),
                  'flex items-center gap-1 cursor-pointer'
                )}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'partnership'}
              >
                <Translate en="Collaborate with us" ar="تعاون معنا" />
                <ChevronDown className={cn("w-3.5 h-3.5 opacity-60 transition-transform duration-200", activeDropdown === 'partnership' && 'rotate-180 text-brand-accent')} />
              </button>

              {/* Apple-style Translucent Flyout Card */}
              <div
                className={cn(
                  'absolute top-full ltr:left-0 rtl:right-0 w-80',
                  'bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]',
                  'p-3 rounded-3xl overflow-hidden',
                  'transition-all duration-200 ease-out',
                  activeDropdown === 'partnership'
                    ? 'opacity-100 pointer-events-auto translate-y-2'
                    : 'opacity-0 pointer-events-none translate-y-0'
                )}
                role="menu"
              >
                <div className="p-1 space-y-1">
                  <a
                    href="#partnership"
                    role="menuitem"
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-brand-accent/15 group-hover:text-brand-accent transition-colors shrink-0">
                      <Car className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-enHeading text-slate-900 group-hover:text-brand-accent uppercase tracking-wider">
                        <Translate en="Licensed Parking Operators" ar="مشغلو المواقف المعتمدون" />
                      </span>
                      <span className="text-[11px] text-slate-500 line-clamp-1">
                        <Translate en="Private & public facility managers" ar="إدارة المواقف الخاصة والعامة" />
                      </span>
                    </div>
                  </a>

                  <a
                    href="#partnership"
                    role="menuitem"
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-brand-accent/15 group-hover:text-brand-accent transition-colors shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-enHeading text-slate-900 group-hover:text-brand-accent uppercase tracking-wider">
                        <Translate en="Parking Asset Investors" ar="مستثمرو أصول المواقف" />
                      </span>
                      <span className="text-[11px] text-slate-500 line-clamp-1">
                        <Translate en="Monetize fixed underutilized real estate" ar="تسييل المساحات العقارية غير المستغلة" />
                      </span>
                    </div>
                  </a>

                  <a
                    href="#partnership"
                    role="menuitem"
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-brand-accent/15 group-hover:text-brand-accent transition-colors shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-enHeading text-slate-900 group-hover:text-brand-accent uppercase tracking-wider">
                        <Translate en="Valet & Parking Professionals" ar="محترفو إدارة الفاليه والمواقف" />
                      </span>
                      <span className="text-[11px] text-slate-500 line-clamp-1">
                        <Translate en="Digital shift tracking & audit logs" ar="إدارة الشفتات والتقارير الرقمية" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* B2C Driver Platform Badge / Link */}
            <a 
              href="https://irken.eg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-1.5 rounded-full bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent text-[11px] xl:text-xs font-bold font-enHeading uppercase tracking-wider transition-all ms-1 whitespace-nowrap shrink-0"
            >
              <span>irken.eg</span>
              <span className="hidden xl:inline text-[10px] text-slate-500 font-normal">
                (<Translate en="Driver App" ar="تطبيق السائقين" />)
              </span>
              <ExternalLink className="w-3 h-3 ms-0.5 opacity-70" />
            </a>
          </nav>

          {/* ── Desktop Actions ────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Language Toggle */}
            <button
              onClick={() => {
                const newLocale = language === 'en' ? 'ar' : 'en';
                toggleLanguage();
                posthog?.capture('language_changed', { new_locale: newLocale });
              }}
              className="flex items-center gap-1.5 xl:gap-2 text-[11px] xl:text-xs font-bold font-enHeading tracking-[0.08em] xl:tracking-[0.12em] uppercase px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-full border border-slate-200/80 bg-slate-50/60 text-slate-700 hover:border-brand-accent hover:text-brand-accent hover:bg-white transition-all cursor-pointer active:scale-95 shadow-2xs whitespace-nowrap shrink-0"
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Direct Operator Action CTA */}
            <PrimaryButton 
              en="Join as Partner" 
              ar="انضم كشريك" 
              href="#operator-onboard" 
              className="py-2 xl:py-2.5 px-4 xl:px-6 text-[11px] xl:text-xs shadow-md shadow-brand-accent/20 active:scale-[0.98] whitespace-nowrap" 
            />
          </div>

          {/* ── Mobile Hamburger ───────────────────────────────────────── */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-900 hover:border-brand-accent transition-colors cursor-pointer active:scale-95"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ──────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-50 lg:hidden bg-white/95 backdrop-blur-2xl flex flex-col transition-all duration-300 ease-out',
          mobileOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 shrink-0 border-b border-slate-100">
          <LocalizedLink href="/sandbox" onClick={() => setMobileOpen(false)}>
            <Image src="/irken-logo-ligth.png" alt="Irken Solutions" width={130} height={32} className="block h-8 w-auto" />
          </LocalizedLink>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:text-brand-accent transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
          <a
            href="#why-operators"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 transition-colors",
              activeSection === 'why-operators' ? 'bg-brand-accent/10 text-brand-accent' : 'text-slate-900'
            )}
          >
            <Translate en="Why Join as Partner" ar="لماذا تنضم كشريك" />
          </a>
          <a
            href="#control-panel"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 transition-colors",
              activeSection === 'control-panel' ? 'bg-brand-accent/10 text-brand-accent' : 'text-slate-900'
            )}
          >
            <Translate en="How It Works" ar="كيف يعمل إركن" />
          </a>
          <a
            href="#yield-calculator"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 transition-colors",
              activeSection === 'yield-calculator' ? 'bg-brand-accent/10 text-brand-accent' : 'text-slate-900'
            )}
          >
            <Translate en="Yield Lift Calculator" ar="حاسبة مضاعفة العائد" />
          </a>
          <a
            href="#partnership"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "text-base font-bold font-enHeading py-2.5 px-3 rounded-2xl border-b border-slate-100 transition-colors",
              activeSection === 'partnership' ? 'bg-brand-accent/10 text-brand-accent' : 'text-slate-900'
            )}
          >
            <Translate en="Collaborate with us" ar="تعاون معنا" />
          </a>
          <a
            href="https://irken.eg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold font-enHeading text-brand-accent py-2.5 px-3 rounded-2xl flex items-center justify-between"
          >
            <span><Translate en="Driver App (irken.eg)" ar="تطبيق السائقين (irken.eg)" /></span>
            <ExternalLink className="w-4 h-4" />
          </a>
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
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
          <PrimaryButton 
            en="Join as Partner" 
            ar="انضم كشريك" 
            href="#operator-onboard" 
            onClick={() => setMobileOpen(false)}
            className="w-full justify-center py-3.5" 
          />
        </div>
      </div>
    </>
  );
}
