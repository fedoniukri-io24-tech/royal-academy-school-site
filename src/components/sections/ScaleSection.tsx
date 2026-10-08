import { SCALE_FACTS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function ScaleSection() {
  return (
    <section className="home-scale landing-section-accent landing-section-hairline" id="about-school">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--left home-scale__head">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">
              Royal Academy School — більше, ніж мовна школа
            </h2>
          </header>
        </SectionReveal>

        <ul className="home-scale__grid">
          {SCALE_FACTS.map((fact, i) => (
            <li key={fact.label}>
              <SectionReveal delay={i * 0.03}>
                <article className="home-scale__card">
                  <p className="home-scale__value">{fact.value}</p>
                  <p className="home-scale__label">{fact.label}</p>
                </article>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
