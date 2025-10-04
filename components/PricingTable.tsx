export default function PricingTable() {
  const plans = [
    { name:'Бесплатно', price:'0 ₽', features:['3 запуска в месяц','Доступ ко всем 12 агентам'], cta:'Попробовать', color:'accent' },
    { name:'Премиум', price:'299 ₽/мес', features:['Без ограничений','Приоритетная поддержка','Новые агенты раньше всех'], cta:'Оплатить', color:'primary' },
  ]
  return (
    <section className="py-16" id="pricing">
      <h2 className="text-3xl font-bold text-center mb-8">Тарифы</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((p,i)=>(
          <div key={i} className="bg-surface p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">{p.name}</h3>
            <p className="text-4xl font-bold mb-4">{p.price}</p>
            <ul className="flex-1 mb-4 space-y-2 text-sm">{p.features.map((f,idx)=>(<li key={idx} className="flex items-start"><span className="mr-2 text-accent">✓</span>{f}</li>))}</ul>
            <button className="px-6 py-3 rounded-lg text-white bg-accent hover:opacity-90 transition-colors">{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
