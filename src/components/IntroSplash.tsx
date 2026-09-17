'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { HeroDecorations } from '@/components/hero/HeroDecorations';
import { lockScroll, unlockScroll } from '@/lib/scrollLock';

const INTRO_SEEN_KEY = 'ras-intro-seen';
const EXIT_DELAY_MS = 2400;
const HIDE_DELAY_MS = 3100;

type IntroPhase = 'visible' | 'exiting' | 'hidden';

function markIntroDone() {
  document.documentElement.classList.remove('intro-splash-pending');
  document.documentElement.style.removeProperty('background-color');
}

export function IntroSplash() {
  const [phase, setPhase] = useState<IntroPhase>('visible');

  useLayoutEffect(() => {
    const seen = sessionStorage.getItem(INTRO_SEEN_KEY) === '1';
    if (seen) {
      markIntroDone();
      setPhase('hidden');
      return;
    }

    document.documentElement.classList.add('intro-splash-pending');
    document.documentElement.style.backgroundColor = '#8e1a28';

    const exitTimer = window.setTimeout(() => setPhase('exiting'), EXIT_DELAY_MS);
    const hideTimer = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1');
      markIntroDone();
      setPhase('hidden');
    }, HIDE_DELAY_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === 'visible' || phase === 'exiting') {
      lockScroll();
      return () => unlockScroll();
    }
    return undefined;
  }, [phase]);

  if (phase === 'hidden') {
    return null;
  }

  return (
    <div
      className={`intro-splash${phase === 'exiting' ? ' intro-splash--exiting' : ''}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="intro-splash-glow" />
      <div className="intro-splash-shine" />

      <div className="intro-splash-props" aria-hidden="true">
        <HeroDecorations />
      </div>

      <div className="intro-splash-content">
        <img
          src="/school-assets/logo.png"
          alt=""
          className="intro-splash-logo"
          width={96}
          height={96}
        />
        <h1 className="intro-splash-title">
          <span className="intro-splash-line intro-splash-line--main">Royal Academy</span>
          <span className="intro-splash-line intro-splash-line--accent">School</span>
        </h1>
      </div>
    </div>
  );
}
