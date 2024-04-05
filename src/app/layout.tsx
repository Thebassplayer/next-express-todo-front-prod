import { Montserrat } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { cx } from './utils/styles'

const mon = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(mon.className, 'flex min-h-screen w-full flex-col')}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
