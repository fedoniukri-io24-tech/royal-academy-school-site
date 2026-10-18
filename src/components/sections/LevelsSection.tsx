import Link from 'next/link';
import { LEVELS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function LevelsSection() {
  return (
    <section className="home-levels landing-section-accent landing-section-hairline" id="levels">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--center">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">
              Від першого слова до професійного володіння мовою
            </h2>
            <p className="home-levels__lead">
              Рівні — не просто літери. Це зрозумілий результат, якого ви досягаєте.
            </p>
          </header>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.04}>
        <div className="home-levels__track" tabIndex={0} aria-label="Рівні володіння мовою">
          <ol className="home-levels__list">
            {LEVELS.map((level, index) => (
              <li key={level.code}>
                <article className={`home-level home-level--${level.tone}`}>
                  <div className="home-level__top">
                    <span className="home-level__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="home-level__code">{level.code}</span>
                  </div>
                  <p className="home-level__label">{level.label}</p>
                  {index < LEVELS.length - 1 ? (
                    <span className="home-level__connector" aria-hidden="true" />
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </SectionReveal>

      <div className="ras-wrap">
        <SectionReveal delay={0.12}>
          <div className="home-levels__cta">
            <Link href="/level-test" className="hero-btn hero-btn--gold home-levels__btn">
              Дізнатися свій рівень
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
