import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = { title: 'Условия использования | ПростоИИ', description: 'Правила пользования сервисом.' }
export default function TermsPage() {
  return (<>
    <Navbar />
    <main className="container mx-auto px-4 py-16 flex-1 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Условия использования</h1>
      <p className="text-sm text-muted-foreground">Сервис предоставляется «как есть» в ознакомительных целях.</p>
    </main>
    <Footer />
  </>)
}
