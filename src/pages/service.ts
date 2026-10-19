export type Service = {
  id: string
  name: string
  price: number
}

export const services: Service[] = [
  { id: 'web', name: 'Diseño web', price: 500 },
  { id: 'seo', name: 'SEO', price: 300 },
  { id: 'publicitat', name: 'Publicitat', price: 400 },
]