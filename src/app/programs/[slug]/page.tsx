import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import { PageCtaActions } from '@/components/layout/PageCtaActions';
import { ProgramPageTemplate } from '@/components/templates/ProgramPageTemplate';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { PROGRAM_PAGES, PROGRAM_SLUGS } from '@/data/pages/programs';
import { PROGRAM_VISUALS, programHeroForSlug } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROGRAM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = PROGRAM_PAGES[slug];
  if (!data) return {};
  const visual = PROGRAM_VISUALS[slug];
  const hero = programHeroForSlug(slug);

  return createPageMetadata({
    title: `${data.title} | Royal Academy School Київ`,
    description: data.metaDescription,
    path: `/programs/${slug}`,
    keywords: [data.title, 'курси мов Київ', 'Royal Academy School', visual?.tag ?? ''],
    ogImage: hero.image,
  });
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const data = PROGRAM_PAGES[slug];
  if (!data) notFound();
  const hero = programHeroForSlug(slug);

  return (
    <SitePage>
      <PageJsonLd
        title={`${data.title} | Royal Academy School`}
        description={data.metaDescription}
        path={`/programs/${slug}`}
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Програми', path: '/programs' },
          { name: data.title, path: `/programs/${slug}` },
        ]}
        faq={data.faq}
        courseName={data.title}
        courseAudience={data.audience[0]}
      />
      <PageHero
        title={data.title}
        subtitle={data.resultLine}
        breadcrumbs={[
          { label: 'Головна', href: '/' },
          { label: 'Програми', href: '/programs' },
          { label: data.title },
        ]}
        actions={<PageCtaActions />}
        image={hero.image}
        imageObjectPosition={hero.objectPosition}
      />
      <ProgramPageTemplate data={data} />
    </SitePage>
  );
}
