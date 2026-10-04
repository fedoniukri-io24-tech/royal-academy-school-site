export type PageAccent = 'gold' | 'burgundy' | 'blue';

export type PageHeroVisual = {
  image: string;
  objectPosition?: string;
};

/** Фони hero внутрішніх сторінок (окремо від дефолтного landmarks). */
export const PAGE_HERO: Record<'programs' | 'languages' | 'about' | 'pricing' | 'contacts', PageHeroVisual> = {
  programs: { image: '/school-assets/hero-programs.jpg', objectPosition: 'center 32%' },
  languages: { image: '/school-assets/hero-languages.jpg', objectPosition: 'center 40%' },
  about: { image: '/school-assets/hero-about.jpg', objectPosition: 'center 28%' },
  pricing: { image: '/school-assets/hero-school-interior.jpg', objectPosition: 'center 42%' },
  contacts: { image: '/school-assets/hero-school-interior.jpg', objectPosition: '62% center' },
};

const PROGRAM_HERO_BY_SLUG: Record<string, PageHeroVisual> = {
  kids: { image: '/school-assets/hero-program-kids.jpg', objectPosition: 'center 32%' },
  adults: { image: '/school-assets/hero-program-adults.jpg', objectPosition: 'center 34%' },
  group: { image: '/school-assets/hero-program-group.jpg', objectPosition: 'center 30%' },
  individual: { image: '/school-assets/hero-program-individual.jpg', objectPosition: 'center 28%' },
  corporate: { image: '/school-assets/hero-corporate.jpg', objectPosition: 'center 38%' },
  'speaking-clubs': { image: '/school-assets/hero-program-speaking.jpg', objectPosition: 'center 30%' },
  exams: { image: '/school-assets/hero-program-exams.jpg', objectPosition: 'center 32%' },
};

const LANGUAGE_HERO_BY_SLUG: Record<string, PageHeroVisual> = {
  english: { image: '/school-assets/hero-lang-english.jpg', objectPosition: 'center 36%' },
  german: { image: '/school-assets/hero-lang-german.jpg', objectPosition: 'center 34%' },
  french: { image: '/school-assets/hero-lang-french.jpg', objectPosition: 'center 36%' },
  spanish: { image: '/school-assets/hero-lang-spanish.jpg', objectPosition: 'center 34%' },
  italian: { image: '/school-assets/hero-lang-italian.jpg', objectPosition: 'center 34%' },
};

export function programHeroForSlug(slug: string): PageHeroVisual {
  return PROGRAM_HERO_BY_SLUG[slug] ?? PAGE_HERO.programs;
}

export function languageHeroForSlug(slug: string): PageHeroVisual {
  return LANGUAGE_HERO_BY_SLUG[slug] ?? PAGE_HERO.languages;
}

export type ProgramVisual = {
  image: string;
  accent: PageAccent;
  tag: string;
  objectPosition?: string;
};

/** Фото для карток «Що дає програма» (циклічно по цілях). */
export const PROGRAM_GOAL_PHOTOS: readonly PageHeroVisual[] = [
  { image: '/school-assets/format-individual.jpg', objectPosition: 'center 30%' },
  { image: '/school-assets/hero-programs.jpg', objectPosition: 'center 32%' },
  { image: '/school-assets/format-group.jpg', objectPosition: 'center 22%' },
  { image: '/school-assets/hero-school-interior.jpg', objectPosition: 'center 40%' },
];

/** Photos only in controlled compositions (direction / format), with fixed crop. */
export const PROGRAM_VISUALS: Record<string, ProgramVisual> = {
  kids: {
    image: '/school-assets/programs/kids.png',
    accent: 'gold',
    tag: 'ДІТИ',
    objectPosition: 'center 18%',
  },
  adults: {
    image: '/school-assets/programs/adults.png',
    accent: 'burgundy',
    tag: 'ДОРОСЛІ',
    objectPosition: 'center 20%',
  },
  corporate: {
    image: '/school-assets/programs/corporate.png',
    accent: 'blue',
    tag: 'БІЗНЕС',
    objectPosition: 'center 22%',
  },
  individual: {
    image: '/school-assets/format-individual.jpg',
    accent: 'gold',
    tag: '1:1',
    objectPosition: 'center',
  },
  group: {
    image: '/school-assets/format-group.jpg',
    accent: 'burgundy',
    tag: 'ГРУПА',
    objectPosition: 'center',
  },
  'speaking-clubs': {
    image: '/school-assets/format-group.jpg',
    accent: 'blue',
    tag: 'SPEAKING',
    objectPosition: 'center 30%',
  },
  exams: {
    image: '/school-assets/format-individual.jpg',
    accent: 'gold',
    tag: 'ІСПИТИ',
    objectPosition: 'center 25%',
  },
};

export type LanguageVisual = {
  flag: string;
  accent: PageAccent;
  image: string;
  objectPosition?: string;
  seoName: string;
};

export const LANGUAGE_VISUALS: Record<string, LanguageVisual> = {
  english: {
    flag: '🇬🇧',
    accent: 'burgundy',
    image: '/school-assets/format-individual.jpg',
    objectPosition: 'center 20%',
    seoName: 'англійської',
  },
  german: {
    flag: '🇩🇪',
    accent: 'blue',
    image: '/school-assets/format-corporate.jpg',
    objectPosition: 'center',
    seoName: 'німецької',
  },
  french: {
    flag: '🇫🇷',
    accent: 'gold',
    image: '/school-assets/format-group.jpg',
    objectPosition: 'center 28%',
    seoName: 'французької',
  },
  spanish: {
    flag: '🇪🇸',
    accent: 'burgundy',
    image: '/school-assets/format-individual.jpg',
    objectPosition: 'center 35%',
    seoName: 'іспанської',
  },
  italian: {
    flag: '🇮🇹',
    accent: 'blue',
    image: '/school-assets/format-corporate.jpg',
    objectPosition: 'center 15%',
    seoName: 'італійської',
  },
};

export const FORMAT_TONES = ['individual', 'group', 'corporate'] as const;

export function formatToneAt(index: number): (typeof FORMAT_TONES)[number] {
  return FORMAT_TONES[index % FORMAT_TONES.length];
}
