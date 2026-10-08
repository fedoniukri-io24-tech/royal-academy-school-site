import Link from 'next/link';
import { FOOTER_COLUMNS, LEGAL_LINKS } from '@/config/navigation';
import { SITE_CONTACTS } from '@/data/siteContacts';

export function Footer() {
  return (
    <footer className="ras-footer-mock home-footer" id="contacts">
      <div className="ras-footer-mock-top-fade" aria-hidden="true" />
      <div className="ras-footer-mock-bg" aria-hidden="true" />
      <div className="ras-footer-mock-overlay" aria-hidden="true" />

      <div className="ras-wrap ras-footer-mock-cta-wrap">
        <div className="home-footer__brand">
          <p className="home-footer__name">ROYAL ACADEMY SCHOOL</p>
          <p className="home-footer__tag">{SITE_CONTACTS.locations}</p>
        </div>

        <nav className="site-footer-links" aria-label="Навігація в підвалі">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="site-footer-links__title">{column.title}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <ul className="ras-footer-mock-contacts">
          <li>
            <a href="tel:+380635053023">063 505-30-23</a>
          </li>
          <li>
            <a href={SITE_CONTACTS.instagram.url} target="_blank" rel="noopener noreferrer">
              {SITE_CONTACTS.instagram.handle}
            </a>
          </li>
          <li>
            <a href={SITE_CONTACTS.address.mapsUrl} target="_blank" rel="noopener noreferrer">
              {SITE_CONTACTS.address.full}
            </a>
          </li>
          <li>
            <span>Пн–Пт: 9:00 – 20:00</span>
          </li>
          <li>
            <span>{SITE_CONTACTS.fop.name}</span>
          </li>
        </ul>

        <div className="site-footer-legal">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <p className="ras-footer-mock-copy">
          © {new Date().getFullYear()} Royal Academy School
        </p>
      </div>
    </footer>
  );
}
