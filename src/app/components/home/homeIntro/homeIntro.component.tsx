import { ExperienceHighlights } from '../experienceHighlights/experienceHighlights.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import styles from './styles.module.css';

export function HomeIntro() {
  return (
    <section
      id="discover"
      className={styles.section}
      aria-labelledby="intro-heading"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal>
            <h2 id="intro-heading" className={styles.heading}>
              One destination.
              <br />
              <span className={styles.headingAccent}>Three ways</span> to spend the day.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className={styles.lede}>
              Sunny Side brings a beachfront restaurant, a sunset bar and a laid-back beach club together on one
              stretch of sand. Come in once, then drift from lunch to cocktails to the cabanas at your own pace.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}