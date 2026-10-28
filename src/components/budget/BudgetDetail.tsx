import type { Budget } from "@/types/budget"
import { formatPrice, getServiceLabel } from "@/utils/budget"
import BudgetServiceItem from "@/components/budget/BudgetServiceItem"
import BudgetTerms from "@/components/budget/BudgetTerms"
import ActivityTimeline from "@/components/budget/ActivityTimeline"

interface BudgetDetailProps {
  budget: Budget
}

function BudgetDetail({ budget }: BudgetDetailProps) {
  return (
    <div className="flex flex-col gap-8">
      <section className="grid grid-cols-1 items-center gap-6 rounded-lg border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[1fr_1fr_auto]">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{budget.client.name}</h2>
          <p className="mt-1 text-xs text-gray-600">{budget.client.email}</p>
          <p className="mt-1 text-xs text-gray-600">{budget.client.phone}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900">Serveis contractats:</h3>
          <ul className="mt-1 text-xs text-gray-700">
            {budget.services.map((service) => (
              <li key={service.id}>• {getServiceLabel(service, budget)}</li>
            ))}
          </ul>
        </div>

        <div className="md:text-right">
          <p className="text-xs text-gray-600">Total</p>
          <p className="text-xl font-bold text-gray-900">
            {formatPrice(budget.totalPrice)}
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-base font-bold text-gray-900">Resum</h2>

        <div className="flex flex-col gap-3">
          {budget.services.map((service) => (
            <BudgetServiceItem key={service.id} service={service} budget={budget} />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-100 p-4">
          <p className="text-sm font-bold text-gray-900">Total pressupost:</p>
          <p className="text-xl font-bold text-gray-900">
            {formatPrice(budget.totalPrice)}
          </p>
        </div>
      </section>

      <BudgetTerms />
      <ActivityTimeline />
    </div>
  )
}

export default BudgetDetail