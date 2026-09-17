import { FORMATS } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function FormatsSection() {
  return (
    <section className="ras-section ras-formats ras-bg-white" id="formats">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="Формати" accent="навчання" />
        </SectionReveal>

        <div className="ras-formats-grid">
          {FORMATS.map((format, i) => (
            <SectionReveal key={format.titleSans} delay={i * 0.05}>
              <a href={format.href} className="ras-format-card ras-card-soft">
                <h3 className="ras-card-title-split">
                  <span className="ras-card-title-sans">{format.titleSans}</span>
                  <span className="ras-card-title-serif">{format.titleSerif}</span>
                </h3>
                <p className="ras-format-text">{format.text}</p>
                <span className="ras-format-emoji ras-emoji-deco" aria-hidden="true">{format.emoji}</span>
                <span className="ras-link-btn">Детальніше</span>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
