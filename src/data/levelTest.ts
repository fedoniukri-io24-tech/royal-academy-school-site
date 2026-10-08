export type LevelCode = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type LevelTestQuestion = {
  id: string;
  prompt: string;
  options: readonly { id: string; label: string; correct?: boolean }[];
};

export const LEVEL_TEST_QUESTIONS: readonly LevelTestQuestion[] = [
  {
    id: 'q1',
    prompt: 'Hello! ___ is your name?',
    options: [
      { id: 'a', label: 'Who' },
      { id: 'b', label: 'What', correct: true },
      { id: 'c', label: 'Where' },
      { id: 'd', label: 'How' },
    ],
  },
  {
    id: 'q2',
    prompt: 'She ___ to school every day.',
    options: [
      { id: 'a', label: 'go' },
      { id: 'b', label: 'goes', correct: true },
      { id: 'c', label: 'going' },
      { id: 'd', label: 'gone' },
    ],
  },
  {
    id: 'q3',
    prompt: 'There ___ two cats in the garden.',
    options: [
      { id: 'a', label: 'is' },
      { id: 'b', label: 'are', correct: true },
      { id: 'c', label: 'be' },
      { id: 'd', label: 'was' },
    ],
  },
  {
    id: 'q4',
    prompt: 'I ___ coffee right now.',
    options: [
      { id: 'a', label: 'drink' },
      { id: 'b', label: 'am drinking', correct: true },
      { id: 'c', label: 'drinks' },
      { id: 'd', label: 'drank' },
    ],
  },
  {
    id: 'q5',
    prompt: 'They ___ in Kyiv last year.',
    options: [
      { id: 'a', label: 'live' },
      { id: 'b', label: 'lived', correct: true },
      { id: 'c', label: 'are living' },
      { id: 'd', label: 'have live' },
    ],
  },
  {
    id: 'q6',
    prompt: 'Have you ever ___ to London?',
    options: [
      { id: 'a', label: 'be' },
      { id: 'b', label: 'been', correct: true },
      { id: 'c', label: 'was' },
      { id: 'd', label: 'going' },
    ],
  },
  {
    id: 'q7',
    prompt: 'If it rains tomorrow, we ___ at home.',
    options: [
      { id: 'a', label: 'stay' },
      { id: 'b', label: 'will stay', correct: true },
      { id: 'c', label: 'stayed' },
      { id: 'd', label: 'would stayed' },
    ],
  },
  {
    id: 'q8',
    prompt: 'The report ___ by the manager yesterday.',
    options: [
      { id: 'a', label: 'wrote' },
      { id: 'b', label: 'was written', correct: true },
      { id: 'c', label: 'has written' },
      { id: 'd', label: 'is writing' },
    ],
  },
  {
    id: 'q9',
    prompt: 'I wish I ___ more time to prepare.',
    options: [
      { id: 'a', label: 'have' },
      { id: 'b', label: 'had', correct: true },
      { id: 'c', label: 'will have' },
      { id: 'd', label: 'am having' },
    ],
  },
  {
    id: 'q10',
    prompt: 'Not only ___ the presentation well, but he also answered every question.',
    options: [
      { id: 'a', label: 'he delivered' },
      { id: 'b', label: 'did he deliver', correct: true },
      { id: 'c', label: 'he did deliver' },
      { id: 'd', label: 'delivered he' },
    ],
  },
] as const;

export const LEVEL_RESULT_COPY: Record<
  LevelCode,
  { title: string; description: string; recommendation: string }
> = {
  A1: {
    title: 'Beginner · A1',
    description: 'Ви розумієте прості фрази та можете представитися базовою англійською.',
    recommendation: 'Рекомендуємо старт із базової програми або марафону Beginner A1.',
  },
  A2: {
    title: 'Elementary · A2',
    description: 'Ви справляєтеся з повсякденними ситуаціями, але ще плутаєтеся в часах і структурах.',
    recommendation: 'Підійде Elementary A2 або група для закріплення бази зі speaking.',
  },
  B1: {
    title: 'Intermediate · B1',
    description: 'Ви підтримуєте розмову на знайомі теми й загалом розумієте основну ідею.',
    recommendation: 'Час посилювати speaking і розширювати словник у регулярній програмі.',
  },
  B2: {
    title: 'Upper-Intermediate · B2',
    description: 'Ви впевнено використовуєте мову в роботі та навчанні, інколи з дрібними помилками.',
    recommendation: 'Добре займатися Business English, іспитами або інтенсивним speaking.',
  },
  C1: {
    title: 'Advanced · C1',
    description: 'Ви володієте мовою на високому рівні й можете працювати з складними текстами.',
    recommendation: 'Підійдуть advanced-курси, IELTS або корпоративні програми під вашу мету.',
  },
};

export function scoreToLevel(correctCount: number, total: number): LevelCode {
  const ratio = total > 0 ? correctCount / total : 0;
  if (ratio < 0.25) return 'A1';
  if (ratio < 0.45) return 'A2';
  if (ratio < 0.65) return 'B1';
  if (ratio < 0.85) return 'B2';
  return 'C1';
}
