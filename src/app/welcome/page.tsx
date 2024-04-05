'use client'
import TwoDoLogo from '@/components/2doLogo'
import AuthButton from '@/components/authButton'

export default function PublicPage() {
  return (
    <main className="flex h-screen w-full grow flex-col items-center justify-center gap-10 bg-[#1947E5]">
      <div className="flex h-3/4 flex-col ">
        <div className="flex h-1/2 w-full flex-col items-center justify-end">
          <TwoDoLogo />
        </div>
        <div className="flex h-1/2 w-full items-center justify-center">
          <AuthButton buttonState="getstarted" />
        </div>
      </div>
      <div>
        <p className="w-full text-center text-white">Crafted by</p>
        <h1 className="w-full text-center text-2xl text-white">RoyLopez.dev</h1>
      </div>
    </main>
  )
}
