import { SectionTitle } from './ui/SectionTitle';

type ProgramId = 'kids' | 'adults' | 'corporate';

interface Program {
  id: ProgramId;
  tag: string;
  sub: string;
  desc: string;
  image: string;
  width: number;
  height: number;
}

const PROGRAMS: Program[] = [
  {
    id: 'kids',
    tag: 'KIDS',
    sub: 'Великі можливості з дитинства',
    desc: 'Англійська, яка надихає досліджувати світ',
    image: '/school-assets/programs/kids.png',
    width: 590,
    height: 805,
  },
  {
    id: 'adults',
    tag: 'ADULTS',
    sub: 'Впевненість у будь-якій ситуації',
    desc: 'Реальне спілкування для реального життя',
    image: '/school-assets/programs/adults.png',
    width: 577,
    height: 803,
  },
  {
    id: 'corporate',
    tag: 'CORPORATE',
    sub: 'Сильні команди без кордонів',
    desc: 'Англійська для зростання вашого бізнесу',
    image: '/school-assets/programs/corporate.png',
    width: 598,
    height: 804,
  },
];

export function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="wrap">
        <div className="programs-head">
          <div className="programs-head-main">
            <SectionTitle main="Одна школа." accent="Більше можливостей." align="left" className="programs-title" />
          </div>
          <p className="programs-desc">
            Ми створюємо програми, які відповідають різним цілям, віку та стилю життя. Оберіть свій
            напрям і відкрийте світ можливостей разом із Royal Academy School.
          </p>
        </div>

        <div className="programs-grid">
          {PROGRAMS.map((program) => (
            <a key={program.id} href={`#${program.id}`} className={`program-card ${program.id}`}>
              <img
                className="program-card-image"
                src={program.image}
                alt={program.tag}
                width={program.width}
                height={program.height}
                loading="lazy"
                decoding="async"
              />
              <div className="program-card-overlay" aria-hidden="true" />
              <div className="program-head">
                <div className="program-tag">{program.tag}</div>
                <div className="program-sub">{program.sub}</div>
              </div>
              <div className="program-footer">
                <p className="program-desc">{program.desc}</p>
                <span className="program-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                    <path
                      d="M5 12h12M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
