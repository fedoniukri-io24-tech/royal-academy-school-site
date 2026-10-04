import type { WhyMockPillar } from '@/components/layout/PageWhyMockSection';
import { LANGUAGE_HUB_HIGHLIGHTS } from './sharedPageContent';

const ICONS = ['global', 'teachers', 'community', 'results'] as const;

export const LANGUAGE_HUB_WHY_PILLARS: readonly WhyMockPillar[] = LANGUAGE_HUB_HIGHLIGHTS.map(
  (item, i) => ({
    id: ICONS[i] ?? 'global',
    label: item.title ?? item.text,
    description: item.text,
  }),
);
