"use client";

import { useState } from 'react';
import { isValidEmail } from '../utils/validation';

export type EnquiryTopic = 'General question' | 'Group visit' | 'Cabanas' | 'Events' | 'Accessibility' | 'Other';

export interface EnquiryValues {
  name: string;
  email: string;
  topic: EnquiryTopic;
  message: string;
}

type EnquiryErrors = Partial<Record<'name' | 'email' | 'message', string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const initial: EnquiryValues = { name: '', email: '', topic: 'General question', message: '' };

export function useEnquiryForm(simulateError: boolean) {
  const [values, setValues] = useState<EnquiryValues>(initial);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = <K extends keyof EnquiryValues,>(key: K, value: EnquiryValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): EnquiryErrors => {
    const next: EnquiryErrors = {};
    if (values.name.trim().length < 2) next.name = 'Please tell us your name.';
    if (!isValidEmail(values.email)) next.email = 'Enter a valid email so we can reply.';
    if (values.message.trim().length < 10) next.message = 'Add a little more detail (at least 10 characters).';
    return next;
  };

  const submit = async () => {
    const next = validate();
    setErrors(next);
    const firstKey = Object.keys(next)[0];
    if (firstKey) {
      document.getElementById(`enquiry-${firstKey}`)?.focus();
      return;
    }
    setStatus('submitting');
    await new Promise((resolve) => window.setTimeout(resolve, 1400));
    setStatus(simulateError ? 'error' : 'success');
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, update, submit, reset };
}