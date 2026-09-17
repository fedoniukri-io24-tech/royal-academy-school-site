import type { CSSProperties } from 'react';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import { PRICING } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function PricingSection() {
  return (
    <section className="ras-section ras-pricing ras-bg-white" id="pricing">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="Вартість" accent="навчання" />
          <p className="ras-lead">
            Стартова вартість. Детальні тарифи — на окремій сторінці «Ціни».
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="ras-pricing-discount ras-card-surface">
            <span className="ras-pricing-discount-emoji" aria-hidden="true">🎁</span>
            <p>
              Пакетна оплата за пів року — <strong>знижка 15%</strong> на будь-який формат навчання
            </p>
          </div>
        </SectionReveal>

        <div className="ras-pricing-grid">
          {PRICING.map((plan, i) => (
            <SectionReveal key={plan.id} delay={0.08 + i * 0.05}>
              <article
                className={`ras-price-card ras-card-surface${plan.featured ? ' ras-price-card--featured' : ''}`}
                style={{ '--price-accent': plan.accent } as CSSProperties}
              >
                {plan.featured && <span className="ras-price-badge">Популярний</span>}

                <div className="ras-price-card-top">
                  <h3 className="ras-card-title-split">
                    <span className="ras-card-title-sans">{plan.titleSans}</span>
                    <span className="ras-card-title-serif">{plan.titleSerif}</span>
                  </h3>
                  <span className="ras-price-emoji ras-emoji-deco" aria-hidden="true">{plan.emoji}</span>
                </div>

                <div className={`ras-price-amount${plan.priceSuffix ? ' ras-price-amount--text' : ''}`}>
                  {plan.pricePrefix && (
                    <span className="ras-price-prefix">{plan.pricePrefix}</span>
                  )}
                  <span className="ras-price-value">{plan.price}</span>
                  {plan.currency && <span className="ras-price-currency">{plan.currency}</span>}
                  {plan.priceSuffix && <span className="ras-price-suffix">{plan.priceSuffix}</span>}
                </div>

                {plan.period && <p className="ras-price-period">{plan.period}</p>}
                <p className="ras-price-note">{plan.note}</p>

                {plan.href === '#consultation' ? (
                  <LeadFormTrigger intent="consultation" className="ras-price-btn">
                    Детальніше
                  </LeadFormTrigger>
                ) : (
                  <a href={plan.href} className="ras-price-btn">Детальніше</a>
                )}
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="ras-pricing-cta ras-card-surface">
            <p>Потрібен детальний розрахунок під вашу мету та рівень?</p>
            <LeadFormTrigger intent="consultation" className="ras-btn ras-btn-primary">
              Отримати розрахунок
            </LeadFormTrigger>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
