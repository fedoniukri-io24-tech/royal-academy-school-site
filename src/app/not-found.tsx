import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = createPageMetadata({
  title: 'Сторінку не знайдено | Royal Academy School',
  description: 'Запитана сторінка не існує. Поверніться на головну Royal Academy School.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found-page">
        <div className="not-found-inner">
          <p className="not-found-code" aria-hidden="true">404</p>
          <h1 className="not-found-title">Сторінку не знайдено</h1>
          <p className="not-found-desc">
            Можливо, посилання застаріло або сторінку перемістили. Поверніться на головну та
            оберіть потрібний розділ.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="ras-btn ras-btn-primary">
              На головну
            </Link>
            <LeadFormTrigger intent="consultation" className="ras-btn ras-btn-outline-dark">
              Записатися на урок
            </LeadFormTrigger>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
