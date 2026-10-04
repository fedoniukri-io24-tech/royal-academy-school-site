'use client';

import type { ReactNode } from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';

type SiteBlockRevealProps = {
  children: ReactNode;
  delay?: number;
};

export function SiteBlockReveal({ children, delay = 0 }: SiteBlockRevealProps) {
  return (
    <SectionReveal delay={delay} distance={28}>
      {children}
    </SectionReveal>
  );
}
