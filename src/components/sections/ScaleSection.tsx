import Link from 'next/link';
import { SCALE_FACTS } from '@/data/homeContent';
import { ScaleIcon, type ScaleIconId } from './ScaleIcons';
import { SectionReveal } from '../ui/SectionReveal';

export function ScaleSection() {
  return (
    <section
      className="ras-section ras-why-mock home-scale landing-section-accent"
      id="about-school"
    >
      <div className="ras-why-mock-bg" aria-hidden="true" />
      <div className="ras-wrap ras-why-mock-wrap">
        <div className="ras-why-mock-head">
          <header className="ras-mock-head ras-mock-head--left">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">
              Royal Academy School — більше, ніж мовна школа
            </h2>
          </header>
          <Link href="/about" className="ras-why-mock-more">
            Більше про нас
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="ras-why-pillars">
          {SCALE_FACTS.map((fact, i) => (
            <li key={fact.id} className="ras-why-pillar">
              <SectionReveal delay={i * 0.04}>
                <span className="ras-why-pillar-icon">
                  <ScaleIcon id={fact.id as ScaleIconId} />
                </span>
                <h3 className="ras-why-pillar-title home-scale__value">{fact.value}</h3>
                <p className="ras-why-pillar-title home-scale__label">{fact.label}</p>
                <p className="ras-why-pillar-desc">{fact.description}</p>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
