import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover'
import { Palette } from 'lucide-react'
import { SelectColor } from './SelectColor/SelectColor'

export const ThemeSwitcherDesktop: React.FC = ({ }) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Palette size={26} className='-mb-2 stroke-1' />
        </PopoverTrigger>
        <PopoverContent>
          <SelectColor />
        </PopoverContent>
      </Popover>
    </div>
  )
}