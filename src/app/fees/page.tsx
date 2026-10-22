import { PageHeader } from '../components/layout/pageHeader/pageHeader.component';
import { FeesBoard } from '../components/fees/feesBoard/feesBoard.component';
import { Button } from '../components/ui/Button/button.component';
import { Reveal } from '../components/ui/Reveal/reveal.component';
import { FaqAccordion } from '../components/ui/faqAccordion/faqAccordion.component';
import { faqs } from '../data/faqs';
import { images } from '../data/images';
import { experiences } from '../data/experiences';
import { formatNaira } from '../utils/currency';
import { getVisitSummary } from '../utils/visitSummary';
import styles from './styles.module.css';
import { Header } from '../components/layout/header/header.component';

const EXAMPLE = { adults: 2, kids: 1, infants: 1, seating: 'none' as const };

export default function Fees() {
  const example = getVisitSummary(EXAMPLE);
  return (
    <>
      <Header />
      <PageHeader
        label="Fees & Entry"
        title="A Day at Sunny Side."
        intro="One entry for the whole destination. Pay your gate fee once and enjoy the restaurant, bar and beach club throughout your visit."
      />

      <section className={styles.section} aria-label="Fees">
        <div className={styles.grid}>
          <Reveal>
            <FeesBoard />
          </Reveal>

          <div className={styles.column}>
            <Reveal>
              <h2 className={styles.heading}>Two amounts, two meanings</h2>
              <dl className={styles.definitions}>
                <div className={styles.definitionGate}>
                  <dt className={styles.term}>Gate fee</dt>
                  <dd className={styles.description}>
                    The entry charge, paid once per guest. It covers the whole destination — not each area separately.
                  </dd>
                </div>
                <div className={styles.definitionSpend}>
                  <dt className={styles.term}>Minimum spend</dt>
                  <dd className={styles.description}>
                    The amount to spend on eligible purchases during your visit — across the restaurant, bar and beach
                    club combined. It isn’t an extra charge added to your entry.
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.06} className={styles.example}>
              <h3 className={styles.subheading}>Example: 2 adults, 1 teen and 1 infant</h3>
              <dl className={styles.exampleList}>
                <div className={styles.exampleRow}>
                  <dt className={styles.exampleTerm}>Gate fees, paid on entry</dt>
                  <dd className={styles.exampleValue}>{formatNaira(example.gateFeeTotal)}</dd>
                </div>
                <div className={styles.exampleRowDivider}>
                  <dt className={styles.exampleTerm}>Group minimum spend on purchases</dt>
                  <dd className={styles.exampleValue}>{formatNaira(example.minimumSpendTotal)}</dd>
                </div>
              </dl>
              <p className={styles.exampleNote}>
                The {formatNaira(example.minimumSpendTotal)} is spent on food and drinks during the day — it isn’t added
                to the {formatNaira(example.gateFeeTotal)} entry.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className={styles.subheading}>Your entry includes</h3>
              <ul className={styles.includes}>
                {experiences.map((exp) => (
                  <li key={exp.id} className={styles.includeChip}>
                    {exp.name}
                  </li>
                ))}
              </ul>
              <Button href="/plan" size="lg" className={styles.planButton}>
                Plan Your Visit
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="fees-faq">
        <div className={styles.faqGrid}>
          <Reveal delay={0.06}>
            <FaqAccordion items={faqs.filter((f) => f.topic === 'fees')} />
          </Reveal>
        </div>
      </section>
    </>
  );
}