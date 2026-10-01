import { useEffect, useState } from 'react'
import { IconCheck, IconX } from '@tabler/icons-react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const TOAST_DURATION = 3000

export default function Toast({ message, type, onClose }: ToastProps) {
  const isSuccess = type === 'success'
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      return
    }

    const timer = setTimeout(onClose, TOAST_DURATION)

    return () => clearTimeout(timer)
  }, [isPaused, onClose])

  return (
    <div
      className="
        fixed
        inset-x-4
        top-4
        z-[100]
        flex
        max-w-md
        animate-[toast-enter_0.35s_cubic-bezier(0.16,1,0.3,1)]
        items-start
        gap-3
        overflow-hidden
        rounded-2xl
        border
        border-neutral-100
        bg-white
        p-3
        shadow-[0_15px_45px_rgba(0,0,0,0.14)]
        sm:inset-x-auto
        sm:right-6
        sm:top-6
        sm:w-[calc(100%-3rem)]
        sm:p-4
      "
      role="alert"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`
          flex
          h-10
          w-10
          shrink-0
          animate-[toast-icon_0.45s_ease-out_0.1s_both]
          items-center
          justify-center
          rounded-xl
          ${isSuccess ? 'bg-[#f5c518] text-[#070707]' : 'bg-red-100 text-red-600'}
        `}
      >
        {isSuccess ? <IconCheck size={20} stroke={2.5} /> : <IconX size={20} stroke={2.5} />}
      </div>

      <p
        className="
          min-w-0
          flex-1
          animate-[toast-content_0.35s_ease-out_0.08s_both]
          break-words
          pt-1.5
          text-sm
          font-medium
          leading-5
          text-[#070707]
        "
      >
        {message}
      </p>

      <button
        type="button"
        onClick={onClose}
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          text-neutral-400
          transition
          duration-200
          hover:rotate-90
          hover:bg-neutral-100
          hover:text-[#070707]
          focus:outline-none
          focus:ring-2
          focus:ring-[#f5c518]
          focus:ring-offset-1
        "
        aria-label="Cerrar notificación"
      >
        <IconX size={17} stroke={2} />
      </button>

      <div
        className={`
          absolute
          bottom-0
          left-0
          h-1
          ${isSuccess ? 'bg-[#f5c518]' : 'bg-red-500'}
          ${isPaused ? 'w-full' : 'animate-[toast-progress_3s_linear_forwards]'}
        `}
      />
    </div>
  )
}
