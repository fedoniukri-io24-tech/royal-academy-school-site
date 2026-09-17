import { LANGUAGES } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function LanguagesSection() {
  return (
    <section className="ras-section ras-languages ras-bg-white" id="languages">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="Яку мову ви хочете" accent="вивчати?" />
        </SectionReveal>

        <div className="ras-languages-grid">
          {LANGUAGES.map((lang, i) => (
            <SectionReveal key={lang.name} delay={i * 0.05}>
              <a href={lang.href} className={`ras-lang-card ras-lang-card--${lang.color}`}>
                <span className="ras-lang-emoji ras-emoji-deco" aria-hidden="true">{lang.emoji}</span>
                <h3 className="ras-lang-name">{lang.name}</h3>
                <p className="ras-lang-tagline">{lang.tagline}</p>
                <p className="ras-lang-desc">{lang.description}</p>
                <div className="ras-lang-meta">
                  <span className="ras-lang-meta-label">Формати</span>
                  <div className="ras-lang-tags">
                    {lang.formats.map((format) => (
                      <span key={format} className="ras-lang-tag">{format}</span>
                    ))}
                  </div>
                </div>
                <p className="ras-lang-levels">Рівні: {lang.levels}</p>
                <span className="ras-pill-btn">Детальніше</span>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
