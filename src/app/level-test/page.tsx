import type { Metadata } from 'next';
import { SitePage } from '@/components/layout/PageShell';
import { LevelTestQuiz } from '@/components/level-test/LevelTestQuiz';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { PAGE_HERO } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

const TITLE = 'Тест рівня англійської онлайн | Royal Academy School';
const DESCRIPTION =
  'Безкоштовний онлайн-тест рівня англійської A1–C1. Пройдіть 10 питань і дізнайтеся орієнтовний рівень.';

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/level-test',
  keywords: [
    'тест рівня англійської',
    'визначити рівень англійської онлайн',
    'CEFR тест',
    'placement test англійська',
  ],
  ogImage: PAGE_HERO.programs.image,
});

export default function LevelTestPage() {
  return (
    <SitePage>
      <PageJsonLd
        title={TITLE}
        description={DESCRIPTION}
        path="/level-test"
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Тест рівня', path: '/level-test' },
        ]}
      />
      <LevelTestQuiz />
    </SitePage>
  );
}
