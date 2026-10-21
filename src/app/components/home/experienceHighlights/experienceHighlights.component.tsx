"use client";

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { experiences } from '../../../data/experiences';
import { easeOut } from '../../../utils/motion';
import styles from './styles.module.css';

export function ExperienceHighlights({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <ul className={[styles.list, className].join(' ')}>
      {experiences.map((exp, i) => (
        <motion.li
          key={exp.id}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.3, delay: i * 0.06, ease: easeOut }}
          className={i === 1 ? styles.offsetItem : ''}
        >
          <Link href={exp.href} className={styles.card}>
            <div className={styles.imageFrame}>
              <img
                src={exp.image}
                alt={exp.imageAlt}
                loading="lazy"
                className={styles.image}
              />
              <span className={styles.badge}>{exp.name}</span>
            </div>
            <h3 className={styles.title}>{exp.title}</h3>
            <p className={styles.summary}>{exp.summary}</p>
            <span className={styles.cta}>
              Explore the {exp.name.toLowerCase()}
              <ArrowRightIcon className={styles.ctaIcon} aria-hidden="true" />
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}