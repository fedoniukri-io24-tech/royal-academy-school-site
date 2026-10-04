import type { Metadata } from 'next';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import { DirectionLinkCard } from '@/components/layout/PageHubCard';
import { SiteBlockReveal } from '@/components/layout/SiteBlockReveal';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { PROGRAM_PAGES } from '@/data/pages/programs';
import { PageSection } from '@/components/layout/PageSection';
import { PageEnrollmentPath } from '@/components/layout/PageEnrollmentPath';
import { FormatLinkRow } from '@/components/layout/FormatLinkRow';
import { PageProseSplit } from '@/components/layout/PageContentBlocks';
import { HUB_PROSE } from '@/data/pages/editorialContent';
import { PROGRAM_CHOOSE_GUIDE, PROGRAM_HUB_FORMAT_ROWS } from '@/data/pages/programsHub';
import { PAGE_HERO, PROGRAM_VISUALS } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

const TITLE = 'Програми навчання мов у Києві та онлайн | Royal Academy School';
const DESCRIPTION =
  'Програми для дітей, дорослих і бізнесу: група, індивідуально, speaking clubs, підготовка до іспитів. Royal Academy School — Київ (Оболонь, Позняки) та онлайн.';

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/programs',
  keywords: [
    'програми навчання мов Київ',
    'курси англійської для дітей',
    'англійська для дорослих Київ',
    'корпоративна англійська',
    'підготовка IELTS Київ',
  ],
  ogImage: PAGE_HERO.programs.image,
});

export default function ProgramsHubPage() {
  const programs = Object.values(PROGRAM_PAGES);

  return (
    <SitePage>
      <PageJsonLd
        title={TITLE}
        description={DESCRIPTION}
        path="/programs"
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Програми', path: '/programs' },
        ]}
      />
      <PageHero
        title="Оберіть"
        titleAccent="свій напрям"
        subtitle="Діти, дорослі, бізнес або формат під вашу мету — далі підберемо розклад і викладача."
        breadcrumbs={[{ label: 'Головна', href: '/' }, { label: 'Програми' }]}
        image={PAGE_HERO.programs.image}
        imageObjectPosition={PAGE_HERO.programs.objectPosition}
      />
      <div className="site-page-body">
        <div className="ras-wrap site-page-stack">
          <PageSection variant="plain" revealDelay={0.02}>
            <PageProseSplit
              title={HUB_PROSE.programs.title}
              lead={HUB_PROSE.programs.lead}
              paragraphs={HUB_PROSE.programs.paragraphs}
              image={HUB_PROSE.programs.image}
              objectPosition={HUB_PROSE.programs.objectPosition}
              highlights={HUB_PROSE.programs.highlights}
            />
          </PageSection>

          <section className="site-directions landing-section-accent landing-section-hairline" aria-label="Усі програми">
            <SiteBlockReveal>
              <header className="directions-head">
                <div>
                  <span className="ras-landing-rule" aria-hidden="true" />
                  <h2 className="directions-title">Усі напрямки</h2>
                </div>
              </header>
              <div className="directions-grid">
                {programs.map((program) => {
                  const v = PROGRAM_VISUALS[program.slug];
                  return (
                    <DirectionLinkCard
                      key={program.slug}
                      href={`/programs/${program.slug}`}
                      tag={v?.tag ?? program.slug}
                      title={program.resultLine}
                      image={v?.image ?? '/school-assets/format-group.jpg'}
                      accent={v?.accent ?? 'gold'}
                      objectPosition={v?.objectPosition}
                    />
                  );
                })}
              </div>
            </SiteBlockReveal>
          </section>

          <PageSection
            title="Формати навчання"
            lead="Група, індивідуально, corporate та speaking clubs — одна методика, різний ритм і бюджет."
            variant="plain"
            revealDelay={0.04}
          >
            <div className="site-format-stack site-format-stack--large">
              {PROGRAM_HUB_FORMAT_ROWS.map((row, i) => {
                const v = PROGRAM_VISUALS[row.slug];
                return (
                  <FormatLinkRow
                    key={row.slug}
                    href={row.href}
                    title={row.title}
                    text={row.text}
                    image={v?.image ?? '/school-assets/format-group.jpg'}
                    objectPosition={v?.objectPosition}
                    index={i}
                  />
                );
              })}
            </div>
          </PageSection>

          <PageEnrollmentPath
            title={PROGRAM_CHOOSE_GUIDE.title}
            lead={PROGRAM_CHOOSE_GUIDE.lead}
            steps={PROGRAM_CHOOSE_GUIDE.steps}
            revealDelay={0.05}
          />
        </div>
      </div>
    </SitePage>
  );
}
