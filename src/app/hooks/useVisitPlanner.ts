"use client";

import { useState } from 'react';
import { GuestDetails, GuestErrors, SubmitStatus, VisitDetails, VisitErrors } from '../types/booking';
import { validateGuest, validateVisit } from '../utils/validation';
import { prefersReducedMotion } from '../utils/motion';

const initialVisit: VisitDetails = { date: '', arrival: 'flexible', adults: 2, kids: 0, infants: 0, seating: 'none' };
const initialGuest: GuestDetails = { fullName: '', email: '', phone: '', requests: '', agreed: false };

function focusField(id: string) {
  window.requestAnimationFrame(() => document.getElementById(id)?.focus());
}

function makeReference(): string {
  return `SS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export function useVisitPlanner(simulateError: boolean) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [visit, setVisit] = useState<VisitDetails>(initialVisit);
  const [guest, setGuest] = useState<GuestDetails>(initialGuest);
  const [visitErrors, setVisitErrors] = useState<VisitErrors>({});
  const [guestErrors, setGuestErrors] = useState<GuestErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [reference, setReference] = useState('');

  const goTo = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
    document.getElementById('planner-top')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  };

  const updateVisit = <K extends keyof VisitDetails,>(key: K, value: VisitDetails[K]) => {
    setVisit((v) => ({ ...v, [key]: value }));
    if (key === 'date') setVisitErrors((e) => ({ ...e, date: undefined }));
    if (key === 'adults' || key === 'kids') setVisitErrors((e) => ({ ...e, guests: undefined }));
  };

  const updateGuest = <K extends keyof GuestDetails,>(key: K, value: GuestDetails[K]) => {
    setGuest((g) => ({ ...g, [key]: value }));
    setGuestErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = async () => {
    setStatus('submitting');
    await new Promise((resolve) => window.setTimeout(resolve, 1600));
    if (simulateError) {
      setStatus('error');
      return;
    }
    setReference(makeReference());
    setStatus('success');
    goTo(3);
  };

  const next = () => {
    if (step === 0) {
      const errors = validateVisit(visit);
      setVisitErrors(errors);
      if (errors.date) return focusField('field-date');
      if (errors.guests) return focusField('field-adults');
      goTo(1);
    } else if (step === 1) {
      goTo(2);
    } else if (step === 2) {
      const errors = validateGuest(guest);
      setGuestErrors(errors);
      const first = (['fullName', 'email', 'phone', 'agreed'] as const).find((k) => errors[k]);
      if (first) return focusField(`field-${first}`);
      submit();
    }
    return undefined;
  };

  const back = () => {
    if (step > 0 && status !== 'submitting') {
      setStatus('idle');
      goTo(step - 1);
    }
  };

  const reset = () => {
    setVisit(initialVisit);
    setGuest(initialGuest);
    setVisitErrors({});
    setGuestErrors({});
    setStatus('idle');
    setReference('');
    goTo(0);
  };

  return { step, direction, visit, guest, visitErrors, guestErrors, status, reference, updateVisit, updateGuest, next, back, reset, goTo };
}