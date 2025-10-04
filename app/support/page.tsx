import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = { title: 'Поддержка | ПростоИИ', description: 'Свяжитесь с нашей службой поддержки.' }
export default function SupportPage() {
  return (<>
    <Navbar />
    <main className="container mx-auto px-4 py-16 flex-1 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Поддержка</h1>
      <p className="text-sm text-muted-foreground">Пишите: support@example.com</p>
    </main>
    <Footer />
  </>)
}
