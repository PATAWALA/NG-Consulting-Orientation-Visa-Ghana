"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Lightbulb } from "lucide-react";

const cibles = [
  {
    icon: <GraduationCap size={36} />,
    title: "Étudiants",
    desc: "Vous rêvez d’étudier à l’étranger ? Nous vous guidons vers la formation et l’établissement qui collent à votre projet, tout en sécurisant votre visa étudiant. Votre avenir commence ici.",
  },
  {
    icon: <Briefcase size={36} />,
    title: "Professionnels",
    desc: "Saisissez des opportunités de carrière à l’international. Nous facilitons votre mobilité professionnelle : visa de travail, reconnaissance de diplômes, installation rapide pour vous et votre famille.",
  },
  {
    icon: <Lightbulb size={36} />,
    title: "Entrepreneurs & Porteurs de projets",
    desc: "Développez votre activité au‑delà des frontières. Nous vous aidons à obtenir les visas d’affaires, à comprendre les marchés locaux et à poser les bases solides de votre expansion internationale.",
  },
];

export default function CiblesSection() {
  return (
    <section className="px-6 py-20 bg-slate-50">
      <h2 className="text-4xl md:text-6xl font-black text-ocean mb-16 text-center">
        Vous êtes...
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {cibles.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ocean/10 text-ocean mb-4">
              {c.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">{c.title}</h3>
            <p className="text-slate-600 leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}