import Link from 'next/link';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { ABOUT_INSIGHT_TOPICS, LEVEL_TEST_STEPS, TRANSLATION_OFFERS } from '@/data/pages/aboutContent';

const TONE_CLASS = ['inner-tone-gold', 'inner-tone-navy', 'inner-tone-burgundy'] as const;

export function AboutLevelTestSection() {
  return (
    <section className="ras-section ras-bg-burgundy landing-section-accent" id="level-test">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="визначити" accent="рівень" light />
          <p className="ras-lead">
            Безкоштовна діагностика та знайомче заняття — стартова точка для програми й розкладу.
          </p>
        </SectionReveal>
        <div className="inner-process-grid">
          {LEVEL_TEST_STEPS.map((text, i) => (
            <SectionReveal key={text} delay={i * 0.05}>
              <article className={`inner-process-card ${TONE_CLASS[i % TONE_CLASS.length]}`}>
                <span className="inner-process-card__num">{String(i + 1).padStart(2, '0')}</span>
                <p>{text}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal>
          <div className="inner-section-cta">
            <Link href="/level-test" className="ras-btn ras-btn-primary">
              Пройти онлайн-тест
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function AboutTranslationSection() {
  return (
    <section className="ras-section ras-bg-white landing-section-accent" id="translation">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="переклад" accent="та супровід" />
          <p className="ras-lead">Письмово, усно та за запитом — для бізнесу й приватних замовлень.</p>
        </SectionReveal>
        <div className="inner-process-grid inner-process-grid--3">
          {TRANSLATION_OFFERS.map((offer, i) => (
            <SectionReveal key={offer.title} delay={i * 0.06}>
              <article className={`inner-process-card inner-process-card--light ${TONE_CLASS[i % TONE_CLASS.length]}`}>
                <h3 className="inner-process-card__title">{offer.title}</h3>
                <p>{offer.text}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal>
          <div className="inner-section-cta">
            <LeadFormTrigger intent="general" className="ras-btn ras-footer-mock-btn">
              Запит на переклад →
            </LeadFormTrigger>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function AboutInsightsSection() {
  return (
    <section className="ras-section ras-bg-white landing-section-accent landing-section-hairline" id="insights">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="корисне" accent="для студентів" />
          <p className="ras-lead">Перші матеріали готуємо — теми вже визначені.</p>
        </SectionReveal>
        <ul className="inner-insights-list">
          {ABOUT_INSIGHT_TOPICS.map((topic, i) => (
            <SectionReveal key={topic.title} delay={i * 0.05}>
              <li>
                <span className="inner-insights-list__title">{topic.title}</span>
                <span className="inner-insights-list__text">{topic.text}</span>
              </li>
            </SectionReveal>
          ))}
        </ul>
        <SectionReveal>
          <p className="ras-note">
            Поки що — <Link href="/programs" className="site-inline-link">програми</Link> та{' '}
            <Link href="/pricing" className="site-inline-link">ціни</Link> на сайті.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

export function AboutSchoolSection() {
  return (
    <section className="ras-section ras-bg-white landing-section-accent" id="about-school">
      <div className="ras-wrap inner-split">
        <SectionReveal>
          <SectionTitle main="хто" accent="ми" align="left" />
          <p className="ras-lead inner-split__lead">
            15+ років у Києві. Раніше — English Home School. Зараз — Royal Academy School: ті самі цінності,
            оновлений бренд.
          </p>
          <ul className="site-check-list">
            <li>Оболонь і Позняки — офлайн, плюс онлайн по всій Україні</li>
            <li>Пʼять мов: англійська, німецька, французька, іспанська, італійська</li>
            <li>
              Програми для дітей, дорослих і бізнесу —{' '}
              <Link href="/programs" className="site-inline-link">усі напрямки</Link>
            </li>
          </ul>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <figure className="inner-split__media">
            <img
              src="/school-assets/why-us-bg.jpg"
              alt=""
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 40%' }}
            />
          </figure>
        </SectionReveal>
      </div>
    </section>
  );
}
