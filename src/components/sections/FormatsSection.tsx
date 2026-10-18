'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FORMAT_FLIP_CARDS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

const TONE: Record<string, string> = {
  kids: 'gold',
  adults: 'burgundy',
  corporate: 'blue',
};

export function FormatsSection() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section className="directions landing-section-accent landing-section-hairline" id="formats">
      <div className="ras-wrap">
        <header className="directions-head ras-mock-head ras-mock-head--center">
          <span className="ras-landing-rule" aria-hidden="true" />
          <h2 className="directions-title ras-mock-head__title">Оберіть свій формат навчання</h2>
        </header>

        <div className="directions-grid">
          {FORMAT_FLIP_CARDS.map((card, i) => {
            const isFlipped = flipped === card.id;
            const tone = TONE[card.id] ?? 'gold';

            return (
              <SectionReveal key={card.id} delay={i * 0.04}>
                <div
                  className={`direction-flip home-flip${isFlipped ? ' is-flipped' : ''}`}
                >
                  <div className="direction-flip__inner home-flip__inner">
                    <button
                      type="button"
                      className={`direction-card direction-card--${tone} home-flip__face home-flip__face--front`}
                      onClick={() => setFlipped(card.id)}
                      aria-expanded={isFlipped}
                      aria-label={`${card.title} — показати формати`}
                    >
                      <img
                        className="direction-card-photo"
                        src={card.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="direction-card-shade" aria-hidden="true" />
                      <p className="direction-card-label">{card.title}</p>
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
                    </button>

                    <div
                      className={`direction-flip__back home-flip__face home-flip__face--back direction-flip__back--${tone}`}
                    >
                      <button
                        type="button"
                        className="home-flip__close"
                        onClick={() => setFlipped(null)}
                      >
                        ← Назад
                      </button>
                      <h3 className="home-flip__back-title">{card.title}</h3>
                      <ul className="home-flip__links">
                        {card.links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} onClick={() => setFlipped(null)}>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={card.href}
                        className="home-flip__all"
                        onClick={() => setFlipped(null)}
                      >
                        Перейти до напряму →
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
