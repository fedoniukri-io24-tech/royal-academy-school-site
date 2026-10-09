export type NavLink = {
  href: string;
  label: string;
};

/** Головне меню в хедері — однакове на всіх сторінках */
export const MAIN_NAV_LINKS: NavLink[] = [
  { href: '/about', label: 'Про нас' },
  { href: '/programs', label: 'Програми' },
  { href: '/languages', label: 'Мови' },
  { href: '/pricing', label: 'Ціни' },
  { href: '/summer-camp', label: 'Літній табір' },
  { href: '/marathons', label: 'Марафони' },
  { href: '/about#translation', label: 'Переклад' },
  { href: '/contacts', label: 'Контакти' },
];

export const HEADER_CTA = {
  program: { label: 'Записатися' },
  levelTest: { label: 'Пройти тест', href: '/level-test' },
} as const;

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Меню',
    links: [
      { href: '/programs', label: 'Програми' },
      { href: '/languages', label: 'Мови' },
      { href: '/about', label: 'Про нас' },
      { href: '/pricing', label: 'Ціни' },
      { href: '/summer-camp', label: 'Літній табір' },
      { href: '/marathons', label: 'Марафони' },
      { href: '/about#translation', label: 'Переклад' },
      { href: '/contacts', label: 'Контакти' },
    ],
  },
  {
    title: 'Навчання',
    links: [
      { href: '/programs/kids', label: 'Дітям' },
      { href: '/programs/adults', label: 'Дорослим' },
      { href: '/programs/corporate', label: 'Корпоративне' },
      { href: '/programs/exams', label: 'Іспити' },
      { href: '/level-test', label: 'Тест рівня' },
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
  '/summer-camp',
  '/marathons',
  '/level-test',
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
