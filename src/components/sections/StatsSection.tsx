import { STATS } from '@/data/homeContent';
import { CountUp } from '../ui/CountUp';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionReveal } from '../ui/SectionReveal';

export function StatsSection() {
  return (
    <section className="ras-section ras-stats ras-bg-burgundy" id="stats">
      <div className="ras-wrap">
        <SectionReveal>
          <SectionTitle main="результати" accent="у цифрах" light />
        </SectionReveal>

        <div className="ras-stats-grid">
          {STATS.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.06}>
              <div className="ras-stat-card ras-card-glass">
                <div className="ras-stat-value">
                  <CountUp value={stat.value} suffix={stat.suffix} duration={1600 + i * 200} />
                </div>
                <p className="ras-stat-label">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
