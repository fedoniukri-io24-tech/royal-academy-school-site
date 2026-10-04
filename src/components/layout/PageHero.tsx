import type { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';

const HERO_IMAGE = '/school-assets/hero-landmarks.jpg';

type PageHeroProps = {
  title: string;
  /** Друга строка заголовка золотим акцентом, як на головній */
  titleAccent?: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: ReactNode;
  image?: string;
  /** Кадрування фону, напр. `center 30%` */
  imageObjectPosition?: string;
};

export function PageHero({
  title,
  titleAccent,
  subtitle,
  breadcrumbs,
  actions,
  image = HERO_IMAGE,
  imageObjectPosition,
}: PageHeroProps) {
  return (
    <section className="hero hero--landing hero--page" aria-labelledby="page-hero-title">
      <div className="hero-bg" aria-hidden="true">
        <img
          src={image}
          alt=""
          style={imageObjectPosition ? { objectPosition: imageObjectPosition } : undefined}
        />
      </div>

      <div className="hero-inner">
        <div className="hero-content hero-content--page">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <Breadcrumbs items={breadcrumbs} variant="dark" />
          ) : null}
          <span className="ras-landing-rule ras-landing-rule--light" aria-hidden="true" />
          <h1 className="hero-title" id="page-hero-title">
            {titleAccent ? (
              <>
                <span className="hero-title-line">{title}</span>
                <span className="hero-title-line hero-title-line--accent">{titleAccent}</span>
              </>
            ) : (
              <span className="hero-title-line">{title}</span>
            )}
          </h1>
          {subtitle ? <p className="hero-lead">{subtitle}</p> : null}
          {actions ? <div className="hero-actions">{actions}</div> : null}
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
