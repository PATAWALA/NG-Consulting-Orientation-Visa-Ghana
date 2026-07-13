"use client";

import { motion } from "framer-motion";

const temoignages = [
  {
    nom: "Marc K.",
    pays: "Gabon",
    flag: "🇬🇦",
    texte:
      "J’ai obtenu mon permis de travail pour le Canada en moins de deux mois grâce à NG Consulting. Leur équipe a géré l’intégralité des formalités et m’a préparé aux entretiens. Aujourd’hui, je suis ingénieur à Montréal et ma famille m’a rejoint sans encombre.",
    poste: "Ingénieur – Montréal, Canada",
  },
  {
    nom: "Fatima D.",
    pays: "Côte d’Ivoire",
    flag: "🇨🇮",
    texte:
      "Lancer mon activité en France me paraissait inaccessible. NG Consulting a construit un dossier béton et m’a accompagnée pas à pas. Mon visa a été accepté en trois semaines. J’ai pu inaugurer mon bureau à Lyon dans la foulée.",
    poste: "Entrepreneure – Lyon, France",
  },
];

export default function VideoHub() {
  return (
    <section className="px-6 py-20 bg-white">
      <h2 className="text-4xl font-black text-ocean mb-16 text-center">
        Ils ont concrétisé leur projet
      </h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {temoignages.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-slate-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border-l-8 border-ocean"
          >
            <p className="text-lg italic text-slate-700 mb-4">« {t.texte} »</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center text-xl">
                {t.flag}
              </div>
              <div>
                <p className="font-bold text-slate-800">{t.nom}</p>
                <p className="text-sm text-slate-500">{t.poste}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}