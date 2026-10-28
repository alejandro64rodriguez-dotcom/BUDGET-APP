import type { Service } from "@/types/service"

export interface BudgetFormData {
  name: string
  phone: string
  email: string
}

export interface Budget {
  id: string
  client: BudgetFormData
  services: Service[]
  pages: number
  languages: number
  totalPrice: number
}