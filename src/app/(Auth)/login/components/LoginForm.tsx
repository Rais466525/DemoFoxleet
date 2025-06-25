'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { StudentRoutes } from '@/configs/Routes/Routes'
import { useRouter } from 'next/navigation'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const router = useRouter()
  const handleClick = () => {
    router.push(StudentRoutes.SCHEDULE)
  }

  return (
    <form className={cn("flex flex-col gap-9", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold ">Login to your account</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button className="w-full" onClick={handleClick}>
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" disabled  className="w-full">
          Login with Google
        </Button>
      </div>
    </form>
  )
}