import { Link, useLocation } from "react-router-dom"
import type { Budget } from "@/types/budget"
import BudgetDetail from "@/components/budget/BudgetDetail"

interface LocationState {
  budget?: Budget
}

function BudgetDetailPage() {
  const state = useLocation().state as LocationState | null
  const budget = state?.budget

  if (!budget) {
    return (
      <main className="p-6">
        <p>Pressupost no trobat.</p>
        <Link to="/" className="text-blue-600 underline">
          Tornar a l'inici
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <Link to="/" className="mb-4 inline-block text-sm text-blue-600 underline">
        ← Tornar
      </Link>
      <BudgetDetail budget={budget} />
    </main>
  )
}

export default BudgetDetailPage