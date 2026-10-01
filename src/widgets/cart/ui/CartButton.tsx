interface CartButtonProps {
  quantity: number
  onClick: () => void
}

export default function CartButton({ quantity, onClick }: CartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        fixed
        bottom-4
        right-4
        z-40
        flex
        min-h-11
        items-center
        gap-2.5
        rounded-full
        bg-[#f5c518]
        px-4
        py-2.5
        text-sm
        font-semibold
        text-[#070707]
        shadow-xl
        transition
        duration-200
        hover:bg-[#ffd84d]
        active:scale-[0.97]
        sm:bottom-6
        sm:right-6
        sm:min-h-12
        sm:gap-3
        sm:px-5
        sm:py-3
      "
    >
      <span>Carrito</span>

      <span
        className="
          flex
          h-7
          min-w-7
          items-center
          justify-center
          rounded-full
          bg-[#070707]
          px-1.5
          text-xs
          font-bold
          text-white
          sm:h-8
          sm:min-w-8
          sm:text-sm
        "
      >
        {quantity}
      </span>
    </button>
  )
}
