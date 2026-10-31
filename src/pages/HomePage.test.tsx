import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import HomePage from "./HomePage"

describe("HomePage - Integration Test", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("should create a budget and display it in the history", async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    // Seleccionar el primer servicio
    const serviceCheckbox = screen.getAllByRole("checkbox")[0]
    fireEvent.click(serviceCheckbox)

    expect(screen.getByText("Afegit")).toBeTruthy()

    // Completar el formulario
    fireEvent.change(screen.getByLabelText("Nom"), {
      target: { value: "Alejandro" },
    })

    fireEvent.change(screen.getByLabelText("Telèfon"), {
      target: { value: "612345678" },
    })

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "alejandro@gmail.com" },
    })

    // Enviar el formulario
    fireEvent.click(
      screen.getByRole("button", { name: "Sol·licitar pressupost" })
    )

    // Comprobar que el presupuesto aparece en el historial
    expect(screen.getByText("Client: Alejandro")).toBeTruthy()

    expect(screen.getByText(/Serveis:/)).toBeTruthy()

    // Comprobar que se ha guardado en localStorage
    await waitFor(() => {
      const savedBudgets = JSON.parse(
        localStorage.getItem("budgets") || "[]"
      )

      expect(savedBudgets).toHaveLength(1)
      expect(savedBudgets[0].client.name).toBe("Alejandro")
    })
  })
})