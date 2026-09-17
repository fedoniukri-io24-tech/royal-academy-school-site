import { WHY_US } from '@/data/homeContent';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function WhyUsSection() {
  return (
    <section className="ras-section ras-why ras-bg-white" id="why-us">
      <div className="ras-wrap ras-why-wrap">
        <SectionReveal>
          <SectionTitle main="Чому Royal Academy" accent="School" />
        </SectionReveal>

        <div className="ras-carousel ras-why-track">
          {WHY_US.map((item, i) => (
            <SectionReveal key={item.titleSans} delay={i * 0.06} axis="x" distance={40}>
              <article className="ras-why-card ras-card-soft">
                <h3 className="ras-card-title-split">
                  <span className="ras-card-title-sans">{item.titleSans}</span>
                  <span className="ras-card-title-serif">{item.titleSerif}</span>
                </h3>
                <div className="ras-why-card-body">
                  <p className="ras-why-card-text">{item.text}</p>
                  <span className="ras-why-emoji ras-emoji-deco" aria-hidden="true">{item.emoji}</span>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
