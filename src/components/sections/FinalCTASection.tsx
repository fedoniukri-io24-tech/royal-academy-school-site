'use client';

import { SITE_CONTACTS } from '@/data/siteContacts';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function FinalCTASection() {
  return (
    <section className="ras-section ras-final-cta ras-bg-white" id="consultation">
      <span id="level-test" className="ras-anchor" aria-hidden="true" />
      <div className="ras-wrap ras-final-inner">
        <SectionReveal>
          <SectionTitle
            variant="glass"
            small="почніть сьогодні"
            main="світ стає ближчим"
            align="left"
            className="ras-final-title"
          />
          <p className="ras-final-text">
            Коли ви говорите його мовою. Підберемо програму відповідно до вашої мети та рівня.
          </p>
          <div className="ras-final-actions">
            <LeadFormTrigger intent="consultation" className="ras-btn ras-btn-primary">
              Підібрати програму
            </LeadFormTrigger>
            <LeadFormTrigger intent="level-test" className="ras-btn ras-btn-outline-dark">
              Пройти тест рівня
            </LeadFormTrigger>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <form
            className="ras-form ras-consult-form ras-card-surface"
            id="consultation-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="ras-form-title">Підібрати програму</h3>
            <div className="ras-form-grid">
              <input type="text" name="name" placeholder="Імʼя" required />
              <input type="tel" name="phone" placeholder="Телефон або месенджер" required />
              <select name="language" defaultValue="">
                <option value="" disabled>Мова</option>
                <option>Англійська</option>
                <option>Німецька</option>
                <option>Французька</option>
                <option>Іспанська</option>
                <option>Італійська</option>
              </select>
              <select name="audience" defaultValue="">
                <option value="" disabled>Для кого</option>
                <option>Дорослий</option>
                <option>Дитина</option>
                <option>Компанія</option>
              </select>
              <textarea name="comment" placeholder="Коментар" rows={3} />
            </div>
            <button type="submit" className="ras-btn ras-btn-primary">Надіслати заявку</button>
            <p className="ras-form-alt-contact">
              Або напишіть у{' '}
              <a
                href={SITE_CONTACTS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_CONTACTS.instagram.handle}
              </a>
            </p>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
