import Link from 'next/link';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import { PageSection } from '@/components/layout/PageSection';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { PAGE_HERO } from '@/data/pages/pageVisuals';

type ComingSoonPageProps = {
  title: string;
  titleAccent?: string;
  subtitle: string;
  pathLabel: string;
};

export function ComingSoonPage({ title, titleAccent, subtitle, pathLabel }: ComingSoonPageProps) {
  return (
    <SitePage>
      <PageHero
        title={title}
        titleAccent={titleAccent}
        subtitle={subtitle}
        breadcrumbs={[{ label: 'Головна', href: '/' }, { label: pathLabel }]}
        image={PAGE_HERO.programs.image}
        imageObjectPosition={PAGE_HERO.programs.objectPosition}
      />
      <div className="site-page-body">
        <div className="ras-wrap site-page-stack">
          <PageSection
            title="Скоро відкриємо набір"
            lead="Залиште заявку — менеджер повідомить про старт і підбере формат під вашу мету."
            variant="plain"
            align="center"
          >
            <div className="site-guide-cta-row" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <LeadFormTrigger intent="consultation" className="hero-btn hero-btn--primary">
                Записатися →
              </LeadFormTrigger>
              <Link href="/contacts" className="hero-btn hero-btn--ghost">
                Контакти →
              </Link>
            </div>
          </PageSection>
        </div>
      </div>
    </SitePage>
  );
}
