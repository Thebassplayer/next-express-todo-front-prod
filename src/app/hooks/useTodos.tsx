import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CreateTodoData,
  ErrorResponse,
  Todo,
  UpdateTodoData,
  UseTodosReturn,
} from '@/types'

const useTodos = (): UseTodosReturn => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingElements, setLoadingElements] = useState<number[]>([])
  const [error, setError] = useState<ErrorResponse | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true)
      try {
        const response = await axios.get<Todo[]>('/api/todo/all')
        setTodos(response.data)
        setError(null)
        setIsSuccess(true)
      } catch (err) {
        setError(err as ErrorResponse)
      } finally {
        setLoading(false)
        setIsSuccess(false)
        setError(null)
      }
    }

    fetchTodos()
  }, [])

  const createTodo = async (todo: CreateTodoData) => {
    try {
      const response = await axios.post<Todo>('/api/todo/', todo)
      setTodos((prevTodos) => [...prevTodos, response.data])
      setError(null)
      setIsSuccess(true)
    } catch (err) {
      setError(err as ErrorResponse)
    }
  }

  const updateTodo = async (id: number, updatedTodoData: UpdateTodoData) => {
    try {
      setLoadingElements((prevLoadingElements) => [...prevLoadingElements, id])
      const response = await axios.put<Todo>(`/api/todo/${id}`, updatedTodoData)
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? response.data : todo)),
      )
      setError(null)
      setIsSuccess(true) // Set isSuccess to true
    } catch (err) {
      setError(err as ErrorResponse)
      setIsSuccess(false) // Set isSuccess to false on error
    } finally {
      setLoadingElements((prevLoadingElements) =>
        prevLoadingElements.filter((elementId) => elementId !== id),
      )
      setIsSuccess(false)
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      setLoadingElements((prevLoadingElements) => [...prevLoadingElements, id])
      await axios.delete(`/api/todo/${id}`)
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
      setError(null)
      setIsSuccess(true) // Set isSuccess to true
    } catch (err) {
      setError(err as ErrorResponse)
      setIsSuccess(false) // Set isSuccess to false on error
    } finally {
      setLoadingElements((prevLoadingElements) =>
        prevLoadingElements.filter((elementId) => elementId !== id),
      )
      setIsSuccess(false)
    }
  }

  const deleteAllTodos = async () => {
    try {
      setLoading(true)
      await axios.delete('/api/todo/all')
      setTodos([])
      setError(null)
      setIsSuccess(true) // Set isSuccess to true
    } catch (err) {
      setError(err as ErrorResponse)
      setIsSuccess(false) // Set isSuccess to false on error
    }
  }

  return {
    todos,
    loading,
    loadingElements,
    error,
    isSuccess,
    createTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos,
  }
}

export default useTodos
