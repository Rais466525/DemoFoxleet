import { StudentRoutes } from '@/configs/Routes/Routes'
import { AlignJustify, ClipboardList, House, Users } from 'lucide-react'

export const LinksList = [
  {
    icon: House,
    href: StudentRoutes.HOME
  },
  {
    icon: ClipboardList,
    href: StudentRoutes.SCHEDULE
  },
  {
    icon: Users,
    href: StudentRoutes.CHAT
  },
  {
    icon: AlignJustify,
    href: StudentRoutes.OTHER
  },

] as const