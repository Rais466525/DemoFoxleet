'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FixedBar } from '@/components/foxui/FixedBar'
import { StudentRoutes } from '@/configs/Routes/Routes'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { OptionsButtons } from './OptionButtons/OptionButtons'

// import { Nofitication } from '../Header/Nofitication/Nofitication'
// import { ThemeSwitcher } from '../Header/ThemeSwitcher/ThemeSwitcher'
// import { GlobalSearch } from '../Header/Search/Search'
// import { SettingButton } from '../Header/SettingButton/SettingButton'



export const Header: React.FC = ({}) => {
  const pathname = usePathname()

  let title = ''

  switch (pathname) {
    case StudentRoutes.HOME:
      title = 'Home'
      break
    case StudentRoutes.SCHEDULE:
      title = 'Schedule'
      break
    case StudentRoutes.CHAT:
      title = 'Group'
      break
    case StudentRoutes.OTHER:
      title = 'User'
      break
  }

  return (
    <div>
      <FixedBar position='top'
        isHideOnScroll={false}
        className='border-b-2'>
        <header className='flex items-center justify-between py-1'>

          {/* {pathname !== StudentRoutes.USER ? */}
            <Link href={StudentRoutes.HOME}
              className='flex items-center gap-2'>
              <Avatar className='w-7 h-7'>
                <AvatarImage src="https://d1uuxsymbea74i.cloudfront.net/images/cms/hero_product_placement_2_test_d310e0a306.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className='text-xl'>{title}</h1>
            </Link>

            {/* :
            <div></div>
          } */}

          <OptionsButtons />
          
        </header>
      </FixedBar>
    </div>
  )
}