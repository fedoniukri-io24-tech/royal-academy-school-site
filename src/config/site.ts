import { SITE_CONTACTS } from '@/data/siteContacts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://royalacademyschool.ua';

export const SITE = {
  name: SITE_CONTACTS.name,
  shortName: 'Royal Academy',
  tagline: SITE_CONTACTS.tagline,
  description:
    'Мовна школа в Києві (Оболонь, Позняки) та онлайн. 5 мов, 15+ років досвіду. Безкоштовний урок і тестування рівня.',
  url: siteUrl.replace(/\/$/, ''),
  locale: 'uk_UA',
  language: 'uk',
  themeColor: '#102040',
  keywords: [
    'мовна школа Київ',
    'курси англійської Київ',
    'Royal Academy School',
    'English Home School',
    'курси іноземних мов',
    'англійська онлайн',
    'корпоративна англійська',
    'мовна школа Оболонь',
    'мовна школа Позняки',
    'безкоштовний урок англійської',
  ],
  ogImage: '/school-assets/hero-desktop.png',
  logo: '/school-assets/logo.png',
  languages: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Італійська'],
  formerName: SITE_CONTACTS.formerName,
  contacts: SITE_CONTACTS,
} as const;

export const HOME_SECTIONS = [
  { id: 'programs', label: 'Програми' },
  { id: 'languages', label: 'Мови' },
  { id: 'why-us', label: 'Про нас' },
  { id: 'how-it-works', label: 'Методика' },
  { id: 'formats', label: 'Формати' },
  { id: 'levels', label: 'Рівні' },
  { id: 'teachers', label: 'Викладачі' },
  { id: 'platform', label: 'Платформа' },
  { id: 'pricing', label: 'Ціни' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'faq', label: 'FAQ' },
  { id: 'consultation', label: 'Консультація' },
  { id: 'contacts', label: 'Контакти' },
] as const;
