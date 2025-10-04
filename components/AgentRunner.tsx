'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

type Param = { name:string, label:string, placeholder:string, type:string }
export default function AgentRunner({ agent }: { agent: { id:number, slug:string, name:string, parameters:Param[], exampleOutput:string }}) {
  const shape: Record<string, any> = {}
  agent.parameters.forEach(p => { shape[p.name] = z.string().min(1, { message: 'Обязательное поле' }) })
  const schema = z.object(shape)
  type FormValues = z.infer<typeof schema>
  const { register, handleSubmit, formState:{ errors } } = useForm<FormValues>({ resolver: zodResolver(schema) })
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const onSubmit = async (values: FormValues) => {
    setLoading(true); setResult(null)
    const res = await fetch('/api/runs', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ agentId: agent.id, input: values }) })
    const data = await res.json(); setLoading(false); setResult(data.output)
  }
  return (<div>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {agent.parameters.map(p => (
        <div key={p.name} className="flex flex-col">
          <label htmlFor={p.name} className="mb-1 font-medium">{p.label}</label>
          <input id={p.name} {...register(p.name as any)} type="text" placeholder={p.placeholder} className="bg-surface border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-accent focus:border-accent"/>
          {errors[p.name] && <span className="text-red-600 text-sm mt-1">{(errors as any)[p.name]?.message}</span>}
        </div>
      ))}
      <button type="submit" disabled={loading} className="bg-accent text-white px-6 py-3 rounded-lg disabled:opacity-50">{loading ? 'Запуск...' : 'Запустить'}</button>
    </form>
    {result && (<div className="mt-6 p-4 bg-surface rounded-lg border border-gray-200 whitespace-pre-wrap"><h3 className="text-lg font-semibold mb-2">Результат</h3><p>{result}</p></div>)}
  </div>)
}
