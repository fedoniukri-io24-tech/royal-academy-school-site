'use client';

import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

const CORPORATE_PROGRAMS = [
  { title: 'Business English', emoji: '💼', tag: 'Переговори' },
  { title: 'Legal English', emoji: '⚖️', tag: 'Юридичний' },
  { title: 'Finance / Accounting English', emoji: '📊', tag: 'Фінанси' },
  { title: 'Management / Negotiations', emoji: '🤝', tag: 'Менеджмент' },
  { title: 'Industry-specific English', emoji: '🏭', tag: 'За запитом', note: 'галузеві програми' },
];

const CORPORATE_PERKS = [
  { value: '10+', label: 'корпоративних клієнтів' },
  { value: 'B2B', label: 'формат навчання' },
  { value: '360°', label: 'звітність для HR' },
];

export function CorporateSection() {
  return (
    <section className="ras-section ras-corporate ras-bg-dark" id="corporate">
      <div className="ras-wrap">
        <SectionReveal>
          <span className="ras-corporate-badge">Royal Academy School for Business</span>
          <SectionTitle main="мова" accent="вашої команди" align="left" light />
          <p className="ras-lead ras-lead--left">
            Мова вашої команди має працювати на бізнес — від щоденної комунікації до міжнародних
            переговорів.
          </p>
        </SectionReveal>

        <div className="ras-corporate-inner">
          <div className="ras-corporate-programs">
            <div className="ras-corporate-grid">
              {CORPORATE_PROGRAMS.map((item, i) => (
                <SectionReveal key={item.title} delay={i * 0.05}>
                  <article className="ras-corporate-card ras-card-glass">
                    <span className="ras-corporate-card-tag">{item.tag}</span>
                    <h3 className="ras-corporate-card-title">{item.title}</h3>
                    {item.note && <p className="ras-corporate-card-note">{item.note}</p>}
                    <span className="ras-corporate-card-emoji ras-emoji-deco" aria-hidden="true">
                      {item.emoji}
                    </span>
                  </article>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.15}>
              <div className="ras-corporate-perks">
                {CORPORATE_PERKS.map((perk) => (
                  <div key={perk.label} className="ras-corporate-perk ras-card-glass">
                    <span className="ras-corporate-perk-value">{perk.value}</span>
                    <span className="ras-corporate-perk-label">{perk.label}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          <SectionReveal axis="x" distance={50} delay={0.1}>
            <form
              className="ras-form ras-corporate-form ras-card-glass"
              id="corporate-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="ras-corporate-form-head">
                <span className="ras-corporate-form-icon" aria-hidden="true">📋</span>
                <div>
                  <h3 className="ras-form-title light">Отримати корпоративну пропозицію</h3>
                  <p className="ras-corporate-form-sub">
                    Підготуємо програму під цілі вашої компанії протягом 24 годин.
                  </p>
                </div>
              </div>

              <div className="ras-form-grid">
                <input type="text" name="name" placeholder="Імʼя" required />
                <input type="text" name="company" placeholder="Компанія" required />
                <input type="text" name="position" placeholder="Посада" />
                <input type="tel" name="phone" placeholder="Телефон / e-mail" required />
                <input type="text" name="team" placeholder="Кількість співробітників" />
                <textarea name="comment" placeholder="Коментар" rows={3} />
              </div>

              <button type="submit" className="ras-btn ras-btn-primary ras-corporate-submit">
                Надіслати запит
              </button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
