import { cx } from '@/app/utils/styles'
import Tooltip from './tooltip'
import { UpdateTodo } from '@/types'

type DoneButtonProps = {
  id: number
  done: boolean
  updateTodo: UpdateTodo
}

const DoneButton = ({ done, id, updateTodo }: DoneButtonProps) => {
  return (
    <div className={cx('mr-4')}>
      <Tooltip message={done ? 'Mark as not done' : 'Mark as done'}>
        <input
          type="checkbox"
          className="cursor-pointer accent-pink-500 duration-200 ease-linear hover:scale-125 lg:size-4"
          checked={done}
          aria-label="Done"
          onChange={(e) => {
            updateTodo(id, { done: e.target.checked })
          }}
        ></input>
      </Tooltip>
    </div>
  )
}

export default DoneButton
