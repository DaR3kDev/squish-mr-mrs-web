import Pagination from '~/shared/ui/pagination/Pagination'
import type { CartItem as CartItemType } from '~/features/shopping-cart/types/cart'
import { usePagination } from '~/shared/lib/pagination/usePagination'

import CartButton from '~/widgets/cart/ui/CartButton'
import CartFooter from '~/widgets/cart/ui/CartFooter'
import CartHeader from '~/widgets/cart/ui/CartHeader'
import CartItem from '~/widgets/cart/ui/CartItem'

interface CartProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
  items: CartItemType[]
  quantity: number
  total: number
  onIncrease: (productId: string) => void
  onDecrease: (productId: string) => void
  onRemove: (productId: string) => void
}

const ITEMS_PER_PAGE = 4

export default function Cart({
  open,
  onOpen,
  onClose,
  items,
  quantity,
  total,
  onIncrease,
  onDecrease,
  onRemove,
}: CartProps) {
  const pagination = usePagination({
    totalItems: items.length,
    itemsPerPage: ITEMS_PER_PAGE,
  })

  const currentItems = pagination.paginate(items)

  return (
    <div>
      <CartButton quantity={quantity} onClick={onOpen} />

      {open && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-[2px]
          "
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        aria-label="Carrito de compras"
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-dvh
          w-full
          flex-col
          bg-white
          text-[#070707]
          shadow-2xl
          transition-transform
          duration-300
          sm:max-w-md
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <CartHeader quantity={quantity} onClose={onClose} />

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center px-4 text-center">
              <div>
                <p className="font-semibold text-[#070707]">Tu carrito está vacío</p>

                <p className="mt-1 text-sm leading-5 text-neutral-500">
                  Agrega productos para comenzar.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {currentItems.map(item => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}

              {pagination.totalPages > 1 && (
                <Pagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                  onPrevious={pagination.goToPrevious}
                  onNext={pagination.goToNext}
                  onPageChange={pagination.goToPage}
                />
              )}
            </div>
          )}
        </div>

        {items.length > 0 && <CartFooter total={total} items={items} />}
      </aside>
    </div>
  )
}
