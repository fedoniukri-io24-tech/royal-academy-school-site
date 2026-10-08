import type { Metadata } from 'next';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import { PageSection } from '@/components/layout/PageSection';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { MARATHONS } from '@/data/pages/marathonsContent';
import { PAGE_HERO } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

const TITLE = 'Мовні марафони англійської | Royal Academy School';
const DESCRIPTION =
  '10-тижневі марафони англійської Beginner A1 та Elementary A2: уроки, speaking, перевірка куратора. Royal Academy School.';

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/marathons',
  keywords: [
    'марафон англійської',
    'марафон A1',
    'марафон A2',
    'інтенсив англійська онлайн',
    'Royal Academy School марафон',
  ],
  ogImage: PAGE_HERO.programs.image,
});

export default function MarathonsPage() {
  return (
    <SitePage>
      <PageJsonLd
        title={TITLE}
        description={DESCRIPTION}
        path="/marathons"
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Марафони', path: '/marathons' },
        ]}
      />
      <PageHero
        title="Мовні"
        titleAccent="марафони"
        subtitle="10 тижнів системи, практики й підтримки — щоб реально почати говорити англійською."
        breadcrumbs={[{ label: 'Головна', href: '/' }, { label: 'Марафони' }]}
        image={PAGE_HERO.programs.image}
        imageObjectPosition={PAGE_HERO.programs.objectPosition}
      />
      <div className="site-page-body">
        <div className="ras-wrap site-page-stack">
          <PageSection
            title="Оберіть свій рівень"
            lead="Два онлайн-марафони: для старту з нуля (A1) і для закріплення бази (A2)."
            variant="plain"
            revealDelay={0.02}
          >
            <ul className="marathon-grid">
              {MARATHONS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`marathon-card${item.featured ? ' marathon-card--featured' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure className="marathon-card__media">
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: item.objectPosition }}
                      />
                    </figure>
                    <div className="marathon-card__body">
                      <p className="marathon-card__level">{item.level}</p>
                      <h3 className="marathon-card__title">{item.title}</h3>
                      <p className="marathon-card__lead">{item.lead}</p>
                      <ul className="marathon-card__meta">
                        {item.meta.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                      <div className="marathon-card__foot">
                        <span className="marathon-card__price">{item.priceFrom}</span>
                        <span className="marathon-card__cta">До марафону →</span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </PageSection>
        </div>
      </div>
    </SitePage>
  );
}
