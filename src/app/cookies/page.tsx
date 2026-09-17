import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { LEGAL_PAGES } from '@/data/legalPages';
import { createPageMetadata } from '@/lib/seo';

const content = LEGAL_PAGES.cookies;

export const metadata: Metadata = createPageMetadata({
  title: `${content.title} | Royal Academy School`,
  description: content.description,
  path: content.path,
});

export default function CookiesPage() {
  return <LegalPage content={content} />;
}
