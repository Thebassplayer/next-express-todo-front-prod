export type Todo = {
  id: number
  content: string
  done: boolean
  createdAt: string
  updatedAt: string
  authorId: number
  author: {
    id: number
    email: string
    name: string
  }
}

export type UpdateTodoData = Partial<Pick<Todo, 'done' | 'content'>>

export type CreateTodoData = Pick<Todo, 'content'>

export type ErrorResponse = {
  message: string
}

export type UpdateTodo = (id: number, updatedTodoData: UpdateTodoData) => void

export type DeleteTodo = (id: number) => void

export type UseTodosReturn = {
  todos: Todo[]
  loading: boolean
  loadingElements: number[]
  error: ErrorResponse | null
  isSuccess: boolean
  createTodo: (todo: CreateTodoData) => void
  updateTodo: UpdateTodo
  deleteTodo: DeleteTodo
  deleteAllTodos: () => void
}
