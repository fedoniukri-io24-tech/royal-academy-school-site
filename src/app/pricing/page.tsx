import type { Metadata } from 'next';
import Link from 'next/link';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import { PageSection } from '@/components/layout/PageSection';
import { PageGuideBlock } from '@/components/layout/PageGuideBlock';
import { PageChipPanel, PageProseSplit, PageStepBlocks, PageTariffGrid } from '@/components/layout/PageContentBlocks';
import { PageFaqList } from '@/components/layout/PageFaqList';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { ABOUT_PAYMENT_POINTS } from '@/data/pages/aboutContent';
import { HUB_PROSE } from '@/data/pages/editorialContent';
import {
  PRICING_FACTORS,
  PRICING_FAQ,
  PRICING_INCLUDES,
  PRICING_NOT_INCLUDED,
} from '@/data/pages/sharedPageContent';
import { PAGE_HERO } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

const TITLE = 'Ціни на курси мов у Києві | Royal Academy School';
const DESCRIPTION =
  'Орієнтовна вартість групових і індивідуальних занять. Corporate — індивідуальний розрахунок. Платформа оплачується окремо. Київ та онлайн.';

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/pricing',
  keywords: [
    'ціни курси англійської Київ',
    'вартість групових занять',
    'індивідуальні уроки англійської ціна',
    'корпоративна англійська вартість',
  ],
  ogImage: PAGE_HERO.pricing.image,
});

const TIERS = [
  {
    name: 'Групове навчання',
    detail: '8 занять / міс. · група до 8 · 2× на тиждень · 60–90 хв',
    price: 'від 4500 грн',
  },
  {
    name: 'Індивідуально',
    detail: '8 занять / міс. · 60 або 90 хв · персональний план',
    price: 'від 5500 грн',
  },
  {
    name: 'Corporate',
    detail: 'команда від 3 осіб · офіс або онлайн · звіти для HR',
    price: 'за запитом',
  },
  {
    name: 'Навчальна платформа',
    detail: 'відео, вправи, словник · не входить у курс',
    price: '1500 грн / пів року',
  },
];

export default function PricingPage() {
  return (
    <SitePage>
      <PageJsonLd
        title={TITLE}
        description={DESCRIPTION}
        path="/pricing"
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Ціни', path: '/pricing' },
        ]}
        faq={[...PRICING_FAQ]}
      />
      <PageHero
        title="Ціни"
        titleAccent="та формати"
        subtitle="Стартові тарифи. Точна сума залежить від мови, рівня, інтенсивності та формату — розрахуємо після діагностики."
        breadcrumbs={[{ label: 'Головна', href: '/' }, { label: 'Ціни' }]}
        image={PAGE_HERO.pricing.image}
        imageObjectPosition={PAGE_HERO.pricing.objectPosition}
      />
      <div className="site-page-body">
        <div className="ras-wrap site-page-stack">
          <PageSection variant="plain" revealDelay={0.015}>
            <PageProseSplit
              title={HUB_PROSE.pricing.title}
              lead={HUB_PROSE.pricing.lead}
              paragraphs={HUB_PROSE.pricing.paragraphs}
              image={HUB_PROSE.pricing.image}
              objectPosition={HUB_PROSE.pricing.objectPosition}
              highlights={HUB_PROSE.pricing.highlights}
            />
          </PageSection>

          <PageSection
            title="Орієнтовні тарифи"
            lead="Усі ціни — за пакет на місяць, якщо не вказано інше. Актуальність уточнюйте у менеджера."
            revealDelay={0.02}
          >
            <PageTariffGrid items={TIERS} />
            <p className="site-note" style={{ marginTop: 24 }}>
              Speaking clubs та підготовка до іспитів — індивідуальний розрахунок після{' '}
              <Link href="/level-test" className="site-inline-link">діагностики рівня</Link>.
            </p>
          </PageSection>

          <PageSection title="Що входить у вартість курсу" variant="band" revealDelay={0.03}>
            <PageChipPanel label="У базовому пакеті" items={PRICING_INCLUDES} />
            <PageChipPanel label="Оплачується окремо" items={PRICING_NOT_INCLUDED} />
          </PageSection>

          <PageSection
            title="Від чого залежить ціна"
            lead="Одна й та сама мова може коштувати по-різному — залежно від вашої мети та графіка."
            variant="plain"
            revealDelay={0.04}
          >
            <PageStepBlocks steps={PRICING_FACTORS} columns={2} />
          </PageSection>

          <PageGuideBlock
            title="Оплата"
            lead="Пакетна оплата вигідніша. Точну суму підтверджуємо після діагностики та вибору програми."
            steps={[...ABOUT_PAYMENT_POINTS]}
            ctaHref="/programs"
            ctaLabel="Усі програми"
            revealDelay={0.05}
          />

          <PageSection
            title="Питання про ціни"
            lead="Тарифи, платформа, знижки та corporate — коротко нижче."
            variant="band"
            align="center"
            revealDelay={0.06}
          >
            <PageFaqList items={PRICING_FAQ} />
          </PageSection>

          <p className="site-block__lead">
            <Link href="/contacts" className="site-inline-link">Запитати розрахунок у менеджера →</Link>
          </p>

        </div>
      </div>
    </SitePage>
  );
}
