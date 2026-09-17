import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Programs } from '@/components/Programs';
import { LanguagesSection } from '@/components/sections/LanguagesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FormatsSection } from '@/components/sections/FormatsSection';
import { OutcomesSection } from '@/components/sections/OutcomesSection';
import { LevelsSection } from '@/components/sections/LevelsSection';
import { TeachersSection } from '@/components/sections/TeachersSection';
import { PlatformSection } from '@/components/sections/PlatformSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { StoriesSection } from '@/components/sections/StoriesSection';
import { CorporateSection } from '@/components/sections/CorporateSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';
import { IntroSplash } from '@/components/IntroSplash';

export const metadata: Metadata = createPageMetadata({
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <IntroSplash />
      <Header />
      <main id="main-content">
        <Hero />
        <Programs />
        <LanguagesSection />
        <WhyUsSection />
        <HowItWorksSection />
        <FormatsSection />
        <OutcomesSection />
        <LevelsSection />
        <TeachersSection />
        <PlatformSection />
        <StatsSection />
        <StoriesSection />
        <CorporateSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
