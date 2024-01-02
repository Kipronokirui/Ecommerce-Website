import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Navbar, MainNav  } from '@/components/common'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jumia Kenya | Online shopping for electronics, clothes, home furnitures',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className=''>
            <Navbar />
          </nav>
        </header>
        <main className='bg-gray-200 min-h-screen py-4 pt-16 px-12'>
          {children}
        </main>
        <footer className='bg-gray-700'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
