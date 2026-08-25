'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LocalizedLink from '@/components/ui/LocalizedLink';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import {
  ClipboardList,
  Phone,
  Zap,
  ExternalLink,
  Mail,
  MessageCircle
} from 'lucide-react';

/* ── What Happens Next — 3-step onboarding timeline ──────────────────── */
const steps = [
  {
    number: '01',
    icon: ClipboardList,
    titleEn: 'Submit Your Facility Details',
    titleAr: 'سجّل بيانات جراجك',
    descEn: 'Fill out the registration form with your facility name, location, capacity, and contact info. Takes under 2 minutes.',
    descAr: 'اكمل نموذج التسجيل ببيانات جراجك، موقعه، سعته، وبياناتك. أقل من دقيقتين.',
  },
  {
    number: '02',
    icon: Phone,
    titleEn: 'Our Team Calls You Within 2 Business Days',
    titleAr: 'فريقنا هيتصل بيك خلال يومين عمل',
    descEn: 'A dedicated onboarding specialist will contact you to verify your facility details, answer all your questions, and confirm your listing.',
    descAr: 'متخصص التأهيل بتاعنا هيراجع بياناتك، يجاوب على كل أسئلتك، ويأكد تفعيل جراجك.',
  },
  {
    number: '03',
    icon: Zap,
    titleEn: 'Your Dashboard Goes Live — Start Getting Reservations',
    titleAr: 'حسابك بيتفعّل وتبدأ تستقبل حجوزات',
    descEn: 'Your facility gets listed on irken.eg, your Operator Control Panel activates, and driver reservations begin flowing in automatically.',
    descAr: 'جراجك بيتضاف على irken.eg، لوحة تحكم المشغلين بتتفعل، والحجوزات بتبدأ تيجي تلقائياً.',
  },
];

/* ── Egyptian payment / trust logos (text badges) ─────────────────────── */
const trustBadges = [
  { label: 'Fawry', icon: '🏦' },
  { label: 'Paymob', icon: '💳' },
  { label: 'InstaPay', icon: '⚡' },
  { label: 'Meeza', icon: '🇪🇬' },
  { label: 'CIB Online', icon: '🏛️' },
];

export default function SandboxFooter() {
  return (
    <>
      {/* ── What Happens Next Strip ─────────────────────────────────────── */}
      <section
        id="what-happens-next"
        aria-labelledby="next-steps-heading"
        className="py-16 md:py-24 px-6 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto w-full">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest font-enHeading mb-4 border border-brand-accent/20">
                <Translate en="After You Submit" ar="بعد ما تسجل" />
              </span>
              <h2
                id="next-steps-heading"
                className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight mb-4 rtl:leading-[1.3]"
              >
                <Translate en="What Happens Next" ar="إيه اللي بيحصل بعدين" />
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed rtl:leading-[1.8]">
                <Translate
                  en="From submission to first driver reservation — simple, swift, and transparent."
                  ar="من التسجيل للحجز الأول — خطوات بسيطة وسريعة وواضحة."
                />
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal key={idx} delay={0.08 + idx * 0.1}>
                  <div className="group relative flex flex-col items-start p-8 sm:p-9 bg-white border border-slate-200/90 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-brand-accent/40 hover:shadow-xl transition-all duration-300 h-full">
                    {/* Step number — large ghost numeral */}
                    <span className="absolute top-5 right-6 rtl:right-auto rtl:left-6 text-6xl font-black font-enHeading text-slate-100/90 group-hover:text-brand-accent/10 transition-colors select-none pointer-events-none leading-none">
                      {step.number}
                    </span>

                    <div className="w-13 h-13 p-3 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 shrink-0 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-enHeading text-slate-900 mb-3 leading-snug rtl:leading-[1.4] relative z-10">
                      <Translate en={step.titleEn} ar={step.titleAr} />
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed rtl:leading-[1.7] relative z-10">
                      <Translate en={step.descEn} ar={step.descAr} />
                    </p>

                    {/* Connector arrow — hidden on mobile, show between cards on desktop with RTL support */}
                    {idx < 2 && (
                      <div
                        className="hidden md:flex absolute top-1/2 -right-4 rtl:-right-auto rtl:-left-4 -translate-y-1/2 w-8 h-8 items-center justify-center z-20 pointer-events-none rtl:rotate-180"
                        aria-hidden="true"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-accent opacity-50">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Payment trust bar */}
          <Reveal delay={0.3}>
            <div className="mt-14 pt-8 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-enHeading">
                <Translate en="Secure Payments via" ar="دفع آمن عبر" />
              </span>
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm hover:border-brand-accent/30 hover:shadow transition-all duration-200"
                >
                  <span className="text-base">{badge.icon}</span>
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dark Footer ─────────────────────────────────────────────────── */}
      <footer
        role="contentinfo"
        className="bg-[#0F172A] text-white py-10 px-6 border-t border-slate-800"
      >
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">

            {/* Logo + tagline */}
            <div className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left rtl:lg:text-right">
              <LocalizedLink href="/sandbox" aria-label="Irken Solutions — back to top">
                <Image
                  src="/irken-logo-ligth.png"
                  alt="Irken Solutions"
                  width={120}
                  height={32}
                  className="h-7 w-auto brightness-[10] opacity-90"
                />
              </LocalizedLink>
              <p className="text-xs text-slate-400 max-w-[220px] leading-relaxed rtl:leading-[1.7]">
                <Translate
                  en="Egypt's Digital Parking Reservation Network"
                  ar="شبكة حجز مواقف السيارات الرقمية في مصر"
                />
              </p>
            </div>

            {/* Quick links */}
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold font-enHeading text-slate-400 uppercase tracking-wider">
              <Link href="/privacy" className="hover:text-white transition-colors">
                <Translate en="Privacy Policy" ar="سياسة الخصوصية" />
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                <Translate en="Terms of Service" ar="شروط الخدمة" />
              </Link>
              <a href="#hero" className="hover:text-white transition-colors">
                <Translate en="Home" ar="الرئيسية" />
              </a>
              <a href="#why-operators" className="hover:text-white transition-colors">
                <Translate en="Why Irken" ar="لماذا إركن" />
              </a>
              <a href="#yield-calculator" className="hover:text-white transition-colors">
                <Translate en="Yield Calculator" ar="حاسبة العائد" />
              </a>
              <a href="#operator-onboard" className="hover:text-white transition-colors">
                <Translate en="Join as Partner" ar="انضم كشريك" />
              </a>
              <a
                href="https://irken.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent text-brand-accent flex items-center gap-1 transition-colors"
              >
                irken.eg <ExternalLink className="w-3 h-3" />
              </a>
            </nav>

            {/* Contact strip */}
            <div className="flex flex-col items-center lg:items-end gap-3">
              <a
                href="mailto:info@irken.com.eg"
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-accent" />
                info@irken.com.eg
              </a>
              <a
                href="https://wa.me/201222200479"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp: +20 1222 200 479
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
            <span>
              © {new Date().getFullYear()} Irken Solutions. <Translate en="All rights reserved." ar="جميع الحقوق محفوظة." />
            </span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-400 transition-colors">
                <Translate en="Privacy Policy" ar="سياسة الخصوصية" />
              </Link>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">
                <Translate en="Terms of Service" ar="شروط الخدمة" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
