import Link from 'next/link';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <picture>
          <source media="(max-width: 900px)" srcSet="/school-assets/hero-mobile2.png" />
          <img src="/school-assets/hero-desktop2.png" alt="" />
        </picture>
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
            Світ відкритий,
            <br />
            коли ти знаєш мови
          </h1>

          <p className="hero-desc">
            Royal Academy School — преміальна освіта, яка відкриває нові можливості, дозволяє
            подорожувати, розвиватися та досягати більшого.
          </p>

          <div className="hero-actions">
            <LeadFormTrigger intent="consultation" className="hero-btn hero-btn--primary">
              Розпочати свій шлях →
            </LeadFormTrigger>

            <Link href="#programs" className="hero-btn hero-btn--ghost">
              <span className="hero-btn-play" aria-hidden="true">▶</span>
              Дізнатись більше
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-transition" aria-hidden="true">
        <div className="hero-transition-fade" />
        <div className="hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,58 C280,82 460,34 720,50 C980,66 1160,30 1440,54 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
