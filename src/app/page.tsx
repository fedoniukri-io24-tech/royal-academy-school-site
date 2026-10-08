import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/Hero';
import { ScaleSection } from '@/components/sections/ScaleSection';
import { FormatsSection } from '@/components/sections/FormatsSection';
import { LanguagesSection } from '@/components/sections/LanguagesSection';
import { LevelsSection } from '@/components/sections/LevelsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { StoriesSection } from '@/components/sections/StoriesSection';
import { TeachersSection } from '@/components/sections/TeachersSection';
import { PlatformSection } from '@/components/sections/PlatformSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = createPageMetadata({
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <PageShell variant="landing">
        <main id="main-content">
          <Hero />
          <ScaleSection />
          <FormatsSection />
          <LanguagesSection />
          <LevelsSection />
          <HowItWorksSection />
          <WhyUsSection />
          <StoriesSection />
          <TeachersSection />
          <PlatformSection />
          <FinalCTASection />
        </main>
        <Footer />
      </PageShell>
    </>
  );
}
