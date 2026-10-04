export type NavLink = {
  href: string;
  label: string;
};

/** Головне меню в хедері — однакове на всіх сторінках */
export const MAIN_NAV_LINKS: NavLink[] = [
  { href: '/programs', label: 'Програми' },
  { href: '/languages', label: 'Мови' },
  { href: '/about', label: 'Про нас' },
  { href: '/pricing', label: 'Ціни' },
  { href: '/contacts', label: 'Контакти' },
];

export const HEADER_CTA = {
  program: { label: 'Записатися' },
} as const;

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Навчання',
    links: [
      { href: '/programs/adults', label: 'Дорослим' },
      { href: '/programs/kids', label: 'Дітям та підліткам' },
      { href: '/programs/corporate', label: 'Corporate' },
      { href: '/programs/speaking-clubs', label: 'Speaking clubs' },
      { href: '/programs/individual', label: 'Індивідуально' },
    ],
  },
  {
    title: 'Мови',
    links: [
      { href: '/languages/english', label: 'Англійська' },
      { href: '/languages/german', label: 'Німецька' },
      { href: '/languages/french', label: 'Французька' },
      { href: '/languages/spanish', label: 'Іспанська' },
      { href: '/languages/italian', label: 'Італійська' },
    ],
  },
  {
    title: 'Academy',
    links: [
      { href: '/about', label: 'Про нас' },
      { href: '/about#team', label: 'Викладачі' },
      { href: '/about#results', label: 'Результати' },
      { href: '/about#level-test', label: 'Тест рівня' },
      { href: '/pricing', label: 'Ціни' },
      { href: '/contacts', label: 'Контакти' },
    ],
  },
  {
    title: 'Послуги',
    links: [
      { href: '/about#translation', label: 'Переклад' },
      { href: '/about#insights', label: 'Корисне' },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { href: '/polityka-konfidentsiynosti', label: 'Конфіденційність' },
  { href: '/publichna-oferta', label: 'Оферта' },
  { href: '/cookies', label: 'Cookies' },
];

/** Усі статичні маршрути для sitemap */
export const STATIC_SITE_PATHS = [
  '/',
  '/about',
  '/pricing',
  '/contacts',
  '/programs',
  '/languages',
  '/programs/kids',
  '/programs/adults',
  '/programs/corporate',
  '/programs/individual',
  '/programs/group',
  '/programs/speaking-clubs',
  '/programs/exams',
  '/languages/english',
  '/languages/german',
  '/languages/french',
  '/languages/spanish',
  '/languages/italian',
] as const;
