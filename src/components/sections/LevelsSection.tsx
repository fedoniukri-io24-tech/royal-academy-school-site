import type { CSSProperties } from 'react';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { LEVELS } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

const LEVEL_ACCENTS = ['var(--corporate)', '#2eb0c0', 'var(--adults)', '#9a72e8', 'var(--burgundy)'];

export function LevelsSection() {
  return (
    <section className="ras-section ras-levels ras-bg-white" id="levels">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="Рівні" accent="A1–C1" />
          <p className="ras-lead">
            Прозорий шлях від перших фраз до впевненого володіння мовою — оберіть свою точку старту.
          </p>
        </SectionReveal>

        <div className="ras-levels-journey">
          <div className="ras-levels-path" aria-hidden="true">
            <span className="ras-levels-path-line" />
            <span className="ras-levels-path-label ras-levels-path-label--start">Старт</span>
            <span className="ras-levels-path-label ras-levels-path-label--end">Профі</span>
          </div>

          <div className="ras-levels-cards">
            {LEVELS.map((level, i) => (
              <SectionReveal key={level.code} delay={i * 0.07}>
                <article
                  className="ras-level-card ras-card-soft"
                  style={
                    {
                      '--level-step': i + 1,
                      '--level-accent': LEVEL_ACCENTS[i],
                    } as CSSProperties
                  }
                >
                  <div className="ras-level-card-top">
                    <span className="ras-level-tier">{level.tier}</span>
                    <span className="ras-level-step-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="ras-level-code">{level.code}</h3>
                  <p className="ras-level-label">{level.label}</p>
                  <span className="ras-level-emoji ras-emoji-deco" aria-hidden="true">{level.emoji}</span>
                  {i < LEVELS.length - 1 && (
                    <span className="ras-level-arrow" aria-hidden="true">→</span>
                  )}
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal>
          <div className="ras-levels-cta">
            <div className="ras-levels-cta-box ras-card-surface">
              <p className="ras-levels-cta-text">
                Не знаєте, з чого почати? <strong>5-хвилинний тест</strong> допоможе визначити ваш рівень.
              </p>
              <LeadFormTrigger intent="level-test" className="ras-btn ras-btn-primary">
                Дізнатися свій рівень
              </LeadFormTrigger>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
