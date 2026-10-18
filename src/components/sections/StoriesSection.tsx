'use client';

import { useMemo, useState } from 'react';
import {
  REVIEW_AUDIENCES,
  STUDENT_STORIES,
  type ReviewAudienceId,
} from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function StoriesSection() {
  const [audience, setAudience] = useState<ReviewAudienceId>('adults');

  const stories = useMemo(
    () => STUDENT_STORIES.filter((item) => item.audience === audience),
    [audience],
  );

  return (
    <section className="home-results landing-section-accent landing-section-hairline" id="results">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--center">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Результати та відгуки студентів</h2>
            <p className="site-block__lead home-results__lead">
              Запит → робота з нами → результат. Не лише зірки — конкретні історії.
            </p>
          </header>
        </SectionReveal>

        <SectionReveal delay={0.04}>
          <div className="home-results__tabs" role="tablist" aria-label="Категорії відгуків">
            {REVIEW_AUDIENCES.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={audience === item.id}
                className={`home-results__tab${audience === item.id ? ' is-active' : ''}`}
                onClick={() => setAudience(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.06}>
        <div
          className="home-results__track"
          tabIndex={0}
          aria-label={`Історії — ${REVIEW_AUDIENCES.find((item) => item.id === audience)?.label}`}
        >
          <ul className="home-results__row">
            {stories.map((story) => (
              <li key={`${story.audience}-${story.name}`}>
                <article className="home-story">
                  <figure className="home-story__media">
                    <img src={story.image} alt="" loading="lazy" decoding="async" />
                    <span className="home-story__media-label">{story.mediaLabel}</span>
                  </figure>

                  <h3 className="home-story__name">{story.name}</h3>

                  <div className="home-story__journey">
                    <div className="home-story__point home-story__point--a">
                      <span className="home-story__badge">
                        <span className="home-story__badge-dot">A</span>
                        Запит
                      </span>
                      <p>{story.request}</p>
                    </div>

                    <div className="home-story__bridge" aria-hidden="true">
                      <span className="home-story__bridge-line" />
                      <span className="home-story__bridge-mid">→</span>
                      <span className="home-story__bridge-line" />
                    </div>

                    <div className="home-story__point home-story__point--b">
                      <span className="home-story__badge home-story__badge--result">
                        <span className="home-story__badge-dot home-story__badge-dot--b">B</span>
                        Результат
                      </span>
                      <p>{story.result}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}
