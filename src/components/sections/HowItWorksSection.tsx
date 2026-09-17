import { HOW_IT_WORKS } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function HowItWorksSection() {
  return (
    <section className="ras-section ras-steps ras-bg-dark" id="how-it-works">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="як?" accent="проходить навчання" light />
        </SectionReveal>

        <div className="ras-steps-grid">
          {HOW_IT_WORKS.map((step, i) => (
            <SectionReveal key={step.step} delay={i * 0.05}>
              <article className="ras-step-card ras-card-glass">
                <div className="ras-step-card-top">
                  <h3 className="ras-step-title">{step.title}</h3>
                  <span className="ras-step-num" aria-hidden="true">{step.step}</span>
                </div>
                <p className="ras-step-text">{step.text}</p>
                <span className="ras-step-emoji ras-emoji-deco" aria-hidden="true">{step.emoji}</span>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <p className="ras-note">
            Безкоштовне пробне заняття — ви бачите методику та свого викладача до старту програми.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
