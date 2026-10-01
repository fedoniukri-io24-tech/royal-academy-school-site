import type { Metadata, Viewport } from 'next';
import { createRootMetadata } from '@/lib/seo';
import { SITE } from '@/config/site';
import { SkipLink } from '@/components/seo/SkipLink';
import { Providers } from '@/components/lead-form/Providers';
import '../styles/global.css';
import '../styles/design-system.css';
import '../styles/sections.css';
import '../styles/responsive.css';
import '../styles/not-found.css';
import '../styles/legal-page.css';
import '../styles/lead-form.css';
import '../styles/intro-splash.css';
import '../styles/mockup-sections.css';
import '../styles/landing-mobile.css';
import '../styles/hero-landing.css';
import '../styles/landing-match.css';

export const metadata: Metadata = createRootMetadata();

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.language}>
      <body>
        <SkipLink />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
