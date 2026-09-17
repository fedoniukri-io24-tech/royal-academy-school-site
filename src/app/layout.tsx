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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@300;400;500;600;700;800;900&family=Unbounded:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SkipLink />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
