'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import ThumbNail from './thumbNail'

export default function Navbar() {
  const { user, isLoading } = useUser()

  const picture = user?.picture || '/public/images/default_user_image.png'

  if (!user || isLoading) {
    return (
      <nav className="flex h-24 w-full flex-row items-center justify-between bg-transparent px-8">
        <div className="size-12 animate-pulse rounded-full bg-slate-400"></div>
        <div className="h-8 w-24 animate-pulse rounded-sm bg-slate-400"></div>
      </nav>
    )
  }

  if (user) {
    return (
      <nav className="flex h-24 w-full flex-row items-center justify-between bg-transparent px-8 py-2">
        <ThumbNail image={picture} />
        <a
          href={'/api/auth/logout'}
          className=" rounded-md px-20 py-2 text-xl font-bold uppercase text-black transition-transform  delay-150 duration-300 ease-in-out hover:scale-110 active:scale-90"
        >
          Logout
        </a>
      </nav>
    )
  }
}
