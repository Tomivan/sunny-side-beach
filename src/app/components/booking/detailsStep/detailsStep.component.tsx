import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, CheckIcon } from 'lucide-react';
import { FormField, inputClass } from '../../ui/formField/formField.component';
import { feeNotice } from '../../../data/fees';
import { GuestDetails, GuestErrors } from '../../../types/booking';
import styles from './styles.module.css';

interface DetailsStepProps {
  guest: GuestDetails;
  errors: GuestErrors;
  onChange: <K extends keyof GuestDetails>(key: K, value: GuestDetails[K]) => void;
}

export function DetailsStep({ guest, errors, onChange }: DetailsStepProps) {
  const describe = (key: keyof GuestErrors) => (errors[key] ? `field-${key}-error` : undefined);

  return (
    <div className={styles.stack}>
      <div>
        <h2 className={styles.heading}>Who should we contact?</h2>
        <p className={styles.subheading}>We’ll use these details to follow up on your visit request.</p>
      </div>

      <FormField id="field-fullName" label="Full name" error={errors.fullName}>
        <input
          id="field-fullName"
          value={guest.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          autoComplete="name"
          aria-invalid={!!errors.fullName}
          aria-describedby={describe('fullName')}
          className={inputClass(!!errors.fullName)}
        />
      </FormField>

      <div className={styles.gridTwo}>
        <FormField id="field-email" label="Email" error={errors.email}>
          <input
            id="field-email"
            type="email"
            inputMode="email"
            value={guest.email}
            onChange={(e) => onChange('email', e.target.value)}
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={describe('email')}
            className={inputClass(!!errors.email)}
          />
        </FormField>
        <FormField id="field-phone" label="Phone number" error={errors.phone}>
          <input
            id="field-phone"
            type="tel"
            inputMode="tel"
            value={guest.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            autoComplete="tel"
            placeholder="+234 801 234 5678"
            aria-invalid={!!errors.phone}
            aria-describedby={describe('phone')}
            className={inputClass(!!errors.phone)}
          />
        </FormField>
      </div>

      <FormField
        id="field-requests"
        label="Special requests"
        optional
        hint="Celebrations, large groups, accessibility needs — anything that helps us prepare."
      >
        <textarea
          id="field-requests"
          rows={4}
          value={guest.requests}
          onChange={(e) => onChange('requests', e.target.value)}
          aria-describedby="field-requests-hint"
          className={`${inputClass(false)} ${styles.textarea}`}
        />
      </FormField>

      <div>
        <label
          className={[
            styles.agreeLabel,
            errors.agreed
              ? styles.agreeLabelError
              : guest.agreed
                ? styles.agreeLabelChecked
                : styles.agreeLabelDefault,
          ].join(' ')}
        >
          <input
            id="field-agreed"
            type="checkbox"
            checked={guest.agreed}
            onChange={(e) => onChange('agreed', e.target.checked)}
            aria-invalid={!!errors.agreed}
            aria-describedby={describe('agreed')}
            className={styles.srOnly}
          />
          <span
            className={[
              styles.checkbox,
              guest.agreed ? styles.checkboxChecked : styles.checkboxDefault,
            ].join(' ')}
            aria-hidden="true"
          >
            {guest.agreed && <CheckIcon className={styles.checkIcon} strokeWidth={3} />}
          </span>
          <span className={styles.agreeText}>
            I understand the entry policies: gate fees apply per guest, adults have a minimum spend on eligible
            purchases, and {feeNotice.charAt(0).toLowerCase() + feeNotice.slice(1)}
          </span>
        </label>

        <AnimatePresence initial={false}>
          {errors.agreed && (
            <motion.p
              id="field-agreed-error"
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className={styles.errorMessage}
            >
              <AlertCircleIcon className={styles.errorIcon} aria-hidden="true" />
              {errors.agreed}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}