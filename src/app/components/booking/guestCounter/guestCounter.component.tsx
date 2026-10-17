import { MinusIcon, PlusIcon } from 'lucide-react';
import styles from './styles.module.css';

interface GuestCounterProps {
  id: string;
  label: string;
  detail: string;
  value: number;
  min?: number;
  max: number;
  onChange: (value: number) => void;
}

export function GuestCounter({ id, label, detail, value, min = 0, max, onChange }: GuestCounterProps) {
  return (
    <div className={styles.counter}>
      <div>
        <p id={`${id}-label`} className={styles.label}>
          {label}
        </p>
        <p className={styles.detail}>{detail}</p>
      </div>
      <div className={styles.controls} role="group" aria-labelledby={`${id}-label`}>
        <button
          id={id}
          type="button"
          className={styles.button}
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Remove one ${label.toLowerCase()}`}
        >
          <MinusIcon className={styles.icon} />
        </button>
        <output aria-live="polite" className={styles.output}>
          {value}
        </output>
        <button
          type="button"
          className={styles.button}
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`Add one ${label.toLowerCase()}`}
        >
          <PlusIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
}