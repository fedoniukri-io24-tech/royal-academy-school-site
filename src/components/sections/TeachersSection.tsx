import Link from 'next/link';
import { TEACHERS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function TeachersSection() {
  return (
    <section className="home-teachers landing-section-accent landing-section-hairline" id="teachers">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--left">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Викладачі Royal Academy School</h2>
          </header>
        </SectionReveal>

        <div className="home-teachers__grid">
          {TEACHERS.map((teacher, i) => (
            <SectionReveal key={teacher.name + teacher.language} delay={i * 0.04}>
              <article className="home-teacher">
                <figure className="home-teacher__photo">
                  <img
                    src={teacher.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <h3 className="home-teacher__name">{teacher.name}</h3>
                <p className="home-teacher__lang">{teacher.language}</p>
                <p className="home-teacher__focus">{teacher.focus}</p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.12}>
          <p className="home-teachers__cta">
            <Link href="/about#team" className="hero-btn hero-btn--ghost">
              Познайомитися з командою →
            </Link>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
