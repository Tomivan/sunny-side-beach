import { FeeTier } from '../../../types/content';
import { formatNaira } from '../../../utils/currency';
import styles from './styles.module.css';

function Amount({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className={styles.amount}>
      <p className={styles.amountLabel}>{label}</p>
      <p className={[styles.amountValue, muted ? styles.amountValueMuted : styles.amountValueDefault].join(' ')}>
        {value}
      </p>
    </div>
  );
}

export function PricingRow({ tier }: { tier: FeeTier }) {
  const free = tier.gateFee === 0 && tier.minimumSpend === 0;
  return (
    <li className={styles.row}>
      <div className={styles.info}>
        <p className={styles.label}>{tier.label}</p>
        <p className={styles.description}>{tier.description}</p>
      </div>
      {free ? (
        <p className={styles.free}>Free entry</p>
      ) : (
        <>
          <Amount label="Gate fee" value={formatNaira(tier.gateFee)} />
          <Amount
            label="Minimum spend"
            value={tier.minimumSpend > 0 ? formatNaira(tier.minimumSpend) : 'None'}
            muted={tier.minimumSpend === 0}
          />
        </>
      )}
    </li>
  );
}