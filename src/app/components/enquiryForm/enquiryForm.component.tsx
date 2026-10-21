"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { Button } from '../ui/Button/button.component';
import { FormField, inputClass } from '../ui/formField/formField.component';
import { Notice } from '../ui/Notice/notice.component';
import { EnquiryTopic, useEnquiryForm } from '../../hooks/useEnquiryForm';
import { easeOut } from '../../utils/motion';
import styles from './styles.module.css';

const TOPICS: EnquiryTopic[] = ['General question', 'Group visit', 'Cabanas', 'Events', 'Accessibility', 'Other'];

export function EnquiryForm({ simulateError = false }: { simulateError?: boolean }) {
  const { values, errors, status, update, submit, reset } = useEnquiryForm(simulateError);

  return (
    <div className={styles.card}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className={styles.success}
            role="status"
          >
            <CheckCircle2Icon className={styles.successIcon} aria-hidden="true" />
            <h3 className={styles.successHeading}>Thanks, {values.name.split(' ')[0]}!</h3>
            <p className={styles.successText}>
              Your enquiry is noted in this prototype. Once connected, our team will reply to {values.email}.
            </p>
            <Button variant="secondary" className={styles.resetButton} onClick={reset}>
              Send another enquiry
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className={styles.form}
          >
            <h3 className={styles.heading}>Send us an enquiry</h3>
            {status === 'error' && (
              <Notice tone="error" title="We couldn’t send that just now">
                Please check your connection and try again.
              </Notice>
            )}
            <div className={styles.grid}>
              <FormField id="enquiry-name" label="Your name" error={errors.name}>
                <input
                  id="enquiry-name"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                  className={inputClass(!!errors.name)}
                />
              </FormField>
              <FormField id="enquiry-email" label="Email" error={errors.email}>
                <input
                  id="enquiry-email"
                  type="email"
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
                  className={inputClass(!!errors.email)}
                />
              </FormField>
            </div>
            <FormField id="enquiry-topic" label="Topic">
              <select
                id="enquiry-topic"
                value={values.topic}
                onChange={(e) => update('topic', e.target.value as EnquiryTopic)}
                className={inputClass(false)}
              >
                {TOPICS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </FormField>
            <FormField id="enquiry-message" label="Message" error={errors.message}>
              <textarea
                id="enquiry-message"
                rows={5}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                className={`${inputClass(!!errors.message)} ${styles.textarea}`}
              />
            </FormField>
            <Button
              type="submit"
              variant="ocean"
              size="lg"
              disabled={status === 'submitting'}
              className={styles.submitButton}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2Icon className={styles.spinner} aria-hidden="true" />
                  Sending…
                </>
              ) : (
                'Send enquiry'
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}