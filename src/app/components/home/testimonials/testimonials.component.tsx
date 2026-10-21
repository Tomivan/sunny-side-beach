import { Reveal } from '../../ui/Reveal/reveal.component';
import { testimonials } from '../../../data/testimonials';
import styles from './styles.module.css';

export function Testimonials() {
  const [lead, ...rest] = testimonials;
  const hasPlaceholders = testimonials.some((t) => t.isPlaceholder);
  return (
    <section className={styles.section} aria-labelledby="reviews-heading">
      <div className={styles.container}>
        <Reveal>
          <h2 id="reviews-heading" className={styles.heading}>
            Guest stories
          </h2>
          {hasPlaceholders && (
            <p className={styles.placeholderNote}>
              Placeholder reviews — real guest reviews coming soon.
            </p>
          )}
        </Reveal>
        <div className={styles.grid}>
          {lead && (
            <Reveal>
              <figure className={styles.figure}>
                <blockquote className={styles.leadQuote}>
                  “{lead.quote}”
                </blockquote>
                <figcaption className={styles.leadCaption}>
                  <span className={styles.name}>{lead.name}</span> · {lead.context}
                </figcaption>
              </figure>
            </Reveal>
          )}
          <div className={styles.restList}>
            {rest.map((t, i) => (
              <Reveal key={t.id} delay={0.06 * (i + 1)}>
                <figure className={styles.figure}>
                  <blockquote className={styles.quote}>“{t.quote}”</blockquote>
                  <figcaption className={styles.caption}>
                    <span className={styles.name}>{t.name}</span> · {t.context}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}