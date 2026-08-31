import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import OperatorValue from '@/components/home/OperatorValue';
import PlatformCapabilities from '@/components/home/PlatformCapabilities';
import RevenueCalculator from '@/components/home/RevenueCalculator';
import TargetPartners from '@/components/home/TargetPartners';
import OperatorFAQ from '@/components/home/OperatorFAQ';
import OperatorOnboardingForm from '@/components/home/OperatorOnboardingForm';

export const metadata: Metadata = {
  title: 'Partner with Irken — Egypt’s Digital Parking Reservation Network | انضم لشبكة إركن',
  description:
    'Turn your car park into a high-yield business with Irken. Zero risk, zero hardware costs. Receive pre-paid advance driver reservations across Cairo and Egyptian cities.',
  openGraph: {
    title: 'Irken — Egypt’s Digital Parking Network for Operators',
    description:
      'List your parking facility on irken.eg. Transform empty off-peak bays into guaranteed pre-paid digital revenue.',
    url: 'https://irken.com.eg',
  },
};

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero: H1 + AEO Extraction Block + Primary CTAs */}
      <Hero />

      {/* 2. 4 Value Pillars: Empathy, Off-Peak Problem, Hardware Compatibility */}
      <OperatorValue />

      {/* 3. Operator Capabilities & Honest Operating Model Comparison */}
      <PlatformCapabilities />

      {/* 4. Interactive Cairo & Giza Revenue Lift Simulator */}
      <RevenueCalculator />

      {/* 5. Tailored Partner Models: Licensed Lot Operators & Commercial Asset Owners */}
      <TargetPartners />

      {/* 6. Operator FAQs: Standalone AEO Search & Citation Questions */}
      <OperatorFAQ />

      {/* 7. Operator Onboarding & Direct Lead Registration */}
      <OperatorOnboardingForm />
    </main>
  );
}
