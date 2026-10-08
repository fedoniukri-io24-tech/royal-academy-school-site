import Link from 'next/link';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { SectionReveal } from '../ui/SectionReveal';

export function FinalCTASection() {
  return (
    <section className="home-final-cta" id="consultation">
      <div className="ras-wrap">
        <SectionReveal>
          <div className="home-final-cta__inner">
            <header className="ras-mock-head ras-mock-head--center">
              <span className="ras-landing-rule ras-landing-rule--light" aria-hidden="true" />
              <h2 className="ras-mock-head__title home-final-cta__title">Не знаєте, з чого почати?</h2>
              <p className="home-final-cta__lead">
                Ми визначимо ваш рівень, ціль та підберемо програму навчання.
              </p>
            </header>
            <div className="home-final-cta__actions">
              <LeadFormTrigger intent="consultation" className="hero-btn hero-btn--primary">
                Підібрати програму
              </LeadFormTrigger>
              <Link href="/level-test" className="hero-btn hero-btn--gold">
                Пройти тест
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
