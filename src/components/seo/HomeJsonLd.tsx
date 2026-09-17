import { FAQ } from '@/data/homeContent';
import { SITE } from '@/config/site';
import { absoluteUrl } from '@/lib/seo';
import { JsonLd } from './JsonLd';

export function HomeJsonLd() {
  const organization = {
    '@type': ['EducationalOrganization', 'LanguageSchool'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.formerName,
    description: SITE.description,
    url: SITE.url,
    image: absoluteUrl(SITE.logo),
    logo: absoluteUrl(SITE.logo),
    inLanguage: SITE.language,
    areaServed: ['Київ', 'Україна', 'Онлайн'],
    knowsAbout: SITE.languages,
    sameAs: [SITE.contacts.instagram.url],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.contacts.address.line,
      addressLocality: SITE.contacts.address.city,
      postalCode: SITE.contacts.address.postalCode,
      addressCountry: 'UA',
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { '@id': `${SITE.url}/#organization` },
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [organization, website, faqPage],
      }}
    />
  );
}
