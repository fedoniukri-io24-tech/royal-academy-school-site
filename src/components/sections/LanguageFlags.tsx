/** SVG-прапори — видно на всіх пристроях (на Windows emoji-прапори часто не рендеряться). */

type FlagProps = { className?: string; title: string };

export function FlagGB({ className, title }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 60 42" aria-hidden="true">
      <title>{title}</title>
      <rect width="60" height="42" fill="#012169" />
      <path d="M0 0l60 42M60 0L0 42" stroke="#fff" strokeWidth="8" />
      <path d="M0 0l60 42M60 0L0 42" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v42M0 21h60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0v42M0 21h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function FlagDE({ className, title }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 60 42" aria-hidden="true">
      <title>{title}</title>
      <rect width="60" height="14" y="0" fill="#000" />
      <rect width="60" height="14" y="14" fill="#D00" />
      <rect width="60" height="14" y="28" fill="#FFCE00" />
    </svg>
  );
}

export function FlagFR({ className, title }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 60 42" aria-hidden="true">
      <title>{title}</title>
      <rect width="20" height="42" x="0" fill="#002395" />
      <rect width="20" height="42" x="20" fill="#fff" />
      <rect width="20" height="42" x="40" fill="#ED2939" />
    </svg>
  );
}

export function FlagES({ className, title }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 60 42" aria-hidden="true">
      <title>{title}</title>
      <rect width="60" height="42" fill="#AA151B" />
      <rect width="60" height="14" y="14" fill="#F1BF00" />
    </svg>
  );
}

export function FlagIT({ className, title }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 60 42" aria-hidden="true">
      <title>{title}</title>
      <rect width="20" height="42" x="0" fill="#009246" />
      <rect width="20" height="42" x="20" fill="#fff" />
      <rect width="20" height="42" x="40" fill="#CE2B37" />
    </svg>
  );
}

const FLAG_MAP = {
  english: FlagGB,
  german: FlagDE,
  french: FlagFR,
  spanish: FlagES,
  italian: FlagIT,
} as const;

export type LanguageFlagId = keyof typeof FLAG_MAP;

export function LanguageFlag({ id, name }: { id: LanguageFlagId; name: string }) {
  const Comp = FLAG_MAP[id];
  return <Comp className="home-lang-card__flag-svg" title={name} />;
}
