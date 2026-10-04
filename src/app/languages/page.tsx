import type { Metadata } from 'next';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import { PageSection } from '@/components/layout/PageSection';
import { PageEnrollmentPath } from '@/components/layout/PageEnrollmentPath';
import { LanguagesHubSchoolSection } from '@/components/languages/LanguagesHubSchoolSection';
import { FormatLinkRow } from '@/components/layout/FormatLinkRow';
import { PageProseSplit } from '@/components/layout/PageContentBlocks';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { HUB_PROSE } from '@/data/pages/editorialContent';
import { LANGUAGE_PAGES } from '@/data/pages/languages';
import { LANGUAGE_VISUALS, PAGE_HERO } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

const TITLE = 'Курси іноземних мов у Києві | Англійська, німецька, французька';
const DESCRIPTION =
  'Англійська, німецька, французька, іспанська та італійська — для дітей і дорослих. Група, індивідуально, онлайн. Royal Academy School, Київ.';

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/languages',
  keywords: [
    'курси іноземних мов Київ',
    'англійська Київ',
    'німецька мова курси',
    'французька мова Київ',
    'іспанська мова курси',
  ],
  ogImage: PAGE_HERO.languages.image,
});

export default function LanguagesHubPage() {
  const languages = Object.values(LANGUAGE_PAGES);

  return (
    <SitePage>
      <PageJsonLd
        title={TITLE}
        description={DESCRIPTION}
        path="/languages"
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Мови', path: '/languages' },
        ]}
      />
      <PageHero
        title="Яку мову"
        titleAccent="вивчати?"
        subtitle="Пʼять мов — одна школа. Оберіть мову, далі підберемо програму і формат."
        breadcrumbs={[{ label: 'Головна', href: '/' }, { label: 'Мови' }]}
        image={PAGE_HERO.languages.image}
        imageObjectPosition={PAGE_HERO.languages.objectPosition}
      />
      <div className="site-page-body site-page-body--languages-hub">
        <div className="ras-wrap site-page-stack site-languages-hub">
          <LanguagesHubSchoolSection />

          <PageSection variant="plain" revealDelay={0.02}>
            <PageProseSplit
              title={HUB_PROSE.languages.title}
              lead={HUB_PROSE.languages.lead}
              paragraphs={HUB_PROSE.languages.paragraphs}
              image={HUB_PROSE.languages.image}
              objectPosition={HUB_PROSE.languages.objectPosition}
              highlights={HUB_PROSE.languages.highlights}
            />
          </PageSection>

          <PageSection
            id="available-languages"
            title="Доступні мови"
            lead="Оберіть мову — на наступній сторінці програми, рівні CEFR, іспити та формати."
            variant="band"
            revealDelay={0.03}
          >
            <div className="site-format-stack site-format-stack--large">
              {languages.map((lang, i) => {
                const v = LANGUAGE_VISUALS[lang.slug];
                return (
                  <FormatLinkRow
                    key={lang.slug}
                    href={`/languages/${lang.slug}`}
                    title={lang.name}
                    text={lang.intro}
                    image={v?.image ?? '/school-assets/format-group.jpg'}
                    objectPosition={v?.objectPosition}
                    index={i}
                    badge={v?.flag}
                  />
                );
              })}
            </div>
          </PageSection>

          <PageEnrollmentPath revealDelay={0.05} />
        </div>
      </div>
    </SitePage>
  );
}
