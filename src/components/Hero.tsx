import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { HeroDecorations } from '@/components/hero/HeroDecorations';
import { HeroFormatWord } from '@/components/hero/HeroFormatWord';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet="/school-assets/hero-mobile.png" />
          <img src="/school-assets/hero-desktop.png" alt="" />
        </picture>
      </div>

      <HeroDecorations />

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="hero-line hero-line--sans">преміальна</span>
            <span className="hero-line hero-line--serif">школа мов</span>
            <HeroFormatWord />
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
