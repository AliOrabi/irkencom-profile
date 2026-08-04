'use client';

import React from 'react';
import Link from 'next/link';
import Translate from '@/components/ui/Translate';
import { footerNav } from '@/config/navigation';
export default function Footer() {
  return (
    <footer className="bg-brand-primary border-t border-brand-secondary py-16">
      <div className="max-w-[1280px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

          <div className="lg:col-span-1">
            <img src="/irken_logo_white.svg" alt="Irken Solutions Logo" className="h-14 w-auto mb-6" />
            <p className="text-sm text-text-secondary leading-relaxed max-w-[280px]">
              <Translate
                en="A venture-building technology firm dedicated to digitizing the mobility and parking sector through asset-light infrastructure."
                ar="شركة بناء مشاريع تقنية مكرسة لرقمنة قطاع التنقل والمواقف من خلال بنية تحتية مرنة الأصول."
              />
            </p>
          </div>

          <div>
            <h4 className="text-sm font-enHeading text-text-primary tracking-widest uppercase mb-6">
              <Translate en="Platform" ar="المنصة" />
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              {footerNav.platform.map(item => (
                <li key={item.id}>
                  <Link href={item.href || '#'} className="hover:text-brand-accent transition-colors">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="company">
            <h4 className="text-sm font-enHeading text-text-primary tracking-widest uppercase mb-6">
              <Translate en="Corporate" ar="الشركة" />
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              {footerNav.corporate.map(item => (
                <li key={item.id}>
                  <Link href={item.href || '#'} className="hover:text-brand-accent transition-colors">
                    <Translate en={item.label.en} ar={item.label.ar} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-enHeading text-text-primary tracking-widest uppercase mb-6">
              <Translate en="For Drivers" ar="للسائقين" />
            </h4>
            <div className="border border-brand-secondary bg-brand-primary/50 p-0">
              <p className="text-sm text-text-primary mb-4">
                <Translate en="Looking for a parking Lot?" ar="تبحث عن مساحة للركن؟" />
              </p>
              <a href="https://irken.eg" className="inline-block px-4 py-2 border border-brand-secondary text-brand-accent text-xs font-enHeading uppercase tracking-widest hover:border-brand-accent hover:bg-brand-accent/10 transition-all">
                Visit irken.eg ↗
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-enHeading text-text-primary tracking-widest uppercase mb-6">
              <Translate en="Newsletter" ar="النشرة البريدية" />
            </h4>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-text-secondary">
                <Translate en="Subscribe for the latest in urban mobility." ar="اشترك للحصول على أحدث أخبار التنقل الحضري." />
              </p>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector('button');
                  if (btn) btn.innerHTML = 'Subscribed!';
                }}
              >
                <input
                  type="email"
                  className="w-full bg-brand-primary border border-brand-secondary text-text-primary text-sm p-3 focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Email Address"
                  required
                />
                <button type="submit" className="shrink-0 bg-brand-secondary/20 border border-brand-secondary text-text-primary text-sm px-4 py-3 font-enHeading uppercase tracking-widest hover:bg-brand-accent/10 hover:border-brand-accent hover:text-brand-accent transition-all">
                  <Translate en="Subscribe" ar="اشتراك" />
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-secondary flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <div className="flex flex-col gap-2">
            <span>
              <Translate en="© 2026 Irken Solutions. All rights reserved." ar="© 2026 إركن سوليوشنز. جميع الحقوق محفوظة." />
            </span>
            <span className="opacity-60 text-[10px]">
              <Translate
                en="TRADEMARK NOTICE: 'Irken Solutions' (B2B) and 'irken.eg' (Consumer) are separate intellectual properties."
                ar="إشعار العلامة التجارية: 'إركن سوليوشنز' للشركات وتطبيق 'irken.eg' للمستهلكين هي ملكيات فكرية منفصلة."
              />
            </span>
          </div>
          <div className="flex gap-6">
            {footerNav.legal.map(item => (
              <Link key={item.id} href={item.href || '#'} className="hover:text-brand-accent transition-colors underline">
                <Translate en={item.label.en} ar={item.label.ar} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
