import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={clsx(
          'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95',
          {
            'bg-[var(--primary)] text-white shadow-lg hover:bg-[var(--secondary)] hover:text-[var(--primary)] hover:shadow-xl border-2 border-[var(--secondary)]': variant === 'primary',
            'bg-white text-[var(--primary)] border-2 border-[var(--secondary)] hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:shadow-lg': variant === 'secondary',
            'border-2 border-[var(--primary)] bg-white text-[var(--primary)] shadow-md hover:bg-[var(--secondary)] hover:text-[var(--primary)] hover:shadow-lg': variant === 'outline',
            'text-[var(--primary)] hover:bg-[var(--muted)] hover:text-[var(--secondary)]': variant === 'ghost',
            'bg-gradient-to-r from-[var(--secondary)] via-[var(--accent)] to-[var(--primary)] text-[var(--primary-dark)] shadow-lg hover:from-yellow-400 hover:to-blue-700 hover:shadow-xl': variant === 'gradient',
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-sm': size === 'md',
            'h-12 px-6 text-base': size === 'lg',
            'h-14 px-8 text-lg': size === 'xl',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }