import { TEACHERS } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function TeachersSection() {
  return (
    <section className="ras-section ras-teachers ras-bg-white" id="teachers">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="Наші" accent="викладачі" />
          <p className="ras-lead">
            Реальні фахівці з досвідом роботи з дітьми, дорослими та бізнес-клієнтами.
          </p>
        </SectionReveal>

        <div className="ras-teachers-grid">
          {TEACHERS.map((teacher, i) => (
            <SectionReveal key={teacher.name} delay={i * 0.05}>
              <article className="ras-teacher-card ras-card-soft">
                <div className="ras-teacher-photo" aria-hidden="true">{teacher.initials}</div>
                <h3 className="ras-teacher-name">{teacher.name}</h3>
                <p className="ras-teacher-lang">{teacher.language}</p>
                <p className="ras-teacher-focus">{teacher.focus}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
