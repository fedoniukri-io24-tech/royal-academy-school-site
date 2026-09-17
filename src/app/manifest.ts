import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: SITE.themeColor,
    lang: SITE.language,
    orientation: 'portrait-primary',
    categories: ['education'],
    icons: [
      {
        src: SITE.logo,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: SITE.logo,
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
