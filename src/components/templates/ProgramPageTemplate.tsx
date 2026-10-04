import Link from 'next/link';
import type { ProgramPageData } from '@/data/pages/types';
import { PageSection } from '@/components/layout/PageSection';
import { PageEnrollmentPath } from '@/components/layout/PageEnrollmentPath';
import {
  PageChipPanel,
  PageLeadPanel,
  PageLinkChips,
  PagePhotoStepCards,
  PageProseSplit,
  PageStepBlocks,
} from '@/components/layout/PageContentBlocks';
import { PageFaqList } from '@/components/layout/PageFaqList';
import { PROGRAM_PROSE } from '@/data/pages/editorialContent';
import { ENROLLMENT_JOURNEY } from '@/data/pages/sharedPageContent';
import { LANGUAGE_VISUALS, PROGRAM_GOAL_PHOTOS } from '@/data/pages/pageVisuals';

type ProgramPageTemplateProps = {
  data: ProgramPageData;
};

function padStep(index: number) {
  return String(index + 1).padStart(2, '0');
}

export function ProgramPageTemplate({ data }: ProgramPageTemplateProps) {
  const prose = PROGRAM_PROSE[data.slug];

  const audienceSteps = data.audience.map((text, i) => ({
    num: padStep(i),
    text,
  }));

  const goalSteps = data.goals.map((text, i) => {
    const photo = PROGRAM_GOAL_PHOTOS[i % PROGRAM_GOAL_PHOTOS.length];
    return {
      num: padStep(i),
      text,
      image: photo.image,
      objectPosition: photo.objectPosition,
    };
  });

  const outcomeSteps = data.outcomes.map((text, i) => ({
    num: padStep(i),
    text,
  }));

  const curriculumSteps = data.curriculum.map((text, i) => ({
    num: padStep(i),
    text,
  }));

  return (
    <div className="site-page-body">
      <div className="ras-wrap site-page-stack">
        {prose?.image ? (
          <PageSection variant="plain" revealDelay={0.015}>
            <PageProseSplit
              title={prose.title}
              lead={prose.lead ?? data.resultLine}
              paragraphs={prose.paragraphs}
              image={prose.image}
              objectPosition={prose.objectPosition}
              highlights={prose.highlights}
            />
          </PageSection>
        ) : null}

        <PageSection title="Кому підходить" lead={data.resultLine} revealDelay={0.02}>
          <PageStepBlocks steps={audienceSteps} columns={2} />
        </PageSection>

        <PageSection title="Що дає програма" variant="band" revealDelay={0.04}>
          <PagePhotoStepCards steps={goalSteps} />
        </PageSection>

        <PageSection
          title="Результат після курсу"
          lead="Орієнтири, до яких ми працюємо разом із вами — точний timeline залежить від стартового рівня та інтенсивності."
          revealDelay={0.05}
        >
          <PageStepBlocks steps={outcomeSteps} />
        </PageSection>

        <PageSection title="Що вивчаєте" variant="band" revealDelay={0.06}>
          <PageStepBlocks steps={curriculumSteps} columns={2} />
        </PageSection>

        <PageSection title="Формат і рівні" revealDelay={0.08}>
          <div className="site-meta-row">
            {data.format.map((row) => (
              <div key={row.label} className="site-meta-item">
                <span className="site-meta-item__label">{row.label}</span>
                <span className="site-meta-item__value">{row.value}</span>
              </div>
            ))}
          </div>
          <PageChipPanel label="Рівні старту (CEFR)" items={data.levels} />
        </PageSection>

        <PageSection title="Методика" variant="band" revealDelay={0.1}>
          <PageLeadPanel>{data.methodology}</PageLeadPanel>
          <PageChipPanel label="Що входить у навчання" items={data.includes} />
        </PageSection>

        <PageSection
          title="Мови програми"
          density="tight"
          variant="plain"
          align="center"
          revealDelay={0.11}
        >
          <PageLinkChips
            items={data.languages.map((lang) => {
              const slug = lang.href.split('/').pop() ?? '';
              return {
                ...lang,
                emoji: LANGUAGE_VISUALS[slug]?.flag,
              };
            })}
            align="center"
            variant="plain"
          />
          <p className="site-note site-note--center">
            <Link href="/languages" className="site-inline-link">Усі мови школи →</Link>
          </p>
        </PageSection>

        {data.priceFrom ? (
          <PageSection title="Вартість" density="tight" variant="band" revealDelay={0.12}>
            <p className="site-price-line">
              {data.priceFrom}
              <Link href="/pricing" className="site-inline-link">
                Усі тарифи →
              </Link>
            </p>
            <p className="site-note">{data.platformNote}</p>
          </PageSection>
        ) : (
          <PageSection title="Навчальна платформа" density="tight" revealDelay={0.12}>
            <p className="site-note">{data.platformNote}</p>
          </PageSection>
        )}

        <PageEnrollmentPath
          title="Як записатися"
          lead="Безкоштовна діагностика та знайомче заняття — перед тим як обирати пакет оплати."
          steps={ENROLLMENT_JOURNEY}
          revealDelay={0.13}
        />

        {data.faq.length > 0 ? (
          <PageSection
            title="Питання"
            lead="Типові запитання про цю програму — решту уточнює менеджер на діагностиці."
            variant="band"
            align="center"
            revealDelay={0.14}
          >
            <PageFaqList items={data.faq} />
          </PageSection>
        ) : null}
      </div>
    </div>
  );
}
