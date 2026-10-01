import type { Product } from '~/entities/products/types/products'

interface AddToCartButtonProps {
  product: Product
  onAdd: (product: Product) => void
}

export default function AddToCartButton({ product, onAdd }: AddToCartButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onAdd(product)}
      className="
        w-full
        min-h-10
        rounded-xl
        bg-[#f5c518]
        px-3
        py-2.5
        text-xs
        font-semibold
        text-[#070707]
        transition
        duration-200
        hover:bg-[#ffd84d]
        active:scale-[0.98]
        sm:min-h-11
        sm:px-4
        sm:py-3
        sm:text-sm
      "
    >
      Agregar
    </button>
  )
}
