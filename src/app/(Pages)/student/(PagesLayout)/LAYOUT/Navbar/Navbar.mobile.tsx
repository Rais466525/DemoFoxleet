'use client'
import Link from 'next/link'
import { FixedBar } from '@/components/foxui/FixedBar'
import { usePathname } from 'next/navigation'
import { LinksList } from './LinksList'

export const NavbarMobile: React.FC = ({}) => {

  const pathname = usePathname()

  return (
    <div>
        <FixedBar position='bottom'
          isHideOnScroll={false}
          className='border-t-1 backdrop-blur-lg'>
          <nav className="flex justify-around items-center w-full">
            {LinksList.map((link, index) => {
              const isActive = pathname === link.href
              const Icon = link.icon
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`flex items-center justify-around transition-colors ease-in-out duration-100 ${isActive ? 'text-gray-100' : 'text-gray-600'}`}
                >
                  <Icon size={24} />
                </Link>
              )
            })}
          </nav>
        </FixedBar>
    </div>
  )
}