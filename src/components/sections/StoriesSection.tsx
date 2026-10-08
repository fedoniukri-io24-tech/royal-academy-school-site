import { CORPORATE_REVIEW, RESULT_CASES, SHORT_REVIEWS } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function StoriesSection() {
  return (
    <section className="home-results landing-section-accent landing-section-hairline" id="results">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--left">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Результати та відгуки студентів</h2>
            <p className="site-block__lead home-results__lead">
              Запит → робота з нами → результат. Не лише зірки, а конкретні історії.
            </p>
          </header>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.04}>
        <div className="home-results__track" tabIndex={0} aria-label="Відгуки та результати студентів">
          <ul className="home-results__row">
            {SHORT_REVIEWS.map((review) => (
              <li key={`review-${review.name}`}>
                <article className="home-review">
                  <figure className="home-review__shot">
                    <img src={review.image} alt="" loading="lazy" decoding="async" />
                  </figure>
                  <p className="home-review__text">«{review.text}»</p>
                  <p className="home-review__name">{review.name}</p>
                </article>
              </li>
            ))}

            {RESULT_CASES.map((item) => (
              <li key={`case-${item.name}`}>
                <article className="home-case">
                  <figure className="home-case__media">
                    <img src={item.image} alt="" loading="lazy" decoding="async" />
                    <span className="home-case__media-label">{item.mediaLabel}</span>
                  </figure>
                  <h4 className="home-case__name">{item.name}</h4>
                  <p className="home-case__row">
                    <span>Запит</span>
                    {item.request}
                  </p>
                  <p className="home-case__row home-case__row--result">
                    <span>Результат</span>
                    {item.result}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>

      <div className="ras-wrap">
        <SectionReveal delay={0.1}>
          <article className="home-corporate-review">
            <div className="home-corporate-review__content">
              <p className="home-corporate-review__label">Корпоративний відгук</p>
              <blockquote className="home-corporate-review__text">
                <span className="home-corporate-review__quote" aria-hidden="true">
                  “
                </span>
                {CORPORATE_REVIEW.text}
              </blockquote>
              <footer className="home-corporate-review__meta">
                <span className="home-corporate-review__avatar" aria-hidden="true">
                  К
                </span>
                <div>
                  <p className="home-corporate-review__company">{CORPORATE_REVIEW.company}</p>
                  <p className="home-corporate-review__role">{CORPORATE_REVIEW.role}</p>
                </div>
              </footer>
            </div>
            <figure className="home-corporate-review__visual">
              <img
                src={CORPORATE_REVIEW.image}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
          </article>
        </SectionReveal>
      </div>
    </section>
  );
}
