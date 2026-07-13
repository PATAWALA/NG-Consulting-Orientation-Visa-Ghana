import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NG Consulting – Orientation & Visa Ghana",
  description: "Propulsez votre avenir à l'international avec NG Consulting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-slate-800`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-slate-50 py-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} NG Consulting. Tous droits réservés.
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}