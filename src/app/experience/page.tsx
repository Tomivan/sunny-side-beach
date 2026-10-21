import { PageHeader } from '../components/layout/pageHeader/pageHeader.component';
import { ExperienceSubnav } from '../components/experience/experienceSubnav/experienceSubnav.component';
import { RestaurantSection } from '../components/experience/restaurantSection/restaurantSection.component';
import { BarSection } from '../components/experience/barSection/barSection.component';
import { BeachClubSection } from '../components/experience/beachClubSection/beachClubSection.component';
import { FinalCta } from '../components/finalCta/finalCta.component';
import { Header } from '../components/layout/header/header.component';

export default function Experience() {
  return (
    <>
      <Header />
      <PageHeader
        label="The Sunny Side Experience"
        title="Eat, sip and unwind — all in one place"
        intro="Sunny Side is one destination with three connected experiences. Your entry covers them all, so spend the day however you like." />
      
      <ExperienceSubnav />
      <RestaurantSection />
      <BarSection />
      <BeachClubSection />
      <FinalCta />
    </>);

}