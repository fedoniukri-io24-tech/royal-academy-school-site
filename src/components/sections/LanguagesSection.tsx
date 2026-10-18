'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LANGUAGES } from '@/data/homeContent';
import { LanguageFlag, type LanguageFlagId } from './LanguageFlags';
import { SectionReveal } from '../ui/SectionReveal';

export function LanguagesSection() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section className="home-langs landing-section-accent landing-section-hairline" id="languages">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--center">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Яку мову ви хочете вивчати?</h2>
          </header>
        </SectionReveal>

        <div className="home-langs__grid">
          {LANGUAGES.map((lang, i) => {
            const isFlipped = flipped === lang.slug;

            return (
              <SectionReveal key={lang.slug} delay={i * 0.04}>
                <article
                  className={`home-lang-flip${isFlipped ? ' is-flipped' : ''}`}
                  onMouseEnter={() => setFlipped(lang.slug)}
                  onMouseLeave={() => setFlipped(null)}
                >
                  <div className="home-lang-flip__inner">
                    <button
                      type="button"
                      className="home-lang-card home-lang-flip__face home-lang-flip__face--front"
                      onClick={() =>
                        setFlipped((prev) => (prev === lang.slug ? null : lang.slug))
                      }
                      aria-expanded={isFlipped}
                      aria-label={`${lang.name} — детальніше`}
                    >
                      <img
                        src={lang.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: lang.objectPosition }}
                      />
                      <span className="home-lang-card__shade" aria-hidden="true" />
                      <span className="home-lang-card__flag" aria-hidden="true">
                        <LanguageFlag id={lang.slug as LanguageFlagId} name={lang.name} />
                      </span>
                      <h3 className="home-lang-card__name">{lang.name}</h3>
                    </button>

                    <div className="home-lang-flip__face home-lang-flip__face--back">
                      <span className="home-lang-card__flag home-lang-card__flag--back" aria-hidden="true">
                        <LanguageFlag id={lang.slug as LanguageFlagId} name={lang.name} />
                      </span>
                      <h3 className="home-lang-flip__title">{lang.name}</h3>
                      <p className="home-lang-flip__blurb">{lang.blurb}</p>
                      <ul className="home-lang-flip__tags">
                        {lang.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <Link href={lang.href} className="home-lang-flip__cta">
                        Детальніше
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
