import { MenuItemRow } from '../../menu/menuItemRow/menuItemRow.component';
import { Button } from '../../ui/Button/button.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import Image from 'next/image';
import Seafood from '../../../../../public/assets/images/seafood.jpeg';
import Cocktails from '../../../../../public/assets/images/cocktails.jpeg';
import { menuItems } from '../../../data/menu';
import styles from './styles.module.css';

export function FeaturedMenu() {
  const featured = menuItems.filter((item) => item.featured);
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.container}>
        <Reveal className={styles.imageColumn}>
          <div className={styles.primaryImageFrame}>
            <Image
              src={Seafood}
              alt="Sunny Side seafood platter with grilled prawns, fish and plantain"
              loading="lazy"
              className={styles.image}
            />
          </div>
          <div className={styles.secondaryImageFrame}>
            <Image
              src={Cocktails}
              alt="Signature cocktails at sunset"
              loading="lazy"
              className={styles.secondaryImage}
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h2 id="featured-heading" className={styles.heading}>
              From the grill to the glass
            </h2>
            <p className={styles.lede}>
              Fresh plates from the kitchen and bright drinks from the bar — order from your table, your lounger or
              your cabana.
            </p>
          </Reveal>
          <Reveal delay={0.08} className={styles.items}>
            {featured.map((item) => (
              <MenuItemRow key={item.id} item={item} />
            ))}
          </Reveal>
          <Reveal delay={0.12} className={styles.actions}>
            <Button href="/food-drinks" variant="ocean">
              Browse food &amp; drinks
            </Button>
            <p className={styles.hint}>Sample menu — items and prices may change.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}