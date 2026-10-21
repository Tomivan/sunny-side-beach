import { Button } from '../../ui/Button/button.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import Image from 'next/image';
import Cabanas from '../../../../../public/assets/images/cabanas.jpeg';
import Loungers from '../../../../../public/assets/images/loungers.jpeg';
import { seatingOptions } from '../../../data/experiences';
import { feeTiers } from '../../../data/fees';
import { formatNaira } from '../../../utils/currency';
import styles from './styles.module.css';

export function BeachSeating() {
  const cabana = feeTiers.find((t) => t.id === 'cabana');
  return (
    <section
      className={`on-dark ${styles.section}`}
      aria-labelledby="seating-heading"
    >
      <div className={styles.container}>
        <div>
          <Reveal>
            <h2 id="seating-heading" className={styles.heading}>
              Claim your spot on the sand
            </h2>
            <p className={styles.lede}>
              Spread out in a cabana with your crew, stretch out by the water, or keep it simple with a table close to
              the shore.
            </p>
          </Reveal>
          <ul className={styles.seatingList}>
            {seatingOptions.map((option, i) => (
              <li key={option.name}>
                <Reveal delay={i * 0.05} className={styles.seatingRow}>
                  <h3 className={styles.seatingName}>{option.name}</h3>
                  <div>
                    <p className={styles.seatingDetail}>{option.detail}</p>
                    {option.name === 'Cabanas' && cabana && (
                      <p className={styles.cabanaNote}>
                        {formatNaira(cabana.gateFee)} gate fee + {formatNaira(cabana.minimumSpend)} minimum spend
                      </p>
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.1} className={styles.actions}>
            <Button href="/plan">Plan Your Visit</Button>
            <Button href="/experience#beach-club" variant="light">
              About the beach club
            </Button>
          </Reveal>
        </div>
        <Reveal className={styles.imageColumn}>
          <div className={styles.primaryImageFrame}>
            <Image
              src={Cabanas}
              alt="Cream canvas cabanas facing the sea"
              loading="lazy"
              className={styles.image}
            />
          </div>
          <div className={styles.secondaryImageFrame}>
            <Image
              src={Loungers}
              alt="Loungers and parasols on the sand"
              loading="lazy"
              className={styles.secondaryImage}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}