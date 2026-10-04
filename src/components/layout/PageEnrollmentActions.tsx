'use client';

import Link from 'next/link';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { SITE_CONTACTS } from '@/data/siteContacts';
export function PageEnrollmentActions() {
  return (
    <div className="site-enroll-path__actions">
      <LeadFormTrigger intent="consultation" className="hero-btn hero-btn--primary">
        Залишити заявку →
      </LeadFormTrigger>
      <a href="tel:+380635053023" className="site-enroll-path__phone">
        063 505-30-23
      </a>
      <Link href="/contacts" className="site-enroll-path__link">
        Контакти та адреса
      </Link>
    </div>
  );
}

export function PageEnrollmentMeta() {
  return (
    <p className="site-enroll-path__hours">
      {SITE_CONTACTS.offer} · Пн–Пт 9:00–20:00 · {SITE_CONTACTS.locations}
    </p>
  );
}
