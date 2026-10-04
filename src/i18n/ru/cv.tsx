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
  about: `Веб-разработчик, ориентированный на результат: ${moreThanYears(numberOfYears('2015'))} в профессии, из них ${years(numberOfYears('2016'))} во фронтенде и ${years(numberOfYears('2019'))} в фулстек-разработке.
            За это время я завершил множество крупных проектов: CRM, личные кабинеты, административные сервисы, интеграционные системы, чаты с несколькими комнатами и многое другое.
            Хочу работать в продуктовой команде. Люблю работать по гибким методологиям: Agile, Scrum, Kanban.
            Предпочитаю автоматизировать всё, что можно, и с интересом берусь за сложные задачи.`,
  education: {
    name: 'Пермский государственный педагогический университет',
    description: '2010 – 2016, магистратура, информатика в образовании',
    gradeLevel: 'Средний балл: 9,4',
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
    'typescript':     { name: 'Typescript',        description: 'V5' },
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
        <li>Поддерживал основное стейкинг-приложение, повысил производительность и модернизировал архитектуру.</li>
        <li>С помощью ИИ сверстал pixel-perfect лендинг строго по макету.</li>
        <li>Внедрил интеграции со сторонними Web3-сервисами, расширив функциональность продукта.</li>
      </ul>,
    },
    'play-to-earn': {
      jobName: 'Web3 фулстек-разработчик (TS/JS)',
      companyName: 'Play to Earn',
      description: <ul>
        <li>Участвовал в крупном play-to-earn-криптопроекте, внося вклад в его развитие и успех.</li>
        <li>Провёл рефакторинг легаси-кода, повысив эффективность и поддерживаемость.</li>
        <li>Внедрил аутентификацию Walletconnect v2 и разработал парсер блоков Ethereum на web3 и веб-сокетах, улучшив подключение к сети и обработку данных.</li>
        <li>Провёл комплексный аудит системы и подключил отчётность в Telegram.</li>
        <li>Спроектировал и разработал внутренний NFT-маркетплейс, страницу статистики и систему крафта.</li>
        <li>Настроил и поддерживал GitLab CI для бесперебойного деплоя и тестирования.</li>
      </ul>,
    },
    'mentor': {
      jobName: 'IT-ментор',
      companyName: 'Самозанятый',
      description: <ul>
        <li>Работал с разработчиками: делился знаниями и опытом, помогал решать сложные задачи в жёсткие сроки.</li>
        <li>Взаимодействовал с крупными клиентами, оптимизируя архитектуру и производительность под их задачи.</li>
        <li>Периодически брал фриланс-проекты: разработка MVP и исправление ошибок в функциональности.</li>
      </ul>,
    },
    'merlion': {
      jobName: 'Фулстек-разработчик JS, PHP',
      companyName: 'Merlion',
      description: <ul>
        <li>Разработал фронтенд big-data-сервиса для федеральных оптовых и B2B-магазинов.</li>
        <li>Перевёл множество устаревших классовых React-компонентов на хуки, повысив производительность и поддерживаемость.</li>
        <li>Написал автоматизированные UI-, E2E- и регрессионные тесты.</li>
        <li>Активно участвовал в Scrum-процессах команды.</li>
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
        <li>Интерактивная витрина https://codabra.org/schedule/msk</li>
        <li>Система интеграции форм с amoCRM</li>
        <li>Модуль интеграции со Slack для отслеживания активности пользователей и лидов</li>
      </ul>,
    },
    'initgroup': {
      jobName: 'Разработчик JS, React',
      companyName: 'InitGroup, кассовые решения',
      description: <ul>
        <li>Разработал внутреннюю CRM-систему</li>
        <li>Разработал кассовое ПО за две итерации.</li>
      </ul>,
    },
    'ckdigital': {
      jobName: 'Разработчик JS, Yii, PHP, React',
      companyName: 'CkDigital',
      description: <ul>
        <li>Разрабатывал различные сайты и сервисы</li>
        <li>Было много аутсорс-проектов среднего размера: сервис безопасного обмена файлами и несколько интернет-магазинов</li>
        <li>Также сделал крупный плагин для Asana, который считает KPI сотрудников.</li>
      </ul>,
    },
    'pspu': {
      jobName: 'Инженер-техник',
      companyName: 'Пермский государственный педагогический университет',
      description: <ul>
        <li>Администрирование различных сервисов. Поддержка компьютерных классов.</li>
        <li>На этой работе было много свободного времени, которое я тратил на подработку в IT-фрилансе</li>
        <li>Делал вёрстку и небольшие приложения на PHP и Yii2</li>
      </ul>,
    },
  },
}
