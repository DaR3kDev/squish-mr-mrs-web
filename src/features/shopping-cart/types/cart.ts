import type { Product } from '~/entities/products/types/products'

export interface CartItem {
  product: Product
  image?: string
  quantity: number
}
