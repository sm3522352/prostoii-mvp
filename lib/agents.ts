import { prisma } from './prisma'
export async function getAgents(){ return prisma.agent.findMany({ orderBy:{ id:'asc' } }) }
export async function getAgentBySlug(slug:string){ return prisma.agent.findUnique({ where:{ slug } }) }
