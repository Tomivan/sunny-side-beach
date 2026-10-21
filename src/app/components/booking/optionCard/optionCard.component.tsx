import { CheckIcon } from 'lucide-react';
import styles from './styles.module.css';

interface OptionCardProps {
  name: string;
  value: string;
  label: string;
  hint: string;
  checked: boolean;
  onSelect: () => void;
}

export function OptionCard({ name, value, label, hint, checked, onSelect }: OptionCardProps) {
  return (
    <label
      className={[
        styles.card,
        checked ? styles.cardChecked : styles.cardDefault,
      ].join(' ')}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onSelect}
        className={styles.srOnly}
      />
      <span className={styles.label}>{label}</span>
      <span className={styles.hint}>{hint}</span>
      <span
        className={[
          styles.checkBadge,
          checked ? styles.checkBadgeVisible : styles.checkBadgeHidden,
        ].join(' ')}
        aria-hidden="true"
      >
        <CheckIcon className={styles.checkIcon} strokeWidth={3} />
      </span>
    </label>
  );
}