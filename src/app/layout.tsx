import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pinterest Clone',
  description: 'pinterest clone with firebase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.svg" type="image/svg" />
      <body className={inter.className}>
        <Header />
        <div className='max-w-[1280px] w-full mt-16 '>
          {children}
        </div>
      </body>
    </html>
  )
}
