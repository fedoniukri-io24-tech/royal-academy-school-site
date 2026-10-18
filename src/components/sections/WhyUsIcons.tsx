const sw = 2;

const PATHS = {
  global: (
    <>
      <circle cx="24" cy="24" r="16.5" />
      <ellipse cx="24" cy="24" rx="7" ry="16.5" />
      <path d="M8 24h32M10.5 15.5h27M10.5 32.5h27" strokeLinecap="round" />
    </>
  ),
  teachers: (
    <>
      <circle cx="18" cy="15" r="5" />
      <circle cx="31" cy="16" r="4.2" />
      <path
        d="M7.5 36.5c1.2-6 5.4-9.5 10.5-9.5s9.2 3.4 10.4 9.2"
        strokeLinecap="round"
      />
      <path
        d="M27 35.5c1-4.6 4.2-7.2 7.8-7.2 2.6 0 4.8 1.2 6.2 3.4"
        strokeLinecap="round"
      />
    </>
  ),
  results: (
    <>
      <path d="M14 34V22M24 34V14M34 34V26" strokeLinecap="round" />
      <path d="M11 34h26" strokeLinecap="round" />
      <path d="M14 18l10-6 10 8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  community: (
    <path
      d="M24 10.5l2.9 8.7h9.2l-7.4 5.4 2.8 8.8L24 28.2l-7.5 5.2 2.8-8.8-7.4-5.4h9.2L24 10.5z"
      strokeLinejoin="round"
    />
  ),
  years: (
    <>
      <circle cx="24" cy="25" r="14" />
      <path d="M24 18v8l5.5 3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 9.5h12M24 7v2.5" strokeLinecap="round" />
    </>
  ),
  locations: (
    <>
      <path
        d="M24 39s-11-9.4-11-17.2a11 11 0 1 1 22 0C35 29.6 24 39 24 39z"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="21.5" r="4" />
    </>
  ),
  online: (
    <>
      <rect x="8" y="11" width="32" height="21" rx="3" />
      <path d="M18 38h12M24 32v6" strokeLinecap="round" />
      <path
        d="M16.5 19.5c2.2-2 4.8-3 7.5-3s5.3 1 7.5 3M19.5 23c1.4-1.2 3-1.8 4.5-1.8s3.1.6 4.5 1.8"
        strokeLinecap="round"
      />
      <circle cx="24" cy="26.5" r="1.4" fill="url(#FILL)" stroke="none" />
    </>
  ),
  students: (
    <>
      <circle cx="24" cy="14" r="5" />
      <circle cx="12.5" cy="17" r="3.6" />
      <circle cx="35.5" cy="17" r="3.6" />
      <path
        d="M14 36.5c1.4-6.2 5.2-9.5 10-9.5s8.6 3.3 10 9.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 34.5c1-4.2 3.4-6.6 6.4-7.2M40.5 34.5c-1-4.2-3.4-6.6-6.4-7.2"
        strokeLinecap="round"
      />
    </>
  ),
  corporate: (
    <>
      <rect x="9" y="16" width="30" height="22" rx="3" />
      <path d="M18 16v-2.5a3.5 3.5 0 0 1 3.5-3.5h5A3.5 3.5 0 0 1 30 13.5V16" />
      <path d="M9 24h30" />
      <path d="M22 28h4" strokeLinecap="round" />
    </>
  ),
  exams: (
    <>
      <path
        d="M15 10h14l6 6v22a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z"
        strokeLinejoin="round"
      />
      <path d="M29 10v6h6" strokeLinejoin="round" />
      <path d="M17.5 24.5l3.2 3.2 6.6-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 34h13" strokeLinecap="round" />
    </>
  ),
  ages: (
    <>
      <path d="M12 36V16.5L24 11l12 5.5V36" strokeLinejoin="round" />
      <path d="M24 11v25" />
      <path
        d="M16.5 21.5h4.5M16.5 26.5h4.5M27 21.5h4.5M27 26.5h4.5"
        strokeLinecap="round"
      />
    </>
  ),
  translation: (
    <>
      <circle cx="18" cy="20" r="9" />
      <circle cx="30" cy="28" r="9" />
      <path
        d="M14 17.5h8M18 12.5c1.8 2.8 2.8 5.4 2.8 8s-1 5.2-2.8 8M22 20.5c-1.6 0-3.2.2-4.6.6"
        strokeLinecap="round"
      />
      <path
        d="M26.5 31.5h7M30.5 24.5c1.4 2.2 2.1 4.2 2.1 6.2"
        strokeLinecap="round"
      />
    </>
  ),
} as const;

export type WhyUsIconId = keyof typeof PATHS;

export function WhyUsIcon({ id }: { id: WhyUsIconId }) {
  const strokeId = `ras-gold-stroke-${id}`;
  const fillId = `ras-gold-fill-${id}`;

  return (
    <svg viewBox="0 0 48 48" width="64" height="64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={strokeId} x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff4d6" />
          <stop offset="32%" stopColor="#e8d4a8" />
          <stop offset="68%" stopColor="#d0b06a" />
          <stop offset="100%" stopColor="#a8842e" />
        </linearGradient>
        <linearGradient id={fillId} x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8d4a8" />
          <stop offset="100%" stopColor="#c9a24d" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${strokeId})`}
        strokeWidth={sw}
        fill="none"
      >
        {id === 'online' ? (
          <>
            <rect x="8" y="11" width="32" height="21" rx="3" />
            <path d="M18 38h12M24 32v6" strokeLinecap="round" />
            <path
              d="M16.5 19.5c2.2-2 4.8-3 7.5-3s5.3 1 7.5 3M19.5 23c1.4-1.2 3-1.8 4.5-1.8s3.1.6 4.5 1.8"
              strokeLinecap="round"
            />
            <circle cx="24" cy="26.5" r="1.4" fill={`url(#${fillId})`} stroke="none" />
          </>
        ) : (
          PATHS[id]
        )}
      </g>
    </svg>
  );
}
