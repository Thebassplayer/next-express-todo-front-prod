'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import welcomeImage from '../../../public/images/landscapeOne.svg'
import welcomeImageTwo from '../../../public/images/welcomeImage.png'
import AddToListButton from '@/components/addToListButton'
import TodoList from '@/components/todolist'

export default function PrivatePage() {
  const { user } = useUser()
  let username = user?.given_name || user?.nickname || ''

  return (
    <>
      {/* Mobile */}
      <div className="flex w-full grow flex-col items-center justify-center pb-14 lg:hidden">
        <h1 className="mt-6 text-center text-2xl font-bold tracking-tight text-black">
          {`Welcome Onboard ${username}! 🚀`}
        </h1>
        <Image
          src={welcomeImage}
          alt="Welcome Image"
          className="mx-auto mt-4"
        />
        <div className="flex w-full grow flex-col">
          <div className="my-10 h-3/5 w-full overflow-y-scroll px-2">
            <TodoList />
          </div>
          <div className="flex justify-center">
            <AddToListButton />
          </div>
        </div>
      </div>
      {/* Descktop */}
      <div className="hidden h-full w-screen flex-row items-center pb-14 lg:flex">
        <div className="flex h-full w-1/2 flex-col items-center border-r-2 border-black">
          <h1 className="mb-16 mt-6 text-center text-4xl font-bold tracking-tight text-black">
            {`Welcome Onboard ${username}! 🚀`}
          </h1>
          <Image
            src={welcomeImageTwo}
            alt="Welcome Image"
            width={600}
            className="mt-4"
          />
        </div>
        <div className="flex h-full w-1/2 flex-col items-center justify-center">
          <TodoList />
          <div className="flex justify-center lg:mt-10">
            <AddToListButton />
          </div>
        </div>
      </div>
    </>
  )
}
