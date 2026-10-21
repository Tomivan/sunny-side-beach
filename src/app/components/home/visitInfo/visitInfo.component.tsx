import { ClockIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../../ui/Button/button.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import { siteConfig } from '../../../data/site';
import styles from './styles.module.css';

export function VisitInfo() {
  return (
    <section className={styles.section} aria-labelledby="visit-info-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal>
            <h2 id="visit-info-heading" className={styles.heading}>
              Find us by the sea
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <Button href="/visit" variant="secondary">
              Visit details &amp; FAQs
            </Button>
          </Reveal>
        </div>
        <div className={styles.grid}>
          <Reveal className={styles.colFirst}>
            <MapPinIcon className={styles.icon} aria-hidden="true" />
            <h3 className={styles.colHeading}>Location</h3>
            <p className={styles.text}>{siteConfig.address}</p>
            <p className={styles.note}>{siteConfig.addressNote}</p>
          </Reveal>
          <Reveal delay={0.05} className={styles.colMiddle}>
            <ClockIcon className={styles.icon} aria-hidden="true" />
            <h3 className={styles.colHeading}>Opening hours</h3>
            <dl className={styles.hours}>
              {siteConfig.hours.map((h) => (
                <div key={h.days} className={styles.hoursRow}>
                  <dt className={styles.hoursDay}>{h.days}</dt>
                  <dd className={styles.hoursTime}>{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1} className={styles.colLast}>
            <PhoneIcon className={styles.icon} aria-hidden="true" />
            <h3 className={styles.colHeading}>Contact</h3>
            <p className={styles.text}>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className={styles.link}>
                {siteConfig.phone}
              </a>
            </p>
            <p className={styles.text}>
              <a href={`mailto:${siteConfig.email}`} className={styles.link}>
                {siteConfig.email}
              </a>
            </p>
            {siteConfig.detailsArePlaceholders && (
              <p className={styles.note}>Placeholder details until confirmed.</p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}