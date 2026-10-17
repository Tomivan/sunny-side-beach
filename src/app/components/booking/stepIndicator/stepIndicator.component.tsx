import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { easeOut } from '../../utils/motion';
import styles from './styles.module.css';

const STEPS = ['Your visit', 'Review', 'Your details', 'Confirmed'];

export function StepIndicator({ current }: { current: number }) {
  return (
    <nav aria-label="Visit planning progress" className={styles.nav}>
      <div className={styles.track} aria-hidden="true">
        <motion.div
          className={styles.trackFill}
          initial={false}
          animate={{ scaleX: current / (STEPS.length - 1) }}
          transition={{ duration: 0.3, ease: easeOut }}
        />
      </div>
      <ol className={styles.list}>
        {STEPS.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li
              key={label}
              className={styles.item}
              aria-current={active ? 'step' : undefined}
            >
              <span
                className={[
                  styles.badge,
                  done
                    ? styles.badgeDone
                    : active
                      ? styles.badgeActive
                      : styles.badgePending,
                ].join(' ')}
              >
                {done ? (
                  <CheckIcon className={styles.checkIcon} strokeWidth={3} aria-hidden="true" />
                ) : (
                  i + 1
                )}
              </span>
              <span
                className={[
                  styles.label,
                  active || done ? styles.labelActive : styles.labelPending,
                ].join(' ')}
              >
                {label}
                {done && <span className={styles.srOnly}> (completed)</span>}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}