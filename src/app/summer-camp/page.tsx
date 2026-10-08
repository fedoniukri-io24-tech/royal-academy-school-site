import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/layout/ComingSoonPage';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { createPageMetadata } from '@/lib/seo';

const TITLE = 'Літній табір | Royal Academy School';
const DESCRIPTION =
  'Літній мовний табір Royal Academy School у Києві. Залиште заявку — повідомимо про набір.';

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/summer-camp',
  keywords: ['літній табір англійська Київ', 'мовний табір діти Київ'],
});

export default function SummerCampPage() {
  return (
    <>
      <PageJsonLd
        title={TITLE}
        description={DESCRIPTION}
        path="/summer-camp"
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Літній табір', path: '/summer-camp' },
        ]}
      />
      <ComingSoonPage
        title="Літній"
        titleAccent="табір"
        subtitle="Насичена мовна практика влітку для дітей і підлітків. Деталі набору — незабаром."
        pathLabel="Літній табір"
      />
    </>
  );
}
