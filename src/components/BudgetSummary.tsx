import { formatPrice } from "@/utils/budget"

interface BudgetSummaryProps {
  totalPrice: number
}

function BudgetSummary({ totalPrice }: BudgetSummaryProps) {
  return (
    <aside className="mt-4 flex items-center justify-between rounded-lg bg-gray-100 p-4">
      <p className="font-bold">Preu pressupostat:</p>
      <p className="text-2xl font-bold">{formatPrice(totalPrice)}</p>
    </aside>
  )
}

export default BudgetSummary