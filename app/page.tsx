import Navbar from "@/components/shared/Navbar"
import FooterSection from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

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
