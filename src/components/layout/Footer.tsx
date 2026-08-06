'use client';

import React from 'react';
import Link from 'next/link';
import Translate from '@/components/ui/Translate';
import { footerNav } from '@/config/navigation';

const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/irken-solutions',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" /><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    href: 'https://x.com/irken_solutions',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary border-t border-brand-secondary" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">

        {/* ── Main grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <img src="/irken_logo_white.svg" alt="Irken Solutions" className="h-10 w-auto mb-6" />
            <p className="text-sm text-text-secondary leading-relaxed max-w-[300px] mb-6">
              <Translate
                en="A venture-building technology firm dedicated to digitizing the mobility and parking sector through asset-light infrastructure."
                ar="شركة بناء مشاريع تقنية مكرسة لرقمنة قطاع التنقل والمواقف من خلال بنية تحتية مرنة الأصول."
              />
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={`Irken Solutions on ${s.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-brand-secondary flex items-center justify-center text-text-secondary hover:border-brand-accent hover:text-brand-accent transition-all duration-200 rounded-md"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform nav */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-enHeading text-text-primary tracking-[0.2em] uppercase mb-6">
              <Translate en="Platform" ar="المنصة" />
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary" role="list">
              {footerNav.platform.map((item) => (
                <li key={item.id}>
                  <Link href={item.href || '#'} className="hover:text-brand-accent transition-colors">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate nav */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-enHeading text-text-primary tracking-[0.2em] uppercase mb-6">
              <Translate en="Corporate" ar="الشركة" />
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary" role="list">
              {footerNav.corporate.map((item) => (
                <li key={item.id}>
                  <Link href={item.href || '#'} className="hover:text-brand-accent transition-colors">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Drivers + Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-enHeading text-text-primary tracking-[0.2em] uppercase mb-6">
              <Translate en="Newsletter" ar="النشرة البريدية" />
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              <Translate en="Subscribe for the latest in urban mobility intelligence." ar="اشترك للحصول على أحدث أخبار التنقل الحضري الذكي." />
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const btn = e.currentTarget.querySelector('button');
                if (btn) btn.textContent = '✓ Subscribed';
              }}
            >
              <input
                type="email"
                required
                placeholder="work@company.eg"
                aria-label="Email address for newsletter"
                className="flex-1 min-w-0 bg-brand-secondary border border-brand-secondary text-text-primary px-4 py-2.5 text-sm font-enBody placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-accent transition-all duration-200 rounded-md"
              />
              <button
                type="submit"
                className="shrink-0 bg-transparent border border-brand-secondary text-text-secondary text-[11px] px-4 py-2.5 font-enHeading uppercase tracking-[0.15em] hover:border-brand-accent hover:text-brand-accent transition-all duration-200 min-w-[90px] rounded-md"
              >
                <Translate en="Subscribe" ar="اشتراك" />
              </button>
            </form>

            {/* irken.eg callout */}
            <div className="mt-6 border border-brand-secondary bg-brand-secondary/20 p-4 rounded-md">
              <p className="text-xs text-text-secondary mb-2">
                <Translate en="Looking for a parking spot?" ar="تبحث عن موقف سيارة؟" />
              </p>
              <a
                href="https://irken.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-enHeading uppercase tracking-[0.15em] text-brand-accent hover:underline"
              >
                Visit irken.eg ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────── */}
        <div className="pt-6 pb-8 border-t border-brand-secondary flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-text-secondary">
              <Translate en="© 2026 Irken Solutions. All rights reserved." ar="© 2026 إركن سوليوشنز. جميع الحقوق محفوظة." />
            </span>
            <span className="text-[10px] text-text-secondary/50 font-enHeading uppercase tracking-[0.1em]">
              Cairo, Egypt · MENA Region
            </span>
          </div>
          <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerNav.legal.map((item) => (
              <Link key={item.id} href={item.href || '#'} className="text-[11px] text-text-secondary hover:text-brand-accent transition-colors font-enHeading uppercase tracking-widest underline-offset-2 hover:underline">
                <Translate en={item.label.en} ar={item.label.ar} />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
