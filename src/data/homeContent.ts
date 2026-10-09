/** Контент головної сторінки — бриф redesign */

export const SCALE_FACTS = [
  {
    id: 'experience',
    value: '20+',
    label: 'років досвіду',
    description: 'Стабільна школа з перевіреною методикою та результатами.',
  },
  {
    id: 'students',
    value: '2000+',
    label: 'студентів',
    description: 'Діти, дорослі та команди, які вже говорять мовами.',
  },
  {
    id: 'locations',
    value: '2',
    label: 'офлайн-локації',
    description: 'Оболонь і Позняки — зручно дістатися в Києві.',
  },
  {
    id: 'online',
    value: 'Онлайн',
    label: 'по всій Україні',
    description: 'Той самий рівень якості — з будь-якого міста.',
  },
] as const;

export const FORMAT_FLIP_CARDS = [
  {
    id: 'kids',
    style: 'individual',
    title: 'Діти',
    image: '/school-assets/hero-program-kids.jpg',
    href: '/programs/kids',
    links: [
      { label: 'Групові', href: '/programs/group' },
      { label: 'Індивідуальні', href: '/programs/individual' },
      { label: 'Підготовка до іспитів', href: '/programs/exams' },
    ],
  },
  {
    id: 'adults',
    style: 'group',
    title: 'Дорослі',
    image: '/school-assets/hero-program-adults.jpg',
    href: '/programs/adults',
    links: [
      { label: 'Групові', href: '/programs/group' },
      { label: 'Індивідуальні', href: '/programs/individual' },
      { label: 'Бізнес-курс', href: '/programs/corporate' },
      { label: 'Офлайн / онлайн', href: '/programs/adults' },
    ],
  },
  {
    id: 'corporate',
    style: 'corporate',
    title: 'Корпоративне навчання',
    image: '/school-assets/format-corporate.jpg',
    href: '/programs/corporate',
    links: [
      { label: 'Програми для команд', href: '/programs/corporate' },
      { label: 'Business English', href: '/programs/corporate' },
      { label: 'Індивідуальний розрахунок', href: '/contacts' },
    ],
  },
] as const;

export const LANGUAGES = [
  {
    name: 'Англійська',
    emoji: '🇬🇧',
    slug: 'english',
    href: '/languages/english',
    image: '/school-assets/hero-lang-english.jpg',
    objectPosition: 'center 38%',
  },
  {
    name: 'Німецька',
    emoji: '🇩🇪',
    slug: 'german',
    href: '/languages/german',
    image: '/school-assets/hero-lang-german.jpg',
    objectPosition: 'center 34%',
  },
  {
    name: 'Французька',
    emoji: '🇫🇷',
    slug: 'french',
    href: '/languages/french',
    image: '/school-assets/hero-lang-french.jpg',
    objectPosition: 'center 40%',
  },
  {
    name: 'Іспанська',
    emoji: '🇪🇸',
    slug: 'spanish',
    href: '/languages/spanish',
    image: '/school-assets/hero-lang-spanish.jpg',
    objectPosition: 'center 36%',
  },
  {
    name: 'Італійська',
    emoji: '🇮🇹',
    slug: 'italian',
    href: '/languages/italian',
    image: '/school-assets/hero-lang-italian.jpg',
    objectPosition: 'center 34%',
  },
] as const;

export const LEVELS = [
  { code: 'A1', label: 'Я починаю говорити' },
  { code: 'A2', label: 'Я справляюся у повсякденних ситуаціях' },
  { code: 'B1', label: 'Я підтримую розмову' },
  { code: 'B2', label: 'Я впевнено використовую мову' },
  { code: 'C1', label: 'Я використовую мову професійно' },
] as const;

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Знайомство',
    text: 'Визначаємо вашу мету: робота, подорожі, навчання, бізнес, переїзд чи спілкування.',
  },
  {
    step: '02',
    title: 'Діагностика',
    text: 'Дивимося не лише літеру рівня, а словник, граматику, speaking і конкретні прогалини.',
  },
  {
    step: '03',
    title: 'Безкоштовне повноцінне заняття',
    text: 'Після аналізу тесту проводимо заняття під вашу мету: методика, формат і знайомство з викладачем.',
  },
  {
    step: '04',
    title: 'Персональна програма',
    text: 'Підбираємо групу, викладача, формат і програму. Принципи: автоматизм, speaking, зрозуміла граматика, жива лексика.',
  },
  {
    step: '05',
    title: 'Контроль прогресу',
    text: 'Відеозвітність: словник, граматика, speaking, прогрес і наступні цілі — не лише слова викладача.',
  },
] as const;

export const WHY_US = [
  {
    title: 'Ми вчимо говорити',
    text: 'Не будуємо навчання навколо нескінченних вправ «вставити слово». Головне — використовувати мову.',
  },
  {
    title: 'Не привʼязуємося до одного підручника',
    text: 'Авторські матеріали, відео, реальні ситуації, дискусії та практичні завдання.',
  },
  {
    title: 'Програма під реальну мету',
    text: 'Подорожі, робота, бізнес, навчання, переїзд чи комунікація — програма під ваш запит.',
  },
  {
    title: 'Ми показуємо прогрес',
    text: 'Рівень, результати, відео, що вже пройдено і над чим працювати далі.',
  },
  {
    title: 'Мова для реального життя',
    text: 'Speaking-класи, сучасні теми й ситуації поза заняттям.',
  },
  {
    title: 'Усе під рукою',
    text: 'Після уроків — матеріали з граматики, слів, домашніх завдань, щоб повернутися будь-коли.',
  },
] as const;

export const SHORT_REVIEWS = [
  {
    name: 'Олена',
    text: 'Нарешті говорю на зустрічах без страху. Відчуваю прогрес щомісяця.',
    image: '/school-assets/reviews/olena.jpg',
  },
  {
    name: 'Дмитро',
    text: 'Діагностика була чесною: показали прогалини і зібрали план під роботу.',
    image: '/school-assets/reviews/dmytro.jpg',
  },
  {
    name: 'Марина',
    text: 'Дитина пішла з охотою. Звіти для батьків — короткі й зрозумілі.',
    image: '/school-assets/reviews/maryna.jpg',
  },
  {
    name: 'Ігор',
    text: 'Після кількох шкіл тут вперше дали живу практику, а не лише тести.',
    image: '/school-assets/reviews/ihor.jpg',
  },
  {
    name: 'Світлана',
    text: 'Підібрали викладача після пробного. Формат і темп — під мій графік.',
    image: '/school-assets/reviews/svitlana.jpg',
  },
  {
    name: 'Андрій',
    text: 'Чітко: мета → план → speaking. Без зайвого шуму.',
    image: '/school-assets/reviews/andrii.jpg',
  },
] as const;

export const RESULT_CASES = [
  {
    name: 'Віталій Розарьов',
    request: 'Пройти внутрішнє тестування на знання англійської рівня B2 для роботи.',
    result: 'Успішно пройдено тестування.',
    mediaLabel: 'Скрін результату',
    image: '/school-assets/reviews/vitalii.jpg',
  },
  {
    name: 'Андрій Літвінчук',
    request: 'Підготуватися до співбесіди в міжнародну компанію з початкового рівня.',
    result: 'Успішно пройшов співбесіду і працює у бажаній компанії.',
    mediaLabel: 'Відео-відгук',
    image: '/school-assets/reviews/litvinchuk.jpg',
  },
  {
    name: 'Андрій Дрок',
    request: 'Скласти IELTS після кількох невдалих спроб з іншими школами та репетиторами.',
    result: 'Бажаний результат після 2–3 місяців підготовки в Royal Academy School.',
    mediaLabel: 'Відео + підтвердження',
    image: '/school-assets/reviews/drok.jpg',
  },
] as const;

export const CORPORATE_REVIEW = {
  company: 'Корпоративний клієнт',
  role: 'Business English для команди',
  text: 'Команда почала впевненіше вести зустрічі англійською. Звіти по прогресу зрозумілі для HR і керівників.',
  image: '/school-assets/hero-corporate.jpg',
} as const;

export const TEACHERS = [
  {
    name: 'Анна',
    language: 'Англійська',
    focus: 'Дорослі • Business English • Speaking',
    initials: 'А',
    image: '/school-assets/teachers/anna.jpg',
  },
  {
    name: 'Олена',
    language: 'Англійська',
    focus: 'Діти • Підлітки • Іспити',
    initials: 'О',
    image: '/school-assets/teachers/olena.jpg',
  },
  {
    name: 'Андрій',
    language: 'Німецька',
    focus: 'Дорослі • Corporate',
    initials: 'А',
    image: '/school-assets/teachers/andrii.jpg',
  },
  {
    name: 'Софія',
    language: 'Французька',
    focus: 'Дорослі • Діти',
    initials: 'С',
    image: '/school-assets/teachers/sofia.jpg',
  },
] as const;

export const PLATFORM_FEATURES = [
  'Відеопояснення',
  'Граматика',
  'Вправи',
  'Словникові матеріали',
  'Повторення тем',
  'Додаткові завдання',
  'Навчальні відео',
] as const;

/* —— Legacy exports used on other pages —— */

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
    sub: 'Великі можливості з дитинства',
    title: 'Великий світ починається з цікавості',
    image: '/school-assets/programs/kids.png',
    width: 590,
    height: 805,
    href: '/programs/kids',
  },
  {
    id: 'adults',
    tag: 'ДОРОСЛІ',
    sub: 'Впевненість у будь-якій ситуації',
    title: 'Більше можливостей для яскравішого завтра',
    image: '/school-assets/programs/adults.png',
    width: 577,
    height: 803,
    href: '/programs/adults',
  },
  {
    id: 'corporate',
    tag: 'КОРПОРАТИВНЕ НАВЧАННЯ',
    sub: 'Сильні команди без кордонів',
    title: 'Навчання без кордонів. Для сильніших команд',
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

export const STORIES = RESULT_CASES.map((c) => ({
  name: c.name,
  from: '—',
  to: '—',
  goal: c.request,
  format: 'Royal Academy School',
  duration: '—',
  quote: c.result,
}));
