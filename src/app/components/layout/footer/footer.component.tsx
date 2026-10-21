import Link from 'next/link';
import { AtSignIcon, MailIcon, MessageCircleIcon, Music2Icon, PhoneIcon } from 'lucide-react';
import { Logo } from '../../ui/logo/logo.component';
import { navLinks } from '../../../data/navigation';
import { siteConfig } from '../../../data/site';
import { feeNotice } from '../../../data/fees';
import styles from './styles.module.css';

const socialIcons: Record<string, React.ElementType> = {
  Instagram: AtSignIcon,
  TikTok: Music2Icon,
  WhatsApp: MessageCircleIcon,
};

export function Footer() {
  return (
    <footer className={`on-dark ${styles.footer}`}>
      <div className={styles.grid}>
        <div>
          <Logo variant="badge" className={styles.logo} />
          <p className={styles.tagline}>
            One destination. Restaurant, bar and beach club on one stretch of sand.
          </p>
          <p className={styles.feeNotice}>{feeNotice}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className={styles.heading}>Explore</h2>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/plan" className={styles.planLink}>
                Plan Your Visit
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>Get in touch</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <PhoneIcon className={styles.contactIcon} aria-hidden="true" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className={styles.contactLink}>
                {siteConfig.phone}
              </a>
            </li>
            <li className={styles.contactItem}>
              <MailIcon className={styles.contactIcon} aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className={styles.contactLink}>
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <ul className={styles.socialList} aria-label="Social media">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.label] ?? AtSignIcon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className={styles.socialLink}
                  >
                    <Icon className={styles.socialIcon} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
          {siteConfig.detailsArePlaceholders && (
            <p className={styles.placeholderNote}>
              Contact details are placeholders until confirmed.
            </p>
          )}
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {siteConfig.name}. Your happy place by the sea.
        </p>
      </div>
    </footer>
  );
}