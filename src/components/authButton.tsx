import { cx } from '@/app/utils/styles'
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import Spinner from './spinner'

type AuthButtonProps = {
  buttonState?: 'login' | 'logout' | 'getstarted'
}

const AuthButton = ({ buttonState }: AuthButtonProps) => {
  const { user, isLoading, error } = useUser()

  const linkClasses =
    'rounded-md border-2 border-black bg-black px-20 py-2 font-bold transition-colors hover:border-2 hover:border-black text-white'

  if (isLoading) {
    return <Spinner />
  }

  if (buttonState === 'login') {
    return (
      <Link className={cx(linkClasses)} href="/api/auth/login">
        Login
      </Link>
    )
  }

  if (buttonState === 'logout') {
    return (
      <Link className={cx(linkClasses)} href="/api/auth/logout">
        Logout
      </Link>
    )
  }

  if (buttonState === 'getstarted') {
    return (
      <Link className={cx(linkClasses)} href="/api/auth/login">
        Get Started
      </Link>
    )
  }

  if (user) {
    return (
      <Link className={cx(linkClasses)} href="/api/auth/logout">
        Logout
      </Link>
    )
  }

  // Default behavior: Show login button if user is not logged in
  return (
    <Link className={cx(linkClasses)} href="/api/auth/login">
      Login
    </Link>
  )
}

export default AuthButton
