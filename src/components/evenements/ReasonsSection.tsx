export default function ReasonsSection() {
  return (
    <section className="px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-ocean mb-4">
        Pourquoi participer ?
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-2 text-slate-600">
          <span className="text-ocean font-bold mt-0.5">✔</span> Séances
          questions/réponses en direct avec nos experts
        </li>
        <li className="flex items-start gap-2 text-slate-600">
          <span className="text-ocean font-bold mt-0.5">✔</span> Conseils pour
          monter un dossier de bourse ou de visa gagnant
        </li>
        <li className="flex items-start gap-2 text-slate-600">
          <span className="text-ocean font-bold mt-0.5">✔</span> Témoignages de
          professionnels et d’étudiants déjà installés à l’étranger
        </li>
      </ul>
    </section>
  );
}