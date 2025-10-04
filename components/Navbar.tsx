'use client'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
export default function Navbar() {
  const { data: session } = useSession()
  return (
    <header className="w-full py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-primary">ПростоИИ</Link>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li><Link href="/#agents" className="hover:underline">Агенты</Link></li>
          <li><Link href="/pricing" className="hover:underline">Цены</Link></li>
          <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          <li><Link href="/support" className="hover:underline">Поддержка</Link></li>
          {session ? (<>
            <li><Link href="/dashboard" className="hover:underline">Дашборд</Link></li>
            <li><button onClick={() => signOut()} className="text-accent hover:underline">Выйти</button></li>
          </>) : (
            <li><button onClick={() => signIn('email')} className="text-accent hover:underline">Войти</button></li>
          )}
        </ul>
      </nav>
    </header>
  )
}
