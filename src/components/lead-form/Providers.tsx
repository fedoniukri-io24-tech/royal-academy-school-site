'use client';

import type { ReactNode } from 'react';
import { LeadFormProvider } from '@/context/LeadFormContext';

export function Providers({ children }: { children: ReactNode }) {
  return <LeadFormProvider>{children}</LeadFormProvider>;
}
