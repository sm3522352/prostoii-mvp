'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { signIn } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

const schema = z.object({ email: z.string().min(1).email('Введите корректный email') })
type FormValues = z.infer<typeof schema>

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) })
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = async (values: FormValues) => {
    await signIn('email', { email: values.email, callbackUrl: '/dashboard' })
    setSubmitted(true)
  }
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-md">
        <h1 className="text-3xl font-bold mb-6">Вход по email</h1>
        {submitted ? (
          <p className="bg-surface p-4 rounded-lg text-sm">Ссылка для входа отправлена на вашу почту.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">Email</label>
              <input id="email" type="email" {...register('email')} placeholder="you@example.com" className="bg-surface border border-gray-300 rounded-lg p-2"/>
              {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email.message as string}</span>}
            </div>
            <button type="submit" className="bg-accent text-white px-6 py-3 rounded-lg">Отправить ссылку</button>
          </form>
        )}
      </main>
      <Footer />
    </>
  )
}
