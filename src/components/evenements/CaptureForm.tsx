"use client";

import { useState } from "react";

export default function CaptureForm() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section className="px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
        <h2 className="text-xl font-semibold text-ocean">Réservez votre place</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Prénom" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-ocean" required />
          <input type="text" placeholder="Nom" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-ocean" required />
          <div className="flex items-center gap-2">
            <select className="p-3 border border-slate-200 rounded-xl bg-white">
              <option>🇬🇦 +241</option>
              <option>🇨🇮 +225</option>
              <option>🇨🇲 +237</option>
              <option>🇫🇷 +33</option>
            </select>
            <input type="tel" placeholder="WhatsApp" className="flex-1 p-3 border border-slate-200 rounded-xl focus:outline-ocean" required />
          </div>
          <select className="w-full p-3 border border-slate-200 rounded-xl bg-white focus:outline-ocean" required>
            <option value="">Niveau d'études actuel</option>
            <option>Bac</option>
            <option>Licence 1</option>
            <option>Licence 2</option>
            <option>Licence 3</option>
            <option>Master 1</option>
            <option>Master 2</option>
          </select>
          <button type="submit" className="w-full bg-ocean text-white font-bold py-3 rounded-full hover:bg-ocean/90 transition">
            Réserver ma place gratuite (Accès WhatsApp)
          </button>
        </form>
        {showToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-ocean text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
            🎉 Vous êtes inscrit ! Rejoignez le groupe WhatsApp privé.
          </div>
        )}
      </div>
    </section>
  );
}