import { Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { SelectColor } from './SelectColor/SelectColor'

export const ThemeSwitcherMobile: React.FC = ({}) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Palette size={22} className='-mb-2' />
        </DrawerTrigger>
        <DrawerContent className='border-border'>
          <DrawerHeader>
            <DrawerTitle>Theme Customizer</DrawerTitle>
            <DrawerDescription>Customize your interface colors.</DrawerDescription>
          </DrawerHeader>

          <SelectColor />
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}