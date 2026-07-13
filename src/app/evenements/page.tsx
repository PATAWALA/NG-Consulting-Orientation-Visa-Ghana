import LiveBadgeSection from "@/components/evenements/LiveBadgeSection";
import CaptureForm from "@/components/evenements/CaptureForm";
import ReasonsSection from "@/components/evenements/ReasonsSection";

export default function EvenementsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 space-y-16">
      <LiveBadgeSection />
      <CaptureForm />
      <ReasonsSection />
    </div>
  );
}