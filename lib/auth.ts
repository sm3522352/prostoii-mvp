import { PrismaAdapter } from '@next-auth/prisma-adapter'
import type { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [EmailProvider({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: { user: process.env.EMAIL_SERVER_USER, pass: process.env.EMAIL_SERVER_PASSWORD },
    },
    from: process.env.EMAIL_FROM,
    maxAge: 24*60*60,
    async sendVerificationRequest({ identifier, url }) {
      const transport = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: { user: process.env.EMAIL_SERVER_USER, pass: process.env.EMAIL_SERVER_PASSWORD },
      })
      await transport.sendMail({ to: identifier, from: process.env.EMAIL_FROM, subject: 'Вход в ПростоИИ',
        text: `Чтобы войти, перейдите по ссылке: ${url}`,
        html: `<p>Чтобы войти, перейдите по ссылке: <a href="${url}">${url}</a></p>`,
      })
    },
  })],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  callbacks: { async session({ session, token }) { if (session?.user) (session.user as any).id = token.sub; return session } },
}
