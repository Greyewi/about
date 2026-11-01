import type { CvText } from '../types'
import { numberOfYears } from '../structure'

// Russian numerals need the right noun form: «21 год», «3 года», «11 лет».
const years = (n: number): string => {
  const mod10 = n % 10, mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return `${n} год`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} года`
  return `${n} лет`
}
// After «более» the noun is genitive: «более 21 года», «более 11 лет».
const moreThanYears = (n: number): string =>
  `более ${n} ${n % 10 === 1 && n % 100 !== 11 ? 'года' : 'лет'}`

export const cv: CvText = {
  about: `Веб-разработчик: ${moreThanYears(numberOfYears('2015'))} в профессии, из них ${years(numberOfYears('2016'))} во фронтенде и ${years(numberOfYears('2019'))} в фулстек-разработке.
            Делал CRM, личные кабинеты, админ-панели, интеграции, чаты, децентрализованные приложения и проекты с ИИ.
            Работаю по Scrum и Kanban.
            Стараюсь автоматизировать всё, что повторяется.`,
  education: {
    name: 'Пермский государственный педагогический университет',
    description: '2010 – 2016, магистратура, информатика в образовании',
    gradeLevel: 'Диплом с отличием',
  },
  // Measured with Puppeteer at 1440px: the institution name (51 chars) and
  // degree line wrap to two lines each in the ~396px-wide RU sidebar, so
  // this block's natural content height is ~115px against the shared
  // (English-tuned) 91px default in structure.tsx — override it here
  // rather than bumping the shared constant, which would also affect the
  // English page.
  educationHeight: 120,
  skills: {
    'js':             { name: 'JS',                description: 'ES++' },
    'react':          { name: 'React',             description: 'Hooks, SSR, Concurrent mode+' },
    'state-managers': { name: 'Стейт-менеджеры',   description: 'Redux и toolkit, Context, React/query' },
    'styles':         { name: 'Стили',             description: 'CSS-modules, MUI, Open-Props, SASS, Emotion' },
    'typescript':     { name: 'TypeScript',        description: 'V5' },
    'nodejs':         { name: 'Node JS',           description: 'Express, Nest.js, Prisma ORM' },
    'system-design':  { name: 'Системный дизайн',  description: 'SOLID, YAGNI, паттерны (ООП и ФП)' },
    'qa':             { name: 'QA-инженерия',      description: 'Jest, RTL, Playwright, Vitest' },
    'databases':      { name: 'Базы данных',       description: 'SQL, Postgres, MongoDB, Redis, *MQ' },
    'architecture':   { name: 'Архитектура',       description: 'Workspaces, монорепозиторий, NX, Lerna' },
    'devops':         { name: 'DevOps',            description: 'Nginx, Docker, Bash, CI/CD' },
    'english':        { name: 'Английский',        description: 'B2+' },
  },
  experience: {
    'tonstakers': {
      jobName: 'Web3 фулстек-инженер (TS/JS)',
      companyName: 'Tonstakers',
      description: <ul>
        <li>Вносил вклад в развитие основных проектов компании, в частности оптимизировал производительность и проводил рефакторинг кодовой базы.</li>
        <li>С помощью ИИ сверстал pixel-perfect лендинг строго по макету.</li>
        <li>Подключил к продукту сторонние Web3-сервисы.</li>
      </ul>,
    },
    'play-to-earn': {
      jobName: 'Ведущий фулстек Web3-разработчик',
      companyName: 'Play to Earn LTD',
      description: <ul>
        <li>Вёл разработку: планировал спринты, распределял задачи и проводил релизы.</li>
        <li>Настроил и поддерживал GitLab CI для деплоя и тестов.</li>
        <li>Разработал систему торговых ботов на блокчейне Solana.</li>
        <li>Провёл рефакторинг легаси-кода.</li>
        <li>Внедрил вход через WalletConnect v2 и написал парсер блоков Ethereum на web3 и веб-сокетах.</li>
        <li>Провёл аудит системы и настроил отправку его результатов в Telegram.</li>
        <li>Спроектировал и разработал внутренний NFT-маркетплейс, страницу статистики и систему крафта.</li>
      </ul>,
    },
    'mentor': {
      jobName: 'IT-ментор',
      companyName: 'Самозанятый',
      description: <ul>
        <li>Обучаю веб-разработке с нуля и готовлю к техническим собеседованиям разработчиков любого уровня.</li>
        <li>Мои ученики работают в Яндексе, Сбере, Т-Банке, Ozon, Wildberries, Uber и Disney.</li>
        <li>Консультирую команды: провожу аудит проектов и code review, помогаю улучшить архитектуру.</li>
        <li>Провожу занятия по тестированию веб-интерфейсов и автоматизации тестов.</li>
        <li>Обучаю Web3: кошельки, транзакции и смарт-контракты на ETH и Solana.</li>
        <li>Помогаю внедрять ИИ: AI-агенты, промптинг, вайб-кодинг и локальные модели.</li>
      </ul>,
    },
    'merlion': {
      jobName: 'Фулстек-разработчик JS, PHP',
      companyName: 'Merlion',
      description: <ul>
        <li>Разработал фронтенд big-data-сервиса для федеральных оптовых и B2B-магазинов.</li>
        <li>Перевёл классовые React-компоненты на хуки.</li>
        <li>Написал автоматизированные UI-, E2E- и регрессионные тесты.</li>
        <li>Работал в команде по Scrum.</li>
      </ul>,
    },
    'codabra': {
      jobName: 'Разработчик JS, React и Node.js',
      companyName: 'Codabra',
      description: <ul>
        <li>
          Создал внутреннюю админ-платформу для организации учебного процесса:
          CRUD с большими данными, расписание в стиле Google Calendar и калькулятор зарплат.
        </li>
        <li>
          Создал внешний личный кабинет ученика с информацией о курсе, ходом обучения, kanban-доской и групповым чатом.
        </li>
        <li>Сделал интерактивную витрину расписания: https://codabra.org/schedule/msk</li>
        <li>Интегрировал формы сайта с amoCRM.</li>
        <li>Сделал модуль для Slack, который отслеживает активность пользователей и лидов.</li>
      </ul>,
    },
    'initgroup': {
      jobName: 'Разработчик JS, React',
      companyName: 'InitGroup, кассовые решения',
      description: <ul>
        <li>Разработал внутреннюю CRM-систему.</li>
        <li>Разработал кассовое ПО за две итерации.</li>
      </ul>,
    },
    'ckdigital': {
      jobName: 'Разработчик JS, Yii, PHP, React',
      companyName: 'CkDigital',
      description: <ul>
        <li>Разрабатывал сайты и сервисы.</li>
        <li>Делал аутсорс-проекты среднего размера: сервис безопасного обмена файлами и несколько интернет-магазинов.</li>
        <li>Также сделал крупный плагин для Asana, который считает KPI сотрудников.</li>
      </ul>,
    },
    'pspu': {
      jobName: 'Инженер-техник',
      companyName: 'Пермский государственный педагогический университет',
      description: <ul>
        <li>Администрировал сервисы университета и поддерживал компьютерные классы.</li>
        <li>Свободное время тратил на подработку в IT-фрилансе.</li>
        <li>Делал вёрстку и небольшие приложения на PHP и Yii2.</li>
      </ul>,
    },
  },
}
