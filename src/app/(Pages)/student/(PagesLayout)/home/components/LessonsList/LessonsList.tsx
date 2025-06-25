import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/global/components/ui/card'

export const LessonsList: React.FC = ({}) => {
  return (
    <div className='grid grid-cols-1 gap-4 p-4'>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </div>
  )
}