import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScheduleList } from './ScheduleList/ScheduleList'
import { ScheduleList2 } from './ScheduleList2/ScheduleList2'
import { AllLessonsList } from '../AllLessonsList/AllLessonsList'


const TabsValue = {
  ALL_LESSONS: 'ALL_LESSONS',
  FIRST_WEEK: 'FIRST_WEEK',
  SECOND_WEEK: 'SECOND_WEEK',
} as const


export const Schedule: React.FC = ({ }) => {
  return (
    <div>
      <Tabs defaultValue={TabsValue.ALL_LESSONS}>
        <TabsList className='w-full mb-2'>
          <TabsTrigger value={TabsValue.ALL_LESSONS}>Все предмнты</TabsTrigger>
          <TabsTrigger value={TabsValue.FIRST_WEEK}>Числитень</TabsTrigger>
          <TabsTrigger value={TabsValue.SECOND_WEEK}>Знаменатель</TabsTrigger>
        </TabsList >
        <div>
          <TabsContent value={TabsValue.ALL_LESSONS}>
            <AllLessonsList />
          </TabsContent>
          <TabsContent value={TabsValue.FIRST_WEEK}>
            <ScheduleList />
          </TabsContent>
          <TabsContent value={TabsValue.SECOND_WEEK}>
            <ScheduleList2 />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}