import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image de l'équipe */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/équipe.jpg"
            alt="L’équipe NG Consulting"
            width={600}
            height={400}
            className="w-full h-auto object-cover shadow-lg"
            priority
          />
        </div>

        {/* Texte + CTA */}
        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ocean leading-tight">
            Le partenaire de toutes vos ambitions internationales
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            NG Consulting est un cabinet d’accompagnement spécialisé dans la
            mobilité internationale. Fondé par des experts de l’orientation et de
            l’immigration, nous connaissons les réalités du terrain en Afrique de
            l’Ouest et maîtrisons les exigences des pays d’accueil les plus
            attractifs. Notre mission : transformer votre projet – études,
            carrière ou affaires – en une réussite concrète, sans stress et en
            toute sécurité.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ocean text-white font-semibold py-3 px-8 text-base hover:bg-ocean/90 transition shadow-lg"
          >
            Parlez-nous de votre projet
          </Link>
        </div>
      </div>
    </section>
  );
}