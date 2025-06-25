'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { ThemeSwitcherMobile } from './ThemeSwitcher.mobile'
import { ThemeSwitcherDesktop } from './ThemeSwitcher.desktop'

export const ThemeSwitcher: React.FC = ({ }) => {
  const isMobile = useIsMobile()
  return isMobile ? <ThemeSwitcherMobile /> : <ThemeSwitcherDesktop />
}