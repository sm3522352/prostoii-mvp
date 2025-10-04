import AnimatedBackground from './AnimatedBackground'
import Link from 'next/link'
export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 px-4">
      <AnimatedBackground />
      <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">ПростоИИ — ваши персональные помощники для любых задач</h1>
      <p className="text-lg mb-8 max-w-2xl">Наши агенты помогут составить письмо, объявление, поздравление, объяснить договор и многое другое.</p>
      <Link href="/login" className="bg-accent text-white rounded-lg px-8 py-4 text-lg shadow-md hover:bg-orange-500 transition-colors">Попробовать</Link>
    </section>
  )
}
