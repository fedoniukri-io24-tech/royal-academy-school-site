import { OUTCOMES } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function OutcomesSection() {
  return (
    <section className="ras-section ras-outcomes ras-bg-white" id="outcomes">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="Ви вивчаєте мову" accent="не заради мови" />
        </SectionReveal>

        <div className="ras-outcomes-grid">
          {OUTCOMES.map((item, i) => (
            <SectionReveal key={item.text} delay={i * 0.04}>
              <div className="ras-outcome-item ras-card-surface">
                <span className="ras-outcome-emoji ras-emoji-deco" aria-hidden="true">{item.emoji}</span>
                <p>{item.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
