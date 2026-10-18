import { PLATFORM_FEATURES } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function PlatformSection() {
  return (
    <section className="home-platform landing-section-accent landing-section-hairline" id="platform">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--center">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Навчання продовжується і після уроку</h2>
          </header>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <ul className="home-platform__chips">
            {PLATFORM_FEATURES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="home-platform__visual" data-placeholder="platform">
            <div className="home-platform__device home-platform__device--laptop">
              <div className="home-platform__screen">
                <span>Навчальна платформа</span>
                <span className="home-platform__screen-sub">відео · вправи · словник</span>
              </div>
            </div>
            <div className="home-platform__device home-platform__device--phone">
              <div className="home-platform__screen home-platform__screen--phone">
                <span>Урок</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
