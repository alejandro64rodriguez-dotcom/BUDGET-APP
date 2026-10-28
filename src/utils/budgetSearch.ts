
import type { Budget } from "@/types/budget"

export function filterAndSortBudgets(
  budgets: Budget[],
  searchTerm: string,
  sortBy: "price" | "name" | null,
): Budget[] {
  return budgets
    .filter((budget) => {
      const search = searchTerm.trim().toLowerCase()

      return (
        budget.client.name.toLowerCase().includes(search) ||
        budget.totalPrice.toString().includes(search)
      )
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.client.name.localeCompare(b.client.name)
      }

      if (sortBy === "price") {
        return a.totalPrice - b.totalPrice
      }

      return 0
    })
}
