export default function CreateEventButton() {
  return (
    <section className="px-4">
      <button className="w-full md:w-auto bg-ocean text-white font-bold px-6 py-3 rounded-full hover:bg-ocean/90 transition flex items-center justify-center gap-2">
        <span className="text-xl">+</span> + Créer une nouvelle page de capture
      </button>
    </section>
  );
}