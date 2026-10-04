import type { ReactNode } from 'react';
import Link from 'next/link';

export type StepCard = {
  num: string;
  title?: string;
  text: string;
};

export type PhotoStepCard = StepCard & {
  image: string;
  objectPosition?: string;
};

export function PageLeadPanel({ children }: { children: ReactNode }) {
  return (
    <div className="site-guide-lead">
      <p className="site-guide-lead__text">{children}</p>
    </div>
  );
}

/** Простий текстовий блок без карток — кілька абзаців для читання. */
export function PageProse({
  paragraphs,
  children,
  wide = false,
}: {
  paragraphs?: readonly string[];
  children?: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={['site-prose', wide ? 'site-prose--wide' : ''].filter(Boolean).join(' ')}>
      {children}
      {paragraphs?.map((text) => (
        <p key={text.slice(0, 48)}>{text}</p>
      ))}
    </div>
  );
}

type ProseSplitProps = {
  /** Якщо передано — заголовок у лівій колонці, фото стартує з його рівня */
  title?: string;
  lead?: string;
  paragraphs: readonly string[];
  image: string;
  objectPosition?: string;
  highlights?: readonly { label: string; text: string }[];
};

/** Текст (+ опційно заголовок) і фото в рядку; плажки — на всю ширину під ними. */
export function PageProseSplit({
  title,
  lead,
  paragraphs,
  image,
  objectPosition = 'center',
  highlights,
}: ProseSplitProps) {
  return (
    <div className={['site-prose-split', title ? 'site-prose-split--with-head' : ''].filter(Boolean).join(' ')}>
      <div className="site-prose-split__main">
        {title ? (
          <header className="ras-mock-head ras-mock-head--left site-block__head site-prose-split__head">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title site-block__title">{title}</h2>
            {lead ? <p className="site-block__lead">{lead}</p> : null}
          </header>
        ) : null}
        <figure className="site-prose-split__photo">
          <img src={image} alt="" loading="lazy" decoding="async" style={{ objectPosition }} />
        </figure>
        <div className="site-prose-split__copy">
          <PageProse paragraphs={paragraphs} wide />
        </div>
      </div>
      {highlights && highlights.length > 0 ? (
        <ul className="site-prose-split__facts">
          {highlights.map((item) => (
            <li key={item.label}>
              <span className="site-prose-split__fact-label">{item.label}</span>
              <span className="site-prose-split__fact-text">{item.text}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function PageStepCards({ steps }: { steps: readonly StepCard[] }) {
  return (
    <ol className="site-step-list site-step-list--rich">
      {steps.map((step) => (
        <li key={step.num}>
          <span className="site-step-list__num" aria-hidden="true">{step.num}</span>
          <div className="site-step-list__body">
            {step.title ? <span className="site-step-list__title">{step.title}</span> : null}
            <span className={step.title ? 'site-step-list__text' : undefined}>{step.text}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Повноширинні картки з фото — кроки / переваги програми. */
export function PagePhotoStepCards({ steps }: { steps: readonly PhotoStepCard[] }) {
  return (
    <ul className="site-guide-photo-steps">
      {steps.map((step) => (
        <li key={step.num} className="site-guide-photo-step">
          <figure className="site-guide-photo-step__media">
            <img
              src={step.image}
              alt=""
              loading="lazy"
              decoding="async"
              style={step.objectPosition ? { objectPosition: step.objectPosition } : undefined}
            />
          </figure>
          <div className="site-guide-photo-step__body">
            <span className="site-guide-photo-step__num" aria-hidden="true">
              {step.num}
            </span>
            <p className="site-guide-photo-step__text">{step.title ?? step.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Нумеровані блоки сіткою — результати / аудиторія / гайди. */
export function PageStepBlocks({
  steps,
  columns = 4,
}: {
  steps: readonly StepCard[];
  columns?: 1 | 2 | 3 | 4;
}) {
  return (
    <ol className={`site-step-blocks site-step-blocks--${columns}`}>
      {steps.map((step) => (
        <li key={step.num} className="site-step-block">
          <span className="site-step-block__num" aria-hidden="true">
            {step.num}
          </span>
          {step.title ? (
            <>
              <p className="site-step-block__title">{step.title}</p>
              <p className="site-step-block__text">{step.text}</p>
            </>
          ) : (
            <p className="site-step-block__text">{step.text}</p>
          )}
        </li>
      ))}
    </ol>
  );
}

export function PageLevelsPanel({
  levels,
  pricingHref = '/pricing',
  pricingLabel = 'Дивитися ціни',
}: {
  levels: readonly string[];
  pricingHref?: string;
  pricingLabel?: string;
}) {
  return (
    <div className="site-levels-panel">
      <div className="site-levels-panel__main">
        <p className="site-levels-panel__label">Рівні CEFR</p>
        <ul className="site-levels-panel__list">
          {levels.map((level) => (
            <li key={level}>{level}</li>
          ))}
        </ul>
      </div>
      <aside className="site-levels-panel__aside">
        <p className="site-levels-panel__aside-text">Вартість залежить від формату та інтенсивності.</p>
        <Link href={pricingHref} className="site-guide-foot__link">
          {pricingLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </aside>
    </div>
  );
}

export type TariffItem = {
  name: string;
  detail: string;
  price: string;
  accent?: 'gold' | 'burgundy' | 'navy' | 'blue';
};

const TARIFF_ACCENT: TariffItem['accent'][] = ['gold', 'burgundy', 'navy', 'blue'];

export function PageTariffGrid({ items }: { items: readonly TariffItem[] }) {
  return (
    <ul className="site-tariff-grid">
      {items.map((item, i) => {
        const accent = item.accent ?? TARIFF_ACCENT[i % TARIFF_ACCENT.length];
        return (
          <li key={item.name} className={`site-tariff-card site-tariff-card--${accent}`}>
            <h3 className="site-tariff-card__name">{item.name}</h3>
            <p className="site-tariff-card__detail">{item.detail}</p>
            <p className="site-tariff-card__price">{item.price}</p>
          </li>
        );
      })}
    </ul>
  );
}

export function PageTopicCards({ items }: { items: readonly { title: string; text: string }[] }) {
  return (
    <ul className="site-topic-grid">
      {items.map((item, i) => (
        <li key={item.title} className="site-topic-card">
          <span className="site-topic-card__tag">Скоро · {String(i + 1).padStart(2, '0')}</span>
          <h3 className="site-topic-card__title">{item.title}</h3>
          <p className="site-topic-card__text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function PageChipPanel({
  label,
  items,
  align = 'left',
  variant = 'pill',
}: {
  label: string;
  items: readonly string[];
  align?: 'left' | 'center';
  /** blocks — прямокутні блоки замість pill */
  variant?: 'pill' | 'blocks';
}) {
  return (
    <div
      className={[
        'site-chip-panel',
        align === 'center' ? 'site-chip-panel--center' : '',
        variant === 'blocks' ? 'site-chip-panel--blocks' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="site-chip-panel__label">{label}</p>
      <ul className={variant === 'blocks' ? 'site-spec-blocks' : 'site-level-row'}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function PageLinkChips({
  label,
  items,
  align = 'left',
  variant = 'pill',
}: {
  label?: string;
  items: readonly { href: string; label: string; emoji?: string }[];
  align?: 'left' | 'center';
  /** plain — текстові лінки без pill-карток */
  variant?: 'pill' | 'plain';
}) {
  return (
    <div
      className={[
        'site-chip-panel',
        align === 'center' ? 'site-chip-panel--center' : '',
        !label ? 'site-chip-panel--flush' : '',
        variant === 'plain' ? 'site-chip-panel--plain' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label ? <p className="site-chip-panel__label">{label}</p> : null}
      <ul
        className={[
          'site-level-row',
          'site-level-row--links',
          variant === 'plain' ? 'site-level-row--plain' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={
                variant === 'plain' ? 'site-level-row__text-link' : 'site-level-row__link'
              }
            >
              {item.emoji ? (
                <span className="site-level-row__emoji" aria-hidden="true">
                  {item.emoji}
                </span>
              ) : null}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
