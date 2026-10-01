import { useMemo, useState } from 'react'

import { products } from '~/entities/products/model/products'
import type { MenuCategory } from '~/entities/products/types/products'

import ProductCard from '~/entities/products/ui/ProductCard'

import CategorySelector from '~/features/select-category/ui/CategorySelector'
import { useCart } from '~/features/shopping-cart/hooks/useCart'

import { usePagination } from '~/shared/lib/pagination/usePagination'
import Pagination from '~/shared/ui/pagination/Pagination'
import Toast from '~/shared/ui/toast/Toast'

import Cart from '~/widgets/cart/ui/Cart'

type Category = 'todos' | MenuCategory

const PRODUCTS_PER_PAGE = 6

export default function MenuInteractive() {
  const [category, setCategory] = useState<Category>('todos')

  const [cartOpen, setCartOpen] = useState(false)

  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartQuantity,
    cartTotal,
  } = useCart()

  const filteredProducts = useMemo(
    () =>
      category === 'todos' ? products : products.filter(product => product.category === category),
    [category],
  )

  const pagination = usePagination({
    totalItems: filteredProducts.length,
    itemsPerPage: PRODUCTS_PER_PAGE,
  })

  const currentProducts = pagination.paginate(filteredProducts)

  const handleCategoryChange = (value: string) => {
    setCategory(value as Category)
    pagination.resetPage()
  }

  const handleAddToCart = (product: (typeof products)[number]) => {
    const result = addToCart(product)

    setToast({
      message: result.message,
      type: result.success ? 'success' : 'error',
    })
  }

  return (
    <div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <section className="mb-6 sm:mb-8">
        <div className="-mx-1 overflow-x-auto px-1 pb-2 sm:mx-0 sm:px-0">
          <CategorySelector selected={category} onChange={handleCategoryChange} />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-7">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />
        ))}
      </section>

      {pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPrevious={pagination.goToPrevious}
          onNext={pagination.goToNext}
          onPageChange={pagination.goToPage}
        />
      )}

      <Cart
        items={cart}
        quantity={cartQuantity}
        total={cartTotal}
        open={cartOpen}
        onOpen={() => setCartOpen(true)}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
      />
    </div>
  )
}
