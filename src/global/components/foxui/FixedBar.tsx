'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { useScrollDirection } from '@/hooks/useScrollDirection'

type Position = 'top' | 'bottom'

type FixedBarProps = {
  children?: ReactNode
  className?: string
  position?: Position
  isHideOnScroll?: boolean
}

export const FixedBar = ({ 
  children, 
  className = '', 
  position = 'top',
  isHideOnScroll = true
}: FixedBarProps) => {
  const scrollDirection = useScrollDirection()
  const isHidden = isHideOnScroll && scrollDirection === 'down'

  const positionClass = position === 'top'
    ? 'sticky top-0'
    : 'fixed bottom-0'

  return (
    <div 
      className={cn(
        'left-0 right-0 bg-background border-border px-2 py-1 shadow-md transition-transform duration-300 ease-in-out z-20',
        positionClass,
        isHidden 
          ? position === 'top' 
            ? '-translate-y-full' 
            : 'translate-y-full'
          : 'translate-y-0',
        className
      )}
    >
      {children}
    </div>
  )
}