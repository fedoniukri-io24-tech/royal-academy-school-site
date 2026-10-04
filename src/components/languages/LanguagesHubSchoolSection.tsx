import { PageWhyMockSection } from '@/components/layout/PageWhyMockSection';
import { LANGUAGE_HUB_WHY_PILLARS } from '@/data/pages/languageHubPillars';

export function LanguagesHubSchoolSection() {
  return (
    <div className="site-why-mock-bleed site-why-mock-bleed--in-flow">
      <PageWhyMockSection
        title="Пʼять мов — одна школа"
        lead="Англійська, німецька, французька, іспанська та італійська. Група та індивідуально, діти й дорослі — офлайн у Києві та онлайн по Україні."
        pillars={LANGUAGE_HUB_WHY_PILLARS}
        columns={4}
        moreHref="#available-languages"
        moreLabel="Доступні мови"
      />
    </div>
  );
}
