import { type Service } from "@/types/service"


export function toggleService (service: Service, previous: Service[]): Service [] {
     return previous.some((item) => item.id === service.id)
    ? previous.filter((item) => item.id !== service.id)
    : [...previous, service]

}