import Link from 'next/link';
import { LEVELS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function LevelsSection() {
  return (
    <section className="home-levels landing-section-accent landing-section-hairline" id="levels">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--left">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">
              Від першого слова до професійного володіння мовою
            </h2>
          </header>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.04}>
        <div className="home-levels__track" tabIndex={0} aria-label="Рівні володіння мовою">
          <ol className="home-levels__list">
            {LEVELS.map((level) => (
              <li key={level.code}>
                <article className="home-level">
                  <span className="home-level__code">{level.code}</span>
                  <p className="home-level__label">{level.label}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </SectionReveal>

      <div className="ras-wrap">
        <SectionReveal delay={0.12}>
          <div className="home-levels__cta">
            <Link href="/level-test" className="hero-btn hero-btn--gold">
              Дізнатися свій рівень
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
