interface HighlightedTextWithDotsProps {
  children: string;
  colorBackground: string;
  colorDots: string;
  colorText: string;
  widthDots?: number;
  widthBorder?: number;
}

export function HighlightedTextWithDots({
  children,
  colorBackground,
  colorDots,
  colorText,
  widthDots = 8,
  widthBorder = 3,
}: HighlightedTextWithDotsProps) {
  const offset = -3 * (widthBorder === 1 ? widthBorder : widthBorder / 2.5);
  const offsetX = -3 * (widthBorder === 1 ? widthBorder : widthBorder / 1.5);

  const dots = [
    { top: offset, left: offsetX },
    { top: offset, right: offsetX },
    { bottom: offset, left: offsetX },
    { bottom: offset, right: offsetX },
  ];

  return (
    <span
      className="ras-highlight-dots"
      style={{
        backgroundColor: colorBackground,
        borderColor: colorDots,
        color: colorText,
        borderWidth: widthBorder,
        paddingTop: widthDots >= 10 ? 3 : 6,
        paddingBottom: widthDots >= 10 ? 0 : 3,
      }}
    >
      {children}
      {dots.map((pos, idx) => (
        <span
          key={idx}
          className="ras-highlight-dot"
          style={{
            backgroundColor: colorDots,
            width: widthDots,
            height: widthDots,
            ...pos,
          }}
        />
      ))}
    </span>
  );
}
