import { Toaster } from '@/components/ui/sonner'
import { Header } from './LAYOUT/Header/Header'
import { Navbar } from './LAYOUT/Navbar/Navbar'


export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      {children}
      <Toaster 
        toastOptions={{
          style: {
            background: '#16a34a',
            opacity: '0.8',
            backdropFilter: 'blur(40px)'
          },
        }} />
      <Navbar />
    </div>
  )
}