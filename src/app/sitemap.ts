import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { LEGAL_PAGE_LIST } from '@/data/legalPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...LEGAL_PAGE_LIST.map((page) => ({
      url: `${SITE.url}${page.path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
  ];
}
