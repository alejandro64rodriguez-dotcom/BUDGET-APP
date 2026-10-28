import type { Budget } from "@/types/budget"
import type { Service } from "@/types/service"
import {
  formatPrice,
  getServiceLabel,
  getServicePrice,
} from "@/utils/budget"

interface Props {
  service: Service
  budget: Budget
}

function BudgetServiceItem({ service, budget }: Props) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <div>
        <h3 className="text-sm font-bold text-gray-900">
          {getServiceLabel(service, budget)}
        </h3>
        <p className="mt-1 text-xs text-gray-600">{service.description}</p>
      </div>
      <p className="shrink-0 text-xs text-gray-900">
        {formatPrice(getServicePrice(service, budget))}
      </p>
    </article>
  )
}

export default BudgetServiceItem