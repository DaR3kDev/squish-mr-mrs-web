import type { Product } from '~/entities/products/types/products'
import AddToCartButton from '~/features/add-to-cart/ui/AddToCartButton'
import { formatPrice } from '~/shared/lib/format-price'

interface ProductCardProps {
  product: Product
  onAdd: (product: Product) => void
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <h3 className="text-base font-bold leading-tight text-[#070707] sm:text-lg">
            {product.name}
          </h3>

          <p className="mt-1.5 text-sm leading-5 text-neutral-500">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-base font-bold text-[#163e9e] sm:text-lg">
            {formatPrice(product.price)}
          </span>

          <div className="w-28 shrink-0 sm:w-32">
            <AddToCartButton product={product} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </article>
  )
}
