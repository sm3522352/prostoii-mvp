import Link from 'next/link'
import { FileText } from 'lucide-react'

export default function AgentCard({ agent }: { agent: { id:number, slug:string, name:string, description:string }}) {
  return (
    <Link href={`/agents/${agent.slug}`} className="bg-surface rounded-lg p-6 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col">
      <FileText className="h-8 w-8 text-accent mb-3" />
      <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{agent.description}</p>
      <span className="mt-4 text-accent font-medium">Запустить →</span>
    </Link>
  )
}
