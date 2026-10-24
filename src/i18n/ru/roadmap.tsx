import type { RoadmapText } from '../types'
import type { RoadmapId } from '../structure'

export const roadmap: Record<RoadmapId, RoadmapText> = {
  'first-code': {
    plot: "Свой первый код я написал будучи студентом — маленький шаг для меня, но большой для будущего разработчика. Учебные программы писал на Delphi, Java, C# и C++.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'Алгоритмы' }, { name: 'Unix shell' }, { name: 'Структуры данных' }],
  },
  'first-website': {
    plot: <span>Меня увлёк веб. Я начал изучать PHP и SQL и написал свой первый сайт — он был посвящён ООП. Насколько мне известно, он существует до сих пор: <a className="App-link" href='https://project-pro.do.am/'>project-pro.do.am</a></span>,
    goalsLabel: 'Навыки',
    goals: [{ name: 'ООП' }, { name: 'PHP', note: 'базовый уровень' }, { name: 'SQL' }, { name: 'HTML' }],
  },
  'first-web-app': {
    plot: <span>Первое веб-приложение — сервис для студентов, где они могли практиковаться в веб-разработке. Поддерживать его я к сожалению больше не могу: <a className="App-link" href='http://webschool.pspu.ru/'>webschool.pspu.ru</a></span>,
    goalsLabel: 'Навыки',
    goals: [{ name: 'CSS' }, { name: 'JS' }, { name: 'Yii2' }, { name: 'Bootstrap' }, { name: 'Material design' }],
  },
  'first-job': {
    plot: "Далее я получил первую работу разработчиком в небольшой аутсорс-компании: писал приложения на PHP и JS. Постепенно сосредоточился на JS.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'ES5+' }, { name: 'GIT' }, { name: 'Lodash' }, { name: 'HTTP/S' }, { name: 'Nginx' }],
  },
  'asana-plugin': {
    plot: "На первой работе я сделал клиент-серверное приложение на React — надстройку поверх Asana, который считал KPI сотрудников.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'React.js' }, { name: 'Redis' }, { name: 'Webpack' }, { name: 'Jest и TDD' }, { name: 'WebSockets + Socket.io' }],
  },
  'product-company': {
    plot: "Появилась возможность перейти в продуктовую компанию. Я освоил React/Redux и разработал два крупных приложения: внутреннюю CRM-систему и кассовое ПО.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'Redux' }, { name: 'SASS/SCSS' }, { name: 'Redux-thunks' }, { name: 'Node.js' }, { name: 'Electron.js' }, { name: 'React-native', note: 'базовый уровень' }],
  },
  'moscow-startup': {
    plot: "Я отправился покорять Москву. Меня взяли в крупный стартап — образовательную платформу для детей. Работа была непростой: начинали вдвоём с тимлидом, а потом вместе собрали большую команду.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'Agile, Scrum' }, { name: 'Redux-saga' }, { name: 'JWT и SSO' }, { name: 'PostgreSQL' }, { name: 'Supervisor' }],
  },
  'edtech-apps': {
    plot: "Сделал два фронтенд-приложения: внутреннюю админ-платформу для организации учебного процесса и внешний личный кабинет ученика с информацией о курсе, ходом обучения, kanban-доской и групповым чатом.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'Puppeteer' }, { name: 'Firebase' }, { name: 'Google Cloud API' }, { name: 'Express.js' }],
  },
  'covid-marketplace': {
    plot: "Из-за COVID-19 в компании начались трудности, и команду расформировали. Я нашёл работу в крупном российском холдинге, где разрабатывал часть большого маркетплейса.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'React-hooks' }, { name: 'Selenium' }, { name: 'RabbitMQ' }],
  },
  'israel-freelance': {
    plot: "Тогда я получил образовательную визу в Израиле. К сожалению, виза не давала права работать, поэтому я перешёл на фриланс. С тех пор я сделал множество проектов и попробовал себя в роли ментора.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'Typescript' }, { name: 'Nest.js' }, { name: 'Docker' }, { name: 'Styled-components' }, { name: 'Английский B1' }],
  },
  'mentoring': {
    plot: "Я сосредоточился на менторстве. Сейчас практически все мои ученики работают в IT-компаниях. Я продолжаю помогать им развиваться и параллельно подтягиваю собственные навыки.",
    plotPosition: '-245px',
    goalsLabel: 'Навыки',
    goals: [{ name: 'Функциональное программирование' }, { name: 'Emotion.js' }, { name: 'Руководство командой' }, { name: 'Webdriver.IO' }],
  },
  'back-to-russia': {
    plot: "Сосредоточился на изучении английского. Продолжаю работать ментором. Ищу первую зарубежную работу, было несколько собеседований с DataArt и Meta.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'System Design' }, { name: 'MongoDB/mongoose' }, { name: 'Vite' }],
  },
  'crypto-switch': {
    plot: "Я много собеседовался, почти устроился в крупную международную компанию, но политический кризис не дал мне это сделать. Но я нашёл работу фулстек-разработчиком и начал изучать криптомир.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'Solidity' }, { name: 'CSS-modules' }, { name: 'Prisma ORM' }, { name: 'Английский B2' }],
  },
  'israeli-citizenship': {
    plot: "Начал работать в стартапе с небольшой распределённой командой. Позже я получил израильское гражданство и переехал в Нетанию. Приятный город с уникальной атмосферой 90-х.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'Mobx' }, { name: 'GitLab CI/CD' }, { name: 'Архитектура транзакционных систем' }, { name: 'PGPool' }, { name: 'Сеть ETH' }, { name: 'Vitest' }],
  },
  'play-to-earn': {
    plot: "Продолжил работать в том же стартапе, где разработал play-to-earn игру. Внедрил тестирование и добавил аварийные механизмы, защищающие платформы от взлома.",
    plotPosition: '-225px',
    goalsLabel: 'Навыки',
    goals: [{ name: 'Job Workers' }, { name: 'Telegraf' }, { name: 'Postfix' }, { name: 'Сеть Solana' }, { name: 'GitLab actions' }],
  },
  'trading-system': {
    plot: "В том же стартапе я разработал биржевую систему обмена токенами. Также вместе с местным сообществом участвовал в хакатоне Solana.",
    plotPosition: '-225px',
    goalsLabel: 'Навыки',
    goals: [{ name: 'victory.js' }, { name: 'tanstack/query (React-query)' }, { name: 'WalletConnect2' }, { name: 'Wagme.js' }, { name: 'Ant Design' }],
  },
  'monorepo-dnd': {
    plot: "Начал с нуля новый проект с монорепо-архитектурой и внутренней core-библиотекой. В это же время нашёл увлечение в качестве D&D, где нахожу баланс между работой и отдыхом.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'Монорепозиторий' }, { name: 'NX и Lerna.js' }, { name: 'Playwright' }, { name: 'Сеть TON' }, { name: 'Blueprint' }, { name: 'Tact' }],
  },
  'ton-company': {
    plot: "Присоединился к компании из экосистемы TON. Начал изучать новую блокчейн экосистему. Полностью переключился на эту работу: приостановил активную педагогическую деятельность, оставив лишь отдельные консультации.",
    // The RU text runs ~11 lines in the 230px card, so lift it clear of the timeline.
    plotPosition: '-300px',
    goalsLabel: 'Навыки',
    goals: [{ name: 'Jotai' }, { name: 'Python' }, { name: 'Strapi' }, { name: 'FunC' }, { name: 'Sentry' }],
  },
  'my-odyssey': {
    plot: "Вспомнил о своих ранних педагогических интересах. Принял участие в хакатоне Methis с проектом My Odyssey, где пользователь ставит цель, AI разбивает её на задачи, а сообщество может поддержать её донатами.",
    plotPosition: '-260px',
    goalsLabel: 'Навыки',
    goals: [{ name: 'Cursor' }, { name: 'Краудфандинг' }, { name: 'Продуктовые гипотезы' }],
  },
  'ai-mentoring': {
    plot: "Начал серьёзно изучать ИИ. Снова активно работаю ментором и помогаю бизнесу с внедрением ИИ, уже есть много успешных кейсов.",
    goalsLabel: 'Навыки',
    goals: [{ name: 'LLM' }, { name: 'AI-агенты' }, { name: 'Промпт-инжиниринг' }, { name: 'Внедрение ИИ в бизнес' }],
  },
}
