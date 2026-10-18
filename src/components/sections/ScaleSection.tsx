import Link from 'next/link';
import { SCHOOL_INTRO_PILLARS } from '@/data/homeContent';
import { WhyUsIcon } from './WhyUsIcons';
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
          <header className="ras-mock-head ras-mock-head--center">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title home-scale__title">
              <span className="home-scale__title-main">Знайомтесь —</span>{' '}
              <span className="home-scale__title-accent">Royal Academy School</span>
            </h2>
          </header>
          <Link href="/about" className="ras-why-mock-more">
            Більше про нас
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="ras-why-pillars ras-why-pillars--intro">
          {SCHOOL_INTRO_PILLARS.map((item, i) => (
            <li key={item.id} className="ras-why-pillar">
              <SectionReveal delay={i * 0.03}>
                <span className="ras-why-pillar-icon">
                  <WhyUsIcon id={item.id} />
                </span>
                <h3 className="ras-why-pillar-title">{item.label}</h3>
                <p className="ras-why-pillar-desc">{item.description}</p>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
