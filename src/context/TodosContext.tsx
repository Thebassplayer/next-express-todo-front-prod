import useTodos, { UseTodosReturn } from '@/app/hooks/useTodos'
import React, { createContext, useContext } from 'react'

// Create the context
const TodosContext = createContext<UseTodosReturn | null>(null)

// Create a custom hook to use the TodosContext
export const useTodosContext = () => {
  const context = useContext(TodosContext)
  if (!context) {
    throw new Error('useTodosContext must be used within a TodosProvider')
  }
  return context
}

// Create a provider component
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
