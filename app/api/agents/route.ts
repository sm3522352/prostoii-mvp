import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET() {
  const agents = await prisma.agent.findMany({ orderBy: { id: 'asc' } })
  return NextResponse.json(agents)
}
