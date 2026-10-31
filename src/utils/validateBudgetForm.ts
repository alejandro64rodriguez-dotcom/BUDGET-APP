import type { BudgetFormData } from "@/types/budget"

export type BudgetFormErrors = Record<keyof BudgetFormData, string>

const PHONE_REGEX = /^[0-9]{9}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const EMPTY_FORM: BudgetFormData = { name: "", phone: "", email: "" }
export const EMPTY_ERRORS: BudgetFormErrors = { name: "", phone: "", email: "" }

export function validateBudgetForm(data: BudgetFormData): BudgetFormErrors {
  return {
    name: data.name.trim() === "" ? "Camp obligatori en nom" : "",
    phone: PHONE_REGEX.test(data.phone.trim()) ? "" : "Introdueix un telèfon vàlid",
    email: EMAIL_REGEX.test(data.email.trim()) ? "" : "Introdueix un email vàlid",
  }
}

export const hasErrors = (errors: BudgetFormErrors) =>
  Object.values(errors).some(Boolean)