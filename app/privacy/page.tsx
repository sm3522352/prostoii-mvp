import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = { title: 'Политика конфиденциальности | ПростоИИ', description: 'Как мы обрабатываем и защищаем ваши данные.' }
export default function PrivacyPage() {
  return (<>
    <Navbar />
    <main className="container mx-auto px-4 py-16 flex-1 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Политика конфиденциальности</h1>
      <p className="text-sm text-muted-foreground">В рамках MVP проект использует минимальный набор персональных данных: ваш email и введённые вами тексты.</p>
    </main>
    <Footer />
  </>)
}
