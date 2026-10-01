import { SITE_CONTACTS } from '@/data/siteContacts';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';

export function Footer() {
  return (
    <footer className="ras-footer-mock" id="contacts">
      <div className="ras-footer-mock-top-fade" aria-hidden="true" />
      <div className="ras-footer-mock-bg" aria-hidden="true" />
      <div className="ras-footer-mock-overlay" aria-hidden="true" />

      <div className="ras-wrap ras-footer-mock-cta-wrap">
        <div className="ras-footer-mock-cta">
          <div className="ras-footer-mock-cta-copy">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-footer-mock-headline">
              Готові відкрити
              <br />
              нові можливості?
            </h2>
            <p className="ras-footer-mock-sub">
              Залиште заявку — і ми допоможемо обрати програму, яка підходить саме вам.
            </p>
          </div>
          <LeadFormTrigger intent="consultation" className="ras-btn ras-footer-mock-btn">
            Записатися на консультацію →
          </LeadFormTrigger>
        </div>

        <ul className="ras-footer-mock-contacts">
          <li>
            <span className="ras-footer-mock-contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path d="M8 3.5h2.2c.4 0 .8.3.9.7l.6 2.1a1 1 0 0 1-.3 1L9.8 8.6a11 11 0 0 0 5.6 5.6l1.3-1.6a1 1 0 0 1 1-.3l2.1.6c.4.1.7.5.7.9V16a2 2 0 0 1-1.2 1.8c-1.4.6-3.2.7-4.8.1A15.5 15.5 0 0 1 6.1 9.4c-.6-1.6-.5-3.4.1-4.8A2 2 0 0 1 8 3.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
              </svg>
            </span>
            <a href="tel:+380635053023">063 505-30-23</a>
          </li>
          <li>
            <span className="ras-footer-mock-contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
                <path d="M12 8v4.5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Пн–Пт: 9:00 – 20:00</span>
          </li>
          <li>
            <span className="ras-footer-mock-contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </span>
            <a href={SITE_CONTACTS.address.mapsUrl} target="_blank" rel="noopener noreferrer">
              {SITE_CONTACTS.address.city}, {SITE_CONTACTS.address.country}
            </a>
          </li>
        </ul>

        <p className="ras-footer-mock-copy">
          © {new Date().getFullYear()} Royal Academy School
        </p>
      </div>
    </footer>
  );
}
