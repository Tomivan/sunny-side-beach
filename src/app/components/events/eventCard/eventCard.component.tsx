import { CalendarIcon, ClockIcon } from 'lucide-react';
import { EventItem } from '../../../types/content';
import Image from 'next/image';
import styles from './styles.module.css';

interface EventCardProps {
  event: EventItem;
  layout?: 'row' | 'stack';
}

export function EventCard({ event, layout = 'row' }: EventCardProps) {
  const isRow = layout === 'row';
  return (
    <article className={[styles.card, isRow ? styles.cardRow : ''].join(' ')}>
      <div className={styles.imageWrap}>
        <Image
          src={event.image}
          alt=""
          loading="lazy"
          className={styles.image}
          width={isRow ? 300 : 600}
          height={isRow ? 200 : 400}
        />
      </div>
      <div>
        <div className={styles.tags}>
          <span className={styles.kind}>{event.kind}</span>
        </div>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.description}>{event.description}</p>
        <dl className={styles.meta}>
          <div className={styles.metaItem}>
            <dt className={styles.srOnly}>Date</dt>
            <CalendarIcon className={styles.metaIcon} aria-hidden="true" />
            <dd className={styles.metaValue}>{event.dateLabel}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt className={styles.srOnly}>Time</dt>
            <ClockIcon className={styles.metaIcon} aria-hidden="true" />
            <dd className={styles.metaValue}>{event.timeLabel}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}