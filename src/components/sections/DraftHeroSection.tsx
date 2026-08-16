'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons';

export default function DraftHeroSection() {
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
        {/* Dark overlay with 50% opacity */}
        <div className="absolute inset-0 bg-brand-primary/50" />
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

      {/* ── Content ───────────────────────────────────────────────── */}
      <div
        id="hero-content"
        className="max-w-[1000px] mx-auto my-auto px-6 lg:px-8 w-full flex flex-col items-center text-center relative z-10"
      >
        {/* Badge */}
        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent text-[11px] font-enHeading uppercase tracking-[0.15em] mb-8 rounded-md">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full bg-brand-accent rounded-full opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
            </span>
            <Translate en="Egypt &amp; MENA · Urban Parking Intelligence" ar="مصر ومنطقة الشرق الأوسط وشمال إفريقيا · ذكاء المواقف الحضرية" />
          </span>
        </Reveal>

        {/* H1 */}
        <Reveal delay={0.1}>
          <h1
            id="hero-headline"
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-enHeading text-text-highlight leading-[1.05] mb-6 tracking-tight"
          >
            <Translate
              en={<>Unlocking Urban<br />Potential.</>}
              ar={<>إطلاق الإمكانات الحضرية.</>}
            />
          </h1>
        </Reveal>

        {/* Subheading */}
        <Reveal delay={0.18}>
          <p className="text-base md:text-lg text-text-secondary mb-10 max-w-[600px] leading-relaxed mx-auto">
            <Translate
              en="Asset-Light infrastructure that converts idle parking spaces into trackable, automated revenue — without sensors, civil works, or hardware upgrades."
              ar="بنية تحتية مرنة الأصول تحوّل المواقف الشاغرة إلى إيرادات آلية قابلة للقياس — دون معدات، أو أعمال مدنية، أو ترقيات للأجهزة."
            />
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              en="Request a Demo"
              ar="طلب عرض توضيحي"
              href="#integration"
              aria-describedby="hero-headline"
            />
            <GhostButton
              en="See How It Works"
              ar="اكتشف كيف يعمل"
              href="#platform"
            />
          </div>
        </Reveal>

        {/* Trust line */}
        <Reveal delay={0.35}>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-[11px] font-enHeading uppercase tracking-[0.12em] text-text-secondary">
            <span className="flex items-center gap-2">
              <span className="w-4 h-px bg-brand-accent" aria-hidden="true" />
              <Translate en="0 Hardware Installs" ar="بدون أي أجهزة" />
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

      {/* ── Scroll cue ────────────────────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="mx-auto w-fit z-10 flex flex-col items-center gap-2 text-text-secondary hover:text-brand-accent transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md p-2 mt-8 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-enHeading uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full transition-transform duration-500 ease-out group-hover:translate-y-3" />
        </div>
      </button>
    </section>
  );
}
