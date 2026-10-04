import Link from 'next/link';
import type { LanguagePageData } from '@/data/pages/types';
import { PageSection } from '@/components/layout/PageSection';
import { PageEnrollmentPath } from '@/components/layout/PageEnrollmentPath';
import { FormatLinkRow } from '@/components/layout/FormatLinkRow';
import {
  PageChipPanel,
  PageLeadPanel,
  PageLevelsPanel,
  PageLinkChips,
  PageProseSplit,
} from '@/components/layout/PageContentBlocks';
import { PageFaqList } from '@/components/layout/PageFaqList';
import { LANGUAGE_PROSE } from '@/data/pages/editorialContent';
import { LANGUAGE_RELATED_SLUGS } from '@/data/pages/sharedPageContent';
import { LANGUAGE_PAGES } from '@/data/pages/languages';
import { LANGUAGE_VISUALS, PROGRAM_VISUALS } from '@/data/pages/pageVisuals';

type LanguagePageTemplateProps = {
  data: LanguagePageData;
};

export function LanguagePageTemplate({ data }: LanguagePageTemplateProps) {
  const visual = LANGUAGE_VISUALS[data.slug];

  const otherLanguages = LANGUAGE_RELATED_SLUGS
    .filter((slug) => slug !== data.slug)
    .map((slug) => ({
      href: `/languages/${slug}`,
      label: LANGUAGE_PAGES[slug].name,
      emoji: LANGUAGE_VISUALS[slug]?.flag,
    }));

  const seoName = visual?.seoName ?? data.name.toLowerCase();
  const prose = LANGUAGE_PROSE[data.slug];
  const whyParagraph =
    data.whyLearn.length > 0
      ? `Найчастіші цілі: ${data.whyLearn.map((item) => item.replace(/\.$/, '')).join('; ')}.`
      : null;
  const introParagraphs = [
    data.intro,
    data.description,
    whyParagraph,
    ...(prose?.paragraphs ?? []),
  ].filter((p): p is string => Boolean(p));
  const splitImage = prose?.image ?? visual?.image;
  const splitObjectPosition = prose?.objectPosition ?? visual?.objectPosition;

  return (
    <div className="site-page-body">
      <div className="ras-wrap site-page-stack">
        <PageSection variant="plain" revealDelay={0.02}>
          {splitImage ? (
            <PageProseSplit
              title="Навіщо ця мова"
              lead={data.tagline}
              paragraphs={introParagraphs}
              image={splitImage}
              objectPosition={splitObjectPosition}
              highlights={prose?.highlights}
            />
          ) : (
            <>
              <header className="ras-mock-head ras-mock-head--left site-block__head">
                <span className="ras-landing-rule" aria-hidden="true" />
                <h2 className="ras-mock-head__title site-block__title">Навіщо ця мова</h2>
                {data.tagline ? <p className="site-block__lead">{data.tagline}</p> : null}
              </header>
              <div className="site-prose site-prose--wide">
                {introParagraphs.map((text) => (
                  <p key={text.slice(0, 40)}>{text}</p>
                ))}
              </div>
            </>
          )}
        </PageSection>

        <PageSection title="Формати навчання" variant="band" revealDelay={0.04}>
          <PageChipPanel label="Доступні формати" items={data.formats} />
          <p className="site-note">
            Порівняйте групу та індивідуально на сторінці{' '}
            <Link href="/pricing" className="site-inline-link">цін</Link>
            {' '}або в{' '}
            <Link href="/programs" className="site-inline-link">каталозі програм</Link>.
          </p>
        </PageSection>

        {data.examPrep ? (
          <PageSection title="Іспити та сертифікати" revealDelay={0.05}>
            <PageLeadPanel>{data.examPrep}</PageLeadPanel>
            <p className="site-guide-cta-row">
              <Link href="/programs/exams" className="hero-btn hero-btn--primary">
                Напрям підготовки до іспитів →
              </Link>
            </p>
          </PageSection>
        ) : null}

        <PageSection title="Програми з цією мовою" variant="band" revealDelay={0.06}>
          <div className="site-format-stack site-format-stack--large">
            {data.programs.map((program, i) => {
              const slug = program.href.split('/').pop() ?? '';
              const prog = PROGRAM_VISUALS[slug];
              return (
                <FormatLinkRow
                  key={program.href}
                  href={program.href}
                  title={program.label}
                  text={program.description}
                  image={prog?.image ?? visual?.image ?? '/school-assets/format-group.jpg'}
                  objectPosition={prog?.objectPosition ?? visual?.objectPosition}
                  index={i}
                />
              );
            })}
          </div>
        </PageSection>

        <PageSection title="Рівні" revealDelay={0.08}>
          <PageLevelsPanel levels={data.levels} />
          <p className="site-note">
            Безкоштовна діагностика —{' '}
            <Link href="/about#level-test" className="site-inline-link">як визначити рівень</Link>.
          </p>
        </PageSection>

        <PageEnrollmentPath
          title="Як почати навчання"
          lead={`Від заявки до першого заняття з ${data.name.toLowerCase()} — зазвичай кілька днів, якщо є вільне місце в групі.`}
          revealDelay={0.09}
        />

        <PageSection
          title="Інші мови школи"
          lead="Оберіть мову — далі програми, рівні CEFR та формати."
          density="tight"
          variant="plain"
          align="center"
          revealDelay={0.1}
        >
          <PageLinkChips items={otherLanguages} align="center" variant="plain" />
        </PageSection>

        <PageSection
          title="Питання"
          lead={`Часті запитання про курси ${seoName} — формат, рівні та старт.`}
          variant="band"
          align="center"
          revealDelay={0.11}
        >
          <PageFaqList items={data.faq} />
        </PageSection>

      </div>
    </div>
  );
}
