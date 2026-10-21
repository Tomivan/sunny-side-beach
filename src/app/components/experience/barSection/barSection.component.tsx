import { MenuBrowser } from '../../menu/menuBrowser/menuBrowser.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import Image from 'next/image';
import Cocktails from '../../../../../public/assets/images/cocktails.jpeg';
import Mocktails from '../../../../../public/assets/images/mocktails.jpeg';
import Sunset from '../../../../../public/assets/images/sunset.jpeg';
import styles from './styles.module.css';

export function BarSection() {
  return (
    <section
      id="bar"
      className={styles.section}
      aria-labelledby="bar-heading"
    >
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.copyColumn}>
            <Reveal>
              <p className={styles.eyebrow}>Bar</p>
              <h2 id="bar-heading" className={styles.heading}>
                Sip Into Sunshine
              </h2>
              <p className={styles.lede}>
                Signature cocktails, cool mocktails and chilled classics under the thatch. As the light turns gold,
                the bar becomes the place to gather, catch up and toast the sunset.
              </p>
            </Reveal>
          </div>
          <Reveal className={styles.imageGrid}>
            <div className={styles.imageFrame}>
              <Image
                src={Cocktails}
                alt="Two signature cocktails on the bar at sunset"
                loading="lazy"
                className={styles.image}
              />
            </div>
            <div className={`${styles.imageFrame} ${styles.imageFrameOffset}`}>
              <Image
                src={Mocktails}
                alt="Pineapple and mint mocktail"
                loading="lazy"
                className={styles.image}
              />
            </div>
          </Reveal>
        </div>

        <Reveal className={styles.banner}>
          <Image
            src={Sunset}
            alt="Friends sharing drinks on the beach at sunset"
            loading="lazy"
            className={styles.bannerImage}
          />
          <div className={styles.bannerOverlay} aria-hidden="true" />
          <p className={styles.bannerText}>
            Golden hour tastes better by the sea.
          </p>
        </Reveal>

        <div className={styles.menuBlock}>
          <Reveal>
            <h3 className={styles.menuHeading}>The drinks list</h3>
            <p className={styles.menuHint}>Sample menu — items and prices to be confirmed.</p>
          </Reveal>
          <div className={styles.menuBody}>
            <MenuBrowser scope="drink" id="experience-drinks" />
          </div>
        </div>
      </div>
    </section>
  );
}