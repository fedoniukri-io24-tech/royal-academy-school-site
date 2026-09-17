import type { CSSProperties } from 'react';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

const PLATFORM_FEATURES = [
  {
    text: 'Відеопояснення граматики та навчальних тем',
    emoji: '🎬',
    tag: 'Відео',
    accent: 'var(--burgundy)',
  },
  {
    text: 'Вправи для самостійного відпрацювання',
    emoji: '✏️',
    tag: 'Вправи',
    accent: 'var(--adults)',
  },
  {
    text: 'Vocabulary для повторення між заняттями',
    emoji: '📚',
    tag: 'Слова',
    accent: 'var(--gold)',
  },
  {
    text: 'Доступ у власному кабінеті студента',
    emoji: '💻',
    tag: 'Кабінет',
    accent: 'var(--corporate)',
  },
];

const PLATFORM_CHIPS = [
  { emoji: '🎬', label: '24 відео' },
  { emoji: '✏️', label: '180+ вправ' },
  { emoji: '📚', label: '500+ слів' },
];

export function PlatformSection() {
  return (
    <section className="ras-section ras-platform ras-bg-white" id="platform">
      <div className="ras-wrap">
        <div className="ras-platform-inner">
          <div className="ras-platform-copy">
            <SectionReveal>
              <SectionTitle main="Більше практики" accent="між заняттями" align="left" />
            </SectionReveal>

            <SectionReveal delay={0.05}>
              <div className="ras-platform-price ras-card-surface">
                <div className="ras-platform-price-copy">
                  <span className="ras-platform-price-label">Додатковий доступ</span>
                  <p className="ras-platform-price-note">
                    Платформа не входить автоматично у базову вартість навчання.
                  </p>
                </div>
                <div className="ras-platform-price-value-wrap">
                  <span className="ras-platform-price-value">1 500 грн</span>
                  <span className="ras-platform-price-period">/ пів року</span>
                </div>
              </div>
            </SectionReveal>

            <div className="ras-platform-features">
              {PLATFORM_FEATURES.map((item, i) => (
                <SectionReveal key={item.tag} delay={0.08 + i * 0.04}>
                  <article
                    className="ras-platform-feature ras-card-soft"
                    style={{ '--feature-accent': item.accent } as CSSProperties}
                  >
                    <span className="ras-platform-feature-tag">{item.tag}</span>
                    <p className="ras-platform-feature-text">{item.text}</p>
                    <span className="ras-platform-feature-emoji ras-emoji-deco" aria-hidden="true">
                      {item.emoji}
                    </span>
                  </article>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.2}>
              <div className="ras-platform-actions">
                <LeadFormTrigger intent="consultation" className="ras-btn ras-btn-primary">
                  Дізнатися про платформу
                </LeadFormTrigger>
                <LeadFormTrigger intent="consultation" className="ras-btn ras-btn-outline-dark">
                  Додати до навчання
                </LeadFormTrigger>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal axis="x" distance={50} delay={0.1}>
            <div className="ras-platform-visual">
              <div className="ras-platform-mockup ras-card-surface">
                <div className="ras-platform-mockup-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <div className="ras-platform-mockup-url">platform.royalacademy.school</div>
                </div>

                <div className="ras-platform-mockup-body">
                  <nav className="ras-platform-mockup-nav" aria-hidden="true">
                    <span className="active">Відео</span>
                    <span>Вправи</span>
                    <span>Слова</span>
                    <span>Кабінет</span>
                  </nav>

                  <div className="ras-platform-mockup-main">
                    <div className="ras-platform-mockup-video">
                      <span className="ras-platform-mockup-play">▶</span>
                      <span className="ras-platform-mockup-lesson">Урок 12 · Present Perfect</span>
                    </div>
                    <div className="ras-platform-mockup-progress" aria-hidden="true">
                      <span style={{ width: '68%' }} />
                    </div>
                    <div className="ras-platform-mockup-cards">
                      <div className="ras-platform-mockup-mini mock-exercise">
                        <span>Вправа 4/10</span>
                      </div>
                      <div className="ras-platform-mockup-mini mock-vocab">
                        <span>12 нових слів</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {PLATFORM_CHIPS.map((chip, i) => (
                <div key={chip.label} className={`ras-platform-chip ras-platform-chip--${i + 1}`}>
                  <span aria-hidden="true">{chip.emoji}</span>
                  {chip.label}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
