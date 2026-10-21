import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { EventCard } from '../../events/eventCard/eventCard.component';
import { Reveal } from '../../ui/Reveal/reveal.component';
import { events } from '../../../data/events';
import styles from './styles.module.css';

export function EventsPreview() {
  const [lead, ...rest] = events.slice(0, 3);
  return (
    <section className={styles.section} aria-labelledby="events-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal>
            <h2 id="events-heading" className={styles.heading}>
              Music, gatherings &amp; golden hours
            </h2>
            <p className={styles.lede}>
              Something extra to enjoy during your visit — all part of your day at Sunny Side.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <Link href="/gallery#events" className={styles.allLink}>
              All events
              <ArrowRightIcon className={styles.allLinkIcon} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className={styles.body}>
          {lead && (
            <Reveal>
              <EventCard event={lead} layout="stack" />
            </Reveal>
          )}
          <div className={styles.restList}>
            {rest.map((event, i) => (
              <Reveal key={event.id} delay={0.06 * (i + 1)}>
                <EventCard event={event} layout="stack" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}