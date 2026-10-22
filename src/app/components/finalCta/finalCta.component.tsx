import { Button } from '../ui/Button/button.component';
import { Sun } from '../ui/Sun/sun.component';
import { Waves, wavesInto } from '../ui/Waves/waves.component';
import { Reveal } from '../ui/Reveal/reveal.component';
import styles from './styles.module.css';

export function FinalCta() {
  return (
    <section className={`on-dark ${styles.section}`} aria-labelledby="final-cta">
      <Sun className={styles.sun} />
      <div className={styles.container}>
        <Reveal>
          <h2 id="final-cta" className={styles.heading}>
            Your Sunny Side Day Awaits
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className={styles.lede}>
            One visit. Lunch by the water, drinks at sunset and an afternoon on the sand — planned in a few taps.
          </p>
        </Reveal>
        <Reveal delay={0.12} className={styles.actions}>
          <Button href="/plan" size="lg">
            Plan Your Visit
          </Button>
          <Button href="/fees" size="lg" variant="light">
            See fees &amp; entry
          </Button>
        </Reveal>
      </div>
      <Waves layers={wavesInto('#0F3341')} className={styles.waves} />
    </section>
  );
}