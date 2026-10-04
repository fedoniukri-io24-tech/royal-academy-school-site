export type PageCta = {
  label: string;
  href?: string;
  intent?: 'consultation' | 'level-test' | 'general';
};

export type PageSectionBlock = {
  id: string;
  title: string;
  body?: string;
  items?: string[];
};

export type ProgramPageData = {
  slug: string;
  title: string;
  resultLine: string;
  metaDescription: string;
  audience: string[];
  goals: string[];
  outcomes: string[];
  curriculum: string[];
  format: { label: string; value: string }[];
  levels: string[];
  methodology: string;
  includes: readonly string[];
  languages: { href: string; label: string }[];
  priceFrom?: string;
  platformNote: string;
  faq: { q: string; a: string }[];
};

export type LanguagePageData = {
  slug: string;
  name: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  description: string;
  whyLearn: string[];
  formats: string[];
  examPrep?: string;
  programs: { href: string; label: string; description: string }[];
  levels: string[];
  faq: { q: string; a: string }[];
};
