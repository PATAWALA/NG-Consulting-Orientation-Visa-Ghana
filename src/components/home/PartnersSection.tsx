export default function PartnersSection() {
  const logos = [
  "Rimbo","Air France", "STC Ghana", "Baobab Express",
  , "Kenya Airways", "Turkish Airlines"
];

  return (
    <section className="py-16 bg-gradient-to-r from-ocean/5 to-slate-100 overflow-hidden">
      <h2 className="text-3xl font-bold text-ocean mb-8 text-center">
        Nos partenaires de confiance
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex space-x-12 animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-2xl font-black text-slate-400/70 whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}