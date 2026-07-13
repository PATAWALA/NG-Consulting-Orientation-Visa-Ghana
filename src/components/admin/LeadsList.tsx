const leads = [
  { name: "Marc", country: "Gabon", phone: "+241 01 23 45 67", event: "Conférence Ghana" },
  { name: "Fatou", country: "Côte d'Ivoire", phone: "+225 07 89 01 23", event: "Conférence Ghana" },
  { name: "Kevin", country: "Cameroun", phone: "+237 06 54 32 10", event: "Conférence Ghana" },
];

export default function LeadsList() {
  return (
    <section className="px-4">
      <h2 className="text-2xl font-bold text-ocean mb-4">Leads Capturés</h2>
      <div className="space-y-3">
        {leads.map((lead, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-sm rounded-xl p-4 border border-slate-100"
          >
            <div>
              <p className="font-semibold text-slate-800">{lead.name}</p>
              <p className="text-sm text-slate-500">{lead.country} · {lead.phone}</p>
            </div>
            <span className="text-xs bg-ocean/10 text-ocean px-3 py-1 rounded-full mt-2 sm:mt-0 self-start">
              {lead.event}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}