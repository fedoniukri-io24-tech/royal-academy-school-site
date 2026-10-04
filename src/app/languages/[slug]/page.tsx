import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import { PageCtaActions } from '@/components/layout/PageCtaActions';
import { LanguagePageTemplate } from '@/components/templates/LanguagePageTemplate';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { LANGUAGE_PAGES, LANGUAGE_SLUGS } from '@/data/pages/languages';
import { LANGUAGE_VISUALS, languageHeroForSlug } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LANGUAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = LANGUAGE_PAGES[slug];
  if (!data) return {};
  const visual = LANGUAGE_VISUALS[slug];
  const seoName = visual?.seoName ?? data.name.toLowerCase();

  return createPageMetadata({
    title: `Курси ${seoName} мови в Києві та онлайн | Royal Academy School`,
    description: data.metaDescription,
    path: `/languages/${slug}`,
    keywords: [
      `курси ${seoName} Київ`,
      `${data.name} мова онлайн`,
      'мовна школа Київ',
      'Royal Academy School',
    ],
    ogImage: languageHeroForSlug(slug).image,
  });
}

export default async function LanguagePage({ params }: PageProps) {
  const { slug } = await params;
  const data = LANGUAGE_PAGES[slug];
  if (!data) notFound();
  const visual = LANGUAGE_VISUALS[slug];
  const hero = languageHeroForSlug(slug);

  return (
    <SitePage>
      <PageJsonLd
        title={`Курси ${visual?.seoName ?? data.name} | Royal Academy School`}
        description={data.metaDescription}
        path={`/languages/${slug}`}
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Мови', path: '/languages' },
          { name: data.name, path: `/languages/${slug}` },
        ]}
        faq={data.faq}
        courseName={`Курси ${data.name.toLowerCase()} мови`}
      />
      <PageHero
        title={data.name}
        subtitle={data.intro}
        breadcrumbs={[
          { label: 'Головна', href: '/' },
          { label: 'Мови', href: '/languages' },
          { label: data.name },
        ]}
        actions={<PageCtaActions />}
        image={hero.image}
        imageObjectPosition={hero.objectPosition}
      />
      <LanguagePageTemplate data={data} />
    </SitePage>
  );
}
