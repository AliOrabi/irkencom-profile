import HeroSection from '@/components/sections/HeroSection';
import Ticker from '@/components/sections/Ticker';
import PlatformSection from '@/components/sections/PlatformSection';
import MobilitySection from '@/components/sections/MobilitySection';
import DualProductShowcase from '@/components/sections/DualProductShowcase';
import StatsSection from '@/components/sections/StatsSection';
import CaseStudies from '@/components/sections/CaseStudies';
import HowItWorks from '@/components/sections/HowItWorks';
import SolutionsSection from '@/components/sections/SolutionsSection';
import CompetitiveDiff from '@/components/sections/CompetitiveDiff';
import BlogPreview from '@/components/sections/BlogPreview';
import IntegrationForm from '@/components/sections/IntegrationForm';
import ClientLogosPlaceholder from '@/components/sections/ClientLogosPlaceholder';
import TestimonialsPlaceholder from '@/components/sections/TestimonialsPlaceholder';
import CertificationsPlaceholder from '@/components/sections/CertificationsPlaceholder';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <ClientLogosPlaceholder />
      <PlatformSection />
      <MobilitySection />
      <DualProductShowcase />
      <StatsSection />
      <TestimonialsPlaceholder />
      <CaseStudies />
      <HowItWorks />
      <SolutionsSection />
      <CompetitiveDiff />
      <BlogPreview />
      <CertificationsPlaceholder />
      <IntegrationForm />
    </>
  );
}

