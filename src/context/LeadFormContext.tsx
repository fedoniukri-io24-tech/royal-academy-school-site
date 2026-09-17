'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { LeadFormModal } from '@/components/lead-form/LeadFormModal';
import { lockScroll, unlockScroll } from '@/lib/scrollLock';

export type LeadFormIntent = 'consultation' | 'level-test' | 'general';

type LeadFormContextValue = {
  open: (intent?: LeadFormIntent) => void;
  close: () => void;
  isOpen: boolean;
  intent: LeadFormIntent;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<LeadFormIntent>('consultation');

  const open = useCallback((nextIntent: LeadFormIntent = 'consultation') => {
    setIntent(nextIntent);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    lockScroll();
    window.addEventListener('keydown', onKeyDown);

    return () => {
      unlockScroll();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close]);

  const value = useMemo(
    () => ({ open, close, isOpen, intent }),
    [open, close, isOpen, intent],
  );

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <LeadFormModal />
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error('useLeadForm must be used within LeadFormProvider');
  }
  return context;
}
