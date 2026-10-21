import { motion } from 'framer-motion';
import styles from './styles.module.css';

interface FilterChipsProps<T extends string> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  layoutId: string;
  label: string;
  tone?: 'light' | 'dark';
}

export function FilterChips<T extends string>({
  options,
  value,
  onChange,
  layoutId,
  label,
  tone = 'light',
}: FilterChipsProps<T>) {
  const isLight = tone === 'light';
  return (
    <div role="group" aria-label={label} className={styles.scroller}>
      <div className={styles.row}>
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option)}
              className={[
                styles.chip,
                active
                  ? isLight
                    ? styles.chipActiveLight
                    : styles.chipActiveDark
                  : isLight
                    ? styles.chipIdleLight
                    : styles.chipIdleDark,
              ].join(' ')}
            >
              {active && (
                <motion.span
                  layoutId={layoutId}
                  className={[styles.pill, isLight ? styles.pillLight : styles.pillDark].join(' ')}
                  transition={{ type: 'spring', stiffness: 520, damping: 40 }}
                />
              )}
              <span className={styles.label}>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}