import React from 'react';
import type { Metadata } from 'next';
import SandboxHeader from '@/components/sandbox/SandboxHeader';
import SandboxHero from '@/components/sandbox/SandboxHero';
import SandboxOperatorValue from '@/components/sandbox/SandboxOperatorValue';
import SandboxDualProducts from '@/components/sandbox/SandboxDualProducts';
import SandboxRevenueLiftCalculator from '@/components/sandbox/SandboxRevenueLiftCalculator';
import SandboxTargetAudiences from '@/components/sandbox/SandboxTargetAudiences';
import SandboxOperatorForm from '@/components/sandbox/SandboxOperatorForm';
import SandboxFooter from '@/components/sandbox/SandboxFooter';

export const metadata: Metadata = {
  title: 'Partner with Irken — List Your Parking Facility | إركن للمشغلين',
  description:
    'Join Egypt\'s digital parking reservation network. Zero setup fees, zero hardware, and 24/7 support. List your garage or lot on irken.eg and start receiving pre-paid driver reservations today.',
  openGraph: {
    title: 'List Your Parking Facility on irken.eg — Free Partner Program',
    description:
      'Zero risk. Zero costs. Irken brings you pre-paid drivers already searching for parking near you. Register your facility in under 2 minutes.',
    url: 'https://irken.com.eg/sandbox',
    siteName: 'Irken Solutions',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Irken Operator Partner Program' }],
    locale: 'ar_EG',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'List Your Parking on irken.eg — Partner Program',
    description: 'Zero risk. Zero costs. Join Egypt\'s digital parking network.',
    images: ['/opengraph-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function SandboxPage() {
  return (
    <div className="relative bg-white min-h-screen selection:bg-brand-accent/20 selection:text-brand-accent">
      {/* ── Sandbox Dedicated Frosted Glass Navigation Header ─────────── */}
      <SandboxHeader />

      {/* ── Main Landing Flow ────────────────────────────────────────── */}
      <main>
        {/* 1. Hero: Demand Generation & Digital Reservation Network */}
        <SandboxHero />

        {/* 2. Operator Core Value: Fill Empty Bays, Map Discoverability, Advance Cashflow */}
        <SandboxOperatorValue />

        {/* 3. Dual Products: Operator Control Panel (Free vs Pro) + Driver App irken.eg */}
        <SandboxDualProducts />

        {/* 4. Interactive Operator Yield & Revenue Lift Simulator */}
        <SandboxRevenueLiftCalculator />

        {/* 5. Target Audiences: Licensed Operators, Parking Investors, Valet Pros */}
        <SandboxTargetAudiences />

        {/* 6. Operator Onboarding & Facility Listing Form */}
        <SandboxOperatorForm />
      </main>

      {/* ── Page Closure: What Happens Next + Footer ─────────────────── */}
      <SandboxFooter />
    </div>
  );
}
