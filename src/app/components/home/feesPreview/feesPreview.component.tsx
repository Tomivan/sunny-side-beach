import Link from 'next/link';
import { FeesBoard } from '../../fees/feesBoard/feesBoard.component';
import { Button } from '../../ui/Button/button.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import styles from './styles.module.css';

export function FeesPreview() {
  return (
    <section className={styles.section} aria-labelledby="fees-preview-heading">
      <div className={styles.container}>
        <div>
          <Reveal>
            <h2 id="fees-preview-heading" className={styles.heading}>
              A Day at Sunny Side
            </h2>
            <p className={styles.lede}>
              Simple, one-time entry for the whole destination. No separate charges for the restaurant, bar or beach
              club.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <dl className={styles.definitions}>
              <div>
                <dt className={styles.term}>Gate fee</dt>
                <dd className={styles.description}>
                  Your entry charge, paid once per guest for the visit.
                </dd>
              </div>
              <div>
                <dt className={styles.term}>Minimum spend</dt>
                <dd className={styles.description}>
                  What you spend on eligible purchases during the day — not an extra fee on top.
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.1} className={styles.actions}>
            <Button href="/plan">Plan Your Visit</Button>
            <Link href="/fees" className={styles.link}>
              Full fees &amp; entry info
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.04}>
          <FeesBoard />
        </Reveal>
      </div>
    </section>
  );
}