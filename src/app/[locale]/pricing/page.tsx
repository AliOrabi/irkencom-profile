import React from 'react';
import type { Metadata } from 'next';
import PricingTable from '@/components/pricing/PricingTable';

export const metadata: Metadata = {
  title: 'Pricing | Irken - Smart Parking Solutions',
  description: 'Simple, transparent pricing for both drivers and parking operators. Find out how Irken can help you reserve spots or manage your facility.',
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-24 pb-16 bg-brand-primary min-h-screen">
      <div className="container mx-auto px-4">
        <PricingTable />
      </div>
    </main>
  );
}
