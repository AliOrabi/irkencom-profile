'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import DashboardShowcase from '@/components/sections/DashboardShowcase';
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons';
import { usePostHog } from 'posthog-js/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const posthog = usePostHog();
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0A1118]"
      aria-labelledby="hero-headline"
    >
      {/* ── Background video & gradient ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          src="/Animate_bg-parking.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-center w-full h-full opacity-60"
        />
        {/* High-contrast dark gradient overlay for crystal clear typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118]/95 via-[#0A1118]/85 to-[#0A1118]/65" />
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, theme(colors.brand.accent) 1px, transparent 1px), linear-gradient(to bottom, theme(colors.brand.accent) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Cyan bottom edge glow */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
      </div>

      {/* ── Content grid ───────────────────────────────────────────────── */}
      <div
        id="hero-content"
        className="max-w-[1280px] mx-auto my-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10"
      >
        {/* ── Left column — copy ───────────────────────────────────────── */}
        <div className="flex flex-col items-start">
          {/* H1 */}
          <Reveal delay={0.1}>
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-enHeading text-white leading-[1.08] mb-6 tracking-tight"
            >
              <Translate
                en="Digital Transformation for the Mobility Sector."
                ar="التحول الرقمي لقطاع التنقل."
              />
            </h1>
          </Reveal>

          {/* Subheading */}
          <Reveal delay={0.18}>
            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-[560px] leading-relaxed">
              <Translate
                en="We connect existing barrier gates and cameras to an intelligent cloud operating system — turning static parking facilities into high-yield, ticketless revenue assets across Egypt & MENA."
                ar="نربط البوابات والكاميرات الحالية بنظام تشغيل سحابي ذكي — لتحويل مواقف السيارات إلى أصول رقمية عالية العائد وبدون تذاكر في مصر والشرق الأوسط."
              />
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton
                en="Calculate Your Revenue"
                ar="احسب أرباحك المحتملة"
                href="/services/parking-management/calculate"
                onClick={() => posthog?.capture('cta_clicked', { cta_name: 'Calculate Your Revenue', location: 'Hero' })}
                aria-describedby="hero-headline"
                className="shadow-lg shadow-brand-accent/20"
              />
              <GhostButton
                en="Explore Solutions"
                ar="استكشف الحلول"
                href="#solutions"
                icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
                onClick={() => posthog?.capture('cta_clicked', { cta_name: 'Explore Solutions', location: 'Hero' })}
              />
            </div>
          </Reveal>

          {/* Trust line */}
          <Reveal delay={0.35}>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-[11px] font-enHeading uppercase tracking-[0.12em] text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                <Translate en="Zero CapEx Deployment" ar="بدون نفقات رأسمالية" />
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                <Translate en="Live Dynamic Yield" ar="محرك السعة الفوري" />
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                <Translate en="MENA-Ready LPR" ar="أنظمة LPR للمنطقة" />
              </span>
            </div>
          </Reveal>
        </div>

        {/* ── Right column — dashboard visual ─────────────────────────── */}
        <div className="relative w-full hidden lg:block">
          <Reveal delay={0.3} direction="left">
            {/* Glow halo behind dashboard */}
            <div
              className="absolute -inset-6 pointer-events-none rounded-3xl"
              aria-hidden="true"
              style={{ background: 'radial-gradient(ellipse at center, rgba(86,155,170,0.2) 0%, transparent 70%)' }}
            />
            <DashboardShowcase />
          </Reveal>
        </div>
      </div>

      {/* ── Scroll cue ────────────────────────────────────────────────── */}
      <button
        onClick={() => {
          const target = document.getElementById('solutions') || document.querySelector('main');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mx-auto w-fit z-10 flex flex-col items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-full p-2 group"
        aria-label="Scroll to solutions"
      >
        <span className="text-[10px] font-enHeading uppercase tracking-[0.2em] group-hover:text-brand-accent transition-colors">Scroll</span>
        <div className="w-5 h-8 border border-slate-600 group-hover:border-brand-accent rounded-full flex justify-center p-1 transition-colors">
          <div className="w-1 h-2 bg-brand-accent rounded-full transition-transform duration-500 ease-out group-hover:translate-y-3" />
        </div>
      </button>
    </section>
  );
}
