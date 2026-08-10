import HeroSection from '@/components/sections/HeroSection';
import Ticker from '@/components/sections/Ticker';
import PlatformSection from '@/components/sections/PlatformSection';
import MobilitySection from '@/components/sections/MobilitySection';
import StatsSection from '@/components/sections/StatsSection';
import CaseStudies from '@/components/sections/CaseStudies';
import TransformationSection from '@/components/sections/TransformationSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import CompetitiveDiff from '@/components/sections/CompetitiveDiff';
import IntegrationForm from '@/components/sections/IntegrationForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <PlatformSection />
      <MobilitySection />
      <StatsSection />
      <CaseStudies />
      <TransformationSection />
      <SolutionsSection />
      <CompetitiveDiff />
      <IntegrationForm />
    </>
  );
}
