import '@/app/globals.css'
import { ReactNode } from 'react'
import { Manrope, Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = { title: 'ПростоИИ', description: 'Просто, понятно, безопасно' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-bg text-text">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
