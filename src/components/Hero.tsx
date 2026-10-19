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
            <span className="hero-title-line">Світ відкривається,</span>
            <span className="hero-title-line">
              <span className="hero-title-line--accent">коли ти</span> знаєш мови.
            </span>
          </h1>

          <div className="hero-actions">
            <LeadFormTrigger intent="consultation" className="hero-btn hero-btn--primary">
              Звʼязатися
              <span aria-hidden="true">→</span>
            </LeadFormTrigger>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll__mouse">
          <span className="hero-scroll__wheel" />
        </span>
      </div>

      <div className="hero-transition" aria-hidden="true">
        <div className="hero-transition-fade" />
      </div>
    </section>
  );
}
