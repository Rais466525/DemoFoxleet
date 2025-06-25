'use client'
import { usePathname, useRouter } from 'next/navigation'

import { FixedBar } from '@/components/foxui/FixedBar'
import { ArrowLeft } from 'lucide-react'
import { StudentRoutes } from '@/configs/Routes/Routes'

export const Header: React.FC = ({}) => {

  const router = useRouter()
  const goBack = () => router.back()

  const pathname = usePathname()

  let title = ''
  switch (pathname) {
    case StudentRoutes.NOFITICATION:
      title = 'Уведомления'
      break
    case StudentRoutes.SETTINGS:
      title = 'Настройки'
      break
  }

  return (
    <div>
      <FixedBar 
      position='top' 
      isHideOnScroll={false}
      className='border-b-2 h-11.5'>

        <header className='p-1 flex items-center justify-between'>
          <button onClick={goBack}>
            <ArrowLeft size={22} />
          </button>
          <h1>{title}</h1>
          <div className='p-4'></div>

        </header>
      </FixedBar>
    </div>
  )
}