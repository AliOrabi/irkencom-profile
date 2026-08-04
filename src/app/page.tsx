import DraftHeroSection from '@/components/sections/DraftHeroSection';
import Ticker from '@/components/sections/Ticker';
import PlatformSection from '@/components/sections/PlatformSection';
import MobilitySection from '@/components/sections/MobilitySection';
import TransformationSection from '@/components/sections/TransformationSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import CompetitiveDiff from '@/components/sections/CompetitiveDiff';
import IntegrationForm from '@/components/sections/IntegrationForm';

export default function Home() {
  return (
    <>
      <DraftHeroSection />
      <Ticker />
      <PlatformSection />
      <MobilitySection />
      <TransformationSection />
      <SolutionsSection />
      <CompetitiveDiff />
      <IntegrationForm />
    </>
  );
}
