import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PiliersSection from "@/components/home/PiliersSection";
import CiblesSection from "@/components/home/CiblesSection";
import VideoHub from "@/components/home/VideoHub";
import PartnersSection from "@/components/home/PartnersSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <PiliersSection />
      <CiblesSection />
      <VideoHub />
      <PartnersSection />
      <FinalCTASection />
    </div>
  );
}