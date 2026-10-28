// src/utils/budget.ts
import type { Service } from "@/types/service"

const PRICE_PER_PAGE = 30
const PRICE_PER_LANGUAGE = 30

interface WebOptions {
  pages: number
  languages: number
}

export const formatPrice = (price: number) =>
  `${price.toLocaleString("ca-ES")} €`

export const getServicePrice = (service: Service, { pages, languages }: WebOptions) =>
  service.configurable
    ? service.price + pages * PRICE_PER_PAGE + languages * PRICE_PER_LANGUAGE
    : service.price

export const getBudgetTotal = (services: Service[], options: WebOptions) =>
  services.reduce((total, service) => total + getServicePrice(service, options), 0)

export const getServiceLabel = (service: Service, { pages, languages }: WebOptions) =>
  service.configurable
    ? `${service.name} (${pages} pàgines, ${languages} idiomes)`
    : service.name