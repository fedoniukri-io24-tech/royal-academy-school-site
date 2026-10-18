'use client';

import { useMemo, useState } from 'react';
import {
  TEACHER_LANG_TABS,
  TEACHERS,
  type TeacherLangTabId,
} from '@/data/homeContent';
import { LeadFormTrigger } from '../lead-form/LeadFormTrigger';
import { LanguageFlag, type LanguageFlagId } from './LanguageFlags';
import { SectionReveal } from '../ui/SectionReveal';

export function TeachersSection() {
  const [lang, setLang] = useState<TeacherLangTabId>('all');

  const teachers = useMemo(
    () => (lang === 'all' ? TEACHERS : TEACHERS.filter((item) => item.langId === lang)),
    [lang],
  );

  return (
    <section className="home-teachers landing-section-accent landing-section-hairline" id="teachers">
      <div className="ras-wrap">
        <SectionReveal>
          <header className="ras-mock-head ras-mock-head--center">
            <span className="ras-landing-rule" aria-hidden="true" />
            <h2 className="ras-mock-head__title home-teachers__title">
              Наші викладачі — свої.
              <br />
              <span className="home-teachers__title-em">Вам буде комфортно</span>
            </h2>
          </header>
        </SectionReveal>

        <SectionReveal delay={0.04}>
          <div className="home-teachers__tabs" role="tablist" aria-label="Мови викладачів">
            {TEACHER_LANG_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={lang === tab.id}
                className={`home-teachers__tab${lang === tab.id ? ' is-active' : ''}`}
                onClick={() => setLang(tab.id)}
              >
                {tab.id !== 'all' ? (
                  <LanguageFlag id={tab.id as LanguageFlagId} name={tab.label} />
                ) : null}
                {tab.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="home-teachers__grid">
          {teachers.map((teacher, i) => (
            <SectionReveal key={teacher.id} delay={i * 0.05}>
              <article className="home-teacher">
                <div className="home-teacher__copy">
                  <p className="home-teacher__lang">
                    {teacher.language}
                    <LanguageFlag id={teacher.langId} name={teacher.language} />
                  </p>
                  <h3 className="home-teacher__name">{teacher.name}</h3>
                  <p className="home-teacher__meta">
                    <span className="home-teacher__meta-icon" aria-hidden="true">
                      ✦
                    </span>
                    <span>{teacher.level}</span>
                    <span className="home-teacher__meta-dot" aria-hidden="true">
                      ·
                    </span>
                    <span>Досвід: {teacher.experience}</span>
                  </p>
                  <p className="home-teacher__bio">{teacher.bio}</p>
                  <ul className="home-teacher__tags">
                    {teacher.focus.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <LeadFormTrigger intent="consultation" className="home-teacher__more">
                    Детальніше
                    <span aria-hidden="true">→</span>
                  </LeadFormTrigger>
                </div>

                <div className="home-teacher__photo-col">
                  <figure className="home-teacher__photo">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
