export default function HowItWorks() {
  const steps = [
    { title: 'Выберите агента', description: 'Откройте каталог и выберите подходящий шаблон.' },
    { title: 'Заполните форму', description: 'Укажите несколько параметров — это займёт пару минут.' },
    { title: 'Получите готовый текст', description: 'Нажмите «Запустить» и скопируйте результат.' },
  ]
  return (
    <section className="py-16" id="how-it-works">
      <h2 className="text-3xl font-bold text-center mb-8">Как это работает</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s,i)=>(
          <div key={i} className="bg-surface p-6 rounded-lg shadow-sm text-center">
            <span className="text-accent text-4xl font-bold mb-4 block">{i+1}</span>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
