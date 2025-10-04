import AgentCard from './AgentCard'
export default function AgentList({ agents }: { agents: { id:number, slug:string, name:string, description:string }[] }) {
  return (
    <section className="py-16" id="agents">
      <h2 className="text-3xl font-bold text-center mb-8">Каталог агентов</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {agents.map((agent) => (<AgentCard key={agent.id} agent={agent} />))}
      </div>
    </section>
  )
}
