"use client"; // <-- Obligatoire pour framer-motion

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Overlay avec vague animée */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <svg
        className="absolute bottom-0 left-0 w-full h-auto opacity-30"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,100 C360,200 1080,0 1440,100 L1440,200 L0,200 Z"
          fill="#0A4F7C"
          initial={{ y: 20 }}
          animate={{ y: -10 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 py-16 max-w-6xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-white leading-[1.1] drop-shadow-2xl tracking-tight"
        >
          Propulsez votre <span className="text-ocean bg-gradient-to-r from-ocean to-cyan-400 bg-clip-text text-transparent">avenir</span> à l’international.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-200 max-w-4xl mx-auto drop-shadow font-light"
        >
          Orientation, visa et intégration. Depuis l’Afrique de l’Ouest jusqu’aux
          grandes destinations mondiales, NG Consulting sécurise chaque étape de
          votre projet de mobilité, quel que soit votre profil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="bg-ocean text-white font-bold py-5 px-12 rounded-full text-lg hover:bg-ocean/90 transition shadow-2xl shadow-ocean/30 hover:scale-105 transform">
            Évaluer mon projet en 2 min
          </button>
          <Link
            href="/evenements"
            className="backdrop-blur-lg bg-white/10 text-white font-bold py-5 px-12 rounded-full text-lg border border-white/20 hover:bg-white/20 transition shadow-2xl hover:scale-105 transform"
          >
            Prochaine conférence
          </Link>
        </motion.div>
      </div>
    </section>
  );
}