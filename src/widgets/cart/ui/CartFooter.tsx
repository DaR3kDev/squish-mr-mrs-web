import { IconBrandWhatsapp } from '@tabler/icons-react'

import { buildWhatsAppMessage } from '~/features/send-order-whatsapp/lib/buildWhatsAppMessage'
import { whatsappNumberSchema } from '~/features/shopping-cart/model/whatsapp-schema'
import type { CartItem } from '~/features/shopping-cart/types/cart'
import { formatPrice } from '~/shared/lib/format-price'

interface CartFooterProps {
  total: number
  items: CartItem[]
}

const WHATSAPP_NUMBER = '51977801754'

export default function CartFooter({ total, items }: CartFooterProps) {
  const sendToWhatsApp = () => {
    if (items.length === 0) {
      return
    }

    const numberResult = whatsappNumberSchema.safeParse(WHATSAPP_NUMBER)

    if (!numberResult.success) return

    const message = buildWhatsAppMessage(items)

    if (!message) return

    const url = `https://wa.me/${numberResult.data}` + `?text=${encodeURIComponent(message)}`

    window.open(url, '_blank')
  }

  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-neutral-600 sm:text-base">Total</span>

        <span className="text-lg font-bold text-[#070707] sm:text-xl">{formatPrice(total)}</span>
      </div>

      <button
        type="button"
        onClick={sendToWhatsApp}
        disabled={items.length === 0}
        className="
          flex
          min-h-11
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#25D366]
          px-4
          py-3
          text-sm
          font-bold
          text-white
          transition
          duration-200
          hover:brightness-95
          active:scale-[0.98]
          disabled:cursor-not-allowed
          disabled:opacity-50
          disabled:hover:brightness-100
          focus:outline-none
          focus:ring-2
          focus:ring-[#25D366]
          focus:ring-offset-2
          sm:min-h-12
          sm:px-5
          sm:py-3.5
          sm:text-base
        "
      >
        <IconBrandWhatsapp size={20} stroke={2} />

        <span>Pedir por WhatsApp</span>
      </button>
    </footer>
  )
}
