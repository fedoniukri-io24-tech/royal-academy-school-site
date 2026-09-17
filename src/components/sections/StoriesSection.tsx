import { STORIES } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function StoriesSection() {
  return (
    <section className="ras-section ras-stories ras-bg-white" id="stories">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="Історії" accent="студентів" />
        </SectionReveal>

        <div className="ras-carousel ras-stories-track">
          {STORIES.map((story, i) => (
            <SectionReveal key={story.name} delay={i * 0.06}>
              <article className="ras-story-card ras-card-soft">
                <div className="ras-story-meta">
                  <span>{story.name}</span>
                  <span>{story.from} → {story.to}</span>
                </div>
                <p className="ras-story-goal"><strong>Мета:</strong> {story.goal}</p>
                <p className="ras-story-format"><strong>Формат:</strong> {story.format}</p>
                <p className="ras-story-duration"><strong>Тривалість:</strong> {story.duration}</p>
                <blockquote className="ras-story-quote">«{story.quote}»</blockquote>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
