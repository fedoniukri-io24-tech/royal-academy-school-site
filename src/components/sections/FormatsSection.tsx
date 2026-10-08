'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FORMAT_FLIP_CARDS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function FormatsSection() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section className="ras-section ras-formats-mock landing-section-accent landing-section-hairline" id="formats">
      <div className="ras-wrap">
        <div className="ras-formats-mock-head">
          <header className="ras-mock-head ras-mock-head--left">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Оберіть свій формат навчання</h2>
          </header>
          <Link href="/programs" className="ras-formats-mock-all">
            Усі програми
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="ras-formats-mock-list">
          {FORMAT_FLIP_CARDS.map((card, i) => {
            const isFlipped = flipped === card.id;
            return (
              <SectionReveal key={card.id} delay={i * 0.04}>
                <div
                  className={`home-flip ras-format-mock-card ras-format-mock-card--${card.style}${isFlipped ? ' is-flipped' : ''}`}
                  onClick={() => {
                    if (!isFlipped) setFlipped(card.id);
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !isFlipped) {
                      e.preventDefault();
                      setFlipped(card.id);
                    }
                  }}
                  role="button"
                  tabIndex={isFlipped ? -1 : 0}
                  aria-expanded={isFlipped}
                  aria-controls={`format-back-${card.id}`}
                >
                  <div className="home-flip__inner">
                    <div className="home-flip__face home-flip__face--front">
                      <div className="ras-format-mock-copy">
                        <h3 className="ras-format-mock-title">{card.title}</h3>
                        <span className="ras-format-mock-btn">
                          Натисніть
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                      <div className="ras-format-mock-visual">
                        <img src={card.image} alt="" loading="lazy" decoding="async" />
                      </div>
                    </div>

                    <div
                      className="home-flip__face home-flip__face--back"
                      id={`format-back-${card.id}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        className="home-flip__close"
                        onClick={() => setFlipped(null)}
                      >
                        Назад
                      </button>
                      <p className="home-flip__back-title">{card.title}</p>
                      <ul className="home-flip__links">
                        {card.links.map((link) => (
                          <li key={link.href + link.label}>
                            <Link href={link.href}>{link.label}</Link>
                          </li>
                        ))}
                      </ul>
                      <Link href={card.href} className="home-flip__all">
                        Усі програми →
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
