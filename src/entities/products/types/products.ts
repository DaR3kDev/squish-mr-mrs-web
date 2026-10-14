import type { ImageMetadata } from 'astro'

export type MenuCategory = 'MENÚ MARINO' | 'CENA Y PLATOS A LA CARTA' | 'BEBIDAS'

export type MenuSubcategory = 'ENTRADAS' | 'FONDO' | 'MATES'

export type Product = {
  id: string
  name: string
  price: number
  category: MenuCategory
  subcategory?: MenuSubcategory
  description?: string
  image?: string | ImageMetadata
}
