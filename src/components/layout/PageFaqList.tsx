'use client';

import { Accordion } from '@/components/ui/Accordion';

export type PageFaqItem = {
  q: string;
  a: string;
  emoji?: string;
};

type PageFaqListProps = {
  items: readonly PageFaqItem[];
};

/** FAQ на внутрішніх сторінках — той самий accordion, що на головній */
export function PageFaqList({ items }: PageFaqListProps) {
  return (
    <div className="site-faq-list" role="list">
      {items.map((item, i) => (
        <div key={item.q} role="listitem">
          <Accordion
            title={item.q}
            content={item.a}
            emoji={item.emoji}
            index={i + 1}
          />
        </div>
      ))}
    </div>
  );
}
