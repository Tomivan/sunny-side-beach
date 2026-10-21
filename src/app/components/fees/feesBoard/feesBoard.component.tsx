import { BanIcon } from 'lucide-react';
import { PricingRow } from '../pricingRow/pricingRow.component';
import { Logo } from '../../ui/logo/logo.component';
import { feeNotice, feeTiers } from '../../../data/fees';
import styles from './styles.module.css';

interface FeesBoardProps {
  showLogo?: boolean;
  className?: string;
}

export function FeesBoard({ showLogo = true, className = '' }: FeesBoardProps) {
  return (
    <div className={[styles.board, className].join(' ')}>
      {showLogo && <Logo className={styles.logo} />}
      <p className={styles.title} aria-hidden="true">FEES</p>
      <p className={styles.intro}>
        One gate fee covers the restaurant, bar and beach club for your whole visit.
      </p>

      <div className={styles.tableHead}>
        <span className={styles.srOnly}>Guest type</span>
        <span className={styles.tableHeadGate}>Gate fee</span>
        <span className={styles.tableHeadSpend}>Minimum spend</span>
      </div>
      <ul className={styles.list} aria-label="Entry fees">
        {feeTiers.map((tier) => (
          <PricingRow key={tier.id} tier={tier} />
        ))}
      </ul>

      <p className={styles.notice}>
        <BanIcon className={styles.noticeIcon} aria-hidden="true" />
        {feeNotice}
      </p>
    </div>
  );
}