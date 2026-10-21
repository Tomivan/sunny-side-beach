"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { Faq } from '../../../types/content';
import { easeOut } from '../../../utils/motion';
import styles from './styles.module.css';

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <li key={item.id}>
            <h3 className={styles.headingWrap}>
              <button
                type="button"
                id={`faq-btn-${item.id}`}
                aria-expanded={open}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => setOpenId(open ? null : item.id)}
                className={styles.button}
              >
                {item.question}
                <PlusIcon
                  aria-hidden="true"
                  className={[styles.icon, open ? styles.iconOpen : ''].join(' ')}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: easeOut }}
                  className={styles.panel}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}