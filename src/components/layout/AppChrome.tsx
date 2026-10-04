import type { ReactNode } from 'react';
import { Header } from '@/components/Header';

/** Єдиний хедер для всього сайту — один раз у root layout. */
export function AppChrome({ children }: { children: ReactNode }) {
  return (
    <div id="ras-site">
      <Header />
      {children}
    </div>
  );
}
