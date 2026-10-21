import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../../ui/Reveal/reveal.component';
import { galleryItems } from '../../../data/gallery';
import Image from 'next/image';
import styles from './styles.module.css';

const SPANS = [
  styles.spanLarge,
  styles.spanSmall,
  styles.spanSmall,
  styles.spanSmall,
  styles.spanSmall,
];

export function GalleryPreview() {
  const preview = galleryItems.slice(0, 5);
  return (
    <section className={styles.section} aria-labelledby="gallery-preview-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal>
            <h2 id="gallery-preview-heading" className={styles.heading}>
              Moments on the sand
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <Link href="/gallery" className={styles.link}>
              View the gallery
              <ArrowRightIcon className={styles.linkIcon} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.08} className={styles.gridWrap}>
          <ul className={styles.grid}>
            {preview.map((item, i) => (
              <li key={item.id} className={SPANS[i]}>
                <Link
                  href="/gallery"
                  className={styles.tile}
                  aria-label={`Gallery: ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={styles.image}
                    width={500}
                    height={300}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}