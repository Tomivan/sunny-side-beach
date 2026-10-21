import { AccessibilityIcon, AtSignIcon, BanIcon, ClockIcon, MailIcon, MapPinIcon, MessageCircleIcon, Music2Icon, PhoneIcon, TicketIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/pageHeader/pageHeader.component';
import { FaqAccordion } from '../components/ui/faqAccordion/faqAccordion.component';
import { Reveal } from '../components/ui/Reveal/reveal.component';
import { Sun } from '../components/ui/Sun/sun.component';
import { Waves, wavesInto } from '../components/ui/Waves/waves.component';
import { Button } from '../components/ui/Button/button.component';
import { EnquiryForm } from '../components/enquiryForm/enquiryForm.component';
import { siteConfig } from '../data/site';
import { faqs } from '../data/faqs';
import { feeNotice, feeTiers } from '../data/fees';
import { formatNaira } from '../utils/currency';
import styles from './styles.module.css';
import { Header } from '../components/layout/header/header.component';

const socialIcons: Record<string, React.ElementType> = {
  Instagram: AtSignIcon,
  TikTok: Music2Icon,
  WhatsApp: MessageCircleIcon,
};

export default function VisitUs({ simulateSubmissionError = false }: { simulateSubmissionError?: boolean }) {
  const adult = feeTiers.find((t) => t.id === 'adult');
  return (
    <>
      <Header />
      <PageHeader
        label="Visit Us"
        title="Come find your happy place"
        intro="Everything you need to plan a day at Sunny Side — where we are, when we’re open and how entry works."
      />

      <section className={styles.locationSection} aria-label="Location and contact">
        <div className={styles.locationGrid}>
          <Reveal className={styles.mapCard}>
            <Sun className={styles.mapSun} />
            <Waves layers={wavesInto('#17485A', '#76B8B5')} className={styles.mapWaves} />
            <div className={styles.mapPanel}>
              <MapPinIcon className={styles.mapIcon} aria-hidden="true" />
              <h2 className={styles.mapHeading}>{siteConfig.address}</h2>
              <p className={styles.mapNote}>{siteConfig.addressNote}</p>
              <p className={styles.mapLabel}>Map placeholder</p>
            </div>
          </Reveal>

          <div className={styles.contactColumn}>
            <Reveal>
              <h2 className={styles.contactHeading}>
                <ClockIcon className={styles.contactHeadingIcon} aria-hidden="true" /> Opening hours
              </h2>
              <dl className={styles.hoursList}>
                {siteConfig.hours.map((h) => (
                  <div key={h.days} className={styles.hoursRow}>
                    <dt className={styles.hoursDay}>{h.days}</dt>
                    <dd className={styles.hoursTime}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className={styles.contactHeading}>Contact</h2>
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
                {siteConfig.socials.map((s) => {
                  const Icon = socialIcons[s.label] ?? AtSignIcon;
                  return (
                    <li key={s.label}>
                      <a href={s.href} className={styles.socialChip}>
                        <Icon className={styles.socialIcon} aria-hidden="true" />
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {siteConfig.detailsArePlaceholders && (
                <p className={styles.placeholderNote}>
                  Hours and contact details are placeholders until confirmed.
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.policiesSection} aria-labelledby="policies-heading">
        <div className={styles.container}>
          <Reveal>
            <h2 id="policies-heading" className={styles.policiesHeading}>
              Good to know before you go
            </h2>
          </Reveal>
          <div className={styles.policiesGrid}>
            <Reveal className={styles.policyFirst}>
              <TicketIcon className={styles.policyIcon} aria-hidden="true" />
              <h3 className={styles.policyTitle}>Entry &amp; gate fees</h3>
              <p className={styles.policyText}>
                One gate fee per guest covers the restaurant, bar and beach club. Adults {adult ? formatNaira(adult.gateFee) : ''}, kids &amp; teens less, infants free.
              </p>
            </Reveal>
            <Reveal delay={0.05} className={styles.policyMiddle}>
              <BanIcon className={styles.policyIcon} aria-hidden="true" />
              <h3 className={styles.policyTitle}>Minimum spend &amp; outside food</h3>
              <p className={styles.policyText}>
                Adults have a {adult ? formatNaira(adult.minimumSpend) : ''} minimum spend on eligible purchases. {feeNotice}
              </p>
            </Reveal>
            <Reveal delay={0.1} className={styles.policyLast}>
              <AccessibilityIcon className={styles.policyIcon} aria-hidden="true" />
              <h3 className={styles.policyTitle}>Accessibility</h3>
              <p className={styles.policyText}>
                Accessibility details are being confirmed. Send us an enquiry and we’ll help plan a comfortable visit.
              </p>
            </Reveal>
          </div>
          <div className={styles.policyActions}>
            <Button href="/plan">Plan Your Visit</Button>
            <Button href="/fees" variant="secondary">Full fee details</Button>
          </div>
        </div>
      </section>

      <section className={styles.questionsSection} aria-label="Questions and enquiries">
        <div className={styles.questionsGrid}>
          <div>
            <Reveal>
              <h2 className={styles.questionsHeading}>Frequently asked</h2>
            </Reveal>
            <Reveal delay={0.05} className={styles.faqWrap}>
              <FaqAccordion items={faqs} />
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <EnquiryForm simulateError={simulateSubmissionError} />
          </Reveal>
        </div>
      </section>
    </>
  );
}