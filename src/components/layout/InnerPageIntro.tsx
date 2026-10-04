import type { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';

type InnerPageIntroProps = {
  title: string;
  titleAccent?: string;
  lead: string;
  kicker?: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: ReactNode;
  aside?: ReactNode;
};

/** Lexi-style intro panel — full section rhythm, not a narrow text column. */
export function InnerPageIntro({
  title,
  titleAccent,
  lead,
  kicker,
  breadcrumbs,
  actions,
  aside,
}: InnerPageIntroProps) {
  return (
    <section className="inner-page-intro landing-section-accent" aria-labelledby="inner-page-title">
      <div className="ras-wrap">
        <div className="inner-page-intro__panel">
          <div className="inner-page-intro__copy">
            {breadcrumbs && breadcrumbs.length > 0 ? (
              <Breadcrumbs items={breadcrumbs} variant="light" />
            ) : null}
            {kicker ? <p className="ras-landing-kicker inner-page-intro__kicker">{kicker}</p> : null}
            <span className="ras-landing-rule" aria-hidden="true" />
            <h1 id="inner-page-title" className="inner-page-intro__title">
              {titleAccent ? (
                <>
                  <span>{title}</span>
                  <em>{titleAccent}</em>
                </>
              ) : (
                title
              )}
            </h1>
            <p className="inner-page-intro__lead">{lead}</p>
            {actions ? <div className="inner-page-intro__actions">{actions}</div> : null}
          </div>
          {aside ? <div className="inner-page-intro__aside">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
