"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="NG Consulting"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-6 text-slate-800 text-sm font-medium">
          <Link href="/">Accueil</Link>
          <Link href="/evenements">Événements</Link>
          <Link href="/apropos">À propos</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <button
          onClick={toggleLanguage}
          className="text-sm font-semibold text-ocean border border-ocean rounded-full px-3 py-1 hover:bg-ocean hover:text-white transition"
        >
          {language === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </header>
  );
}