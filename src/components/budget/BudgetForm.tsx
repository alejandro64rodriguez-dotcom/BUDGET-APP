import { useState, type SyntheticEvent } from "react"
import FormField from "@/components/budget/FormField"
import type { BudgetFormData } from "@/types/budget"
import {
  EMPTY_ERRORS,
  EMPTY_FORM,
  hasErrors,
  validateBudgetForm,
} from "@/utils/validateBudgetForm"


interface BudgetFormProps {
  onSubmit: (formData: BudgetFormData) => void
}

function BudgetForm({ onSubmit }: BudgetFormProps) {
  const [formData, setFormData] = useState<BudgetFormData>(EMPTY_FORM)
  const [errors, setErrors] = useState(EMPTY_ERRORS)

  function handleChange(field: keyof BudgetFormData, value: string) {
    setFormData((previous) => ({ ...previous, [field]: value }))
  }

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    const newErrors = validateBudgetForm(formData)
    setErrors(newErrors)

    if (hasErrors(newErrors)) return

    onSubmit(formData)
    setFormData(EMPTY_FORM)
  }

  return (
    <form
      className="w-full rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className="mb-6 text-xl font-bold text-gray-900">Demana pressupost</h2>

      <div className="flex flex-col gap-4 md:flex-row">
        <FormField
          id="name"
          label="Nom"
          type="text"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          error={errors.name}
        />
        <FormField
          id="phone"
          label="Telèfon"
          type="tel"
          value={formData.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          error={errors.phone}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          error={errors.email}
        />

        <button
          type="submit"
          className="flex-1 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
        >
          Sol·licitar pressupost
        </button>
      </div>
    </form>
  )
}

export default BudgetForm