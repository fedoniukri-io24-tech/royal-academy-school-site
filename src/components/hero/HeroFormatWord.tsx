'use client';

import { useEffect, useState } from 'react';

const WORDS = ['онлайн', 'офлайн'];
const FLIP_INDEX = 1;
const HOLD_MS = 3000;
const FLIP_MS = 480;

export function HeroFormatWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    let holdTimer: number;
    let flipTimer: number;

    const schedule = () => {
      holdTimer = window.setTimeout(() => {
        setIsFlipping(true);
        flipTimer = window.setTimeout(() => {
          setWordIndex((index) => (index + 1) % WORDS.length);
          setIsFlipping(false);
          schedule();
        }, FLIP_MS);
      }, HOLD_MS);
    };

    schedule();

    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(flipTimer);
    };
  }, []);

  const word = WORDS[wordIndex];
  const nextWord = WORDS[(wordIndex + 1) % WORDS.length];

  return (
    <span
      className="hero-line hero-line--sans hero-line--offset hero-format-word"
      aria-live="polite"
      aria-atomic="true"
    >
      {word.split('').map((letter, index) => {
        if (index !== FLIP_INDEX) {
          return (
            <span key={index} className="hero-format-letter">
              {letter}
            </span>
          );
        }

        return (
          <span
            key={index}
            className={`hero-format-flip${isFlipping ? ' hero-format-flip--active' : ''}`}
          >
            <span className="hero-format-flip-pane hero-format-flip-pane--current">{letter}</span>
            <span className="hero-format-flip-pane hero-format-flip-pane--next">{nextWord[index]}</span>
          </span>
        );
      })}
    </span>
  );
}
