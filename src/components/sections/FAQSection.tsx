import { FAQ } from '@/data/homeContent';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { Accordion } from '../ui/Accordion';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function FAQSection() {
  return (
    <section className="ras-section ras-faq ras-bg-white" id="faq">
      <div className="ras-wrap ras-faq-inner">
        <SectionReveal>
          <SectionTitle main="Часті" accent="питання" />
          <p className="ras-lead">
            Відповіді на те, що найчастіше питають перед стартом навчання.
          </p>
        </SectionReveal>

        <div className="ras-faq-list">
          {FAQ.map((item, i) => (
            <SectionReveal key={item.q} delay={i * 0.04}>
              <Accordion
                title={item.q}
                content={item.a}
                emoji={item.emoji}
                index={i + 1}
              />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="ras-faq-cta ras-card-surface">
            <p>Не знайшли відповідь? Ми допоможемо підібрати програму під ваш запит.</p>
            <LeadFormTrigger intent="consultation" className="ras-btn ras-btn-primary">
              Задати питання
            </LeadFormTrigger>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
