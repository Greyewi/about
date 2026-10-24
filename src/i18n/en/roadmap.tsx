import type { RoadmapText } from '../types'
import type { RoadmapId } from '../structure'

export const roadmap: Record<RoadmapId, RoadmapText> = {
  'first-code': {
    plot: "It was the first time when I had written a code, it was a small step for me as a student, but a big step for a future developer. I wrote my first demo code on Delphi, Java, C#, and C++",
    goalsLabel: 'Goals',
    goals: [{ name: 'Algorithms' }, { name: 'Unix shell' }, { name: 'Data structures' }],
  },
  'first-website': {
    plot: <span>I was excited by web. I started to learn PHP and SQL. I had written my first web site. It was about OOP. As I know it still exists <a className="App-link" href='https://project-pro.do.am/'>project-pro.do.am</a></span>,
    goalsLabel: 'New skills',
    goals: [{ name: 'OOP' }, { name: 'PHP', note: 'base level' }, { name: 'SQL' }, { name: 'HTML' }],
  },
  'first-web-app': {
    plot: <span>I had created my first web application. It was application for students, where they could practice in web development. University owns my service and now I cannot support it. <a className="App-link" href='http://webschool.pspu.ru/'>webschool.pspu.ru/</a></span>,
    goalsLabel: 'New skills',
    goals: [{ name: 'CSS' }, { name: 'JS' }, { name: 'Yii2' }, { name: 'Bootstrap' }, { name: 'Material design' }],
  },
  'first-job': {
    plot: "After graduation I got my first job as developer. It was a small outsource company I wrote site functional on PHP and JS. Moreover, I was concentrated on JS and this language became my general language",
    goalsLabel: 'New skills',
    goals: [{ name: 'ES5+' }, { name: 'GIT' }, { name: 'Lodash' }, { name: 'HTTP/S' }, { name: 'Nginx' }],
  },
  'asana-plugin': {
    plot: "On the first job I created the first react client-server application. It was a plugin for the Asana app, which managed  employees KPI",
    goalsLabel: 'New skills',
    goals: [{ name: 'React.js' }, { name: 'Redis' }, { name: 'Webpack' }, { name: 'Jest and TDD' }, { name: 'WebSockets + Socket.io' }],
  },
  'product-company': {
    plot: "Once upon a time I had got a new opportunity in a product company I had learned React and I created two big application. It was a big inner CRM system and cash-box software (react+electron)",
    goalsLabel: 'New skills',
    goals: [{ name: 'Redux' }, { name: 'SASS/SCSS' }, { name: 'Redux-thunks' }, { name: 'Node.js' }, { name: 'Electron.js' }, { name: 'React-native', note: 'base level' }],
  },
  'moscow-startup': {
    plot: "Next I moved to conquer the capital of Russia. I was employed by a huge startup, which was an educational platform for children. It was a challenging job because we started as a small team, just me and lead, but we grew up to dream team.",
    goalsLabel: 'New skills',
    goals: [{ name: 'Agile, Scrum' }, { name: 'Redux-saga' }, { name: 'JWT and SSO' }, { name: 'PostgreSQL' }, { name: 'Supervisor' }],
  },
  'edtech-apps': {
    plot: "I have created two frontend applications for that company. It was Inner admin platform for provision of educational process, and Outer user profile for pupils with information about course, workflow, kanban dashboard and group chat. ",
    goalsLabel: 'New skills',
    goals: [{ name: 'Puppeteer' }, { name: 'Firebase' }, { name: 'Google cloud API' }, { name: 'Express.js' }],
  },
  'covid-marketplace': {
    plot: "Because of Covid19 our startup got into trouble and our team was disbanded. I found a job in a big Russian holding, where I created a part of a big marketplace.",
    goalsLabel: 'New skills',
    goals: [{ name: 'React-hooks' }, { name: 'Selenium' }, { name: 'RabbitMQ' }],
  },
  'israel-freelance': {
    plot: "I got a visa to the educational program in Israel and it was my chance. Unfortunately, this visa didn't permit me to work, and I became a freelancer. Since then I created a lot of pet projects and tried myself in the education area.",
    goalsLabel: 'New skills',
    goals: [{ name: 'Typescript' }, { name: 'Nest.js' }, { name: 'Docker' }, { name: 'Styled-components' }, { name: 'English B1' }],
  },
  'mentoring': {
    plot: "I have gathered a wide range of educational materials for my students. Currently, over 90% of them are employed by IT companies. Some are now working as QA engineers in international IT companies. I continue to support them in their development, while also improving my own QA skills.",
    goalsLabel: 'New skills',
    goals: [{ name: 'Functional programming' }, { name: 'Emotion.js' }, { name: 'Team leadership' }, { name: 'Webdriver.IO' }],
  },
  'back-to-russia': {
    plot: "I returned to Russia to focus on improving my English. Currently, I continue to work as a mentor and freelancer, dedicating significant time to advancing my programming skills and learning new technologies in the IT field.",
    goalsLabel: 'New skills',
    goals: [{ name: 'System Design' }, { name: 'MongoDB/mongoose' }, { name: 'Vite' }],
  },
  'crypto-switch': {
    plot: "I have tried to be employed by a big international company, but unfortunately, one political crisis made influenced my decision, so I took the opportunity became a full-stack developer and started to learn the crypto world.",
    goalsLabel: 'New skills',
    goals: [{ name: 'Solidity' }, { name: 'CSS-modules' }, { name: 'Prisma ORM' }, { name: 'English B2' }],
  },
  'israeli-citizenship': {
    plot: "A new opportunity arose with a startup at a small distributed company, where I worked as a senior full-stack developer. I eventually obtained Israeli citizenship and relocated to Netanya. It’s a lovely city with a distinct 'Miami in the 90s' vibe.",
    goalsLabel: 'New skills',
    goals: [{ name: 'Mobx' }, { name: 'gitlab CI/CD' }, { name: 'Transactions system architecture' }, { name: 'PGPool' }, { name: 'ETH network' }, { name: 'Vitest' }],
  },
  'play-to-earn': {
    plot: "I am still working at the startup, where I developed a play-to-earn game. Although the game has launched, it remains under ongoing development and support. I have implemented extensive testing and emergency systems to protect the game from hackers.",
    goalsLabel: 'New skills',
    goals: [{ name: 'Job Workers' }, { name: 'Telegraf' }, { name: 'Postfix' }, { name: 'Solana network' }, { name: 'Gitlab actions' }],
  },
  'trading-system': {
    plot: "While working at this startup, I developed a comprehensive trading system. I also participated in a Solana Hackathon with a local community, where we placed fifth.",
    goalsLabel: 'New skills',
    goals: [{ name: 'victory.js' }, { name: 'tanstack/query (React-query)' }, { name: 'WalletConnect2' }, { name: 'Wagme.js' }, { name: 'Ant Design' }],
  },
  'monorepo-dnd': {
    plot: "I started a new project from scratch, using a monorepo ecosystem with an inner core library. During this time, I also sought comfort in a new D&D community, finding balance between work and play.",
    goalsLabel: 'New skills',
    goals: [{ name: 'Monorepo' }, { name: 'NX and Lerna.js' }, { name: 'Playwright' }, { name: 'TON network' }, { name: 'Blueprint' }, { name: 'Tact' }],
  },
  'ton-company': {
    plot: "Joined an international company with a focus on the TON ecosystem. Redirected full attention to this role; wrapped up teaching commitments and placed additional tasks on hold.",
    goalsLabel: 'New skills',
    goals: [{ name: 'Jotai' }, { name: 'Python' }, { name: 'Strapi' }, { name: 'FunC' }, { name: 'Sentry' }],
  },
  'my-odyssey': {
    plot: "Rediscovered my early interest in edtech. Took part in the Methis hackathon with My Odyssey app. A user sets a goal, AI breaks it into tasks, and the community can fund it.",
    plotPosition: '-240px',
    goalsLabel: 'New skills',
    goals: [{ name: 'Cursor' }, { name: 'Crowdfunding' }, { name: 'Product hypotheses' }],
  },
  'ai-mentoring': {
    plot: "Started studying AI seriously. Back to active mentoring and helping businesses adopt AI, with many successful cases already.",
    plotPosition: '-200px',
    goalsLabel: 'New skills',
    goals: [{ name: 'LLM' }, { name: 'AI agents' }, { name: 'Prompt engineering' }, { name: 'AI adoption for business' }],
  },
}
