import Image from 'next/image'
import { LoginForm } from './components/LoginForm'

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">

      <div className="flex flex-col gap-1 p-6 md:p-10">

        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex items-center font-medium">
            {/* <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div> */}
            <Image
              src='/logos/logo.png'
              alt='/logos/logo.png'
              width={1280}
              height={1205}
              className='w-10 -mt-5' />
            FoxLeet
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="bg-muted relative hidden lg:block">
      <Image
        src='/logos/logo.png'
        alt='/logos/logo.png'
        width={1280}
        height={1205}
        className='' 
      />
      </div>

    </div>
  )
}