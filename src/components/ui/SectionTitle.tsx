interface SectionTitleProps {
  variant?: 'split' | 'glass';
  main: string;
  accent?: string;
  small?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  variant = 'split',
  main,
  accent,
  small,
  align = 'center',
  light = false,
  className = '',
}: SectionTitleProps) {
  const base = `ras-title ras-title--${variant} ras-title--${align}${light ? ' ras-title--light' : ''}${className ? ` ${className}` : ''}`;

  if (variant === 'glass') {
    return (
      <h2 className={base}>
        {small && <span className="ras-title__small">{small}</span>}
        <span className="ras-title__glass-main">{main}</span>
      </h2>
    );
  }

  return (
    <h2 className={base}>
      <span className="ras-title__main">{main}</span>
      {accent && <span className="ras-title__accent">{accent}</span>}
    </h2>
  );
}
