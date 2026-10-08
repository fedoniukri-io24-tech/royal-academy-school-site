import Link from 'next/link';
import { LANGUAGES } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function LanguagesSection() {
  return (
    <section className="home-langs landing-section-accent landing-section-hairline" id="languages">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--left">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Яку мову ви хочете вивчати?</h2>
          </header>
        </SectionReveal>

        <div className="home-langs__grid">
          {LANGUAGES.map((lang, i) => (
            <SectionReveal key={lang.slug} delay={i * 0.04}>
              <Link href={lang.href} className="home-lang-card">
                <img
                  src={lang.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: lang.objectPosition }}
                />
                <span className="home-lang-card__shade" aria-hidden="true" />
                <span className="home-lang-card__emoji" aria-hidden="true">
                  {lang.emoji}
                </span>
                <h3 className="home-lang-card__name">{lang.name}</h3>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
