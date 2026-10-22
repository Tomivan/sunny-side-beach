import { HomeHero } from '../components/home/homeHero/homeHero.component';
import { HomeIntro } from '../components/home/homeIntro/homeIntro.component';
import { FeaturedMenu } from '../components/home/featuredMenu/featuredMenu.component';
import { BeachSeating } from '../components/home/beachSeating/beachSeating.component';
import { EventsPreview } from '../components/home/eventsPreview/eventsPreview.component';
import { FeesPreview } from '../components/home/feesPreview/feesPreview.component';
import { GalleryPreview } from '../components/home/galleryPreview/galleryPreview.component';
import { Testimonials } from '../components/home/testimonials/testimonials.component';
import { VisitInfo } from '../components/home/visitInfo/visitInfo.component';
import { FinalCta } from '../components/finalCta/finalCta.component';

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <FeaturedMenu />
      <BeachSeating />
      <EventsPreview />
      <FeesPreview />
      <Testimonials />
      <VisitInfo />
      <FinalCta />
    </>);

}