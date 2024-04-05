'use client'
import { useRouter } from 'next/navigation'
import { useSearchParams, usePathname } from 'next/navigation'
import { useTodosContext } from '@/context/TodosContext'
import CreateForm from './createForm'
import EditForm from './editForm'

function Modal() {
  const { createTodo, isSuccess, todos, updateTodo } = useTodosContext()
  const searchParams = useSearchParams()
  const modalCreate = searchParams.get('modalcreate')
  const modalEdit = searchParams.get('modaledit')
  const todoId = searchParams.get('id')
  const pathname = usePathname()
  const router = useRouter()

  const todo = todos.find((todo) => todo.id === Number(todoId))
  const content = todo?.content

  function handleCreate(event: any) {
    event.preventDefault()
    const content: string = event.target.username.value
    createTodo({ content })
    router.push(pathname)
  }

  function handleEdit(event: any) {
    event.preventDefault()
    const content: string = event.target.username.value
    updateTodo(Number(todoId), { content })
    router.push(pathname)
  }

  if (modalCreate) {
    return (
      <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
        <div className="flex w-full flex-col items-center justify-center">
          <CreateForm handleSubmit={handleCreate} pathname={pathname} />
        </div>
      </dialog>
    )
  }
  if (modalEdit) {
    return (
      <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
        <div className="flex w-full flex-col items-center justify-center">
          <EditForm
            handleSubmit={handleEdit}
            pathname={pathname}
            content={content || ''}
          />
        </div>
      </dialog>
    )
  }
}

export default Modal
