'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { LeadFormTrigger } from '@/components/lead-form/LeadFormTrigger';
import {
  LEVEL_RESULT_COPY,
  LEVEL_TEST_QUESTIONS,
  scoreToLevel,
} from '@/data/levelTest';

type Phase = 'intro' | 'quiz' | 'result';

export function LevelTestQuiz() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const total = LEVEL_TEST_QUESTIONS.length;
  const question = LEVEL_TEST_QUESTIONS[step];
  const selected = question ? answers[question.id] : undefined;

  const correctCount = useMemo(() => {
    return LEVEL_TEST_QUESTIONS.reduce((sum, q) => {
      const chosen = answers[q.id];
      const ok = q.options.find((o) => o.id === chosen)?.correct;
      return ok ? sum + 1 : sum;
    }, 0);
  }, [answers]);

  const level = scoreToLevel(correctCount, total);
  const result = LEVEL_RESULT_COPY[level];
  const progress = Math.round(((step + (selected ? 1 : 0)) / total) * 100);

  const choose = (optionId: string) => {
    if (!question) return;
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  };

  const goNext = () => {
    if (!selected) return;
    if (step >= total - 1) {
      setPhase('result');
      return;
    }
    setStep((s) => s + 1);
  };

  const restart = () => {
    setPhase('intro');
    setStep(0);
    setAnswers({});
  };

  if (phase === 'intro') {
    return (
      <div className="level-exam">
        <div className="level-exam__card level-exam__card--intro">
          <p className="level-exam__badge">Placement test · English</p>
          <h1 className="level-exam__title">Тест рівня англійської</h1>
          <p className="level-exam__lead">
            10 питань з варіантами відповідей. Наприкінці ви отримаєте орієнтовний рівень
            за шкалою CEFR (A1–C1) і рекомендацію щодо програми.
          </p>
          <ul className="level-exam__rules">
            <li>Оберіть одну відповідь на кожне питання</li>
            <li>Можна повернутися до попереднього питання</li>
            <li>Тест займе близько 3–5 хвилин</li>
          </ul>
          <button
            type="button"
            className="hero-btn hero-btn--primary level-exam__start"
            onClick={() => setPhase('quiz')}
          >
            Почати тест
          </button>
          <Link href="/" className="level-exam__back-home">
            ← На головну
          </Link>
        </div>
      </div>
    );
  }

  if (phase === 'result') {
    return (
      <div className="level-exam">
        <div className="level-exam__card level-exam__card--result">
          <p className="level-exam__badge">Результат тесту</p>
          <p className="level-exam__level-code">{level}</p>
          <h2 className="level-exam__level-title">{result.title}</h2>
          <p className="level-exam__score">
            Правильних відповідей: <strong>{correctCount}</strong> з {total}
          </p>
          <div className="level-exam__result-body">
            <p>{result.description}</p>
            <p className="level-exam__reco">{result.recommendation}</p>
          </div>
          <div className="level-exam__actions">
            <LeadFormTrigger intent="consultation" className="hero-btn hero-btn--primary">
              Підібрати програму
            </LeadFormTrigger>
            <button type="button" className="hero-btn hero-btn--ghost level-exam__btn-light" onClick={restart}>
              Пройти ще раз
            </button>
          </div>
          <Link href="/programs" className="level-exam__link">
            Дивитися всі програми →
          </Link>
          <p className="level-exam__note">
            Онлайн-тест дає орієнтир. Для точнішої діагностики запишіться на консультацію.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="level-exam">
      <div className="level-exam__card level-exam__card--quiz">
        <header className="level-exam__top">
          <div className="level-exam__top-row">
            <p className="level-exam__badge">Питання {step + 1} / {total}</p>
            <p className="level-exam__percent">{Math.min(progress, 100)}%</p>
          </div>
          <div className="level-exam__progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <span style={{ width: `${(step / total) * 100}%` }} />
          </div>
          <ol className="level-exam__dots" aria-hidden="true">
            {LEVEL_TEST_QUESTIONS.map((q, i) => (
              <li
                key={q.id}
                className={[
                  i < step ? 'is-done' : '',
                  i === step ? 'is-current' : '',
                  answers[q.id] ? 'is-answered' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              />
            ))}
          </ol>
        </header>

        <div className="level-exam__body">
          <p className="level-exam__instruction">Оберіть правильний варіант</p>
          <h2 className="level-exam__prompt">{question.prompt}</h2>
          <ul className="level-exam__options">
            {question.options.map((option) => {
              const isActive = selected === option.id;
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    className={`level-exam__option${isActive ? ' is-active' : ''}`}
                    onClick={() => choose(option.id)}
                    aria-pressed={isActive}
                  >
                    <span className="level-exam__option-id">{option.id.toUpperCase()}</span>
                    <span className="level-exam__option-label">{option.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <footer className="level-exam__footer">
          <button
            type="button"
            className="hero-btn hero-btn--ghost level-exam__btn-light"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Назад
          </button>
          <button
            type="button"
            className="hero-btn hero-btn--primary"
            disabled={!selected}
            onClick={goNext}
          >
            {step >= total - 1 ? 'Завершити тест' : 'Наступне питання'}
          </button>
        </footer>
      </div>
    </div>
  );
}
