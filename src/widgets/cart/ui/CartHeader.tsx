import { IconX } from '@tabler/icons-react'

interface CartHeaderProps {
  quantity: number
  onClose: () => void
}

export default function CartHeader({ quantity, onClose }: CartHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 px-4 py-4 sm:px-5 sm:py-5">
      <div>
        <h3 className="text-lg font-bold text-[#070707] sm:text-xl">Tu pedido</h3>

        <p className="mt-0.5 text-xs text-neutral-500 sm:text-sm">
          {quantity} {quantity === 1 ? 'producto' : 'productos'}
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          text-neutral-500
          transition
          duration-200
          hover:bg-[#f5c518]
          hover:text-[#070707]
          active:scale-95
          sm:h-10
          sm:w-10
        "
        aria-label="Cerrar carrito"
      >
        <IconX size={20} stroke={2} />
      </button>
    </header>
  )
}
