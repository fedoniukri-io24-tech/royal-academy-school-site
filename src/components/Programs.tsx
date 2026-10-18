import Link from 'next/link';
import { PROGRAM_DIRECTIONS } from '@/data/homeContent';

const TONE: Record<string, string> = {
  kids: 'gold',
  adults: 'burgundy',
  corporate: 'blue',
};

export function Programs() {
  return (
    <section className="directions landing-section-accent landing-section-hairline" id="programs">
      <div className="wrap">
        <div className="directions-head">
          <div>
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="directions-title">Оберіть свій формат навчання</h2>
          </div>
        </div>

        <div className="directions-grid">
          {PROGRAM_DIRECTIONS.map((program) => (
            <Link
              key={program.id}
              href={program.href}
              className={`direction-card direction-card--${TONE[program.id] ?? 'gold'}`}
            >
              <img className="direction-card-photo" src={program.image} alt="" loading="lazy" decoding="async" />
              <span className="direction-card-shade" aria-hidden="true" />
              <p className="direction-card-label">{program.title}</p>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
