import { cartSchema } from '~/features/shopping-cart/model/cart-schema'
import { formatPrice } from '~/shared/lib/format-price'

import type { CartItem } from '~/features/shopping-cart/types/cart'

export function buildWhatsAppMessage(items: CartItem[]): string {
  const result = cartSchema.safeParse(items)

  if (!result.success) {
    return ''
  }

  const lines = result.data.map(({ product, quantity }) => {
    const subtotal = product.price * quantity

    return `${quantity}x ${product.name} - ${formatPrice(subtotal)}`
  })

  const total = result.data.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0,
  )

  return [
    'Hola, buen día.',
    '',
    'Quisiera realizar el siguiente pedido:',
    '',
    ...lines,
    '',
    `Total: ${formatPrice(total)}`,
    '',
    'Muchas gracias.',
  ].join('\n')
}
