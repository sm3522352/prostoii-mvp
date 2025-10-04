import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: 'Неавторизован' }, { status: 401 })

  const { agentId, input } = await req.json()
  if (!agentId || !input) return NextResponse.json({ error: 'Некорректные данные' }, { status: 400 })

  const user = await prisma.user.findUnique({ where: { email: session.user.email } })
  const agent = await prisma.agent.findUnique({ where: { id: agentId } })
  if (!user || !agent) return NextResponse.json({ error: 'Не найдено' }, { status: 404 })

  const output = agent.exampleOutput
  const run = await prisma.run.create({ data: { userId: user.id, agentId: agent.id, input: JSON.stringify(input), output } })

  return NextResponse.json(run)
}
