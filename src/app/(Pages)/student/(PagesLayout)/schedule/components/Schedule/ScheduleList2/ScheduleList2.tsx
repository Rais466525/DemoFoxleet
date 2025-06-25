import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ScheduleData } from './data'
import { Button } from '@/components/ui/button'

export const ScheduleList2: React.FC = ({}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
      {ScheduleData.map((dayData, dayIndex) => (
        <Card key={`${dayData.day}-${dayIndex}`} className='border-none'>
          <CardHeader>
            <CardTitle>{dayData.day}</CardTitle>
          </CardHeader>
          <CardContent className='-mt-6 -mb-4'>


            <Accordion type="single" collapsible className='border-border'>
              {dayData.lessons.map((lesson, lessonIndex) => (

                <AccordionItem 
                  key={`${dayData.day}-lesson-${lessonIndex}`} 
                  value={`item-${dayIndex}-${lessonIndex}`} 
                  className='border-muted-foreground/70'>

                  <AccordionTrigger className="text-left">
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-medium">{lesson.title}</span>
                      <span className="text-sm text-muted-foreground">{lesson.time} • {lesson.place}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Преподаватель:</span>
                        <span className="font-medium">{lesson.teacter}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Прогресс:</span>
                          <span>{lesson.progress}/{lesson.totalProgress}</span>
                        </div>
                        <Progress value={lesson.progress} className="h-2" />
                      </div>
                      <Button className='mt-2'>Перейти на страницу урока</Button>
                    </div>
                  </AccordionContent>

                </AccordionItem>
              ))}
            </Accordion>


          </CardContent>
        </Card>
      ))}
    </div>
  )
}