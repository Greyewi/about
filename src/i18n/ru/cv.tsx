import type { CvText } from '../types'
import { numberOfYears } from '../structure'

export const cv: CvText = {
  about: `Веб-разработчик, ориентированный на результат: более ${numberOfYears('2015')} лет в профессии, из них ${numberOfYears('2016')} лет во фронтенде и ${numberOfYears('2019')} лет в фулстек-разработке.
            За это время я завершил множество крупных проектов: CRM, личные кабинеты, административные сервисы, интеграционные системы, многокомнатные чаты и другое.
            Хочу работать в продуктовой команде. Уверенно работаю по гибким методологиям — agile со scrum и kanban.
            Предпочитаю автоматизировать всё, что можно, и с интересом берусь за сложные задачи.`,
  education: {
    name: 'Пермский государственный педагогический университет',
    description: '2010 – 2016, магистратура, информатика в образовании',
    gradeLevel: 'Средний балл: 9.4',
  },
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
      jobName: 'TS/JS Web3 фулстек-инженер',
      companyName: 'Tonstakers',
      description: <ul>
        <li>Поддерживал основное стейкинг-приложение, повысил производительность и модернизировал архитектуру.</li>
        <li>Совместно с AI реализовал pixel-perfect лендинг в точном соответствии с макетом.</li>
        <li>Внедрил интеграции со сторонними Web3-сервисами, расширив функциональность продукта.</li>
      </ul>,
    },
    'play-to-earn': {
      jobName: 'TS/JS Web3 фулстек-разработчик',
      companyName: 'Play to Earn',
      description: <ul>
        <li>Участвовал в крупном play-to-earn криптопроекте, внося вклад в его развитие и успех.</li>
        <li>Провёл рефакторинг легаси-кодовой базы, повысив эффективность и поддерживаемость.</li>
        <li>Внедрил аутентификацию Walletconnect v2 и разработал парсер блоков Ethereum на web3 и веб-сокетах, улучшив связность и обработку данных.</li>
        <li>Провёл комплексный аудит системы и подключил отчётность в Telegram.</li>
        <li>Спроектировал и разработал внутренний NFT-маркетплейс, страницу статистики и систему крафта.</li>
        <li>Настроил и вёл GitLab CI для бесперебойного деплоя и тестирования.</li>
      </ul>,
    },
    'mentor': {
      jobName: 'IT-наставник',
      companyName: 'Самозанятый',
      description: <ul>
        <li>Работал с разными разработчиками, делясь знаниями и опытом для решения сложных задач в жёсткие сроки.</li>
        <li>Взаимодействовал с крупными клиентами, оптимизируя архитектуру и производительность под их задачи.</li>
        <li>Периодически брал фриланс-проекты: разработка MVP и устранение функциональных проблем.</li>
      </ul>,
    },
    'merlion': {
      jobName: 'JS, PHP фулстек-разработчик',
      companyName: 'Merlion',
      description: <ul>
        <li>Разработал фронтенд big-data сервиса для федеральных оптовых и B2B-магазинов.</li>
        <li>Перевёл множество легаси классовых React-компонентов на хуки, повысив производительность и поддерживаемость.</li>
        <li>Написал автоматические UI-, end-to-end- и регрессионные тесты.</li>
        <li>Активно участвовал в Scrum-процессах команды.</li>
      </ul>,
    },
    'codabra': {
      jobName: 'JS, React и Node.js разработчик',
      companyName: 'Codabra',
      description: <ul>
        <li>
          Создал внутреннюю админ-платформу для организации учебного процесса:
          CRUD с большими данными, расписание в стиле Google Calendar и калькулятор зарплат.
        </li>
        <li>
          Создал внешний личный кабинет ученика с информацией о курсе, рабочим процессом, kanban-доской и групповым чатом.
        </li>
        <li>Интерактивная витрина https://codabra.org/schedule/msk</li>
        <li>Система интеграции форм с AMO CRM</li>
        <li>Модуль интеграции Slack с активностью пользователей и лидов</li>
      </ul>,
    },
    'initgroup': {
      jobName: 'JS, React разработчик',
      companyName: 'InitGroup, кассовые решения',
      description: <ul>
        <li>Разработал внутреннюю CRM-систему</li>
        <li>Разработал кассовое ПО в двух итерациях.</li>
      </ul>,
    },
    'ckdigital': {
      jobName: 'JS, Yii, PHP, React разработчик',
      companyName: 'CkDigital',
      description: <ul>
        <li>Разрабатывал различные сайты и сервисы</li>
        <li>Было много средних аутсорс-проектов: сервис безопасного обмена файлами и несколько магазинов</li>
        <li>Также сделал крупное дополнение для Asana, которое считает KPI сотрудников.</li>
      </ul>,
    },
    'pspu': {
      jobName: 'Инженер-техник',
      companyName: 'Пермский государственный педагогический университет',
      description: <ul>
        <li>Администрирование различных сервисов. Поддержка компьютерных классов.</li>
        <li>На этой работе было много свободного времени, которое я тратил на подработку IT-фрилансом</li>
        <li>Делал вёрстку и небольшие приложения на PHP и Yii2</li>
      </ul>,
    },
  },
}
