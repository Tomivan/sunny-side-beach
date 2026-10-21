"use client";

import { useState } from 'react';
import { CalendarXIcon, ImageOffIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/pageHeader/pageHeader.component';
import { GalleryGrid } from '../components/gallery/galleryGrid/galleryGrid.component';
import { Lightbox } from '../components/gallery/lightBox/lightBox.component';
import { EventCard } from '../components/events/eventCard/eventCard.component';
import { FilterChips } from '../components/ui/filterChips/filterChips.component';
import { Reveal } from '../components/ui/Reveal/reveal.component';
import { Button } from '../components/ui/Button/button.component';
import { galleryCategories, galleryItems } from '../data/gallery';
import { eventKinds, events } from '../data/events';
import { EventKind, GalleryCategory } from '../types/content';
import styles from './styles.module.css';
import { Header } from '../components/layout/header/header.component';

type GalleryFilter = 'All' | GalleryCategory;
type EventFilter = 'All events' | EventKind;

export default function GalleryEvents() {
  const [category, setCategory] = useState<GalleryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [kind, setKind] = useState<EventFilter>('All events');

  const photos = category === 'All' ? galleryItems : galleryItems.filter((g) => g.category === category);
  const visibleEvents = kind === 'All events' ? events : events.filter((e) => e.kind === kind);

  return (
    <>
      <Header />
      <PageHeader
        label="Gallery & Events"
        title="Life at Sunny Side"
        intro="A look at the beach, the food, the drinks and the people — plus what’s coming up to enjoy during your visit."
      />

      <section className={styles.gallerySection} aria-labelledby="gallery-heading">
        <div className={styles.container}>
          <h2 id="gallery-heading" className={styles.srOnly}>Gallery</h2>
          <FilterChips
            options={['All', ...galleryCategories] as GalleryFilter[]}
            value={category}
            onChange={(c) => {
              setCategory(c);
              setLightboxIndex(null);
            }}
            layoutId="gallery-chip"
            label="Filter gallery"
          />

          <div className={styles.galleryBody}>
            {photos.length === 0 ? (
              <div className={styles.emptyGallery}>
                <ImageOffIcon className={styles.emptyIcon} aria-hidden="true" />
                <p className={styles.emptyTitle}>No photos here yet</p>
                <p className={styles.emptyText}>We’re adding more moments soon.</p>
              </div>
            ) : (
              <GalleryGrid items={photos} onOpen={setLightboxIndex} />
            )}
          </div>
        </div>
      </section>

      <Lightbox
        items={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />

      <section
        id="events"
        className={styles.eventsSection}
        aria-labelledby="events-page-heading"
      >
        <div className={styles.container}>
          <div className={styles.eventsHeader}>
            <Reveal>
              <h2 id="events-page-heading" className={styles.eventsHeading}>
                Upcoming at Sunny Side
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className={styles.eventsLede}>
                Events are part of your day here, not a separate booking. Plan your visit as usual and enjoy what’s on.
              </p>
            </Reveal>
          </div>
          <div className={styles.filterRow}>
            <FilterChips
              options={['All events', ...eventKinds] as EventFilter[]}
              value={kind}
              onChange={setKind}
              layoutId="event-chip"
              label="Filter events"
            />
          </div>
          {visibleEvents.length === 0 ? (
            <div className={styles.emptyEvents}>
              <CalendarXIcon className={styles.emptyIcon} aria-hidden="true" />
              <p className={styles.emptyTitle}>Nothing scheduled in this category yet</p>
              <p className={styles.emptyText}>Check back soon or follow us for announcements.</p>
            </div>
          ) : (
            <ul className={styles.eventList}>
              {visibleEvents.map((event, i) => (
                <li key={event.id} className={styles.eventItem}>
                  <Reveal delay={Math.min(i * 0.05, 0.2)}>
                    <EventCard event={event} />
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
          <div className={styles.footerRow}>
            <Button href="/plan">Plan Your Visit</Button>
            <p className={styles.footerHint}>Event details are placeholders until announced.</p>
          </div>
        </div>
      </section>
    </>
  );
}