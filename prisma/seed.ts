import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.run.deleteMany()
  await prisma.agent.deleteMany()
  await prisma.profile.deleteMany()
  await prisma.user.deleteMany()

  const user = await prisma.user.create({ data: { email: 'test@example.com', name: 'Test User' } })

  const agentsData = [
    { slug:'complaint', name:'Жалоба', description:'Составление корректной жалобы на оказанные услуги.', metaTitle:'Шаблон жалобы', metaDescription:'Создайте вежливую и аргументированную жалобу.', parameters:[{name:'subject',label:'Тема обращения',placeholder:'Например, доставка',type:'string'},{name:'details',label:'Подробности',placeholder:'Опишите проблему',type:'string'}], exampleOutput:'Уважаемые представители службы,\n\nЯ пишу, чтобы выразить своё недовольство по поводу доставки...'},
    { slug:'advertisement', name:'Объявление', description:'Краткое и ёмкое объявление для продажи или покупки.', metaTitle:'Создание объявления', metaDescription:'Напишите эффективное объявление.', parameters:[{name:'title',label:'Заголовок',placeholder:'Что продаёте?',type:'string'},{name:'description',label:'Описание',placeholder:'Кратко опишите товар',type:'string'},{name:'contact',label:'Контакт',placeholder:'Телефон или email',type:'string'}], exampleOutput:'Продаётся велосипед в отличном состоянии...'},
    { slug:'congratulation', name:'Поздравление', description:'Тёплое поздравление с любым праздником.', metaTitle:'Поздравление', metaDescription:'Составьте искреннее поздравление.', parameters:[{name:'occasion',label:'Повод',placeholder:'День рождения...',type:'string'},{name:'recipient',label:'Кому',placeholder:'Имя',type:'string'},{name:'message',label:'Сообщение',placeholder:'Что хотите сказать',type:'string'}], exampleOutput:'Дорогая Анна! Поздравляю...'},
    { slug:'study-help', name:'Помощь с учёбой', description:'Помощь в объяснении учебного материала.', metaTitle:'Помощь с учёбой', metaDescription:'Понятное объяснение темы.', parameters:[{name:'subject',label:'Предмет',placeholder:'Математика',type:'string'},{name:'question',label:'Вопрос',placeholder:'Что непонятно?',type:'string'}], exampleOutput:'В алгебре квадратное уравнение...'},
    { slug:'contract-explainer', name:'Объяснение договора', description:'Понятное объяснение юридического договора.', metaTitle:'Объяснение договора', metaDescription:'Разберите документ простыми словами.', parameters:[{name:'contract_text',label:'Текст договора',placeholder:'Вставьте текст',type:'string'}], exampleOutput:'В представленной оферте указано...'},
    { slug:'social-post', name:'Пост в соцсетях', description:'Создание поста для социальных сетей.', metaTitle:'Пост для соцсетей', metaDescription:'Engaging контент.', parameters:[{name:'platform',label:'Платформа',placeholder:'Instagram, VK...',type:'string'},{name:'topic',label:'Тема',placeholder:'О чём пост?',type:'string'}], exampleOutput:'Сегодня мы делимся 5 советами...'},
    { slug:'resume', name:'Резюме', description:'Составление структурированного резюме.', metaTitle:'Создание резюме', metaDescription:'Профессиональное резюме быстро.', parameters:[{name:'job_title',label:'Должность',placeholder:'Разработчик',type:'string'},{name:'experience',label:'Опыт',placeholder:'Кратко',type:'string'}], exampleOutput:'Иван Иванов — Разработчик...'},
    { slug:'support-letter', name:'Письмо в поддержку', description:'Вежливое письмо в службу поддержки.', metaTitle:'Письмо в поддержку', metaDescription:'Понятное обращение.', parameters:[{name:'company',label:'Компания',placeholder:'Название',type:'string'},{name:'issue',label:'Проблема',placeholder:'Суть вопроса',type:'string'}], exampleOutput:'Здравствуйте, команда...'},
    { slug:'translation', name:'Перевод текста', description:'Перевод текста на выбранный язык.', metaTitle:'Перевод текста', metaDescription:'Быстрый перевод.', parameters:[{name:'text',label:'Текст',placeholder:'Введите текст',type:'string'},{name:'language',label:'Язык',placeholder:'На какой язык?',type:'string'}], exampleOutput:'Hello → Привет'},
    { slug:'checklist', name:'Чек‑лист', description:'Создание подробного чек‑листа.', metaTitle:'Создание чек‑листа', metaDescription:'План действий по пунктам.', parameters:[{name:'goal',label:'Цель',placeholder:'Что нужно сделать?',type:'string'}], exampleOutput:'Чек‑лист: 1) ...'},
    { slug:'proposal', name:'Коммерческое предложение', description:'Коммерческое предложение.', metaTitle:'Коммерческое предложение', metaDescription:'Выгодное предложение.', parameters:[{name:'product',label:'Продукт',placeholder:'Что предлагаете?',type:'string'},{name:'audience',label:'Аудитория',placeholder:'Кому?',type:'string'}], exampleOutput:'Уважаемый клиент! Представляем...'},
    { slug:'review-analysis', name:'Анализ отзыва', description:'Анализ и выводы из отзыва клиента.', metaTitle:'Анализ отзыва', metaDescription:'Полезные инсайты.', parameters:[{name:'review',label:'Отзыв',placeholder:'Введите отзыв',type:'string'}], exampleOutput:'Позитив о сервисе, негатив о сроках доставки...'}
  ]

  const createdAgents = []
  for (const a of agentsData) {
    createdAgents.push(await prisma.agent.create({ data: a as any }))
  }

  await prisma.run.create({ data: { userId: user.id, agentId: createdAgents[0].id, input: { subject:'Доставка', details:'Повреждение' }, output: createdAgents[0].exampleOutput } })
  await prisma.run.create({ data: { userId: user.id, agentId: createdAgents[2].id, input: { occasion:'ДР', recipient:'Сергей', message:'Удачи!' }, output: createdAgents[2].exampleOutput } })
  await prisma.run.create({ data: { userId: user.id, agentId: createdAgents[4].id, input: { contract_text:'...' }, output: createdAgents[4].exampleOutput } })

  console.log('DB has been seeded. 🌱')
}

main().catch(e=>{ console.error(e); process.exit(1) }).finally(async()=>{ await prisma.$disconnect() })
