'use client'
import Modal from '@/components/modal'
import Navbar from '@/components/navbar'
import { TodosProvider } from '@/context/TodosContext'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <TodosProvider>
      <main className="flex h-screen w-full flex-col items-center overflow-hidden bg-white">
        <Navbar />
        {children}
        <Modal />
      </main>
    </TodosProvider>
  )
}
