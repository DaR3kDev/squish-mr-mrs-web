import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'

import type { CartItem as CartItemType } from '~/features/shopping-cart/types/cart'
import { formatPrice } from '~/shared/lib/format-price'

interface CartItemProps {
  item: CartItemType
  onIncrease: (productId: string) => void
  onDecrease: (productId: string) => void
  onRemove: (productId: string) => void
}

export default function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  const { product, quantity } = item

  return (
    <article className="flex gap-3 border-b border-neutral-200 pb-4 sm:gap-4">
      <div className="h-18 w-18 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:h-20 sm:w-20">
        <img
          src={product.image || ''}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-[#070707] sm:text-base">
              {product.name}
            </h3>

            <p className="mt-1 text-sm font-semibold text-[#f5c518]">
              {formatPrice(product.price)}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              text-neutral-400
              transition
              duration-200
              hover:bg-red-50
              hover:text-red-500
              active:scale-95
            "
            aria-label={`Eliminar ${product.name}`}
          >
            <IconTrash size={17} stroke={2} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onDecrease(product.id)}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-neutral-200
                text-[#070707]
                transition
                duration-200
                hover:border-[#f5c518]
                hover:bg-[#f5c518]
                active:scale-95
              "
              aria-label={`Disminuir cantidad de ${product.name}`}
            >
              <IconMinus size={16} stroke={2} />
            </button>

            <span className="w-5 text-center text-sm font-semibold text-[#070707]">{quantity}</span>

            <button
              type="button"
              onClick={() => onIncrease(product.id)}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-neutral-200
                text-[#070707]
                transition
                duration-200
                hover:border-[#f5c518]
                hover:bg-[#f5c518]
                active:scale-95
              "
              aria-label={`Aumentar cantidad de ${product.name}`}
            >
              <IconPlus size={16} stroke={2} />
            </button>
          </div>

          <span className="text-right text-sm font-bold text-[#070707] sm:text-base">
            {formatPrice(product.price * quantity)}
          </span>
        </div>
      </div>
    </article>
  )
}
