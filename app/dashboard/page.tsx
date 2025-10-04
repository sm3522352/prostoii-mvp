import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AgentList from '@/components/AgentList'
import { getAgents } from '@/lib/agents'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) redirect('/login')
  const user = await prisma.user.findUnique({ where: { email: session!.user!.email! } })
  const runs = await prisma.run.findMany({ where: { userId: user?.id }, include: { agent: true }, orderBy: { createdAt: 'desc' } })
  const agents = await getAgents()
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-4">Добро пожаловать, {session!.user!.email}</h1>
        <p className="mb-6">Выберите агента и заполните форму для запуска:</p>
        <AgentList agents={agents} />
        <h2 className="text-2xl font-semibold mt-12 mb-4">История запусков</h2>
        {runs.length === 0 ? (
          <p className="text-sm text-muted-foreground">История пока пуста.</p>
        ) : (
          <div className="space-y-4">
            {runs.map((run) => (
              <div key={run.id} className="bg-surface p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-medium">{run.agent.name} — {new Date(run.createdAt).toLocaleString('ru-RU')}</p>
                <p className="mt-2 whitespace-pre-wrap text-sm">{run.output}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
