"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from '../../ui/logo/logo.component';
import { Button } from '../../ui/Button/button.component';
import { MobileMenu } from '../mobileMenu/mobileMenu.component';
import { navLinks } from '../../../data/navigation';
import { isNavLinkActive } from '../../../utils/navigation';
import styles from './styles.module.css';

export function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const transparent = pathname === '/' && !scrolled && !menuOpen;

  return (
    <header
      className={[
        styles.header,
        transparent ? styles.headerTransparent : styles.headerScrolled,
      ].join(' ')}
    >
      <div className={styles.inner}>
        <Link href="/" aria-label="Sunny Side Beach — home" className={styles.logoLink}>
          <Logo className={styles.logo} variant={transparent ? 'badge' : 'blend'} />
        </Link>

        <nav aria-label="Main" className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const href = link.href; 
              const active = isNavLinkActive(href, pathname, hash);
              
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      styles.navLink,
                      transparent ? styles.navLinkTransparent : styles.navLinkScrolled,
                    ].join(' ')}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className={styles.navActive}
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="/plan" className={styles.planButton}>
            Plan Your Visit
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={styles.menuButton}
          >
            {menuOpen ? <XIcon className={styles.menuIcon} /> : <MenuIcon className={styles.menuIcon} />}
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}