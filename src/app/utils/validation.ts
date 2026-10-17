import { isBefore, parseISO, startOfDay } from 'date-fns';
import { GuestDetails, GuestErrors, VisitDetails, VisitErrors } from '../types/booking';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15 && /^[+\d\s()-]+$/.test(value.trim());
}

export function validateVisit(visit: VisitDetails): VisitErrors {
  const errors: VisitErrors = {};
  if (!visit.date) {
    errors.date = 'Choose the day you’d like to visit.';
  } else if (isBefore(parseISO(visit.date), startOfDay(new Date()))) {
    errors.date = 'That date has passed — pick today or a future date.';
  }
  if (visit.adults + visit.kids === 0) {
    errors.guests = 'Add at least one adult or kid/teen to your visit.';
  }
  return errors;
}

export function validateGuest(guest: GuestDetails): GuestErrors {
  const errors: GuestErrors = {};
  if (guest.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
  if (!guest.email.trim()) errors.email = 'We need an email to send your visit summary.';else
  if (!isValidEmail(guest.email)) errors.email = 'That email doesn’t look quite right.';
  if (!guest.phone.trim()) errors.phone = 'Add a phone number so we can reach you.';else
  if (!isValidPhone(guest.phone)) errors.phone = 'Enter a valid phone number, e.g. +234 801 234 5678.';
  if (!guest.agreed) errors.agreed = 'Please confirm you’ve read the entry policies.';
  return errors;
}