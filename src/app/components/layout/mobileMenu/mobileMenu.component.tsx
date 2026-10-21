"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '../../ui/Button/button.component';
import { Waves, wavesInto } from '../../ui/Waves/waves.component';
import { navLinks } from '../../../data/navigation';
import { feeNotice } from '../../../data/fees';
import { isNavLinkActive } from '../../../utils/navigation';
import { easeOut } from '../../../utils/motion';
import styles from './styles.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  // Keep hash in sync for active link detection
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [pathname]);

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
                const href = link.href;
                const active = isNavLinkActive(href, pathname, hash);
                
                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.24, ease: easeOut }}
                  >
                    <Link
                      href={href}
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
              <Button href="/plan" size="lg" className={styles.planButton}>
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