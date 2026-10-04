'use client';

import { useId, useState } from 'react';
import { SITE_CONTACTS } from '@/data/siteContacts';
import type { LeadFormIntent } from '@/context/LeadFormContext';

const INTENT_LABELS = {
  consultation: 'Підбір програми',
  'level-test': 'Тест рівня',
  general: 'Заявка',
} as const;

type LeadFormInlineProps = {
  intent?: LeadFormIntent;
  title?: string;
  lead?: string;
};

export function LeadFormInline({
  intent = 'consultation',
  title = 'Напишіть нам',
  lead = 'Залиште контакти — передзвонимо в робочі години (Пн–Пт 9:00–20:00).',
}: LeadFormInlineProps) {
  const titleId = useId();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="lead-form-inline lead-form-inline--success">
        <p className="lead-form-success-title">Дякуємо!</p>
        <p className="lead-form-success-text">Ми отримали заявку і звʼяжемося найближчим часом.</p>
      </div>
    );
  }

  return (
    <div className="lead-form-inline">
      <header className="lead-form-head">
        <span className="lead-form-rule" aria-hidden="true" />
        <h2 id={titleId} className="lead-form-title">{title}</h2>
        <p className="lead-form-lead">{lead}</p>
      </header>

      <form className="lead-form" onSubmit={handleSubmit} aria-labelledby={titleId}>
        <input type="hidden" name="intent" value={INTENT_LABELS[intent]} />

        <label className="lead-form-field">
          <span className="sr-only">Ім&apos;я</span>
          <input type="text" name="name" placeholder="Ім'я" autoComplete="name" required />
        </label>

        <label className="lead-form-field">
          <span className="sr-only">Телефон</span>
          <input type="tel" name="phone" placeholder="Телефон" autoComplete="tel" required />
        </label>

        <label className="lead-form-field">
          <span className="sr-only">Пошта</span>
          <input type="email" name="email" placeholder="Пошта" autoComplete="email" required />
        </label>

        <button type="submit" className="lead-form-submit">
          <span>Відправити</span>
          <span className="lead-form-submit-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M7 17L17 7M17 7H9M17 7v8"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </form>

      <div className="lead-form-alt">
        <p className="lead-form-alt-label">Або в Instagram</p>
        <a
          href={SITE_CONTACTS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="lead-form-alt-link"
        >
          {SITE_CONTACTS.instagram.label}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
