'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useLeadForm, type LeadFormIntent } from '@/context/LeadFormContext';

type LeadFormTriggerProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  intent?: LeadFormIntent;
  children: ReactNode;
};

export function LeadFormTrigger({
  intent = 'consultation',
  children,
  className,
  onClick,
  ...props
}: LeadFormTriggerProps) {
  const { open } = useLeadForm();

  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        open(intent);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
