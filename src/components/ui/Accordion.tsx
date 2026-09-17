'use client';

import { useId, useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
  emoji?: string;
  index?: number;
}

export function Accordion({ title, content, emoji, index }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`ras-accordion ras-card-surface${open ? ' open' : ''}`}>
      <button
        type="button"
        className="ras-accordion-header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="ras-accordion-leading">
          {index !== undefined && (
            <span className="ras-accordion-num" aria-hidden="true">
              {String(index).padStart(2, '0')}
            </span>
          )}
          {emoji && <span className="ras-accordion-emoji" aria-hidden="true">{emoji}</span>}
          <span className="ras-accordion-title">{title}</span>
        </span>
        <span className="ras-accordion-toggle" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className="ras-accordion-panel"
        aria-hidden={!open}
      >
        <div className="ras-accordion-content">{content}</div>
      </div>
    </div>
  );
}
