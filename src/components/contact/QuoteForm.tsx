export default function QuoteForm() {
  return (
    <section className="px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
        <h2 className="text-xl font-semibold text-ocean">Demande d&apos;Étude Personnalisée</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nom complet" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-ocean" required />
          <input type="text" placeholder="Votre projet" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-ocean" required />
          <input type="text" placeholder="Budget estimé" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-ocean" />
          <textarea placeholder="Message" rows={4} className="w-full p-3 border border-slate-200 rounded-xl focus:outline-ocean" required />
          <button type="submit" className="w-full bg-ocean text-white font-bold py-3 rounded-full hover:bg-ocean/90 transition">
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}