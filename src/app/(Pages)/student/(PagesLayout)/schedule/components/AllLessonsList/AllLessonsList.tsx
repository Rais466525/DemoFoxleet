import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { LessonsList } from './LessonsList'

export const AllLessonsList: React.FC = ({}) => {
  return (
    <div>
        <Card className='border-none'>
          <CardContent className='flex flex-col gap-6'>
            {LessonsList.map(({ title, icon: Icon, href }) => (
              <Link href={href} key={href} className='flex items-center gap-4'>
              <Icon size={22} />
              <p>{title}</p>
            </Link>
            ))}
      </CardContent>
    </Card>
    </div>
  )
}