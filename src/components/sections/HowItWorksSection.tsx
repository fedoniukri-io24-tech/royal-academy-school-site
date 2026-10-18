import { HOW_IT_WORKS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function HowItWorksSection() {
  return (
    <section className="home-how landing-section-accent landing-section-hairline" id="how-it-works">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--center">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Як починається і проходить ваше навчання</h2>
          </header>
        </SectionReveal>

        <ol className="home-how__list">
          {HOW_IT_WORKS.map((step, i) => (
            <li key={step.step}>
              <SectionReveal delay={i * 0.04}>
                <article className="home-how__step">
                  <div className="home-how__copy">
                    <span className="home-how__num" aria-hidden="true">
                      {step.step}
                    </span>
                    <div className="home-how__body">
                      <h3 className="home-how__title">{step.title}</h3>
                      <p className="home-how__text">{step.text}</p>
                    </div>
                  </div>
                  <figure className="home-how__visual" aria-hidden="true">
                    <img
                      src={step.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </article>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
