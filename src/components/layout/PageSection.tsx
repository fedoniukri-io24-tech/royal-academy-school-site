import type { ReactNode } from 'react';
import { SiteBlockReveal } from './SiteBlockReveal';

type PageSectionProps = {
  id?: string;
  title?: string;
  kicker?: string;
  lead?: string;
  children?: ReactNode;
  aside?: ReactNode;
  density?: 'default' | 'tight';
  /** plain — без білої панелі (наприклад, pillars) */
  variant?: 'panel' | 'plain' | 'band';
  align?: 'left' | 'center';
  revealDelay?: number;
};

export function PageSection({
  id,
  title,
  kicker,
  lead,
  children,
  aside,
  density = 'default',
  variant = 'panel',
  align = 'left',
  revealDelay = 0,
}: PageSectionProps) {
  const head = title ? (
    <header
      className={[
        'ras-mock-head',
        align === 'center' ? 'ras-mock-head--center' : 'ras-mock-head--left',
        'site-block__head',
      ].join(' ')}
    >
      {kicker ? <p className="ras-landing-kicker">{kicker}</p> : null}
      <span className="ras-landing-rule" aria-hidden="true" />
      <h2 className="ras-mock-head__title site-block__title">{title}</h2>
      {lead ? <p className="site-block__lead">{lead}</p> : null}
    </header>
  ) : null;

  const body =
    aside ? (
      <div className="site-block__split">
        <div className="site-block__main">{children}</div>
        <aside className="site-block__aside">{aside}</aside>
      </div>
    ) : (
      children
    );

  const inner =
    variant === 'plain' ? (
      <>
        {head}
        {body}
      </>
    ) : (
      <div className="site-block-panel">
        {head}
        {body}
      </div>
    );

  return (
    <section
      className={[
        'site-block',
        'landing-section-accent',
        'landing-section-hairline',
        density === 'tight' ? 'site-block--tight' : '',
        variant === 'band' ? 'site-block--band' : '',
        variant === 'plain' ? 'site-block--plain' : '',
        align === 'center' ? 'site-block--center' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      id={id}
    >
      <SiteBlockReveal delay={revealDelay}>{inner}</SiteBlockReveal>
    </section>
  );
}
