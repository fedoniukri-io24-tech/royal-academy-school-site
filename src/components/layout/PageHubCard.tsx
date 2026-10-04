import Link from 'next/link';
import type { PageAccent } from '@/data/pages/pageVisuals';

type DirectionLinkCardProps = {
  href: string;
  tag: string;
  title: string;
  image: string;
  accent: PageAccent;
  objectPosition?: string;
};

/** Same composition as homepage program direction cards. */
export function DirectionLinkCard({
  href,
  tag,
  title,
  image,
  accent,
  objectPosition = 'center 18%',
}: DirectionLinkCardProps) {
  return (
    <Link href={href} className={`direction-card direction-card--${accent}`}>
      <img
        className="direction-card-photo"
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        style={{ objectPosition }}
      />
      <span className="direction-card-shade" aria-hidden="true" />
      <p className="direction-card-label">{tag}</p>
      <span className="direction-card-foot">
        <p className="direction-card-title">{title}</p>
        <span className="direction-card-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path
              d="M5 12h12M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </Link>
  );
}
