import { WHY_US } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function WhyUsSection() {
  return (
    <section className="home-why landing-section-accent landing-section-hairline" id="why-us">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--center">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Чому Royal Academy School?</h2>
          </header>
        </SectionReveal>

        <ul className="home-why__grid">
          {WHY_US.map((item, i) => (
            <li key={item.title}>
              <SectionReveal delay={i * 0.04}>
                <article className="home-why__card">
                  <div className="home-why__media" aria-hidden="true">
                    <img src={item.image} alt="" loading="lazy" decoding="async" />
                    <span className="home-why__media-shade" />
                  </div>
                  <div className="home-why__content">
                    <h3 className="home-why__title">{item.title}</h3>
                    <p className="home-why__text">{item.text}</p>
                  </div>
                </article>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
