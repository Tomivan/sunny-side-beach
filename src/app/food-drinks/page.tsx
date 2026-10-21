import { PageHeader } from '../components/layout/pageHeader/pageHeader.component';
import { MenuBrowser } from '../components/menu/menuBrowser/menuBrowser.component';
import { Reveal } from '../components/ui/Reveal/reveal.component';
import { FinalCta } from '../components/finalCta/finalCta.component';
import { menuItems } from '../data/menu';
import { formatNaira } from '../utils/currency';
import styles from './styles.module.css';
import { Header } from '../components/layout/header/header.component';

export default function FoodDrinks() {
  const featured = menuItems.filter((item) => item.featured && item.image);
  const [lead, ...rest] = featured;
  return (
    <>
      <Header />
      <PageHeader
        label="Food & Drinks"
        title="From the kitchen and the bar"
        intro="One menu for the whole destination. Order at your table, your lounger or your cabana — it all comes from the same Sunny Side kitchen and bar."
      />

      <section className={styles.featuredSection} aria-labelledby="featured-dishes">
        <h2 id="featured-dishes" className={styles.srOnly}>Featured</h2>
        <div className={styles.featuredGrid}>
          {lead?.image && (
            <Reveal className={styles.leadCard}>
              <img
                src={lead.image}
                alt={lead.name}
                className={styles.leadImage}
              />
              <div className={styles.leadOverlay}>
                <div className={styles.leadHeader}>
                  <h3 className={styles.leadTitle}>{lead.name}</h3>
                  <p className={styles.leadPrice}>{formatNaira(lead.price)}</p>
                </div>
                <p className={styles.leadDescription}>{lead.description}</p>
              </div>
            </Reveal>
          )}
          <div className={styles.restGrid}>
            {rest.map((item, i) => (
              <Reveal key={item.id} delay={0.06 * (i + 1)} className={styles.card}>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardPrice}>{formatNaira(item.price)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.menuSection} aria-labelledby="full-menu">
        <div className={styles.container}>
          <Reveal className={styles.menuHeader}>
            <h2 id="full-menu" className={styles.menuHeading}>
              The menu
            </h2>
            <p className={styles.menuHint}>
              Sample menu — final items and prices to be confirmed by Sunny Side.
            </p>
          </Reveal>
          <div className={styles.menuBody}>
            <MenuBrowser scope="all" id="full" />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}