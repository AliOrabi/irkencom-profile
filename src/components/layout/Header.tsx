'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Translate from '@/components/ui/Translate';
import { mainNav } from '@/config/navigation';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-brand-primary/95 backdrop-blur-sm border-b border-brand-secondary shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1280px] mx-auto px-8 w-full flex items-center justify-between h-16">
        <Link href="/" aria-label="Irken Solutions Home" className="flex items-center">
          <img src="/irken_logo_white.svg" alt="Irken Solutions" className="h-8 md:h-10 w-auto" />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {mainNav.map((item) => (
            <div key={item.id} className="relative group py-6">
              {item.subItems ? (
                <>
                  <a role="button" tabIndex={0} className="text-xs font-enHeading tracking-[2px] text-text-primary hover:text-brand-accent cursor-pointer uppercase transition-colors">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </a>
                  <div className="absolute top-full left-0 w-64 bg-brand-primary border border-brand-secondary p-6 hidden group-hover:flex flex-col gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    {item.subItems.map(subItem => (
                      <Link key={subItem.id} href={subItem.href || '#'} className="text-xs font-enHeading text-text-secondary hover:text-brand-accent uppercase tracking-wider transition-colors">
                        <Translate en={subItem.label.en} ar={subItem.label.ar} />
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href || '#'} className="text-xs font-enHeading tracking-[2px] text-text-primary hover:text-brand-accent cursor-pointer uppercase transition-colors">
                  <Translate en={item.label.en} ar={item.label.ar} />
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            className="text-text-secondary hover:text-brand-accent transition-colors" 
            onClick={toggleLanguage} 
            title="Toggle Language"
            aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
          </button>
          <Link href="/contact" className="inline-block px-6 py-3 bg-brand-accent/10 border border-brand-accent text-brand-accent font-enHeading text-xs uppercase tracking-[2px] hover:bg-brand-accent/20 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] transition-all">
            <Translate en="Request Integration" ar="طلب تكامل" />
          </Link>
        </div>
      </div>
    </header>
  );
}
