import VisionSection from "@/components/apropos/VisionSection";
import StatsSection from "@/components/apropos/StatsSection";
import DirectorQuote from "@/components/apropos/DirectorQuote";

export default function AproposPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 space-y-20">
      <VisionSection />
      <StatsSection />
      <DirectorQuote />
    </div>
  );
}