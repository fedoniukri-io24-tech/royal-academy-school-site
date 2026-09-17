import type { ReactNode } from 'react';

interface HighlightedTextProps {
  children: ReactNode;
  colorBack: string;
  colorText?: string;
}

export function HighlightedText({ children, colorBack, colorText }: HighlightedTextProps) {
  return (
    <span className="ras-highlight" style={{ backgroundColor: colorBack, color: colorText }}>
      {children}
    </span>
  );
}
