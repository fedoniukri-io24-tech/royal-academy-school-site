import type { ReactNode } from 'react';

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

export function HeroDecorations() {
  return (
    <>
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
          <img src="/school-assets/programs/adults.png" alt="" loading="eager" decoding="async" />
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
    </>
  );
}
