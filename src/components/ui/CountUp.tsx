'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({ value, suffix = '', duration = 1800 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplay(value);
      setDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setDone(true);
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * easeOutCubic(progress)));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, done]);

  return (
    <span ref={ref} className="ras-stat-value-inner">
      {display}
      {suffix && <span className="ras-stat-suffix">{suffix}</span>}
    </span>
  );
}
