"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { Button } from '../../ui/Button/button.component';
import { Notice } from '../../ui/Notice/notice.component';
import { arrivalOptions, seatingPreferenceOptions } from '../../../data/visitOptions';
import { GuestDetails, VisitDetails } from '../../../types/booking';
import { formatNaira } from '../../../utils/currency';
import { getVisitSummary } from '../../../utils/visitSummary';
import { easeOut } from '../../../utils/motion';
import styles from './styles.module.css';

interface ConfirmationStepProps {
  visit: VisitDetails;
  guest: GuestDetails;
  reference: string;
  onReset: () => void;
}

export function ConfirmationStep({ visit, guest, reference, onReset }: ConfirmationStepProps) {
  const reduce = useReducedMotion();
  const summary = getVisitSummary(visit);
  const guests = [
    visit.adults && `${visit.adults} adult${visit.adults === 1 ? '' : 's'}`,
    visit.kids && `${visit.kids} kid${visit.kids === 1 ? '' : 's'}/teen${visit.kids === 1 ? '' : 's'}`,
    visit.infants && `${visit.infants} infant${visit.infants === 1 ? '' : 's'}`,
  ]
    .filter(Boolean)
    .join(', ');

  const rows = [
    { label: 'Reference', value: `${reference} (placeholder)` },
    { label: 'Date', value: visit.date ? format(parseISO(visit.date), 'EEEE, d MMMM yyyy') : '—' },
    { label: 'Arrival', value: arrivalOptions.find((o) => o.value === visit.arrival)?.label ?? 'Flexible' },
    { label: 'Guests', value: guests },
    { label: 'Seating', value: seatingPreferenceOptions.find((o) => o.value === visit.seating)?.label ?? 'No preference' },
    { label: 'Gate fees', value: formatNaira(summary.gateFeeTotal) },
    { label: 'Minimum spend', value: summary.minimumSpendTotal > 0 ? `${formatNaira(summary.minimumSpendTotal)} on purchases` : 'None' },
    { label: 'Contact', value: `${guest.fullName} · ${guest.email} · ${guest.phone}` },
  ];

  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={reduce ? false : { scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: easeOut }}
        className={styles.checkCircle}
      >
        <svg viewBox="0 0 48 48" className={styles.checkIcon} aria-hidden="true">
          <motion.path
            d="M12 25 L21 34 L37 15"
            fill="none"
            stroke="#17485A"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.15, ease: easeOut }}
          />
        </svg>
      </motion.div>

      <h2 className={styles.heading} tabIndex={-1} id="confirmation-heading">
        Request received, {guest.fullName.split(' ')[0]}!
      </h2>
      <p className={styles.subheading}>
        Your Sunny Side visit request is in. Here’s a summary of what you sent.
      </p>

      <dl className={styles.summaryList}>
        {rows.map((row) => (
          <div key={row.label} className={styles.summaryRow}>
            <dt className={styles.summaryLabel}>{row.label}</dt>
            <dd className={styles.summaryValue}>{row.value}</dd>
          </div>
        ))}
        {guest.requests.trim() && (
          <div className={styles.summaryRow}>
            <dt className={styles.summaryLabel}>Requests</dt>
            <dd className={styles.summaryRequests}>{guest.requests}</dd>
          </div>
        )}
      </dl>

      <Notice tone="warning" title="This is a prototype booking" className={styles.notice}>
        No real reservation has been made and availability hasn’t been checked. A live booking integration is needed
        before Sunny Side can confirm visits{visit.seating === 'cabana' ? ' or cabanas' : ''}.
      </Notice>

      <div className={styles.actions}>
        <Button href="/" variant="ocean" size="lg">
          Back to home
        </Button>
        <Button variant="secondary" size="lg" onClick={onReset}>
          Plan another visit
        </Button>
      </div>
    </div>
  );
}