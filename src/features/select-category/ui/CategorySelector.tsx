import type { Category } from '../type/category-type'
import { categories } from '../data/categories'

interface CategorySelectorProps {
  selected: Category['id']
  onChange: (category: Category['id']) => void
}

export default function CategorySelector({ selected, onChange }: CategorySelectorProps) {
  return (
    <div className="scrollbar-none flex w-full gap-2 overflow-x-auto pb-2">
      {categories.map(category => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={`
            min-h-10
            shrink-0
            rounded-full
            border
            px-4
            py-2
            text-xs
            font-medium
            whitespace-nowrap
            transition-colors
            duration-200
            sm:min-h-11
            sm:px-5
            sm:py-2.5
            sm:text-sm
            ${
              selected === category.id
                ? 'border-white bg-white text-[#070707]'
                : 'border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500 hover:bg-neutral-800 hover:text-white'
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
