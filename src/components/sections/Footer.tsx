import { SITE_CONTACTS } from '@/data/siteContacts';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';

const FOOTER_NAV = [
  { href: '#programs', label: 'Програми' },
  { href: '#languages', label: 'Мови' },
  { href: '#why-us', label: 'Про нас' },
  { href: '#teachers', label: 'Викладачі' },
  { href: '#pricing', label: 'Ціни' },
  { href: '#corporate', label: 'Corporate' },
  { href: '#faq', label: 'FAQ' },
] as const;

export function Footer() {
  return (
    <footer className="ras-footer ras-bg-dark" id="contacts">
      <div className="ras-wrap">
        <div className="ras-footer-intro">
          <h2 className="ras-footer-headline">
            <span className="ras-footer-headline-main">Royal Academy</span>
            <span className="ras-footer-headline-accent">School</span>
          </h2>
          <LeadFormTrigger intent="consultation" className="ras-btn ras-btn-primary ras-footer-cta">
            Підібрати програму
          </LeadFormTrigger>
        </div>

        <div className="ras-footer-grid">
          <div className="ras-footer-brand">
            <img src="/school-assets/logo.png" alt="" className="ras-footer-logo" />
            <p>
              Мовна школа в Києві та онлайн. {SITE_CONTACTS.languagesCount} мов ·{' '}
              {SITE_CONTACTS.experienceYears} років досвіду.
            </p>
          </div>

          <div className="ras-footer-nav">
            <h4 className="ras-footer-title">Навігація</h4>
            <ul className="ras-footer-links ras-footer-links--nav">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ras-footer-contact-card">
            <h4 className="ras-footer-title light">Контакти</h4>
            <div className="ras-footer-contact">
              <p>{SITE_CONTACTS.locations}</p>
              <a
                href={SITE_CONTACTS.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_CONTACTS.address.line}
              </a>
              <a
                href={SITE_CONTACTS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ras-footer-ig-link"
              >
                {SITE_CONTACTS.instagram.handle}
              </a>
              <p className="ras-footer-contact-note">{SITE_CONTACTS.offer}</p>
            </div>

            <div className="ras-footer-requisites">
              <p className="ras-footer-requisites-title">Реквізити</p>
              <p>{SITE_CONTACTS.fop.name}</p>
              <p>ЄДРПОУ: {SITE_CONTACTS.fop.edrpou}</p>
              <p className="ras-footer-iban">IBAN: {SITE_CONTACTS.fop.iban}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ras-footer-bottom">
        <div className="ras-wrap ras-footer-bottom-inner">
          <div className="ras-footer-meta">
            <p>© {new Date().getFullYear()} Royal Academy School</p>
            <p className="ras-footer-credit">
              <span className="ras-footer-credit-label">Розроблено</span>
              <a href="https://telebots.site" target="_blank" rel="noopener noreferrer">
                telebots
              </a>
            </p>
          </div>
          <div className="ras-footer-legal">
            <a href="/polityka-konfidentsiynosti">Конфіденційність</a>
            <a href="/publichna-oferta">Оферта</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
