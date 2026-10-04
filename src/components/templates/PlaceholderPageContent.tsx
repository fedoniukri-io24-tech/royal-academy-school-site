import type { ReactNode } from 'react';
import { PageSection } from '@/components/layout/PageSection';

type PlaceholderSection = {
  title: string;
  lead?: string;
  items?: string[];
  body?: ReactNode;
};

type PlaceholderPageContentProps = {
  sections: PlaceholderSection[];
};

export function PlaceholderPageContent({ sections }: PlaceholderPageContentProps) {
  return (
    <div className="site-page-body">
      <div className="ras-wrap site-page-stack">
        {sections.map((section) => (
          <PageSection key={section.title} title={section.title} lead={section.lead}>
            {section.body}
            {section.items ? (
              <ul className="site-check-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </PageSection>
        ))}
      </div>
    </div>
  );
}
