import DraftHeroSection from '@/components/sections/DraftHeroSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import Ticker from '@/components/sections/Ticker';
import PlatformSection from '@/components/sections/PlatformSection';
import MobilitySection from '@/components/sections/MobilitySection';
import StatsSection from '@/components/sections/StatsSection';
import TransformationSection from '@/components/sections/TransformationSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import CompetitiveDiff from '@/components/sections/CompetitiveDiff';
import IntegrationForm from '@/components/sections/IntegrationForm';

export default function DraftHome() {
  return (
    <>
      <DraftHeroSection />
      <ShowcaseSection />
      <Ticker />
      <PlatformSection />
      <MobilitySection />
      <StatsSection />
      <TransformationSection />
      <SolutionsSection />
      <CompetitiveDiff />
      <IntegrationForm />
    </>
  );
}
