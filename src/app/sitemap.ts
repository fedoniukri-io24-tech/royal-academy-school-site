import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { STATIC_SITE_PATHS } from '@/config/navigation';
import { LEGAL_PAGE_LIST } from '@/data/legalPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainPaths = [...new Set(STATIC_SITE_PATHS)];

  return [
    ...mainPaths.map((path) => ({
      url: `${SITE.url}${path === '/' ? '' : path}`,
      lastModified,
      changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '/' ? 1 : 0.7,
    })),
    ...LEGAL_PAGE_LIST.map((page) => ({
      url: `${SITE.url}${page.path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
  ];
}
