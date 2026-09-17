import type { ReactNode } from 'react';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';

function HeroProp({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={`hero-prop ${className}`}>
      <div className="hero-prop-frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hero-prop-content">{children}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet="/school-assets/hero-mobile.png" />
          <img src="/school-assets/hero-desktop.png" alt="" />
        </picture>
      </div>

      <HeroProp className="hero-prop--glasses">
        <svg viewBox="0 0 80 32" width="104" height="42" aria-hidden="true">
          <circle cx="22" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="58" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M35 16h10" stroke="currentColor" strokeWidth="2.2" />
          <path d="M9 14c-4-6-8-6-8-6M71 14c4-6 8-6 8-6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </HeroProp>

      <HeroProp className="hero-prop--desk">
        <div className="hero-desk-stack" aria-hidden="true">
          <span className="hero-desk-board" />
          <span className="hero-desk-note" />
          <span className="hero-desk-pen" />
        </div>
      </HeroProp>

      <HeroProp className="hero-prop--photo">
        <div className="hero-polaroid">
          <img src="/school-assets/programs/adults.png" alt="" loading="lazy" decoding="async" />
        </div>
      </HeroProp>

      <HeroProp className="hero-prop--laptop">
        <svg viewBox="0 0 88 56" width="112" height="72" aria-hidden="true">
          <path
            d="M8 8h72v40H8V8z"
            fill="rgba(255,255,255,0.92)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M4 48h80l4 6H0l4-6z" fill="rgba(255,255,255,0.75)" stroke="currentColor" strokeWidth="1.2" />
          <rect x="14" y="14" width="60" height="28" rx="2" fill="rgba(74,98,128,0.18)" />
        </svg>
      </HeroProp>

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="hero-line hero-line--sans">преміальна</span>
            <span className="hero-line hero-line--serif">школа мов</span>
            <span className="hero-line hero-line--sans hero-line--offset">онлайн</span>
          </h1>

          <div className="hero-actions">
            <p className="hero-desc">
              Royal Academy School — освіта, яка відкриває нові можливості, дозволяє подорожувати,
              розвиватися та досягати більшого.
            </p>

            <LeadFormTrigger intent="consultation" className="hero-cta">
              <span className="hero-cta-text">Обрати формат навчання</span>
              <span className="hero-cta-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                  <path
                    d="M5 12h12M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </LeadFormTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
