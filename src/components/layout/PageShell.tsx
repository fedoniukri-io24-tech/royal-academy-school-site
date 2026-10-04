import type { ReactNode } from 'react';
import { Footer } from '@/components/sections/Footer';

type PageShellProps = {
  /** Впливає лише на стилі контенту сторінки; хедер один — у root layout (AppChrome). */
  variant?: 'landing' | 'site';
  children: ReactNode;
};

export function PageShell({ variant = 'site', children }: PageShellProps) {
  const isLanding = variant === 'landing';

  return <div className={isLanding ? 'landing-page' : 'site-page'}>{children}</div>;
}

type SitePageProps = {
  children: ReactNode;
  withFooter?: boolean;
};

export function SitePage({ children, withFooter = true }: SitePageProps) {
  return (
    <PageShell variant="site">
      <main id="main-content" className="site-page-main">{children}</main>
      {withFooter ? <Footer /> : null}
    </PageShell>
  );
}
