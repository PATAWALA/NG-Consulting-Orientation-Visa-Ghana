export default function StatsSection() {
  return (
    <section className="px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-slate-50 rounded-2xl p-6 shadow-sm">
          <div className="text-4xl font-extrabold text-ocean">+500</div>
          <div className="text-slate-600 mt-1">Projets concrétisés</div>
        </div>
        <div className="bg-slate-50 rounded-2xl p-6 shadow-sm">
          <div className="text-4xl font-extrabold text-ocean">98 %</div>
          <div className="text-slate-600 mt-1">Taux de réussite aux visas</div>
        </div>
        <div className="bg-slate-50 rounded-2xl p-6 shadow-sm">
          <div className="text-4xl font-extrabold text-ocean">15+</div>
          <div className="text-slate-600 mt-1">Destinations couvertes</div>
        </div>
      </div>
    </section>
  );
}