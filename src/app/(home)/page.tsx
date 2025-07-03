import HeroSection from "./_components/HeroSection";
import SectionContact from "./_components/SectionContact";
import SectionServices from "./_components/SectionService";
import SectionTestimonials from "./_components/SectionTestimonials";
import SectionWhyChoose from "./_components/SectionWhyChoose";
import SectionHomeCare from "./_components/SectionHomeCare";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionWhyChoose />
      <SectionHomeCare />
      <SectionServices />
      <SectionTestimonials />
      <SectionContact />
    </>
  );
}
