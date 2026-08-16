'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import DashboardShowcase from '@/components/sections/DashboardShowcase';
import NetworkBackground from '@/components/ui/NetworkBackground';

export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative w-full py-16 lg:py-24 bg-brand-primary overflow-hidden"
    >
      <NetworkBackground />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <Reveal direction="up" delay={0.1}>
          <div className="w-full relative flex justify-center">
            {/* Glow halo behind dashboard */}
            <div
              className="absolute -inset-6 pointer-events-none"
              aria-hidden="true"
              style={{ background: 'radial-gradient(ellipse at center, theme(colors.brand.accent) 0%, transparent 70%)', opacity: 0.08 }}
            />
            <div className="w-full max-w-5xl">
              <DashboardShowcase />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
