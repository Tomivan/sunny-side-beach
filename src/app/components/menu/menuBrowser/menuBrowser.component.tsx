"use client";

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuItemRow } from '../menuItemRow/menuItemRow.component';
import { FilterChips } from '../../ui/filterChips/filterChips.component';
import { menuCategories, menuItems } from '../../../data/menu';
import { MenuGroup } from '../../../types/content';
import { easeOut } from '../../../utils/motion';
import styles from './styles.module.css';

type Scope = 'all' | MenuGroup;

interface MenuBrowserProps {
  scope?: Scope;
  id: string;
  tone?: 'light' | 'dark';
}

const ALL = 'Everything';

export function MenuBrowser({ scope = 'all', id, tone = 'light' }: MenuBrowserProps) {
  const categories = useMemo(
    () => menuCategories.filter((c) => scope === 'all' || c.group === scope),
    [scope]
  );
  const options = [ALL, ...categories.map((c) => c.label)];
  const [active, setActive] = useState(ALL);

  const visibleCategories = active === ALL ? categories : categories.filter((c) => c.label === active);

  return (
    <div>
      <FilterChips
        options={options}
        value={active}
        onChange={setActive}
        layoutId={`menu-chip-${id}`}
        label="Menu categories"
        tone={tone}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className={styles.grid}
        >
          {visibleCategories.map((category) => {
            const items = menuItems.filter((item) => item.category === category.id);
            return (
              <section key={category.id} aria-labelledby={`${id}-${category.id}`}>
                <h3
                  id={`${id}-${category.id}`}
                  className={[
                    styles.categoryHeading,
                    tone === 'light' ? styles.categoryHeadingLight : styles.categoryHeadingDark,
                  ].join(' ')}
                >
                  {category.label}
                </h3>
                {items.length === 0 ? (
                  <p className={styles.empty}>Items coming soon.</p>
                ) : (
                  <div
                    className={[
                      styles.itemsList,
                      tone === 'light' ? styles.itemsListLight : styles.itemsListDark,
                    ].join(' ')}
                  >
                    {items.map((item) => (
                      <MenuItemRow key={item.id} item={item} tone={tone} />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}