import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, Loader2Icon } from 'lucide-react';
import { StepIndicator } from '../components/booking/stepIndicator/stepIndicator.component';
import { VisitStep } from '../components/booking/visitStep/visitStep.component';
import { ReviewStep } from '../components/booking/reviewStep/reviewStep.component';
import { DetailsStep } from '../components/booking/detailsStep/detailsStep.component';
import { ConfirmationStep } from '../components/booking/confirmationStep/confirmationStep.component';
import { VisitSummaryPanel } from '../components/booking/visitSummaryPanel/visitSummaryPanel.component';
import { Button } from '../components/ui/Button/button.component';
import { Notice } from '../components/ui/Notice/notice.component';
import { useVisitPlanner } from '../hooks/useVisitPlanner';
import { easeOut } from '../utils/motion';
import styles from './styles.module.css';
import { Header } from '../components/layout/header/header.component';

const CONTINUE_LABELS = ['Review your visit', 'Add your details', 'Send visit request'];

export default function PlanVisit({ simulateSubmissionError = false }: { simulateSubmissionError?: boolean }) {
  const planner = useVisitPlanner(simulateSubmissionError);
  const reduce = useReducedMotion();
  const { step, direction, status } = planner;
  const submitting = status === 'submitting';

  return (
    <section className={styles.section} aria-labelledby="plan-heading">
      <Header />
      <div id="planner-top" className={styles.container}>
        <div className={styles.intro}>
          <h1 id="plan-heading" className={styles.heading}>
            Plan Your Visit
          </h1>
          <p className={styles.lede}>
            One request for the whole of Sunny Side — restaurant, bar and beach club included. It takes about a minute.
          </p>
        </div>

        <div className={styles.stepsWrap}>
          <StepIndicator current={step} />
        </div>

        <div className={[styles.layout, step < 3 ? styles.layoutWithAside : ''].join(' ')}>
          <div className={styles.card}>
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={step}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: direction * 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction * -28 }}
                transition={{ duration: 0.24, ease: easeOut }}
              >
                {step === 0 && <VisitStep visit={planner.visit} errors={planner.visitErrors} onChange={planner.updateVisit} />}
                {step === 1 && <ReviewStep visit={planner.visit} onEdit={() => planner.goTo(0)} />}
                {step === 2 && <DetailsStep guest={planner.guest} errors={planner.guestErrors} onChange={planner.updateGuest} />}
                {step === 3 && (
                  <ConfirmationStep
                    visit={planner.visit}
                    guest={planner.guest}
                    reference={planner.reference}
                    onReset={planner.reset}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {step < 3 && (
              <div className={styles.navBar}>
                {status === 'error' && (
                  <Notice tone="error" title="We couldn’t send your request" className={styles.errorNotice}>
                    Nothing was lost — your details are still here. Please try again in a moment.
                  </Notice>
                )}
                <div className={styles.navRow}>
                  {step > 0 ? (
                    <Button variant="secondary" onClick={planner.back} disabled={submitting}>
                      <ArrowLeftIcon className={styles.navIcon} aria-hidden="true" /> Back
                    </Button>
                  ) : (
                    <p className={styles.hint}>No payment needed to plan your visit.</p>
                  )}
                  <Button size="lg" onClick={planner.next} disabled={submitting} aria-live="polite">
                    {submitting ? (
                      <>
                        <Loader2Icon className={styles.spinner} aria-hidden="true" /> Sending request…
                      </>
                    ) : (
                      <>
                        {status === 'error' && step === 2 ? 'Try again' : CONTINUE_LABELS[step]}
                        <ArrowRightIcon className={styles.navIcon} aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {step < 3 && (
            <div className={styles.aside}>
              <VisitSummaryPanel visit={planner.visit} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}