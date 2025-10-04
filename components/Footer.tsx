import Link from 'next/link'
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 py-8 bg-surface text-center text-sm text-muted-foreground">
      <p>© {year} ПростоИИ. Все права защищены.</p>
      <nav className="mt-2 flex justify-center gap-4">
        <Link href="/privacy" className="hover:underline">Политика конфиденциальности</Link>
        <Link href="/terms" className="hover:underline">Условия</Link>
        <Link href="/support" className="hover:underline">Поддержка</Link>
      </nav>
    </footer>
  )
}
