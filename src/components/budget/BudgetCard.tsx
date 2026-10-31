import type { Budget } from "@/types/budget"
import { formatPrice } from "@/utils/budget"

interface BudgetCardProps {
  budget: Budget
  onViewDetails: (budget: Budget) => void
}

function BudgetCard({ budget, onViewDetails }: BudgetCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">
        Pressupost #{budget.id}
      </h2>

      <p>Client: {budget.client.name}</p>
      <p>Serveis: {budget.services.map((s) => s.name).join(", ")}</p>
      <p className="font-bold">Total: {formatPrice(budget.totalPrice)}</p>

      <button
        type="button"
        onClick={() => onViewDetails(budget)}
        className="mt-3 text-green-600 underline"
      >
        Veure detalls
      </button>
    </article>
  )
}

export default BudgetCard