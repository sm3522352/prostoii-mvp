export default function FAQ() {
  const faq = [
    { q:'Что такое агенты?', a:'Готовые шаблоны задач (жалоба, поздравление и т.д.), которые собирают минимум ввода и генерируют текст.' },
    { q:'Как сохранить результат?', a:'Скопируйте текст и вставьте его в нужное приложение.' },
    { q:'Сколько запусков бесплатно?', a:'В бесплатном тарифе — 3 запуска в месяц.' },
    { q:'Как работает оплата?', a:'В MVP оплата — заглушка (stub).' },
  ]
  return (
    <section className="py-16" id="faq">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faq.map((i,idx)=>(
          <details key={idx} className="bg-surface p-4 rounded-lg cursor-pointer border border-transparent hover:border-accent transition-colors">
            <summary className="font-medium text-lg">{i.q}</summary>
            <p className="mt-2 text-sm text-muted-foreground">{i.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
