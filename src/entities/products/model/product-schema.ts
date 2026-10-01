import { z } from 'zod'

export const productSchema = z.object({
  id: z.string().min(1),
  image: z.string().optional(),
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().positive(),
  category: z.enum(['MENÚ MARINO', 'CENA Y PLATOS A LA CARTA', 'BEBIDAS']),
  subcategory: z.enum(['ENTRADAS', 'FONDO', 'MATES']).optional(),
})
