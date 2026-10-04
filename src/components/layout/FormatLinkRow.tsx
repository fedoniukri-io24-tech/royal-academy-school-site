import Link from 'next/link';
import { formatToneAt } from '@/data/pages/pageVisuals';

type FormatLinkRowProps = {
  href: string;
  title: string;
  text: string;
  image: string;
  index?: number;
  objectPosition?: string;
  badge?: string;
};

/** Same composition as homepage format cards — soft tint + photo blend. */
export function FormatLinkRow({
  href,
  title,
  text,
  image,
  index = 0,
  objectPosition = 'center',
  badge,
}: FormatLinkRowProps) {
  const tone = formatToneAt(index);

  return (
    <Link href={href} className={`ras-format-mock-card ras-format-mock-card--${tone} site-format-row`}>
      <div className="ras-format-mock-copy">
        {badge ? <span className="site-format-row__badge">{badge}</span> : null}
        <h3 className="ras-format-mock-title">{title}</h3>
        <p className="ras-format-mock-text">{text}</p>
        <span className="ras-format-mock-btn">
          Детальніше
          <span aria-hidden="true">→</span>
        </span>
      </div>
      <div className="ras-format-mock-visual">
        <img src={image} alt="" loading="lazy" decoding="async" style={{ objectPosition }} />
      </div>
    </Link>
  );
}
