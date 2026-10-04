import type { Metadata } from 'next';
import { SITE } from '@/config/site';

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
  ogImage?: string;
};

export function absoluteUrl(path = ''): string {
  if (!path) return SITE.url;
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description = SITE.description,
  path = '/',
  noIndex = false,
  keywords,
  ogImage: ogImagePath,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ?? `${SITE.name} | ${SITE.tagline}`;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(ogImagePath ?? SITE.ogImage);
  const mergedKeywords = [...new Set([...(keywords ?? []), ...SITE.keywords])];

  return {
    title: pageTitle,
    description,
    keywords: mergedKeywords,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
      languages: {
        'uk-UA': canonical,
      },
    },
    openGraph: {
      type: 'website',
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    category: 'education',
  };
}

export function createRootMetadata(): Metadata {
  return {
    ...createPageMetadata(),
    applicationName: SITE.shortName,
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    icons: {
      icon: [{ url: SITE.logo, type: 'image/png' }],
      apple: [{ url: SITE.logo, type: 'image/png' }],
    },
    manifest: '/manifest.webmanifest',
    other: {
      'geo.region': 'UA-30',
      'geo.placename': SITE.contacts.address.city,
    },
  };
}
