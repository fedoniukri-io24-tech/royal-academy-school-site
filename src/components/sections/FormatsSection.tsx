import Link from 'next/link';
import { FORMAT_SHOWCASE } from '@/data/homeContent';
import { SectionReveal } from '../ui/SectionReveal';

export function FormatsSection() {
  return (
    <section className="ras-section ras-formats-mock landing-section-accent landing-section-hairline" id="formats">
      <div className="ras-wrap">
        <div className="ras-formats-mock-head">
          <header className="ras-mock-head ras-mock-head--left">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title">Оберіть свій формат навчання</h2>
          </header>
          <Link href="#programs" className="ras-formats-mock-all">
            Усі програми
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="ras-formats-mock-list">
          {FORMAT_SHOWCASE.map((format, i) => (
            <SectionReveal key={format.id} delay={i * 0.04}>
              <a href={format.href} className={`ras-format-mock-card ras-format-mock-card--${format.id}`}>
                <div className="ras-format-mock-copy">
                  <h3 className="ras-format-mock-title">{format.title}</h3>
                  <p className="ras-format-mock-text">{format.text}</p>
                  <span className="ras-format-mock-btn">
                    Детальніше
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
                <div className="ras-format-mock-visual">
                  <img src={format.image} alt="" loading="lazy" decoding="async" />
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
