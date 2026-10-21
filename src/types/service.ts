
import data from '@/data/services.json'

export type Service = {
  id: string
  name: string
  description: string
  price: number
  configurable: boolean
}

export const services: Service[] = data