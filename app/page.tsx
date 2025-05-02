import Navbar from "@/components/shared/Navbar"
import FooterSection from "@/components/shared/Footer";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Stats from "@/components/home/stats";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-container mx-auto">
          <Hero />
          <Features />
          <Stats />
          <Testimonials />
          <CTA />
        </main>
      </div>
      <FooterSection />
    </>
  );
}
