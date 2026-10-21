import { MenuItem } from '../../../types/content';
import { formatNaira } from '../../../utils/currency';
import styles from './styles.module.css';

interface MenuItemRowProps {
  item: MenuItem;
  tone?: 'light' | 'dark';
}

export function MenuItemRow({ item, tone = 'light' }: MenuItemRowProps) {
  const isLight = tone === 'light';
  return (
    <article className={styles.row}>
      <div className={styles.header}>
        <h3 className={[styles.name, isLight ? styles.nameLight : styles.nameDark].join(' ')}>
          {item.name}
        </h3>
        <span
          className={[styles.leader, isLight ? styles.leaderLight : styles.leaderDark].join(' ')}
          aria-hidden="true"
        />
        <p className={[styles.price, isLight ? styles.priceLight : styles.priceDark].join(' ')}>
          {formatNaira(item.price)}
        </p>
      </div>
      <p className={[styles.description, isLight ? styles.descriptionLight : styles.descriptionDark].join(' ')}>
        {item.description}
      </p>
      {item.tags && item.tags.length > 0 && (
        <ul className={styles.tags}>
          {item.tags.map((tag) => (
            <li
              key={tag}
              className={[styles.tag, isLight ? styles.tagLight : styles.tagDark].join(' ')}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}