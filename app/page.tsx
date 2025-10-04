import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AgentList from '@/components/AgentList'
import HowItWorks from '@/components/HowItWorks'
import PricingTable from '@/components/PricingTable'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { getAgents } from '@/lib/agents'

export default async function HomePage() {
  const agents = await getAgents()
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4">
        <AgentList agents={agents} />
        <HowItWorks />
        <PricingTable />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
