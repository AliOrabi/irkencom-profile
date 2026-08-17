'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import DashboardShowcase from '@/components/sections/DashboardShowcase';
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons';
import { usePostHog } from 'posthog-js/react';

export default function HeroSection() {
  const posthog = usePostHog();
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col pt-20 pb-8 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* ── Background image ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          src="/Animate_bg-parking.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-center w-full h-full"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-brand-primary/40" />
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, theme(colors.brand.accent) 1px, transparent 1px), linear-gradient(to bottom, theme(colors.brand.accent) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.1,
          }}
        />
        {/* Cyan edge glow */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-brand-accent/30" />
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-enHeading text-text-primary leading-[1.05] mb-6 tracking-tight"
            >
              <Translate
                en="Digital Transformation for the Mobility Sector."
                ar="التحول الرقمي لقطاع التنقل."
              />
            </h1>
          </Reveal>

          {/* Subheading */}
          <Reveal delay={0.18}>
            <p className="text-base md:text-lg text-text-secondary mb-10 max-w-[520px] leading-relaxed">
              <Translate
                en="Empowering enterprises with cutting-edge software solutions to modernize mobility and parking operations across Egypt and the MENA region."
                ar="تمكين الشركات بحلول برمجية متطورة لتحديث عمليات التنقل والمواقف في مصر ومنطقة الشرق الأوسط وشمال إفريقيا."
              />
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.25}>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton
                en="Calculate Your Revenue"
                ar="احسب أرباحك المحتملة"
                href="/services/parking-management/calculate"
                onClick={() => posthog?.capture('cta_clicked', { cta_name: 'Calculate Your Revenue', location: 'Hero' })}
                aria-describedby="hero-headline"
              />
              <GhostButton
                en="See How It Works"
                ar="اكتشف كيف يعمل"
                href="#platform"
                onClick={() => posthog?.capture('cta_clicked', { cta_name: 'See How It Works', location: 'Hero' })}
              />
            </div>
          </Reveal>

          {/* Trust line */}
          <Reveal delay={0.35}>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-[11px] font-enHeading uppercase tracking-[0.12em] text-text-secondary">
              <span className="flex items-center gap-2">
                <span className="w-4 h-px bg-brand-accent" aria-hidden="true" />
                <Translate en="Zero CapEx" ar="بدون نفقات رأسمالية" />
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-px bg-brand-accent" aria-hidden="true" />
                <Translate en="Live Capacity Engine" ar="محرك السعة الفوري" />
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-px bg-brand-accent" aria-hidden="true" />
                <Translate en="MENA-Ready" ar="جاهز للمنطقة العربية" />
              </span>
            </div>
          </Reveal>
        </div>

        {/* ── Right column — dashboard visual ─────────────────────────── */}
        <div className="relative w-full hidden lg:block">
          <Reveal delay={0.3} direction="left">
            {/* Glow halo behind dashboard */}
            <div
              className="absolute -inset-6 pointer-events-none"
              aria-hidden="true"
              style={{ background: 'radial-gradient(ellipse at center, theme(colors.brand.accent) 0%, transparent 70%)', opacity: 0.08 }}
            />
            <DashboardShowcase />
          </Reveal>
        </div>
      </div>

      {/* ── Scroll cue ────────────────────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="mx-auto w-fit z-10 flex flex-col items-center gap-2 text-text-secondary hover:text-brand-accent transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md p-2 mt-8 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-enHeading uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-5 h-8 border-2 border-current rounded-md flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-md transition-transform duration-500 ease-out group-hover:translate-y-3" />
        </div>
      </button>
    </section>
  );
}
