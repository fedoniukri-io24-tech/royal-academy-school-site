import type { StepCard } from '@/components/layout/PageContentBlocks';
import { SiteBlockReveal } from './SiteBlockReveal';
import { PageEnrollmentActions, PageEnrollmentMeta } from './PageEnrollmentActions';
import { ENROLLMENT_JOURNEY } from '@/data/pages/sharedPageContent';

type PageEnrollmentPathProps = {
  title?: string;
  lead?: string;
  steps?: readonly StepCard[];
  revealDelay?: number;
};

export function PageEnrollmentPath({
  title = 'Запис на навчання',
  lead = 'Безкоштовна діагностика рівня та знайомче заняття — для будь-якої мови зі списку.',
  steps = ENROLLMENT_JOURNEY,
  revealDelay = 0,
}: PageEnrollmentPathProps) {
  return (
    <section
      className="site-enroll-path site-enroll-path--spacious landing-section-accent landing-section-hairline"
      aria-labelledby="site-enroll-path-title"
    >
      <SiteBlockReveal delay={revealDelay}>
        <div className="site-enroll-path__shell">
          <div className="site-enroll-path__intro">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="site-enroll-path__title" id="site-enroll-path-title">{title}</h2>
            <p className="site-enroll-path__lead">{lead}</p>
            <PageEnrollmentActions />
            <PageEnrollmentMeta />
          </div>

          <ol className="site-enroll-path__timeline">
            {steps.map((step, i) => (
              <li key={step.num} className="site-enroll-path__step">
                <span className="site-enroll-path__marker" aria-hidden="true">
                  <span className="site-enroll-path__marker-num">{step.num}</span>
                </span>
                <div className="site-enroll-path__step-body">
                  {step.title ? (
                    <h3 className="site-enroll-path__step-title">{step.title}</h3>
                  ) : null}
                  <p className="site-enroll-path__step-text">{step.text}</p>
                </div>
                {i < steps.length - 1 ? (
                  <span className="site-enroll-path__connector" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </SiteBlockReveal>
    </section>
  );
}
