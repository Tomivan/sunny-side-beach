import { CheckIcon, ClockIcon } from 'lucide-react';
import { Button } from '../../ui/Button/button.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import Image from 'next/image';
import Cabanas from '../../../../../public/assets/images/cabanas.jpeg';
import { amenities, seatingOptions } from '../../../data/experiences';
import { feeTiers } from '../../../data/fees';
import { formatNaira } from '../../../utils/currency';
import styles from './styles.module.css';

export function BeachClubSection() {
  const cabana = feeTiers.find((t) => t.id === 'cabana');
  return (
    <section
      id="beach-club"
      className={`on-dark ${styles.section}`}
      aria-labelledby="beach-heading"
    >
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <Reveal>
            <div className={styles.heroImageFrame}>
              <Image
                src={Cabanas}
                alt="Cabanas with daybeds on the beach"
                loading="lazy"
                className={styles.image}
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className={styles.eyebrow}>Beach Club</p>
              <h2 id="beach-heading" className={styles.heading}>
                Find Your Sunny Side
              </h2>
              <p className={styles.lede}>
                Slow down on soft sand. Lounge by the water, settle into a cabana with friends, and let the afternoon
                drift by with food and drinks brought to you.
              </p>
            </Reveal>
            <ul className={styles.seatingList}>
              {seatingOptions.map((option) => (
                <li key={option.name} className={styles.seatingItem}>
                  <h3 className={styles.seatingName}>{option.name}</h3>
                  <p className={styles.seatingDetail}>{option.detail}</p>
                  {option.name === 'Cabanas' && cabana && (
                    <p className={styles.cabanaNote}>
                      {formatNaira(cabana.gateFee)} gate fee + {formatNaira(cabana.minimumSpend)} minimum spend
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.socialGrid}>
          <Reveal>
            <h3 className={styles.socialHeading}>Music, friends &amp; the sound of the sea</h3>
            <p className={styles.socialLede}>
              The beach club is where the day gets social — good music, good company and room to spread out.
            </p>
            <h4 className={styles.amenitiesHeading}>Amenities &amp; facilities</h4>
            <ul className={styles.amenitiesList}>
              {amenities.map((a) => (
                <li key={a.label} className={styles.amenityItem}>
                  {a.confirmed ? (
                    <CheckIcon className={styles.amenityIconConfirmed} aria-hidden="true" />
                  ) : (
                    <ClockIcon className={styles.amenityIconPending} aria-hidden="true" />
                  )}
                  <span className={a.confirmed ? styles.amenityTextConfirmed : styles.amenityTextPending}>
                    {a.label}
                    {!a.confirmed && <span className={styles.amenityNote}>(to be confirmed)</span>}
                  </span>
                </li>
              ))}
            </ul>
            <Button href="/plan" className={styles.planButton}>
              Plan Your Visit
            </Button>
          </Reveal>
          {/* <Reveal delay={0.06}>
            <div className={styles.socialImageFrame}>
              <img
                src={images.dj}
                alt="DJ set on the sand under string lights"
                loading="lazy"
                className={styles.image}
              />
            </div>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}