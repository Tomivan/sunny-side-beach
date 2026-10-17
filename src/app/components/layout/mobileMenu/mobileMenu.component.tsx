import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Waves, wavesInto } from '../ui/Waves';
import { navLinks } from '../../data/navigation';
import { feeNotice } from '../../data/fees';
import { isNavLinkActive } from '../../utils/navigation';
import { easeOut } from '../../utils/motion';
import styles from './styles.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { pathname, hash } = useLocation();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24, ease: easeOut }}
          className={`on-dark ${styles.panel}`}
        >
          <nav aria-label="Mobile" className={styles.nav}>
            <ul className={styles.list}>
              {navLinks.map((link, i) => {
                const active = isNavLinkActive(link.to, pathname, hash);
                return (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.24, ease: easeOut }}
                  >
                    <Link
                      to={link.to}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={[styles.link, active ? styles.linkActive : ''].join(' ')}
                    >
                      {link.label}
                      {active ? (
                        <span className={styles.activeDot} aria-hidden="true" />
                      ) : (
                        <ArrowUpRightIcon className={styles.arrowIcon} aria-hidden="true" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.24, ease: easeOut }}
            >
              <Button to="/plan" size="lg" className={styles.planButton}>
                Plan Your Visit
              </Button>
              <p className={styles.feeNotice}>{feeNotice}</p>
            </motion.div>
          </nav>
          <Waves layers={wavesInto('#0F3341')} className={styles.waves} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}