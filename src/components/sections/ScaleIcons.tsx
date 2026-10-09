const stroke = 2.2;

const ICONS = {
  experience: (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth={stroke} />
      <path
        d="M24 14v11l7 4"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  students: (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <circle cx="18" cy="15" r="5" stroke="currentColor" strokeWidth={stroke} />
      <circle cx="31" cy="16" r="4.5" stroke="currentColor" strokeWidth={stroke} />
      <path
        d="M7 36c0-5.5 5-9.5 11-9.5s11 4 11 9.5M26 36c.4-4.2 3.8-7.2 8-7.5"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  ),
  locations: (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <path
        d="M24 8c-7 0-12.5 5.4-12.5 12.2C11.5 29.5 24 40 24 40s12.5-10.5 12.5-19.8C36.5 13.4 31 8 24 8z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth={stroke} />
    </svg>
  ),
  online: (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth={stroke} />
      <ellipse cx="24" cy="24" rx="7" ry="16" stroke="currentColor" strokeWidth={stroke} />
      <path d="M8 24h32M10 16h28M10 32h28" stroke="currentColor" strokeWidth={stroke} />
    </svg>
  ),
} as const;

export type ScaleIconId = keyof typeof ICONS;

export function ScaleIcon({ id }: { id: ScaleIconId }) {
  return ICONS[id];
}
