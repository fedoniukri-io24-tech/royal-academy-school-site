import type { Metadata } from 'next';
import Link from 'next/link';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import { PageSection } from '@/components/layout/PageSection';
import { PageGuideBlock } from '@/components/layout/PageGuideBlock';
import { AboutQuickNav } from '@/components/about/AboutQuickNav';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { PageWhyMockSection } from '@/components/layout/PageWhyMockSection';
import { WHY_US_PILLARS } from '@/data/homeContent';
import {
  ABOUT_APPROACH_STEPS,
  ABOUT_FAQ,
  ABOUT_INSIGHT_TOPICS,
  ABOUT_RESULT_STORIES,
  ABOUT_SPECIALIZATIONS,
  ABOUT_STATS,
  ABOUT_TEAM_POINTS,
  LEVEL_TEST_GUIDE,
  TRANSLATION_OFFERS,
} from '@/data/pages/aboutContent';
import {
  PageChipPanel,
  PageLeadPanel,
  PageProseSplit,
  PageStepBlocks,
  PageStepCards,
  PageTopicCards,
} from '@/components/layout/PageContentBlocks';
import { PageFaqList } from '@/components/layout/PageFaqList';
import { HUB_PROSE } from '@/data/pages/editorialContent';
import { PAGE_HERO } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

const TITLE = 'Про Royal Academy School | Викладачі, результати, тест рівня';
const DESCRIPTION =
  'Мовна школа в Києві (Оболонь, Позняки) та онлайн: команда, результати студентів, діагностика рівня, переклад. 15+ років. Колишня English Home School.';

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/about',
  keywords: [
    'мовна школа Київ',
    'викладачі англійської Київ',
    'тест рівня англійської',
    'переклад документів Київ',
    'Royal Academy School',
    'English Home School',
  ],
  ogImage: PAGE_HERO.about.image,
});

export default function AboutPage() {
  return (
    <SitePage>
      <PageJsonLd
        title={TITLE}
        description={DESCRIPTION}
        path="/about"
        breadcrumbs={[{ name: 'Головна', path: '/' }, { name: 'Про нас', path: '/about' }]}
        faq={[...ABOUT_FAQ]}
      />
      <PageHero
        title="Про Royal Academy"
        titleAccent="School"
        subtitle="Школа, команда, результати та додаткові послуги — оберіть розділ нижче або прокрутіть сторінку."
        breadcrumbs={[{ label: 'Головна', href: '/' }, { label: 'Про нас' }]}
        image={PAGE_HERO.about.image}
        imageObjectPosition={PAGE_HERO.about.objectPosition}
      />
      <div className="site-page-body">
        <div className="ras-wrap">
          <AboutQuickNav />
          <div className="site-page-stack">
            <PageSection id="about-school" variant="plain" revealDelay={0}>
              <PageProseSplit
                title={HUB_PROSE.about.title}
                lead={HUB_PROSE.about.lead}
                paragraphs={HUB_PROSE.about.paragraphs}
                image={HUB_PROSE.about.image}
                objectPosition={HUB_PROSE.about.objectPosition}
                highlights={HUB_PROSE.about.highlights}
              />
            </PageSection>

            <div className="site-why-mock-bleed site-why-mock-bleed--in-stack">
              <PageWhyMockSection
                id="why-us"
                title="Чому саме ми"
                pillars={WHY_US_PILLARS.map((item) => ({
                  id: item.id,
                  label: item.label,
                  description: item.description,
                }))}
                columns={4}
                moreHref="/programs"
                moreLabel="Програми навчання"
              />
            </div>

            <PageGuideBlock
              title="Як ми працюємо"
              lead="Від знайомства до видимого прогресу — без шаблонного курсу «для всіх»."
              steps={ABOUT_APPROACH_STEPS}
              revealDelay={0.05}
            />

            <PageSection
              id="team"
              title="Викладачі"
              variant="band"
              revealDelay={0.06}
              aside={
                <figure className="site-aside-photo site-aside-photo--wide">
                  <img
                    src="/school-assets/format-individual.jpg"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </figure>
              }
            >
              <PageLeadPanel>
                Професіонали з акцентом на живе мовлення. Підбір після знайомчого заняття — не
                «випадковий» викладач з розкладу.
              </PageLeadPanel>
              <PageStepCards
                steps={ABOUT_TEAM_POINTS.map((p, i) => ({
                  ...p,
                  num: String(i + 1).padStart(2, '0'),
                }))}
              />
              <PageChipPanel
                label="Спеціалізації команди"
                items={ABOUT_SPECIALIZATIONS}
                align="center"
                variant="blocks"
              />
            </PageSection>

            <PageSection id="results" title="Результати та історії" variant="band" revealDelay={0.08}>
              <ul className="site-proof-stats" aria-label="Показники школи">
                {ABOUT_STATS.map((stat) => (
                  <li key={stat.label}>
                    <span className="site-proof-stats__value">{stat.value}</span>
                    <span className="site-proof-stats__label">{stat.label}</span>
                  </li>
                ))}
              </ul>
              <div className="site-stories">
                {ABOUT_RESULT_STORIES.map((story) => (
                  <article key={story.meta} className="site-story">
                    <p className="site-story__meta">{story.meta}</p>
                    <p className="site-story__goal">
                      <span>Мета:</span> {story.goal}
                    </p>
                    <p className="site-story__format">
                      <span>Формат:</span> {story.format}
                    </p>
                    <blockquote className="site-story__quote">{story.quote}</blockquote>
                  </article>
                ))}
              </div>
              <p className="site-note">
                Цитати узагальнені за типовими кейсами — детальні історії з іменами додамо за згодою
                студентів.
              </p>
            </PageSection>

            <div id="level-test">
              <PageGuideBlock
                title="Визначити рівень"
                lead={LEVEL_TEST_GUIDE.lead}
                steps={LEVEL_TEST_GUIDE.steps}
                revealDelay={0.04}
              />
              <p className="site-guide-cta-row">
                <Link href="/level-test" className="hero-btn hero-btn--gold">
                  Пройти онлайн-тест
                </Link>
                <LeadFormTrigger intent="level-test" className="hero-btn hero-btn--primary">
                  Записатися на діагностику →
                </LeadFormTrigger>
              </p>
            </div>

            <PageSection id="translation" title="Переклад">
              <PageLeadPanel>
                Письмовий та усний переклад для бізнесу та приватних замовлень — терміни та обсяг
                узгоджуємо індивідуально.
              </PageLeadPanel>
              <PageStepBlocks
                columns={3}
                steps={TRANSLATION_OFFERS.map((o, i) => ({
                  ...o,
                  num: String(i + 1).padStart(2, '0'),
                }))}
              />
              <p className="site-guide-cta-row">
                <LeadFormTrigger intent="general" className="hero-btn hero-btn--primary">
                  Запит на переклад →
                </LeadFormTrigger>
              </p>
            </PageSection>

            <PageSection id="insights" title="Корисне" variant="band" revealDelay={0.1}>
              <PageLeadPanel>Матеріали для студентів — перші публікації готуємо.</PageLeadPanel>
              <PageTopicCards items={ABOUT_INSIGHT_TOPICS} />
            </PageSection>

            <PageSection
              title="Питання"
              lead="Відповіді перед стартом навчання — якщо лишились сумніви, напишіть через форму на сторінці контактів."
              variant="band"
              align="center"
              revealDelay={0.12}
            >
              <PageFaqList items={ABOUT_FAQ} />
            </PageSection>

          </div>
        </div>
      </div>
    </SitePage>
  );
}
