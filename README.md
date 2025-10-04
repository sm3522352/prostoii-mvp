# ПростоИИ — готовый MVP

Этот репозиторий содержит исходный код MVP для сервиса «ПростоИИ». Проект построен на **Next.js 14** с использованием **TypeScript** и App Router.

## Быстрый старт

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma migrate deploy
npx ts-node prisma/seed.ts
npm run dev
```

Адрес: http://localhost:3000
