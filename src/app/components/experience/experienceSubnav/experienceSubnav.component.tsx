"use client";

import { motion } from 'framer-motion';
import { experiences } from '../../../data/experiences';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { scrollToId } from '../../../utils/scroll';
import styles from './styles.module.css';

const SECTION_IDS = experiences.map((e) => e.id);

export function ExperienceSubnav() {
  const active = useActiveSection(SECTION_IDS);
  return (
    <nav aria-label="Experience sections" className={styles.nav}>
      <ul className={styles.list}>
        {experiences.map((exp) => {
          const isActive = active === exp.id;
          return (
            <li key={exp.id}>
              <button
                type="button"
                onClick={() => scrollToId(exp.id)}
                aria-current={isActive ? 'true' : undefined}
                className={[
                  styles.button,
                  isActive ? styles.buttonActive : styles.buttonDefault,
                ].join(' ')}
              >
                {isActive && (
                  <motion.span
                    layoutId="experience-subnav"
                    className={styles.pill}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                <span className={styles.label}>{exp.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}