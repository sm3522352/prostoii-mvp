import { getAgentBySlug } from '@/lib/agents'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AgentRunner from '@/components/AgentRunner'
import { notFound } from 'next/navigation'

export default async function AgentPage({ params }: { params: { slug: string } }) {
  const agent = await getAgentBySlug(params.slug)
  if (!agent) notFound()
  return (<>
    <Navbar />
    <main className="container mx-auto px-4 py-8 flex-1">
      <h1 className="text-3xl font-bold mb-4">{agent!.name}</h1>
      <p className="mb-6 text-muted-foreground max-w-2xl">{agent!.description}</p>
      <AgentRunner agent={{ id: agent!.id, slug: agent!.slug, name: agent!.name, parameters: agent!.parameters as any, exampleOutput: agent!.exampleOutput }} />
    </main>
    <Footer />
  </>)
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const agent = await getAgentBySlug(params.slug)
  if (!agent) return {}
  return {
    title: agent.metaTitle || agent.name,
    description: agent.metaDescription || agent.description,
    openGraph: { title: agent.metaTitle || agent.name, description: agent.metaDescription || agent.description, url: `/agents/${agent.slug}` },
  }
}
