'use client'

import React from 'react'
import { useIsMobile } from '@/global/hooks/use-mobile'


/**
 * Компоненты-обёртки для разделения контента по устройству
 */
export type TProps = { children: React.ReactNode }

export const ComponentForMobile: React.FC<TProps> = ({ children }) => <>{children}</>
export const ComponentForDesktop: React.FC<TProps> = ({ children }) => <>{children}</>


/**
 * Основная обёртка, выбирающая нужный контент
 */
interface MobileOrDesktopProps {
  children: React.ReactNode
}

export const MobileOrDesktop: React.FC<MobileOrDesktopProps> = ({ children }) => {
  const isMobile = useIsMobile()

  let mobileContent: React.ReactNode = null
  let desktopContent: React.ReactNode = null

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) return
    if (child.type === ComponentForMobile) {
      mobileContent = child.props.children
    }
    if (child.type === ComponentForDesktop) {
      desktopContent = child.props.children
    }
  })

  return <>{isMobile ? mobileContent : desktopContent}</>
}