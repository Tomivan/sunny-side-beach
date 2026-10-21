"use client";

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../../ui/Button/button.component';
import { Sun } from '../../ui/Sun/sun.component';
import { Waves, wavesInto } from '../../ui/Waves/waves.component';
import Hero from '../../../../../public/assets/images/hero.jpeg';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { easeOut } from '../../../utils/motion';
import { scrollToId } from '../../../utils/scroll';
import styles from './styles.module.css';

const HEADLINE = ['Your', 'Happy', 'Place', 'by', 'the', 'Sea.'];

export function HomeHero() {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { scrollY } = useScroll();
  
  const parallax = !reduce && isDesktop;
  const imageY = useTransform(scrollY, [0, 700], [0, parallax ? 90 : 0]);
  const sunY = useTransform(scrollY, [0, 700], [0, parallax ? 140 : 0]);

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: easeOut },
  });

  return (
    <section className={`on-dark ${styles.section}`} aria-label="Welcome to Sunny Side">
      <motion.div style={{ y: imageY }} className={styles.imageLayer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={Hero.src}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className={styles.video}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className={styles.overlay} aria-hidden="true" />

      <motion.div style={{ y: sunY }} className={styles.sunLayer}>
        <Sun className={styles.sun} />
      </motion.div>

      <div className={styles.content}>
        <h1 className={styles.headline}>
          {HEADLINE.map((word, i) => (
            <motion.span key={i} {...enter(0.1 + i * 0.05)} className={styles.word}>
              {word}
            </motion.span>
          ))}
        </h1>
        
        <motion.p {...enter(0.45)} className={styles.lede}>
          Good food. Great drinks. Beachside vibes. Everything you love, all in one place.
        </motion.p>
        
        <motion.div {...enter(0.55)} className={styles.actions}>
          <Button href="/plan" size="lg">
            Plan Your Visit
          </Button>
          <Button size="lg" variant="light" onClick={() => scrollToId('discover')}>
            Explore Sunny Side
          </Button>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId('discover')}
        className={styles.scrollButton}
        aria-label="Scroll to discover Sunny Side"
      >
        <span className={styles.scrollRing}>
          <span className={styles.scrollDot} />
        </span>
        Scroll
      </button>

      <Waves layers={wavesInto('#F3EDE0')} className={styles.waves} />
    </section>
  );
}