import { MenuItemRow } from '../../menu/menuItemRow/menuItemRow.component';
import { MenuBrowser } from '../../menu/menuBrowser/menuBrowser.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import Image from 'next/image';
import Hero from '../../../../../public/assets/images/hero.jpeg';
import Restaurant from '../../../../../public/assets/images/bar.jpeg';
import Seafood from '../../../../../public/assets/images/seafood.jpeg';
import { menuItems } from '../../../data/menu';
import styles from './styles.module.css';

const FOOD_GALLERY = [
  { src: Seafood, alt: 'Grilled seafood platter on a wooden table' },
  { src: Restaurant, alt: 'Beachside tables set for lunch' },
  { src: Hero, alt: 'Shaded dining decks along the shoreline' },
];

export function RestaurantSection() {
  const highlights = menuItems
    .filter((i) => i.group === 'food' && (i.featured || i.category === 'small-plates'))
    .slice(0, 3);

  return (
    <section
      id="restaurant"
      className={styles.section}
      aria-labelledby="restaurant-heading"
    >
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <Reveal>
            <div className={styles.heroImageFrame}>
              <Image
                src={Restaurant}
                alt="Beachfront tables set with seafood and drinks overlooking the sea"
                loading="lazy"
                className={styles.image}
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className={styles.eyebrow}>Restaurant</p>
              <h2 id="restaurant-heading" className={styles.heading}>
                Good Food, Ocean Views
              </h2>
              <p className={styles.lede}>
                Settle in for a long lunch with your toes almost in the sand. Seafood fresh off the grill, coastal
                favourites and plates made for sharing — served with the sea as the backdrop.
              </p>
            </Reveal>
            <Reveal delay={0.08} className={styles.highlights}>
              {highlights.map((item) => (
                <MenuItemRow key={item.id} item={item} />
              ))}
            </Reveal>
          </div>
        </div>

        <ul className={styles.gallery} aria-label="Food gallery">
          {FOOD_GALLERY.map((img, i) => (
            <li key={img.src.src} className={i === 0 ? styles.galleryItemWide : ''}>
              <Reveal delay={i * 0.05} className={styles.galleryFrame}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={styles.galleryImage}
                />
              </Reveal>
            </li>
          ))}
        </ul>

        <div className={styles.menuBlock}>
          <Reveal>
            <h3 className={styles.menuHeading}>Browse the kitchen menu</h3>
            <p className={styles.menuHint}>Sample menu — items and prices to be confirmed.</p>
          </Reveal>
          <div className={styles.menuBody}>
            <MenuBrowser scope="food" id="experience-food" />
          </div>
        </div>
      </div>
    </section>
  );
}