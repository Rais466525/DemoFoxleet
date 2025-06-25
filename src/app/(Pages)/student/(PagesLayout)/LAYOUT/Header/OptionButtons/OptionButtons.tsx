'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Bell, Search, Settings } from 'lucide-react'
import { StudentRoutes } from '@/configs/Routes/Routes'


export const OptionsButtons: React.FC = ({ }) => {

  const pathname = usePathname()

  return (
    <div className='flex items-center gap-3'>
      <button>
        <Search size={22} />
      </button>
      <Link href={StudentRoutes.NOFITICATION}>
        <Bell size={22} className='-mb-0.5' />
      </Link>

      {pathname === StudentRoutes.OTHER &&
        <Link href={StudentRoutes.SETTINGS}>
          <Settings size={22} />
        </Link>
      }
    </div>
  )
}