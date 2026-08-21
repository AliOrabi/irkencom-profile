import React from 'react';
import SandboxHero from '@/components/sandbox/SandboxHero';
import SandboxOperatorValue from '@/components/sandbox/SandboxOperatorValue';
import SandboxRevenueLiftCalculator from '@/components/sandbox/SandboxRevenueLiftCalculator';
import SandboxDualProducts from '@/components/sandbox/SandboxDualProducts';
import SandboxTargetAudiences from '@/components/sandbox/SandboxTargetAudiences';
import SandboxOperatorForm from '@/components/sandbox/SandboxOperatorForm';

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen selection:bg-brand-accent/20 selection:text-brand-accent">
      {/* 1. Hero: Demand Generation & Digital Reservation Network */}
      <SandboxHero />

      {/* 2. Operator Core Value: 4 Pillars of Revenue Growth & Zero CapEx */}
      <SandboxOperatorValue />

      {/* 3. Interactive Operator Yield & Revenue Lift Simulator */}
      <SandboxRevenueLiftCalculator />

      {/* 4. Dual Products: Operator Control Panel (Free vs Pro) + Driver App irken.eg */}
      <SandboxDualProducts />

      {/* 5. Target Audiences & Objection Preemption */}
      <SandboxTargetAudiences />

      {/* 6. Operator Onboarding & Facility Listing Form */}
      <SandboxOperatorForm />
    </main>
  );
}
