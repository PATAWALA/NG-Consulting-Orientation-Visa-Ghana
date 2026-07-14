"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/evenements", label: "Événements" },
    { href: "/apropos", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/admin", label: "Admin" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-ocean transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions droite */}
          <div className="flex items-center gap-3">
            {/* Bouton stratégique principal : Réserver ma place */}
            <Link
              href="/evenements"
              className="bg-ocean text-white font-semibold px-4 py-2 text-sm lg:text-base hover:bg-ocean/90 transition shadow"
            >
              Réserver ma place
            </Link>

            {/* Sélecteur de langue */}
            <button
              onClick={toggleLanguage}
              className="text-sm font-semibold text-ocean border border-ocean px-3 py-1 hover:bg-ocean hover:text-white transition"
            >
              {language === "fr" ? "EN" : "FR"}
            </button>

            {/* Menu hamburger mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-ocean transition"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-md">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-ocean transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}