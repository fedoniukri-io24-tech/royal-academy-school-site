import type { Metadata } from 'next';
import { SitePage } from '@/components/layout/PageShell';
import { PageHero } from '@/components/layout/PageHero';
import Link from 'next/link';
import { PageSection } from '@/components/layout/PageSection';
import { PageGuideBlock } from '@/components/layout/PageGuideBlock';
import { PageProseSplit, PageStepBlocks } from '@/components/layout/PageContentBlocks';
import { LeadFormInline } from '@/components/lead-form/LeadFormInline';
import { PageJsonLd } from '@/components/seo/PageJsonLd';
import { ContactDetailsPanel } from '@/components/contacts/ContactDetailsPanel';
import { ContactMap } from '@/components/contacts/ContactMap';
import { HUB_PROSE } from '@/data/pages/editorialContent';
import { CAMPUS_NOTES, CONTACT_WORKFLOW } from '@/data/pages/sharedPageContent';
import { SITE_CONTACTS } from '@/data/siteContacts';
import { PAGE_HERO } from '@/data/pages/pageVisuals';
import { createPageMetadata } from '@/lib/seo';

const TITLE = 'Контакти мовної школи в Києві | Royal Academy School';
const DESCRIPTION =
  'Телефон, адреса, графік роботи Royal Academy School. Київ — Оболонь і Позняки. Заявка онлайн або дзвінок.';

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/contacts',
  keywords: [
    'контакти мовна школа Київ',
    'мовна школа Оболонь телефон',
    'Royal Academy School адреса',
    'записатися на курси англійської',
  ],
  ogImage: PAGE_HERO.contacts.image,
});

export default function ContactsPage() {
  return (
    <SitePage>
      <PageJsonLd
        title={TITLE}
        description={DESCRIPTION}
        path="/contacts"
        breadcrumbs={[
          { name: 'Головна', path: '/' },
          { name: 'Контакти', path: '/contacts' },
        ]}
      />
      <PageHero
        title="Контакти"
        titleAccent="та заявка"
        subtitle="Зателефонуйте, напишіть у соцмережах або заповніть форму — відповімо в робочі години."
        breadcrumbs={[{ label: 'Головна', href: '/' }, { label: 'Контакти' }]}
        image={PAGE_HERO.contacts.image}
        imageObjectPosition={PAGE_HERO.contacts.objectPosition}
      />
      <div className="site-page-body">
        <div className="ras-wrap site-page-stack">
          <PageSection variant="plain" revealDelay={0.015}>
            <PageProseSplit
              title={HUB_PROSE.contacts.title}
              paragraphs={HUB_PROSE.contacts.paragraphs}
              image={HUB_PROSE.contacts.image}
              objectPosition={HUB_PROSE.contacts.objectPosition}
              highlights={HUB_PROSE.contacts.highlights}
            />
          </PageSection>

          <PageSection
            title="Як звʼязатися"
            lead={`${SITE_CONTACTS.displayName}. ${SITE_CONTACTS.monthlyReport}`}
            revealDelay={0.02}
          >
            <div className="site-contact-split">
              <ContactDetailsPanel />
              <LeadFormInline intent="consultation" title="Залишити заявку" />
            </div>
          </PageSection>

          <PageSection
            title="Де ми знаходимось"
            lead="Офлайн-заняття на Оболоні та Позняках, онлайн — по всій Україні. Перед першим візитом узгодьте філіал із менеджером."
            variant="band"
            revealDelay={0.04}
          >
            <div className="site-location-layout">
              <div className="site-location-layout__copy">
                <PageStepBlocks steps={CAMPUS_NOTES} columns={1} />
              </div>
              <ContactMap />
            </div>
          </PageSection>

          <PageGuideBlock
            title="Що буде після заявки"
            lead="Зазвичай відповідаємо того ж дня в робочі години."
            steps={CONTACT_WORKFLOW}
            revealDelay={0.05}
            ctaHref="/about#level-test"
            ctaLabel="Про тест рівня"
          />

          <PageSection title="Корисні посилання" density="tight" revealDelay={0.06}>
            <p className="site-block__lead">
              <Link href="/programs" className="site-inline-link">Програми навчання →</Link>
              {' · '}
              <Link href="/pricing" className="site-inline-link">Ціни →</Link>
              {' · '}
              <Link href="/about" className="site-inline-link">Про школу →</Link>
            </p>
          </PageSection>
        </div>
      </div>
    </SitePage>
  );
}
