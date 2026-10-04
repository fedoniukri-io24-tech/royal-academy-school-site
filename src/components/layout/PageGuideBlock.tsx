import Link from 'next/link';
import {
  PagePhotoStepCards,
  PageStepBlocks,
  type PhotoStepCard,
  type StepCard,
} from './PageContentBlocks';
import { SiteBlockReveal } from './SiteBlockReveal';

export type PageGuideStep = StepCard & {
  image?: string;
  objectPosition?: string;
};

type PageGuideBlockProps = {
  title: string;
  lead: string;
  steps: readonly PageGuideStep[];
  ctaHref?: string;
  ctaLabel?: string;
  revealDelay?: number;
  columns?: 2 | 3 | 4;
};

export function PageGuideBlock({
  title,
  lead,
  steps,
  ctaHref,
  ctaLabel,
  revealDelay = 0,
  columns = 2,
}: PageGuideBlockProps) {
  const photoSteps = steps.every((step) => Boolean(step.image))
    ? (steps as readonly PhotoStepCard[])
    : null;

  return (
    <section
      className="site-guide site-guide--plain landing-section-accent landing-section-hairline"
      aria-labelledby="site-guide-title"
    >
      <SiteBlockReveal delay={revealDelay}>
        <header className="ras-mock-head ras-mock-head--left site-block__head">
          <span className="ras-landing-rule" aria-hidden="true" />
          <h2 className="ras-mock-head__title site-block__title" id="site-guide-title">
            {title}
          </h2>
          <p className="site-block__lead">{lead}</p>
        </header>

        {photoSteps ? (
          <PagePhotoStepCards steps={photoSteps} />
        ) : (
          <PageStepBlocks steps={steps} columns={columns} />
        )}

        {ctaHref && ctaLabel ? (
          <p className="site-guide-foot site-guide-foot--plain">
            <Link href={ctaHref} className="site-inline-link site-guide-foot__inline">
              {ctaLabel} →
            </Link>
          </p>
        ) : null}
      </SiteBlockReveal>
    </section>
  );
}
