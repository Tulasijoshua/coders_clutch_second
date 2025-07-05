import Hero from "@/components/home/Hero";
import CustomerSuccess from "@/components/home/customer-success";
import AwardsRecognition from "@/components/home/awards-recognition";
import DigitalSolutions from "@/components/home/digital-solutions";
import AlliancesSection from "@/components/home/alliances";
import ExpertTeam from "@/components/home/expert-team";
import TopTierSection from "@/components/home/top-tier";
import Partnership from "@/components/home/partnership";
import Hereforyou from "@/components/home/hereforyou";
import LatestProjects from "@/components/home/latest-projects";
import OurCulture from "@/components/home/our-culture";
import DigitalService from "@/components/home/digital-service";
import ReadyResults from "@/components/home/ready-results";

export default function Home() {
  return (
    <>
      <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
          <Hero />
          <CustomerSuccess />
          <AwardsRecognition />
          <DigitalService />
          <ReadyResults />
          {/* <ServicesSection /> */}
          <LatestProjects />
          <DigitalSolutions />
          <AlliancesSection />
          <ExpertTeam />
          <TopTierSection />
          <Partnership />
          {/* <CultureSection /> */}
          <OurCulture />
          <Hereforyou />
      </div>
    </>
  );
}
