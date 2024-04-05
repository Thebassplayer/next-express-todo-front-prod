'use client'
import TodoItem from './todoItem'
import { useTodosContext } from '@/context/TodosContext'
import sortTodosByDate from '@/app/utils/sortTodos'

const TodoList = () => {
  const { todos, loading, loadingElements, updateTodo, deleteTodo } =
    useTodosContext()

  const sortedTodos = sortTodosByDate(todos)

  if (loading) {
    return (
      <ul className="lg:h-3/4 lg:w-full lg:px-8">
        <li className="mb-2 flex h-10 animate-pulse flex-row items-center justify-between rounded-sm border-b border-gray-800 bg-gray-500 p-2"></li>
        <li className="mb-2 flex h-10 animate-pulse flex-row items-center justify-between rounded-sm border-b border-gray-800 bg-gray-500 p-2"></li>
        <li className="mb-2 flex h-10 animate-pulse flex-row items-center justify-between rounded-sm border-b border-gray-800 bg-gray-500 p-2"></li>
        <li className="mb-2 flex h-10 animate-pulse flex-row items-center justify-between rounded-sm border-b border-gray-800 bg-gray-500 p-2"></li>
      </ul>
    )
  }
  return (
    <ul className="z-50 lg:h-3/4 lg:w-full lg:overflow-y-scroll lg:p-12">
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          loadingElements={loadingElements}
        />
      ))}
    </ul>
  )
}

export default TodoList
