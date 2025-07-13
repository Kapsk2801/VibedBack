import { Star } from 'lucide-react'
import { clsx } from 'clsx'

interface StarRatingProps {
  rating: number
  onRatingChange?: (rating: number) => void
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function StarRating({ rating, onRatingChange, readonly = false, size = 'md' }: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5]
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  const getStarColor = (star: number) => {
    if (star <= rating) {
      if (rating >= 4.5) return 'fill-yellow-500 text-yellow-500'
      if (rating >= 4.0) return 'fill-blue-500 text-blue-500'
      if (rating >= 3.5) return 'fill-orange-500 text-orange-500'
      return 'fill-yellow-400 text-yellow-400'
    }
    return 'text-gray-300 hover:text-yellow-300'
  }

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onRatingChange?.(star)}
          className={clsx(
            'transition-all duration-200 transform hover:scale-110 active:scale-95',
            !readonly && 'cursor-pointer',
            readonly && 'cursor-default'
          )}
          title={`Rate ${star} star${star > 1 ? 's' : ''}`}
          onMouseEnter={(e) => {
            if (!readonly) {
              e.currentTarget.classList.add('animate-pulse')
            }
          }}
          onMouseLeave={(e) => {
            if (!readonly) {
              e.currentTarget.classList.remove('animate-pulse')
            }
          }}
        >
          <Star
            className={clsx(
              sizeClasses[size],
              getStarColor(star),
              'drop-shadow-sm'
            )}
          />
        </button>
      ))}
      {rating > 0 && (
        <span className="ml-3 text-sm font-medium text-gray-700">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}