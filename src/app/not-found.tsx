import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
 


export default function NotFoundPage() {
  return (
    <div className='h-dvh flex justify-center items-center'>
      <Card className='mx-auto w-[clamp(200px,90%,400px)]'>
        <CardHeader className='flex flex-col items-center gap-3'>
          <CardTitle className='text-4xl font-bold'>404</CardTitle>
          <CardDescription>Page Not Found</CardDescription>
        </CardHeader>
        <CardFooter className='w-full'>
          <Link href="/" className='w-full'>
            <Button className='w-full'>Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}