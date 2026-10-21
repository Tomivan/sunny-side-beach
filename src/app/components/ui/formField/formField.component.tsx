import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon } from 'lucide-react';
import styles from './styles.module.css';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}

export function FormField({ id, label, error, hint, optional, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optional && <span className={styles.optional}>Optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className={styles.hint}>
          {hint}
        </p>
      )}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className={styles.error}
          >
            <AlertCircleIcon className={styles.errorIcon} aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function inputClass(hasError: boolean): string {
  return [styles.input, hasError ? styles.inputError : styles.inputDefault].join(' ');
}