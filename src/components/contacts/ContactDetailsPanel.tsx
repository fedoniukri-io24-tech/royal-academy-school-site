import { SITE_CONTACTS } from '@/data/siteContacts';

type ContactRow = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const ROWS: ContactRow[] = [
  {
    label: 'Телефон',
    value: '063 505-30-23',
    href: 'tel:+380635053023',
  },
  {
    label: 'Графік',
    value: 'Пн–Пт 9:00–20:00',
  },
  {
    label: 'Адреса',
    value: SITE_CONTACTS.address.full,
    href: SITE_CONTACTS.address.mapsUrl,
    external: true,
  },
  {
    label: 'Філії',
    value: SITE_CONTACTS.locations,
  },
  {
    label: 'Пропозиція',
    value: SITE_CONTACTS.offer,
  },
  {
    label: 'Instagram',
    value: SITE_CONTACTS.instagram.handle,
    href: SITE_CONTACTS.instagram.url,
    external: true,
  },
];

export function ContactDetailsPanel() {
  return (
    <div className="site-contact-panel">
      <dl className="site-contact-panel__list">
        {ROWS.map((row) => (
          <div key={row.label} className="site-contact-panel__row">
            <dt className="site-contact-panel__label">{row.label}</dt>
            <dd className="site-contact-panel__value">
              {row.href ? (
                <a
                  href={row.href}
                  {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
