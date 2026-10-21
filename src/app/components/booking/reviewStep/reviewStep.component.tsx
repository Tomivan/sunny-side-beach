import { format, parseISO } from 'date-fns';
import { PencilIcon } from 'lucide-react';
import { Notice } from '../../ui/Notice/notice.component';
import { arrivalOptions, seatingPreferenceOptions } from '../../../data/visitOptions';
import { feeNotice } from '../../../data/fees';
import { VisitDetails } from '../../../types/booking';
import { formatNaira } from '../../../utils/currency';
import { getVisitSummary } from '../../../utils/visitSummary';
import styles from './styles.module.css';

interface ReviewStepProps {
  visit: VisitDetails;
  onEdit: () => void;
}

export function ReviewStep({ visit, onEdit }: ReviewStepProps) {
  const summary = getVisitSummary(visit);
  const arrival = arrivalOptions.find((o) => o.value === visit.arrival)?.label ?? 'Flexible';
  const seating = seatingPreferenceOptions.find((o) => o.value === visit.seating)?.label ?? 'No preference';

  return (
    <div className={styles.stack}>
      <section aria-labelledby="review-visit">
        <div className={styles.sectionHeader}>
          <h2 id="review-visit" className={styles.heading}>Your visit</h2>
          <button type="button" onClick={onEdit} className={styles.editButton}>
            <PencilIcon className={styles.editIcon} aria-hidden="true" /> Edit
          </button>
        </div>
        <dl className={styles.visitGrid}>
          <div>
            <dt className={styles.term}>Date</dt>
            <dd className={styles.description}>
              {visit.date ? format(parseISO(visit.date), 'EEE, d MMM yyyy') : '—'}
            </dd>
          </div>
          <div>
            <dt className={styles.term}>Arrival</dt>
            <dd className={styles.description}>{arrival}</dd>
          </div>
          <div>
            <dt className={styles.term}>Seating</dt>
            <dd className={styles.description}>{seating}</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="review-gate">
        <h2 id="review-gate" className={styles.heading}>Gate fees</h2>
        <p className={styles.sectionHint}>Paid once per guest — covers the restaurant, bar and beach club.</p>
        <table className={styles.table}>
          <caption className={styles.srOnly}>Gate fees by guest type</caption>
          <tbody className={styles.tableBody}>
            {summary.lines
              .filter((l) => l.count > 0)
              .map((line) => (
                <tr key={line.id}>
                  <th scope="row" className={styles.rowHeader}>
                    {line.count} × {line.label}
                    <span className={styles.rowHint}>
                      {line.unitFee === 0 ? 'Free' : `@ ${formatNaira(line.unitFee)}`}
                    </span>
                  </th>
                  <td className={styles.rowValue}>
                    {line.subtotal === 0 ? 'Free' : formatNaira(line.subtotal)}
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr className={styles.totalRow}>
              <th scope="row" className={styles.totalLabel}>Total gate fees</th>
              <td className={styles.totalValue}>{formatNaira(summary.gateFeeTotal)}</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section aria-labelledby="review-min" className={styles.minimumSection}>
        <div className={styles.minimumHeader}>
          <h2 id="review-min" className={styles.subheading}>Group minimum spend</h2>
          <p className={styles.minimumValue}>
            {summary.minimumSpendTotal > 0 ? formatNaira(summary.minimumSpendTotal) : 'None'}
          </p>
        </div>
        <p className={styles.minimumText}>
          {summary.minimumSpendTotal > 0
            ? `${visit.adults} adult${visit.adults === 1 ? '' : 's'} × ${formatNaira(summary.adultMinimumSpend)}. `
            : ''}
          This is <strong>not added to your gate fees</strong>. It’s the amount your group spends on eligible purchases —
          food and drinks across the restaurant, bar and beach club — during your visit. Kids, teens and infants have no
          minimum spend.
        </p>
      </section>

      {summary.cabana && (
        <section aria-labelledby="review-cabana" className={styles.cabanaSection}>
          <h2 id="review-cabana" className={styles.cabanaHeading}>Cabana interest</h2>
          <dl className={styles.cabanaGrid}>
            <div>
              <dt className={styles.cabanaTerm}>Cabana gate fee</dt>
              <dd className={styles.cabanaValue}>{formatNaira(summary.cabana.gateFee)}</dd>
            </div>
            <div>
              <dt className={styles.cabanaTerm}>Cabana minimum spend</dt>
              <dd className={styles.cabanaValue}>{formatNaira(summary.cabana.minimumSpend)}</dd>
            </div>
          </dl>
          <p className={styles.cabanaText}>
            Cabanas are subject to availability. Our team confirms your cabana as part of this same visit request and
            will explain how cabana terms apply to your group.
          </p>
        </section>
      )}

      <section aria-labelledby="review-policies">
        <h2 id="review-policies" className={styles.subheading}>Policies &amp; availability</h2>
        <ul className={styles.policyList}>
          <li>{feeNotice}</li>
          <li>One gate fee per guest covers the whole destination for your visit.</li>
          <li>Availability isn’t confirmed in this prototype — your request is reviewed by our team.</li>
          <li>No payment is taken here.</li>
        </ul>
      </section>

      <Notice tone="info">Prices shown reflect current Sunny Side fees and may be updated by the venue.</Notice>
    </div>
  );
}