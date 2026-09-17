import Link from 'next/link';
import type { LegalPageContent } from '@/data/legalPages';
import { Header } from '@/components/Header';
import { Footer } from '@/components/sections/Footer';

type LegalPageProps = {
  content: LegalPageContent;
};

export function LegalPage({ content }: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="legal-page">
        <div className="legal-page-inner">
          <Link href="/" className="legal-page-back">
            ← На головну
          </Link>

          <h1 className="legal-page-title">{content.title}</h1>
          <p className="legal-page-updated">Останнє оновлення: {content.updatedAt}</p>
          <p className="legal-page-intro">{content.intro}</p>

          <div className="legal-page-sections">
            {content.sections.map((section) => (
              <section key={section.title} className="legal-page-section">
                <h2 className="legal-page-section-title">{section.title}</h2>
                {section.paragraphs.map((paragraph) =>
                  paragraph ? <p key={paragraph}>{paragraph}</p> : null,
                )}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="legal-page-links">
            <span>Також дивіться:</span>
            {LEGAL_PAGE_NAV.filter((page) => page.path !== content.path).map((page) => (
              <Link key={page.path} href={page.path}>
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const LEGAL_PAGE_NAV = [
  { path: '/polityka-konfidentsiynosti', label: 'Політика конфіденційності' },
  { path: '/publichna-oferta', label: 'Публічна оферта' },
  { path: '/cookies', label: 'Cookies' },
] as const;
