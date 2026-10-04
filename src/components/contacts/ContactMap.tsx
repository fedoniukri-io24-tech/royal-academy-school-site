import { SITE_CONTACTS } from '@/data/siteContacts';

type ContactMapProps = {
  title?: string;
};

export function ContactMap({ title = 'Карта — основна філія' }: ContactMapProps) {
  const { address } = SITE_CONTACTS;

  return (
    <figure className="site-contact-map">
      <div className="site-contact-map__frame">
        <iframe
          title={title}
          src={address.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <figcaption className="site-contact-map__caption">
        <span>{address.full}</span>
        <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer" className="site-inline-link">
          Відкрити в Google Maps →
        </a>
      </figcaption>
    </figure>
  );
}
