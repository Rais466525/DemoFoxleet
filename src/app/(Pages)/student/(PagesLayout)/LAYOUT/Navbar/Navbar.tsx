'use client'
import { useIsMobile } from '@/hooks/use-mobile'
import { NavbarMobile } from './Navbar.mobile'

export const Navbar: React.FC = ({ }) => {
  const isMobile = useIsMobile()
  return isMobile ? <NavbarMobile /> : null
}