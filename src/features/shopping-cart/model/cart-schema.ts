import { z } from 'zod'

import { productSchema } from '~/entities/products/model/product-schema'

export const cartItemSchema = z.object({
  product: productSchema,
  quantity: z.number().int().positive(),
})

export const cartSchema = z.array(cartItemSchema)
