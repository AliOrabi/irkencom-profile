import HeroSection from '@/components/sections/HeroSection';
import ClientLogosPlaceholder from '@/components/sections/ClientLogosPlaceholder';
import CoreFeaturesSection from '@/components/sections/CoreFeaturesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import CaseStudies from '@/components/sections/CaseStudies';
import IntegrationForm from '@/components/sections/IntegrationForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogosPlaceholder />
      <CoreFeaturesSection />
      <BenefitsSection />
      <CaseStudies />
      <IntegrationForm />
    </>
  );
}

