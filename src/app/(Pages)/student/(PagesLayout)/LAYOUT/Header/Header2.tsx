// import Link from 'next/link'
// import Image from 'next/image'

// import { FixedBar } from '@/components/foxui/FixedBar'
// import { StudentRoutes } from '@/configs/Routes/Routes'

// import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher'
// import { Nofitication } from './Nofitication/Nofitication'

// export const Header: React.FC = ({}) => {
//   return (
//     <div>
//       <FixedBar position='top'
//         isHideOnScroll={false}
//         className='border-b-2'>
//         <header className='flex items-center justify-between -mb-2'>
//           <Link href={StudentRoutes.HOME}
//             className='flex items-center'>
//             <Image 
//               src={'/logo.png'} 
//               alt='logo.png'
//               width={80} 
//               height={80}
//               className='w-10 mb-3 -mr-1 sm:w-12'
//             />
//             <h1 className='text-2xl font-bold'>FoxLeet</h1>
//           </Link>
//           <div className='flex items-center gap-3'>
//             <ThemeSwitcher />
//             <Nofitication />
//           </div>
//         </header>
//       </FixedBar>
//     </div>
//   )
// }