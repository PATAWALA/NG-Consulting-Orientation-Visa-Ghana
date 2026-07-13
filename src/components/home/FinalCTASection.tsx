"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="px-6 py-24 relative">
      <div className="absolute inset-0 bg-ocean opacity-5 rounded-[4rem] transform -skew-y-3" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 className="text-5xl font-black text-ocean mb-8">
          Prêt à franchir le cap ?
        </motion.h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Diplôme, emploi ou nouveau marché, nous avons l’expertise qu’il vous faut.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-ocean text-white font-bold py-5 px-14 rounded-full text-lg shadow-2xl shadow-ocean/30 hover:bg-ocean/90 transition transform hover:scale-105"
        >
          Démarrer mon évaluation gratuite
        </Link>
      </div>
    </section>
  );
}