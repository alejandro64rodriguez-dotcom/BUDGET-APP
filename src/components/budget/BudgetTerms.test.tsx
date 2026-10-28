import { render, screen, within, cleanup } from "@testing-library/react"
import { describe, it, expect, afterEach } from "vitest"
import BudgetTerms from "./BudgetTerms"

afterEach(() => {
  cleanup()
})

describe("BudgetTerms", () => {
  it("should render the title", () => {
    render(<BudgetTerms />)

    expect(
      screen.getByRole("heading", { name: "Termes i condicions" }),
    ).toBeInTheDocument()
  })

  it("should render all four terms and conditions", () => {
    render(<BudgetTerms />)

    const terms = [
      "El termini d'execució estimat és de 4 a 6 setmanes des de l'acceptació del pressupost.",
      "El 50% del pagament s'ha d'abonar per avançat per iniciar el projecte.",
      "Aquest pressupost és vàlid durant 30 dies des de la data d'emissió.",
      "Qualsevol modificació del projecte pot afectar el preu final.",
    ]

    const list = screen.getByRole("list")
    const items = within(list).getAllByRole("listitem")

    expect(items).toHaveLength(4)

    terms.forEach((term) => {
      expect(within(list).getByText(`• ${term}`)).toBeInTheDocument()
    })
  })
})