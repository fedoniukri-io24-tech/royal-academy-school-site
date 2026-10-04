'use client';

import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { HEADER_CTA } from '@/config/navigation';

export function PageCtaActions() {
  return (
    <LeadFormTrigger intent="consultation" className="hero-btn hero-btn--primary">
      {HEADER_CTA.program.label} →
    </LeadFormTrigger>
  );
}

export function PageCtaBandActions() {
  return (
    <div className="page-cta-band__actions">
      <LeadFormTrigger intent="consultation" className="ras-btn ras-footer-mock-btn">
        {HEADER_CTA.program.label} →
      </LeadFormTrigger>
    </div>
  );
}
