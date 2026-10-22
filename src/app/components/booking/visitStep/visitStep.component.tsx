"use client";

import { useState, useEffect } from 'react';
import { addDays, format, isSaturday, nextSaturday } from 'date-fns';
import { CalendarDaysIcon } from 'lucide-react';
import { GuestCounter } from '../guestCounter/guestCounter.component';
import { OptionCard } from '../optionCard/optionCard.component';
import { FormField, inputClass } from '../../ui/formField/formField.component';
import { Notice } from '../../ui/Notice/notice.component';
import { arrivalOptions, maxGuestsPerType, seatingPreferenceOptions } from '../../../data/visitOptions';
import { VisitDetails, VisitErrors } from '../../../types/booking';
import { formatNaira } from '../../../utils/currency';
import { getFeeTier } from '../../../utils/visitSummary';
import styles from './styles.module.css';

interface VisitStepProps {
  visit: VisitDetails;
  errors: VisitErrors;
  onChange: <K extends keyof VisitDetails>(key: K, value: VisitDetails[K]) => void;
}

function toISO(date: Date) {
  return format(date, 'yyyy-MM-dd');
}

export function VisitStep({ visit, errors, onChange }: VisitStepProps) {
  // 1. Initialize state for dynamic dates
  const [todayISO, setTodayISO] = useState('');
  const [quickDates, setQuickDates] = useState<{ label: string; value: string }[]>([]);

  // 2. Calculate dates only on the client side
  useEffect(() => {
    const today = new Date();
    const saturday = isSaturday(today) ? today : nextSaturday(today);
    
    setTodayISO(toISO(today));
    setQuickDates([
      { label: 'Today', value: toISO(today) },
      { label: 'Tomorrow', value: toISO(addDays(today, 1)) },
      { label: 'This Saturday', value: toISO(saturday) },
    ].filter((d, i, arr) => arr.findIndex((x) => x.value === d.value) === i));
  }, []);

  const adult = getFeeTier('adult');
  const kid = getFeeTier('kid');
  const cabana = getFeeTier('cabana');

  return (
    <div className={styles.stack}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>When are you coming?</legend>
        <div className={styles.quickDates}>
          {quickDates.map((d) => (
            <button
              key={d.value}
              type="button"
              onClick={() => onChange('date', d.value)}
              aria-pressed={visit.date === d.value}
              className={[
                styles.quickDateButton,
                visit.date === d.value
                  ? styles.quickDateButtonActive
                  : styles.quickDateButtonDefault,
              ].join(' ')}
            >
              {d.label}
            </button>
          ))}
        </div>
        <div className={styles.dateFieldWrap}>
          <FormField id="field-date" label="Visit date" error={errors.date}>
            <div className={styles.dateInputWrap}>
              <input
                id="field-date"
                type="date"
                min={todayISO} // 3. Use the state variable for the min attribute
                value={visit.date}
                onChange={(e) => onChange('date', e.target.value)}
                aria-invalid={!!errors.date}
                aria-describedby={errors.date ? 'field-date-error' : undefined}
                className={`${inputClass(!!errors.date)} ${styles.dateInput}`}
              />
              <CalendarDaysIcon className={styles.dateIcon} aria-hidden="true" />
            </div>
          </FormField>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          Arrival time <span className={styles.legendHint}>(optional)</span>
        </legend>
        <div className={styles.arrivalGrid}>
          {arrivalOptions.map((option) => (
            <OptionCard
              key={option.value}
              name="arrival"
              value={option.value}
              label={option.label}
              hint={option.hint}
              checked={visit.arrival === option.value}
              onSelect={() => onChange('arrival', option.value)}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Who’s coming?</legend>
        <div className={styles.counterList}>
          <GuestCounter
            id="field-adults"
            label="Adults"
            detail={`${formatNaira(adult.gateFee)} gate fee · ${formatNaira(adult.minimumSpend)} min. spend`}
            value={visit.adults}
            max={maxGuestsPerType}
            onChange={(v) => onChange('adults', v)}
          />
          <GuestCounter
            id="field-kids"
            label="Kids / Teens"
            detail={`${formatNaira(kid.gateFee)} gate fee · no minimum spend`}
            value={visit.kids}
            max={maxGuestsPerType}
            onChange={(v) => onChange('kids', v)}
          />
          <GuestCounter
            id="field-infants"
            label="Infants"
            detail="Free entry"
            value={visit.infants}
            max={maxGuestsPerType}
            onChange={(v) => onChange('infants', v)}
          />
        </div>
        {errors.guests && (
          <Notice tone="error" className={styles.guestsNotice}>
            {errors.guests}
          </Notice>
        )}
        <p className={styles.helperText}>
          Coming with more than {maxGuestsPerType} in a group? Mention it in special requests on step 3.
        </p>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          Seating preference <span className={styles.legendHint}>(optional)</span>
        </legend>
        <div className={styles.seatingGrid}>
          {seatingPreferenceOptions.map((option) => (
            <OptionCard
              key={option.value}
              name="seating"
              value={option.value}
              label={option.label}
              hint={
                option.value === 'cabana'
                  ? `${formatNaira(cabana.gateFee)} gate fee + ${formatNaira(cabana.minimumSpend)} min. spend · ${option.hint.toLowerCase()}`
                  : option.hint
              }
              checked={visit.seating === option.value}
              onSelect={() => onChange('seating', option.value)}
            />
          ))}
        </div>
        <p className={styles.helperText}>
          Preferences help us prepare — they’re confirmed by our team, not guaranteed.
        </p>
      </fieldset>
    </div>
  );
}