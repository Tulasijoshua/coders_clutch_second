
import Navbar from "@/components/shared/Navbar"
import FooterSection from "@/components/shared/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-container mx-auto">
          About Us Page
        </main>
      </div>
      <FooterSection />
    </>
  );
}

export default AboutUsPage