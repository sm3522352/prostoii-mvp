import { prisma } from './prisma'

type AgentWithParameters<T> = T & { parameters: unknown }

function parseAgent<T extends { parameters: unknown }>(agent: T): AgentWithParameters<T> {
  const parameters = typeof agent.parameters === 'string' ? JSON.parse(agent.parameters) : agent.parameters
  return { ...agent, parameters }
}

export async function getAgents() {
  const list = await prisma.agent.findMany({ orderBy: { id: 'asc' } })
  return list.map(parseAgent)
}

export async function getAgentBySlug(slug: string) {
  const agent = await prisma.agent.findUnique({ where: { slug } })
  return agent ? parseAgent(agent) : null
}
