"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import { GalleryItem } from '../../../types/content';
import { easeOut } from '../../../utils/motion';
import styles from './styles.module.css';

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [direction, setDirection] = useState(1);
  const open = index !== null && items[index] !== undefined;
  const item = open ? items[index as number] : null;

  const go = useCallback(
    (delta: number) => {
      if (index === null || items.length === 0) return;
      setDirection(delta);
      onChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onChange]
  );

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${(index as number) + 1} of ${items.length}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className={`on-dark ${styles.overlay}`}
          onClick={onClose}
        >
          <div className={styles.topBar} onClick={(e) => e.stopPropagation()}>
            <p className={styles.counter}>
              <span className={styles.counterCurrent}>{(index as number) + 1}</span>
              <span className={styles.counterTotal}> / {items.length} · {item.category}</span>
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className={styles.navButton}
            >
              <XIcon className={styles.navIcon} />
            </button>
          </div>

          <div className={styles.stage}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={item.id}
                src={item.src}
                alt={item.alt}
                draggable={false}
                initial={{ opacity: 0, x: direction * 48, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -48 }}
                transition={{ duration: 0.25, ease: easeOut }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  else if (info.offset.x > 60) go(-1);
                }}
                onClick={(e) => e.stopPropagation()}
                className={styles.image}
              />
            </AnimatePresence>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous image"
              className={`${styles.navButton} ${styles.navButtonPrev}`}
            >
              <ChevronLeftIcon className={styles.chevronIcon} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next image"
              className={`${styles.navButton} ${styles.navButtonNext}`}
            >
              <ChevronRightIcon className={styles.chevronIcon} />
            </button>
          </div>

          <div className={styles.bottomBar} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className={`${styles.navButton} ${styles.navButtonMobile}`}
            >
              <ChevronLeftIcon className={styles.chevronIcon} />
            </button>
            <p className={styles.caption}>{item.alt}</p>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className={`${styles.navButton} ${styles.navButtonMobile}`}
            >
              <ChevronRightIcon className={styles.chevronIcon} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}