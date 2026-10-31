import { render, screen, cleanup } from "@testing-library/react"
import { describe, it, expect, vi, afterEach } from "vitest"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import BudgetDetailPage from "./BudgetDetailPage"
import type { Budget } from "@/types/budget"

vi.mock("@/components/budget/BudgetDetail", () => ({
  default: ({ budget }: { budget: Budget }) => (
    <div data-testid="budget-detail">
      <p>{budget.client.name}</p>
    </div>
  ),
}))

const mockBudget = {
  id: "budget-1",
  client: {
    name: "Alex Garcia",
    email: "alex@example.com",
    phone: "600123456",
  },
  pages: 1,
  languages:1,
  services: [],
  totalPrice: 800,
} as Budget

function renderBudgetDetailPage(state?: { budget: Budget }) {
  return render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/budget-detail",
          state,
        },
      ]}
    >
      <Routes>
        <Route path="/budget-detail" element={<BudgetDetailPage />} />
      </Routes>
    </MemoryRouter>,
  )
}
afterEach(() => {
  cleanup()
})

describe("BudgetDetailPage", () => {
  it("should show a message when the budget is not found", () => {
    renderBudgetDetailPage()

    expect(screen.getByText("Pressupost no trobat.")).toBeInTheDocument()

    expect(
      screen.getByRole("link", { name: "Tornar a l'inici" }),
    ).toHaveAttribute("href", "/")
  })

  it("should render the budget details when a budget exists", () => {
    renderBudgetDetailPage({ budget: mockBudget })

    expect(screen.getByRole("heading", { name: "Resum" })).toBeInTheDocument()

    expect(screen.getByText("Alex Garcia")).toBeInTheDocument()
  })

  it("should show a link to return to the home page", () => {
    renderBudgetDetailPage({ budget: mockBudget })

    expect(
      screen.getByRole("link", { name: "← Tornar" }),
    ).toHaveAttribute("href", "/")
  })
})