"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Sun } from '../../ui/Sun/sun.component';
import { easeOut } from '../../../utils/motion';
import styles from './styles.module.css';

interface PageHeaderProps {
  label: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
}

export function PageHeader({ label, title, intro, children }: PageHeaderProps) {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: easeOut },
  });

  return (
    <section className={styles.section}>
      <Sun className={styles.sun} />
      <div className={styles.container}>
        <motion.p {...enter(0)} className={styles.label}>
          {label}
        </motion.p>
        <motion.h1 {...enter(0.06)} className={styles.title}>
          {title}
        </motion.h1>
        <motion.p {...enter(0.12)} className={styles.intro}>
          {intro}
        </motion.p>
        {children && <motion.div {...enter(0.18)}>{children}</motion.div>}
      </div>
    </section>
  );
}