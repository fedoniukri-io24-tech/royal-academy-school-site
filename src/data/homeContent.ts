/** Контент головної сторінки — бриф redesign */

export const FORMAT_FLIP_CARDS = [
  {
    id: 'kids',
    title: 'Діти',
    image: '/school-assets/programs/kids.png',
    href: '/programs/kids',
    links: [
      { label: 'Групові', href: '/programs/kids' },
      { label: 'Індивідуальні', href: '/programs/kids' },
      { label: 'Підготовка до іспитів', href: '/programs/kids' },
    ],
  },
  {
    id: 'adults',
    title: 'Дорослі',
    image: '/school-assets/programs/adults.png',
    href: '/programs/adults',
    links: [
      { label: 'Групові', href: '/programs/adults' },
      { label: 'Індивідуальні', href: '/programs/adults' },
      { label: 'Бізнес-курс', href: '/programs/adults' },
      { label: 'Офлайн / онлайн', href: '/programs/adults' },
    ],
  },
  {
    id: 'corporate',
    title: 'Корпоративне навчання',
    image: '/school-assets/programs/corporate.png',
    href: '/programs/corporate',
    links: [
      { label: 'Для команд', href: '/programs/corporate' },
      { label: 'Business English', href: '/programs/corporate' },
      { label: 'Офлайн / онлайн', href: '/programs/corporate' },
    ],
  },
] as const;

export const LANGUAGES = [
  {
    name: 'Англійська',
    slug: 'english' as const,
    href: '/languages/english',
    image: '/school-assets/langs/english.jpg',
    objectPosition: 'center 40%',
    blurb: 'Для роботи, подорожей, навчання та міжнародної комунікації.',
    highlights: ['IELTS / НМТ', 'Business English', 'Діти та дорослі'],
  },
  {
    name: 'Німецька',
    slug: 'german' as const,
    href: '/languages/german',
    image: '/school-assets/langs/german.jpg',
    objectPosition: 'center 36%',
    blurb: 'Для карʼєри, навчання в ЄС та життя в Європі.',
    highlights: ['Goethe / TestDaF', 'A1–C1', 'Релокація'],
  },
  {
    name: 'Французька',
    slug: 'french' as const,
    href: '/languages/french',
    image: '/school-assets/langs/french.jpg',
    objectPosition: 'center 40%',
    blurb: 'Для культури, подорожей та міжнародної комунікації.',
    highlights: ['DELF / DALF', 'Жива практика', 'Подорожі'],
  },
  {
    name: 'Італійська',
    slug: 'italian' as const,
    href: '/languages/italian',
    image: '/school-assets/langs/italian.jpg',
    objectPosition: 'center 34%',
    blurb: 'Для подорожей, мистецтва, моди та особистого розвитку.',
    highlights: ['Культура', 'A1–B1', 'Гнучкий формат'],
  },
  {
    name: 'Іспанська',
    slug: 'spanish' as const,
    href: '/languages/spanish',
    image: '/school-assets/langs/spanish.jpg',
    objectPosition: 'center 36%',
    blurb: 'Спілкування в 20+ країнах — для подорожей і роботи.',
    highlights: ['Speaking clubs', 'A1–B2', 'Іспанія / ЛатАм'],
  },
] as const;

export const LEVELS = [
  { code: 'A1', label: 'Я починаю говорити', tone: 'start' as const },
  { code: 'A2', label: 'Я справляюся у повсякденних ситуаціях', tone: 'grow' as const },
  { code: 'B1', label: 'Я підтримую розмову', tone: 'speak' as const },
  { code: 'B2', label: 'Я впевнено використовую мову', tone: 'strong' as const },
  { code: 'C1', label: 'Я використовую мову професійно', tone: 'pro' as const },
] as const;

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Знайомство',
    text: 'Визначаємо вашу мету: для чого саме вам потрібна мова — робота, подорожі, навчання, бізнес, переїзд чи спілкування.',
    image: '/school-assets/hero-about.jpg',
  },
  {
    step: '02',
    title: 'Діагностика',
    text: 'Визначаємо поточний рівень не просто літерами A1, A2 чи B1. Дивимося, що ви вже знаєте: граматику, словник, speaking і конкретні прогалини.',
    image: '/school-assets/hero-program-exams.jpg',
  },
  {
    step: '03',
    title: 'Безкоштовне повноцінне заняття',
    text: 'Перше заняття — не за готовим шаблоном. Аналізуємо тест і мету, показуємо методику Royal Academy School, формат навчання та знайомимо з викладачем.',
    image: '/school-assets/hero-program-individual.jpg',
  },
  {
    step: '04',
    title: 'Персональна програма',
    text: 'Підбираємо групу, викладача, формат і програму під вашу мету. Принципи: автоматизм, багато speaking, зрозуміла граматика та практична лексика для реального життя.',
    image: '/school-assets/hero-program-group.jpg',
  },
  {
    step: '05',
    title: 'Контроль прогресу',
    text: 'Прогрес фіксуємо не лише зі слів викладача. Відеозвітність показує словник, граматику, speaking, прогрес і наступні цілі.',
    image: '/school-assets/hero-program-speaking.jpg',
  },
] as const;

export const WHY_US = [
  {
    title: 'Ми вчимо говорити',
    text: 'Не будуємо навчання навколо нескінченних вправ «вставити слово» чи теорії заради теорії. Головне — використовувати мову.',
    image: '/school-assets/hero-program-speaking.jpg',
  },
  {
    title: 'Не привʼязуємося до одного підручника',
    text: 'Авторські матеріали, відео, реальні ситуації, дискусії, практичні завдання та додаткові матеріали.',
    image: '/school-assets/hero-languages.jpg',
  },
  {
    title: 'Програма під реальну мету',
    text: 'Навчання будується під ваш запит: подорожі, робота, бізнес, навчання, переїзд чи комунікація.',
    image: '/school-assets/hero-programs.jpg',
  },
  {
    title: 'Ми показуємо прогрес',
    text: 'Студент бачить рівень, результати, відео, що вже пройдено, над чим працювати далі та наступну ціль.',
    image: '/school-assets/hero-program-exams.jpg',
  },
  {
    title: 'Мова для реального життя',
    text: 'Speaking-класи, сучасні теми, дискусії та ситуації, з якими ви реально стикаєтесь поза заняттям.',
    image: '/school-assets/hero-school-interior.jpg',
  },
  {
    title: 'Усе під рукою',
    text: 'Після занять — матеріали з граматики, слів, уроків і домашніх завдань, щоб повернутися до них будь-коли.',
    image: '/school-assets/format-individual.jpg',
  },
] as const;

export const REVIEW_AUDIENCES = [
  { id: 'adults' as const, label: 'Дорослі' },
  { id: 'parents' as const, label: 'Батьки' },
  { id: 'kids' as const, label: 'Діти' },
] as const;

export type ReviewAudienceId = (typeof REVIEW_AUDIENCES)[number]['id'];

/** Усі історії в одному форматі: A (запит) → B (результат) */
export const STUDENT_STORIES = [
  {
    audience: 'adults' as const,
    name: 'Олена',
    request: 'Страх говорити на робочих зустрічах.',
    result: 'Впевнене speaking і видимий прогрес щомісяця.',
    image: '/school-assets/reviews/olena.jpg',
    mediaLabel: 'Відгук',
  },
  {
    audience: 'adults' as const,
    name: 'Дмитро',
    request: 'Зрозуміти реальні прогалини, а не лише літеру рівня.',
    result: 'Чесна діагностика і план під роботу.',
    image: '/school-assets/reviews/dmytro.jpg',
    mediaLabel: 'Відгук',
  },
  {
    audience: 'adults' as const,
    name: 'Ігор',
    request: 'Жива практика після кількох шкіл із тестами.',
    result: 'Реальне speaking, а не лише письмові вправи.',
    image: '/school-assets/reviews/ihor.jpg',
    mediaLabel: 'Відгук',
  },
  {
    audience: 'adults' as const,
    name: 'Андрій',
    request: 'Чіткий шлях: мета, план і практика.',
    result: 'Мета → план → speaking без зайвого шуму.',
    image: '/school-assets/reviews/andrii.jpg',
    mediaLabel: 'Відгук',
  },
  {
    audience: 'adults' as const,
    name: 'Віталій Розарьов',
    request: 'Пройти внутрішнє тестування B2 для роботи.',
    result: 'Успішно пройдено тестування.',
    image: '/school-assets/reviews/vitalii.jpg',
    mediaLabel: 'Скрін результату',
  },
  {
    audience: 'adults' as const,
    name: 'Андрій Літвінчук',
    request: 'Підготовка до співбесіди з початкового рівня.',
    result: 'Пройшов співбесіду і працює в бажаній компанії.',
    image: '/school-assets/reviews/litvinchuk.jpg',
    mediaLabel: 'Відео-відгук',
  },
  {
    audience: 'adults' as const,
    name: 'Андрій Дрок — IELTS',
    request: 'Скласти IELTS після невдалих спроб з іншими школами.',
    result: 'Бажаний результат за 2–3 місяці в Royal Academy School.',
    image: '/school-assets/reviews/drok.jpg',
    mediaLabel: 'Відео + підтвердження',
  },
  {
    audience: 'adults' as const,
    name: 'Корпоративний клієнт',
    request: 'Business English для команди: впевнені зустрічі й зрозумілі звіти для HR.',
    result: 'Команда впевненіше веде зустрічі англійською. Звіти по прогресу зрозумілі для HR і керівників.',
    image: '/school-assets/hero-corporate.jpg',
    mediaLabel: 'Корпоративний відгук',
  },
  {
    audience: 'parents' as const,
    name: 'Марина',
    request: 'Щоб дитина ходила з охотою і був зрозумілий прогрес.',
    result: 'Дитина займається із задоволенням, звіти короткі й чіткі.',
    image: '/school-assets/reviews/maryna.jpg',
    mediaLabel: 'Відгук батьків',
  },
  {
    audience: 'parents' as const,
    name: 'Світлана',
    request: 'Підібрати викладача і формат під графік родини.',
    result: 'Після пробного — свій викладач, темп і розклад.',
    image: '/school-assets/reviews/svitlana.jpg',
    mediaLabel: 'Відгук батьків',
  },
  {
    audience: 'kids' as const,
    name: 'Софія, 12 років',
    request: 'Нудні уроки лише з зошитом.',
    result: 'Цікаво говорити на заняттях — хоче йти сама.',
    image: '/school-assets/programs/kids.png',
    mediaLabel: 'Відгук',
  },
  {
    audience: 'kids' as const,
    name: 'Максим, 14 років',
    request: 'Страх відповідати англійською в школі.',
    result: 'Speaking став легшим, відповідає впевненіше.',
    image: '/school-assets/hero-program-kids.jpg',
    mediaLabel: 'Відгук',
  },
] as const;

export const TEACHER_LANG_TABS = [
  { id: 'all' as const, label: 'Усі' },
  { id: 'english' as const, label: 'Англійська' },
  { id: 'german' as const, label: 'Німецька' },
  { id: 'french' as const, label: 'Французька' },
] as const;

export type TeacherLangTabId = (typeof TEACHER_LANG_TABS)[number]['id'];

export const TEACHERS = [
  {
    id: 'anna',
    name: 'Анна',
    language: 'Англійська',
    langId: 'english' as const,
    level: 'C2 / CELTA',
    experience: '8+ років',
    bio: 'Business English і speaking для дорослих: зустрічі, переговори, впевнена жива мова.',
    focus: ['Дорослі', 'Business English', 'Speaking'] as const,
    image: '/school-assets/teachers/anna.jpg',
  },
  {
    id: 'olena',
    name: 'Олена',
    language: 'Англійська',
    langId: 'english' as const,
    level: 'C2 / Young Learners',
    experience: '10+ років',
    bio: 'Діти та підлітки, іспити й шкільна підтримка — темп під інтерес і результат.',
    focus: ['Діти', 'Підлітки', 'Іспити'] as const,
    image: '/school-assets/teachers/olena.jpg',
  },
  {
    id: 'andrii',
    name: 'Андрій',
    language: 'Німецька',
    langId: 'german' as const,
    level: 'C1 / Goethe',
    experience: '7+ років',
    bio: 'Німецька для роботи й корпоративних команд: чіткий план і практика з першого заняття.',
    focus: ['Дорослі', 'Corporate'] as const,
    image: '/school-assets/teachers/andrii.jpg',
  },
  {
    id: 'sofia',
    name: 'Софія',
    language: 'Французька',
    langId: 'french' as const,
    level: 'C1 / DALF',
    experience: '6+ років',
    bio: 'Французька для дорослих і дітей: жива комунікація без сухої теорії.',
    focus: ['Дорослі', 'Діти'] as const,
    image: '/school-assets/teachers/sofia.jpg',
  },
] as const;

export const PLATFORM_FEATURES = [
  'Відеопояснення',
  'Граматика',
  'Вправи',
  'Словникові матеріали',
  'Повторення пройдених тем',
  'Додаткові завдання',
  'Навчальні відео',
] as const;

/* —— Legacy exports used on other pages —— */

/** Блок «Знайомтесь» на головній — великі факти про школу */
export const SCHOOL_INTRO_PILLARS = [
  {
    id: 'years' as const,
    label: '20+ років досвіду',
    description: 'Мовної освіти в Києві та онлайн.',
  },
  {
    id: 'locations' as const,
    label: '2 офлайн-локації',
    description: 'Зручні центри для щоденного навчання.',
  },
  {
    id: 'online' as const,
    label: 'Онлайн-напрямок',
    description: 'Повноцінне навчання без привʼязки до міста.',
  },
  {
    id: 'students' as const,
    label: '2000+ студентів',
    description: 'Які пройшли навчання в Royal Academy School.',
  },
  {
    id: 'corporate' as const,
    label: 'Корпоративне навчання',
    description: 'Програми для команд і бізнесу.',
  },
  {
    id: 'exams' as const,
    label: 'Підготовка до міжнародних іспитів',
    description: 'Сертифікати та іспити під ваш запит.',
  },
  {
    id: 'ages' as const,
    label: 'Навчання дітей та дорослих',
    description: 'Програми для кожного віку та мети.',
  },
  {
    id: 'translation' as const,
    label: 'Перекладацький напрямок',
    description: 'Окремий напрям професійного перекладу.',
  },
];

/** Чому саме ми — для внутрішніх сторінок */
export const WHY_US_PILLARS = [
  {
    id: 'global' as const,
    label: 'Міжнародний підхід',
    description: 'Сучасна освіта та глобальні можливості для кожного.',
  },
  {
    id: 'teachers' as const,
    label: 'Досвідчені викладачі',
    description: 'Професіонали з міжнародною практикою.',
  },
  {
    id: 'results' as const,
    label: 'Реальні результати',
    description: 'Мова як інструмент для життя, навчання та карʼєри.',
  },
  {
    id: 'community' as const,
    label: 'Спільнота, що надихає',
    description: 'Підтримка, мотивація та нові можливості.',
  },
];

export const PROGRAM_DIRECTIONS = [
  {
    id: 'kids',
    tag: 'ДІТИ',
    tagEn: 'KIDS',
    sub: '',
    title: 'Діти',
    image: '/school-assets/programs/kids.png',
    width: 590,
    height: 805,
    href: '/programs/kids',
  },
  {
    id: 'adults',
    tag: 'ДОРОСЛІ',
    tagEn: 'ADULTS',
    sub: '',
    title: 'Дорослі',
    image: '/school-assets/programs/adults.png',
    width: 577,
    height: 803,
    href: '/programs/adults',
  },
  {
    id: 'corporate',
    tag: 'КОРПОРАТИВНЕ НАВЧАННЯ',
    tagEn: 'CORPORATE',
    sub: '',
    title: 'Корпоративне навчання',
    image: '/school-assets/programs/corporate.png',
    width: 598,
    height: 804,
    href: '/programs/corporate',
  },
] as const;

export const FORMAT_SHOWCASE = [
  {
    id: 'individual',
    title: 'Individual',
    text: 'Персональна програма під ваші цілі.',
    href: '/programs/individual',
    image: '/school-assets/format-individual.jpg',
  },
  {
    id: 'group',
    title: 'Group',
    text: 'Ефективне навчання в міні-групах.',
    href: '/programs/group',
    image: '/school-assets/format-group.jpg',
  },
  {
    id: 'corporate',
    title: 'Corporate',
    text: 'Рішення для вашої команди.',
    href: '/programs/corporate',
    image: '/school-assets/format-corporate.jpg',
  },
] as const;

export const STATS = [
  { value: 20, suffix: '+', label: 'років досвіду' },
  { value: 2000, suffix: '+', label: 'студентів' },
  { value: 2, suffix: '', label: 'офлайн-локації' },
  { value: 5, suffix: '', label: 'мов у школі' },
];

export const FAQ = [
  {
    q: 'Як визначається рівень?',
    a: 'Ми проводимо діагностику та безкоштовне пробне заняття, щоб визначити рівень і прогалини в конкретних темах.',
    emoji: '📊',
  },
  {
    q: 'Чи можна навчатися онлайн?',
    a: 'Так. Доступні онлайн та офлайн формати, а також комбінований варіант.',
    emoji: '💻',
  },
  {
    q: 'Які мови доступні?',
    a: 'Англійська, німецька, французька, іспанська та італійська.',
    emoji: '🌍',
  },
];

/** Legacy — секції ще в репо, але не на головній */
export const OUTCOMES = [
  { text: 'Подорожувати без мовного барʼєра', emoji: '✈️' },
  { text: 'Працювати з міжнародними компаніями', emoji: '🏢' },
  { text: 'Говорити впевнено у повсякденних ситуаціях', emoji: '💬' },
];

export const PRICING = [
  {
    id: 'group',
    titleSans: 'групове',
    titleSerif: 'навчання',
    pricePrefix: 'від',
    price: '4 500',
    priceSuffix: '',
    currency: 'грн',
    period: '/ місяць · 8 занять',
    note: 'Залежить від мови та рівня',
    emoji: '👥',
    accent: 'var(--burgundy)',
    featured: true,
    href: '#consultation',
  },
];

export const STORIES = STUDENT_STORIES.filter((item) =>
  ['Віталій Розарьов', 'Андрій Літвінчук', 'Андрій Дрок — IELTS'].includes(item.name),
).map((c) => ({
  name: c.name,
  from: '—',
  to: '—',
  goal: c.request,
  format: 'Royal Academy School',
  duration: '—',
  quote: c.result,
}));
