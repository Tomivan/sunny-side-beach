import { AnimatePresence, motion } from 'framer-motion';
import { ExpandIcon } from 'lucide-react';
import { GalleryItem } from '../../../types/content';
import { easeOut } from '../../../utils/motion';
import styles from './styles.module.css';

interface GalleryGridProps {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}

export function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  return (
    <ul className={styles.grid}>
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: easeOut, delay: Math.min(index * 0.04, 0.24) }}
            className={styles.item}
          >
            <button
              type="button"
              onClick={() => onOpen(index)}
              className={styles.button}
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={styles.image}
              />
              <span className={styles.caption}>
                {item.category}
                <ExpandIcon className={styles.captionIcon} aria-hidden="true" />
              </span>
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}