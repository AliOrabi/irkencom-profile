'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LocalizedLink from '@/components/ui/LocalizedLink';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { footerNav } from '@/config/navigation';
import {
  Mail,
  ExternalLink,
  ArrowRight,
  Check,
} from 'lucide-react';

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

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 lg:py-20">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <LocalizedLink href="/" aria-label="Irken Solutions Home" className="inline-block mb-6">
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
                en="Egypt's digital parking reservation network. Transforming underutilized parking spaces into steady, asset-light digital revenue."
                ar="شبكة حجز مواقف السيارات الرقمية في مصر. تحويل المساحات غير المستغلة إلى إيرادات رقمية مضمونة بدون أجهزة إضافية."
              />
            </p>
            {/* Socials & Direct Contact */}
            <div className="flex items-center gap-3" aria-label="Social media links">
            {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/irken/"
                aria-label="Irken on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent hover:bg-brand-accent/20 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* WhatsApp — use official brand SVG, not Phone */}
              <a
                href="https://wa.me/201222200479"
                aria-label="Chat with Irken on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:border-emerald-500 hover:bg-emerald-500 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              {/* Email contact */}
              <a
                href="mailto:info@irken.com.eg"
                aria-label="Email Irken at info@irken.com.eg"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent hover:bg-brand-accent/20 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform Nav */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold font-enHeading text-white tracking-[0.16em] uppercase mb-6">
              <Translate en="Platform" ar="الشبكة" />
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm" role="list">
              {footerNav.platform.map((item) => {
                const href = item.href || '#';
                return (
                  <li key={item.id}>
                    {href.startsWith('http') ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                        <Translate en={item.label.en} ar={item.label.ar} />
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    ) : (
                      <LocalizedLink href={href} className="hover:text-white transition-colors">
                        <Translate en={item.label.en} ar={item.label.ar} />
                      </LocalizedLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Corporate Nav */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold font-enHeading text-white tracking-[0.16em] uppercase mb-6">
              <Translate en="Company" ar="الشركة" />
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
              <Translate en="Subscribe for parking market updates and digital mobility news in Egypt." ar="اشترك للحصول على أحدث مستجدات قطاع المواقف والتنقل الذكي في مصر." />
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

            {/* GDPR / consent micro-copy */}
            <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
              <Translate
                en={<>By subscribing, you agree to our <LocalizedLink href="/privacy" className="underline underline-offset-2 hover:text-brand-accent transition-colors">Privacy Policy</LocalizedLink>.</>}
                ar={<>بالاشتراك، أنت توافق على <LocalizedLink href="/privacy" className="underline underline-offset-2 hover:text-brand-accent transition-colors">سياسة الخصوصية</LocalizedLink>.</>}
              />
            </p>

            {/* Driver App Callout */}
            <div className="mt-8 border border-slate-800 bg-slate-800/40 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 mb-1">
                  <Translate en="Looking for driver app?" ar="تبحث عن تطبيق حجز المواقف للسائقين؟" />
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

        {/* Bottom Bar */}
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
