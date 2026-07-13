"use client";

import { motion } from "framer-motion";
import { Compass, FileCheck, Building2 } from "lucide-react";

const services = [
  {
    icon: <Compass size={40} />,
    title: "Orientation & Planification",
    desc: "Choix de la destination, du programme académique ou de l’opportunité professionnelle parfaitement adaptés à votre profil et à vos objectifs. Nous analysons vos besoins pour une orientation sur mesure.",
  },
  {
    icon: <FileCheck size={40} />,
    title: "Visa & Immigration",
    desc: "Constitution, vérification et suivi de votre dossier de visa. Nous préparons chaque document, anticipons les pièges et vous coachons jusqu’à l’obtention du précieux sésame.",
  },
  {
    icon: <Building2 size={40} />,
    title: "Accueil & Intégration",
    desc: "Logement, formalités locales, ouverture de compte, mise en réseau… Nous assurons une arrivée clé en main pour que vous vous concentriez sur l’essentiel : réussir.",
  },
];

export default function PiliersSection() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-white to-slate-50">
      <h2 className="text-4xl md:text-6xl font-black text-ocean mb-16 text-center">
        Nos Services
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`relative bg-white p-8 rounded-3xl shadow-xl overflow-hidden ${
              i % 2 === 1 ? "md:mt-10" : ""
            }`}
          >
            {/* Dégradé permanent visible */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ocean/20 to-cyan-400/10" />
            <div className="relative z-10 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ocean/10 text-ocean">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}