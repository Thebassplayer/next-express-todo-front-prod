'use client'
import TwoDoLogo from '@/components/2doLogo'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { user, isLoading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user && !isLoading) {
      router.push('/welcome')
    } else if (user && !isLoading) {
      router.push('/app')
    }
  }, [user, router, isLoading])

  return (
    <main className="h-screen w-full grow items-center justify-center bg-[#1947E5]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <TwoDoLogo className="animate-pulse" />
      </div>
    </main>
  )
}
