import Hero from "@/components/home/Hero";
import CustomerSuccess from "@/components/home/customer-success";
import AwardsRecognition from "@/components/home/awards-recognition";
import ServicesSection from "@/components/home/services";
import SuccessStories from "@/components/home/success-stories";
import DigitalSolutions from "@/components/home/digital-solutions";
import AlliancesSection from "@/components/home/alliances";
import ExpertTeam from "@/components/home/expert-team";
import TopTierSection from "@/components/home/top-tier";
import Partnership from "@/components/home/partnership";
import CultureSection from "@/components/home/culture";
import Hereforyou from "@/components/home/hereforyou";

export default function Home() {
  return (
    <>
      <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
          <Hero />
          <CustomerSuccess />
          <AwardsRecognition />
          <ServicesSection />
          <SuccessStories />
          <DigitalSolutions />
          <AlliancesSection />
          <ExpertTeam />
          <TopTierSection />
          <Partnership />
          <CultureSection />
          <Hereforyou />
      </div>
    </>
  );
}
