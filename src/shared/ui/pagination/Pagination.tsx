import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav className="flex items-center justify-center gap-2 py-4" aria-label="Paginación">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="
          flex
          h-9
          w-9
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
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
        aria-label="Página anterior"
      >
        <IconChevronLeft size={18} stroke={2} />
      </button>

      {pages.map(page => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`
            flex
            h-9
            min-w-9
            items-center
            justify-center
            rounded-full
            px-2.5
            text-sm
            font-semibold
            transition
            duration-200
            ${
              currentPage === page
                ? 'bg-[#f5c518] text-[#070707]'
                : 'text-neutral-500 hover:bg-neutral-100 hover:text-[#070707]'
            }
          `}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="
          flex
          h-9
          w-9
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
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
        aria-label="Página siguiente"
      >
        <IconChevronRight size={18} stroke={2} />
      </button>
    </nav>
  )
}
