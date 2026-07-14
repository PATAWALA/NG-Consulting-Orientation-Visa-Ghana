"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero1.jpg')",
      }}
    >
      {/* Overlay renforcé pour une lisibilité optimale */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Vague blanche réduite */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 md:h-16 opacity-100"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C360,200 1080,0 1440,100 L1440,200 L0,200 Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 py-16 max-w-6xl mx-auto space-y-10">
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] drop-shadow-2xl tracking-tight">
          Propulsez votre{" "}
          <span className="bg-gradient-to-r from-ocean to-cyan-400 bg-clip-text text-transparent">
            avenir
          </span>{" "}
          à l’international.
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-4xl mx-auto drop-shadow font-light">
          Orientation, visa et intégration. Depuis l’Afrique de l’Ouest jusqu’aux
          grandes destinations mondiales, NG Consulting sécurise chaque étape de
          votre projet de mobilité, quel que soit votre profil.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="bg-ocean text-white font-bold py-5 px-12 text-lg hover:bg-ocean/90 transition shadow-2xl shadow-ocean/30 hover:scale-105 transform">
            Évaluer mon projet en 2 min
          </button>
          <Link
            href="/evenements"
            className="backdrop-blur-lg bg-white/10 text-white font-bold py-5 px-12 text-lg border border-white/20 hover:bg-white/20 transition shadow-2xl hover:scale-105 transform"
          >
            Prochaine conférence
          </Link>
        </div>
      </div>
    </section>
  );
}