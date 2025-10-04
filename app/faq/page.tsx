import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export const metadata = { title: 'Частые вопросы | ПростоИИ', description: 'Ответы на популярные вопросы.' }
export default function FAQPage() {
  return (<>
    <Navbar />
    <main className="container mx-auto px-4 py-16 flex-1"><FAQ /></main>
    <Footer />
  </>)
}
