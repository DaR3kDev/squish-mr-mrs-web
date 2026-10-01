export type MenuCategory = 'MENÚ MARINO' | 'CENA Y PLATOS A LA CARTA' | 'BEBIDAS'
export type MenuSubcategory = 'ENTRADAS' | 'FONDO' | 'MATES'

export type Product = {
  id: string
  image?: string
  name: string
  description?: string
  price: number
  category: MenuCategory
  subcategory?: MenuSubcategory
}
