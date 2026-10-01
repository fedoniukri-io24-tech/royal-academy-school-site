'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { SITE_CONTACTS } from '@/data/siteContacts';
import { useLeadForm } from '@/context/LeadFormContext';

const INTENT_LABELS = {
  consultation: 'Підбір програми',
  'level-test': 'Тест рівня',
  general: 'Заявка',
} as const;

export function LeadFormModal() {
  const { isOpen, close, intent } = useLeadForm();
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }

    const timer = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 120);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="lead-form-root" role="presentation">
      <button
        type="button"
        className="lead-form-backdrop"
        aria-label="Закрити форму"
        onClick={close}
      />

      <div
        className="lead-form-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="lead-form-handle" aria-hidden="true" />

        <button type="button" className="lead-form-close" aria-label="Закрити" onClick={close}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {submitted ? (
          <div className="lead-form-success">
            <span className="lead-form-success-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path
                  d="M5 12.5l5 5L19 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="lead-form-success-title">Дякуємо!</p>
            <p className="lead-form-success-text">
              Ми отримали вашу заявку і зв&apos;яжемося з вами найближчим часом.
            </p>
            <button type="button" className="lead-form-submit" onClick={close}>
              <span>Закрити</span>
              <span className="lead-form-submit-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M5 12h12M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        ) : (
          <>
            <header className="lead-form-head">
              <p className="lead-form-kicker">{INTENT_LABELS[intent]}</p>
              <span className="lead-form-rule" aria-hidden="true" />
              <h2 id={titleId} className="lead-form-title">Зв&apos;язатися з нами</h2>
              <p className="lead-form-lead">
                Залиште контакти — ми передзвонимо та допоможемо обрати програму.
              </p>
            </header>

            <form className="lead-form" onSubmit={handleSubmit}>
              <input type="hidden" name="intent" value={INTENT_LABELS[intent]} />

              <label className="lead-form-field">
                <span className="sr-only">Ім&apos;я</span>
                <input
                  ref={firstFieldRef}
                  type="text"
                  name="name"
                  placeholder="Ім'я"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="lead-form-field">
                <span className="sr-only">Телефон</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="lead-form-field">
                <span className="sr-only">Пошта</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Пошта"
                  autoComplete="email"
                  required
                />
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
              <p className="lead-form-alt-label">Або напишіть нам</p>
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
          </>
        )}
      </div>
    </div>
  );
}
