import type { ReactNode } from 'react';
import { SectionReveal } from './SectionReveal';

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

export function SectionHeader({ kicker, title, subtitle, light, align = 'left' }: SectionHeaderProps) {
  return (
    <SectionReveal>
      <div className={`ras-section-head${light ? ' light' : ''}${align === 'center' ? ' center' : ''}`}>
        <p className="ras-kicker">{kicker}</p>
        <h2 className="ras-section-title">{title}</h2>
        {subtitle && <p className="ras-section-sub">{subtitle}</p>}
      </div>
    </SectionReveal>
  );
}
