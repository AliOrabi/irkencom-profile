'use client';

import React, { useState } from 'react';
import LocalizedLink from '@/components/ui/LocalizedLink';
import Translate from '@/components/ui/Translate';
import { footerNav } from '@/config/navigation';
import Image from 'next/image';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 border-t border-slate-800" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">

        {/* ── Main grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 lg:py-20">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <LocalizedLink href="/" aria-label="Irken Solutions — Home" className="inline-block mb-6">
              <Image
                src="/newiRkenLogo.png"
                alt="Irken Solutions"
                width={140}
                height={36}
                className="h-8 md:h-9 w-auto block"
              />
            </LocalizedLink>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[320px] mb-8">
              <Translate
                en="Venture-building technology firm dedicated to digitizing mobility and parking operations through asset-light digital infrastructure in Egypt."
                ar="شركة بناء مشاريع تقنية متخصصة في رقمنة قطاع المواقف والتنقل الذكي عبر بنية تحتية رقمية مرنة في مصر."
              />
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              <a
                href="https://linkedin.com/company/irken-solutions"
                aria-label="Irken Solutions on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent hover:bg-brand-accent/20 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://x.com/irken_solutions"
                aria-label="Irken Solutions on X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent hover:bg-brand-accent/20 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform nav */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold font-enHeading text-white tracking-[0.16em] uppercase mb-6">
              <Translate en="Platform" ar="المنصة" />
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm" role="list">
              {footerNav.platform.map((item) => (
                <li key={item.id}>
                  <LocalizedLink href={item.href || '#'} className="hover:text-white transition-colors">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate nav */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold font-enHeading text-white tracking-[0.16em] uppercase mb-6">
              <Translate en="Corporate" ar="الشركة" />
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm" role="list">
              {footerNav.corporate.map((item) => (
                <li key={item.id}>
                  <LocalizedLink href={item.href || '#'} className="hover:text-white transition-colors">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + irken.eg */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold font-enHeading text-white tracking-[0.16em] uppercase mb-6">
              <Translate en="Stay Updated" ar="النشرة الإخبارية" />
            </h3>
            <p className="text-sm text-slate-400 mb-5">
              <Translate en="Subscribe for urban mobility intelligence and product updates in Egypt." ar="اشترك للحصول على أحدث تحليلات التنقل الحضري والتقارير في مصر." />
            </p>

            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="name@company.eg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address for newsletter"
                  className="w-full bg-slate-800/80 border border-slate-700 text-white px-4 py-3 text-sm rounded-full placeholder:text-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-xs px-5 py-3 rounded-full uppercase tracking-wider font-enHeading transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <Translate en="Subscribed" ar="تم الاشتراك" />
                  </>
                ) : (
                  <>
                    <Translate en="Join" ar="اشترك" />
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>

            {/* Consumer callout */}
            <div className="mt-8 border border-slate-800 bg-slate-800/40 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 mb-1">
                  <Translate en="Looking for daily parking?" ar="تبحث عن موقف سيارة يومي؟" />
                </p>
                <span className="text-sm font-bold text-white font-enHeading">irken.eg</span>
              </div>
              <a
                href="https://irken.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-xs font-bold font-enHeading text-brand-accent uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-all"
              >
                <span>Visit App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────── */}
        <div className="py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span>
              <Translate en="© 2026 Irken Solutions. All rights reserved." ar="© 2026 إركن سوليوشنز. جميع الحقوق محفوظة." />
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="font-enHeading uppercase tracking-wider text-[11px] text-slate-500">
              Cairo, Egypt
            </span>
          </div>
          <nav aria-label="Legal navigation" className="flex flex-wrap gap-6">
            {footerNav.legal.map((item) => (
              <LocalizedLink
                key={item.id}
                href={item.href || '#'}
                className="hover:text-brand-accent transition-colors font-enHeading uppercase tracking-wider text-[11px]"
              >
                <Translate en={item.label.en} ar={item.label.ar} />
              </LocalizedLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
