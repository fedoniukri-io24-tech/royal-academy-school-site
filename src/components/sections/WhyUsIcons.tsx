const stroke = 2.2;

const ICONS = {
  global: (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth={stroke} />
      <ellipse cx="24" cy="24" rx="7" ry="17" stroke="currentColor" strokeWidth={stroke} />
      <path d="M7 24h34M9 15h30M9 33h30" stroke="currentColor" strokeWidth={stroke} />
    </svg>
  ),
  teachers: (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <circle cx="17" cy="14" r="5.5" stroke="currentColor" strokeWidth={stroke} />
      <circle cx="31" cy="14" r="5.5" stroke="currentColor" strokeWidth={stroke} />
      <path
        d="M6 36c0-6 5.5-10 11-10s11 4 11 10M24 36c0-5 4.5-8.5 9-8.5"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  ),
  results: (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <path
        d="M24 10l10 10-10 10-10-10 10-10z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <path
        d="M24 7l3.4 10h10.8l-8.7 6.6 3.3 10.8-8.8-6.8-8.8 6.8 3.3-10.8-8.7-6.6h10.8L24 7z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
    </svg>
  ),
} as const;

export type WhyUsIconId = keyof typeof ICONS;

export function WhyUsIcon({ id }: { id: WhyUsIconId }) {
  return ICONS[id];
}
