import Link from 'next/link'
export default function CTA() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Готовы попробовать ПростоИИ?</h2>
      <p className="mb-6 text-muted-foreground">Зарегистрируйтесь бесплатно и начните генерировать тексты прямо сейчас.</p>
      <Link href="/login" className="bg-accent text-white px-8 py-4 rounded-lg shadow-md hover:bg-orange-500 transition-colors">Начать</Link>
    </section>
  )
}
