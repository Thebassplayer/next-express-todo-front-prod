import { Todo } from '@/types'

function sortTodosByDate(todos: Todo[]): Todo[] {
  return todos.toSorted((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

export default sortTodosByDate
