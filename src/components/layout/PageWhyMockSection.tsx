'use client';

import Link from 'next/link';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { WhyUsIcon, type WhyUsIconId } from '@/components/sections/WhyUsIcons';

export type WhyMockPillar = {
  id: WhyUsIconId;
  label: string;
  description: string;
};

type PageWhyMockSectionProps = {
  id?: string;
  title: string;
  lead?: string;
  pillars: readonly WhyMockPillar[];
  columns?: 3 | 4;
  moreHref?: string;
  moreLabel?: string;
};

export function PageWhyMockSection({
  id,
  title,
  lead,
  pillars,
  columns = 4,
  moreHref,
  moreLabel,
}: PageWhyMockSectionProps) {
  const titleId = id ? `${id}-title` : 'site-why-mock-title';

  return (
    <section
      id={id}
      className="ras-section ras-why-mock site-why-mock"
      aria-labelledby={titleId}
    >
      <div className="ras-why-mock-bg" aria-hidden="true" />
      <div className="ras-wrap ras-why-mock-wrap">
        <div className="ras-why-mock-head">
          <header className="ras-mock-head ras-mock-head--left site-why-mock__head">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title" id={titleId}>{title}</h2>
            {lead ? <p className="site-why-mock__lead">{lead}</p> : null}
          </header>
          {moreHref && moreLabel ? (
            <Link href={moreHref} className="ras-why-mock-more">
              {moreLabel}
              <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>

        <ul
          className={`ras-why-pillars site-why-mock__pillars site-why-mock__pillars--cols-${columns}`}
        >
          {pillars.map((item, i) => (
            <li key={`${item.id}-${item.label}`} className="ras-why-pillar">
              <SectionReveal delay={i * 0.04}>
                <span className="ras-why-pillar-icon">
                  <WhyUsIcon id={item.id} />
                </span>
                <h3 className="ras-why-pillar-title">{item.label}</h3>
                <p className="ras-why-pillar-desc">{item.description}</p>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
