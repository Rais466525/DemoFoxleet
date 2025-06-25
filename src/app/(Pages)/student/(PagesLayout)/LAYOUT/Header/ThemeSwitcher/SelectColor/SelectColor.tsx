import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export const SelectColor: React.FC = ({ }) => {
  return (
    <div className='grid grid-cols-3 p-5 gap-3'>
      <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-2 has-[[aria-checked=true]]:bg-blue-50">
        <Checkbox
          id="toggle-2"
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
        </div>
      </Label>
    </div>
  )
}