import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'

export const metadata = { title: 'Тарифы | ПростоИИ', description: 'Выберите подходящий тариф.' }
export default function PricingPage() {
  return (<>
    <Navbar />
    <main className="container mx-auto px-4 py-16 flex-1"><PricingTable /></main>
    <Footer />
  </>)
}
