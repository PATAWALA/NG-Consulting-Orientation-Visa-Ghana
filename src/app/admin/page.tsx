import StatsCard from "@/components/admin/StatsCard";
import CreateEventButton from "@/components/admin/CreateEventButton";
import LeadsList from "@/components/admin/LeadsList";

export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-12">
      <h1 className="text-3xl font-bold text-ocean px-4">Tableau de bord</h1>
      <StatsCard />
      <CreateEventButton />
      <LeadsList />
    </div>
  );
}