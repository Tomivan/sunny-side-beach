import { format, parseISO } from 'date-fns';
import { experiences } from '../../../data/experiences';
import { VisitDetails } from '../../../types/booking';
import { formatNaira } from '../../../utils/currency';
import { getVisitSummary } from '../../../utils/visitSummary';
import styles from './styles.module.css';

export function VisitSummaryPanel({ visit }: { visit: VisitDetails }) {
  const summary = getVisitSummary(visit);
  return (
    <aside
      className={`on-dark ${styles.panel}`}
      aria-label="Visit summary"
    >
      <h2 className={styles.heading}>Your Sunny Side day</h2>
      <p className={styles.date}>
        {visit.date ? format(parseISO(visit.date), 'EEEE, d MMMM') : 'Pick a date to get started'}
      </p>

      <dl className={styles.lines}>
        {summary.lines.map((line) => (
          <div key={line.id} className={styles.line}>
            <dt className={styles.lineLabel}>
              {line.count} × {line.label}
            </dt>
            <dd className={styles.lineValue}>
              {line.subtotal === 0 ? (line.count ? 'Free' : '—') : formatNaira(line.subtotal)}
            </dd>
          </div>
        ))}
      </dl>

      <div className={styles.gateRow}>
        <span className={styles.gateLabel}>Gate fees</span>
        <span className={styles.gateValue}>{formatNaira(summary.gateFeeTotal)}</span>
      </div>

      <div className={styles.minimumBox}>
        <div className={styles.minimumRow}>
          <span className={styles.minimumLabel}>Minimum spend</span>
          <span className={styles.minimumValue}>
            {summary.minimumSpendTotal > 0 ? formatNaira(summary.minimumSpendTotal) : 'None'}
          </span>
        </div>
        <p className={styles.minimumHint}>
          Spent on purchases during your visit — not added to entry.
        </p>
        {summary.cabana && (
          <p className={styles.cabanaNote}>
            Cabana interest: {formatNaira(summary.cabana.gateFee)} gate fee + {formatNaira(summary.cabana.minimumSpend)} minimum spend, subject to availability.
          </p>
        )}
      </div>

      <p className={styles.includedHeading}>Included with entry</p>
      <ul className={styles.includedList}>
        {experiences.map((exp) => (
          <li key={exp.id} className={styles.includedItem}>{exp.name}</li>
        ))}
      </ul>
    </aside>
  );
}