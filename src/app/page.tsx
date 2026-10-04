import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/Hero';
import { Programs } from '@/components/Programs';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { FormatsSection } from '@/components/sections/FormatsSection';
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
          <Programs />
          <WhyUsSection />
          <FormatsSection />
        </main>
        <Footer />
      </PageShell>
    </>
  );
}
