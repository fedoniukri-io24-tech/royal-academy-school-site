import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';

export function Hero() {
  return (
    <section className="hero hero--landing" id="home">
      <div className="hero-bg" aria-hidden="true">
        <img src="/school-assets/hero-landmarks.jpg" alt="" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <span className="ras-landing-rule ras-landing-rule--light" aria-hidden="true" />
          <h1 className="hero-title">
            <span className="hero-title-line">Світ відкритий,</span>
            <span className="hero-title-line hero-title-line--accent">коли ти знаєш мови.</span>
          </h1>

          <div className="hero-actions">
            <LeadFormTrigger intent="consultation" className="hero-btn hero-btn--primary">
              Розпочати шлях →
            </LeadFormTrigger>
          </div>
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,44 C320,62 640,30 960,48 C1200,60 1360,38 1440,46 L1440,72 L0,72 Z"
            fill="#fafaf9"
          />
        </svg>
      </div>
    </section>
  );
}
