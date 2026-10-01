import Link from 'next/link';
import { WHY_US_PILLARS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';
import { WhyUsIcon } from './WhyUsIcons';

export function WhyUsSection() {
  return (
    <section className="ras-section ras-why-mock landing-section-accent" id="why-us">
      <div className="ras-why-mock-bg" aria-hidden="true" />
      <div className="ras-wrap ras-why-mock-wrap">
        <div className="ras-why-mock-head">
          <header className="ras-mock-head ras-mock-head--left">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Чому саме ми</h2>
          </header>
          <Link href="#contacts" className="ras-why-mock-more">
            Більше про нас
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="ras-why-pillars">
          {WHY_US_PILLARS.map((item, i) => (
            <li key={item.id} className="ras-why-pillar">
              <SectionReveal delay={i * 0.04}>
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
