import { SITE } from '@/config/site';
import { absoluteUrl } from '@/lib/seo';
import { JsonLd } from './JsonLd';

type BreadcrumbItem = { name: string; path: string };

type PageJsonLdProps = {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  faq?: { q: string; a: string }[];
  courseName?: string;
  courseAudience?: string;
};

export function PageJsonLd({
  title,
  description,
  path,
  breadcrumbs,
  faq,
  courseName,
  courseAudience,
}: PageJsonLdProps) {
  const url = absoluteUrl(path);
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: SITE.language,
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: { '@id': `${SITE.url}/#organization` },
    },
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  if (faq && faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  if (courseName) {
    graph.push({
      '@type': 'Course',
      '@id': `${url}#course`,
      name: courseName,
      description,
      url,
      provider: { '@id': `${SITE.url}/#organization` },
      inLanguage: SITE.language,
      ...(courseAudience
        ? {
            audience: {
              '@type': 'EducationalAudience',
              educationalRole: courseAudience,
            },
          }
        : {}),
    });
  }

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': graph,
      }}
    />
  );
}
