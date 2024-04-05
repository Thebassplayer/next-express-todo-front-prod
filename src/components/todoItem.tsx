import { cx } from '@/app/utils/styles'
import DeleteButton from './deleteButton'
import EditButton from './editButton'
import DoneButton from './doneButton'
import Spinner from './spinner'
import Tooltip from './tooltip'
import transformDateFormat from '@/app/utils/dateFormatter'
import { DeleteTodo, Todo, UpdateTodo } from '@/types'

type TodoItem = {
  todo: Todo
  updateTodo: UpdateTodo
  deleteTodo: DeleteTodo
  loadingElements: number[]
}

const todoItem = ({
  todo,
  updateTodo,
  deleteTodo,
  loadingElements,
}: TodoItem) => {
  const { createdAt, content, done, id } = todo
  // Function to check if the current todo item is loading
  const isLoading = loadingElements.includes(id)
  const date = transformDateFormat(createdAt)

  return (
    <li
      className={cx(
        'flex cursor-pointer flex-row items-center justify-between rounded-sm border-b border-gray-300 p-2 text-black',
        isLoading ? 'animate-pulse bg-gray-400' : '',
      )}
      key={id}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <DoneButton done={done} id={id} updateTodo={updateTodo} />
      )}
      <Tooltip message={date}>
        <span
          className={cx(
            `${done ? 'line-through' : ''}`,
            'line-clamp-1 w-full lg:text-xl',
          )}
        >
          {content}
        </span>
      </Tooltip>
      <div className="flex w-16 flex-row justify-between lg:gap-6">
        <EditButton id={id} />
        <DeleteButton deleteTodo={deleteTodo} id={id} />
      </div>
    </li>
  )
}

export default todoItem
