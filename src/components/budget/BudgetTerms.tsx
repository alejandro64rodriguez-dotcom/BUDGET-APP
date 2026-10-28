const TERMS = [
  "El termini d'execució estimat és de 4 a 6 setmanes des de l'acceptació del pressupost.",
  "El 50% del pagament s'ha d'abonar per avançat per iniciar el projecte.",
  "Aquest pressupost és vàlid durant 30 dies des de la data d'emissió.",
  "Qualsevol modificació del projecte pot afectar el preu final.",
]

function BudgetTerms() {
  return (
    <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-base font-bold text-gray-900">
        Termes i condicions
      </h2>

      <ul className="flex flex-col gap-2 text-xs leading-relaxed text-gray-700">
        {TERMS.map((term) => (
          <li key={term}>• {term}</li>
        ))}
      </ul>
    </section>
  )
}

export default BudgetTerms