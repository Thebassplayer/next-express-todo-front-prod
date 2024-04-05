import useTodos, { UseTodosReturn } from '@/app/hooks/useTodos'
import React, { createContext, useContext } from 'react'

const TodosContext = createContext<UseTodosReturn | null>(null)

export const useTodosContext = () => {
  const context = useContext(TodosContext)
  if (!context) {
    throw new Error('useTodosContext must be used within a TodosProvider')
  }
  return context
}

type TodosProviderProps = {
  children: React.ReactNode
}

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
  const todosContextValue = useTodos()

  return (
    <TodosContext.Provider value={todosContextValue}>
      {children}
    </TodosContext.Provider>
  )
}
