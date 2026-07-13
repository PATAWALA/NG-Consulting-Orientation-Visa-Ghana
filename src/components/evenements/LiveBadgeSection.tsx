export default function LiveBadgeSection() {
  return (
    <section className="text-center space-y-4 px-4 max-w-5xl mx-auto">
      <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold animate-blink">
        <span className="w-2 h-2 rounded-full bg-red-500" /> Bientôt disponible
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-ocean leading-tight">
        Conférence Exclusive : Réussir sa mobilité internationale en 2026
      </h1>
    </section>
  );
}