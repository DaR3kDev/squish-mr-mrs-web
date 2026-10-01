import { useEffect, useState } from 'react'

interface UsePaginationProps {
  totalItems: number
  itemsPerPage: number
}

export function usePagination({ totalItems, itemsPerPage }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage))

  useEffect(() => {
    setCurrentPage(page => Math.min(page, totalPages))
  }, [totalPages])

  const paginate = <T>(items: T[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage

    return items.slice(startIndex, startIndex + itemsPerPage)
  }

  const goToPage = (page: number) => setCurrentPage(Math.min(Math.max(page, 1), totalPages))

  const goToPrevious = () => setCurrentPage(page => Math.max(page - 1, 1))

  const goToNext = () => setCurrentPage(page => Math.min(page + 1, totalPages))

  const resetPage = () => setCurrentPage(1)

  return {
    currentPage,
    totalPages,
    paginate,
    goToPage,
    goToPrevious,
    goToNext,
    resetPage,
  }
}
