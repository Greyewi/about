import type { CvText } from '../types'
import { numberOfYears } from '../structure'

export const cv: CvText = {
  about: `Result-oriented web developer for over ${numberOfYears('2015')} years with ${numberOfYears('2016')} years of experience as frontend and ${numberOfYears('2019')} years as full-stack.
            During this time I have finished a lot of big projects. It was CRM, user profiles, administration services, integration systems, chats, decentralized apps, AI adoption, and so on.
            I am big on working with flexible methodologies, like agile with scrum and kanban approaches.
            I prefer to automate everything and I am enthusiastic about tackling challenging work.`,
  education: {
    name: 'Perm State Pedagogical University',
    description: "2010 - 2016 Master's degree, Information Science Education",
    gradeLevel: 'Grade: 9.4',
  },
  skills: {
    'js':             { name: 'JS',              description: 'ES++' },
    'react':          { name: 'React',           description: 'Hooks, SSR, Concurrent mode+' },
    'state-managers': { name: 'State managers',  description: 'Redux & toolkit, Context, React/query' },
    'styles':         { name: 'Styles',          description: 'CSS-modules, MUI, Open-Props, SASS, Emotion' },
    'typescript':     { name: 'Typescript',      description: 'V5' },
    'nodejs':         { name: 'Node JS',         description: 'Express, Nest.js, PrismaORM' },
    'system-design':  { name: 'System Design',   description: 'SOLID, YAGNI, Patterns (OOP and FP)' },
    'qa':             { name: 'Q/A engineering', description: 'Jest, RTL, Playwright, Vitest' },
    'databases':      { name: 'Databases',       description: 'SQL, Posgress, MongoDB, Redis, *MQ' },
    'architecture':   { name: 'Architecture',    description: 'Workspaces, Monorepo, NX, Lerna' },
    'devops':         { name: 'DevOps',          description: 'Nginx, Docker, Bash, CI/CD' },
    'english':        { name: 'English',         description: 'B2+' },
  },
  experience: {
    'tonstakers': {
      jobName: 'TS/JS Web3 Fullstack Engineer ',
      companyName: 'Tonstakers',
      description: <ul>
        <li>Maintained the main staking application, improved performance, and modernized the architecture.</li>
        <li>Delivered with AI a pixel-perfect landing page matching the provided design specifications.</li>
        <li>Implemented integrations with third-party Web3 services to extend product functionality.</li>
      </ul>,
    },
    'play-to-earn': {
      jobName: 'TS/JS Web3 Full-Stack Developer',
      companyName: 'Play to Earn',
      description: <ul>
        <li>Engaged in a significant play-to-earn cryptocurrency project, contributing to its overall development and success.</li>
        <li>Successfully refactored the existing legacy codebase, enhancing efficiency and maintainability.</li>
        <li>Implemented Walletconnect v2 authentication and developed a parser for Ethereum blocks using web3 and web sockets, improving overall connectivity and data handling.</li>
        <li>Conducted a comprehensive system audit and integrated the findings with Telegram for streamlined reporting.</li>
        <li>Designed and developed an internal NFT marketplace, statistics page, and crafting system, providing valuable tools for user engagement.</li>
        <li>Configured and managed GitLab Continuous Integration (CI) to ensure seamless code deployment and testing.</li>
      </ul>,
    },
    'mentor': {
      jobName: 'IT Mentor',
      companyName: 'Self-employed',
      description: <ul>
        <li>Teach web development from scratch and prepare developers of any level for technical interviews.</li>
        <li>My students work at Yandex, Sber, Tinkoff, Ozon, Wildberries, Uber, and Disney.</li>
        <li>Consult teams: project audits, code reviews, and architecture improvements.</li>
        <li>Run QA sessions on web UI testing and test automation.</li>
        <li>Teach Web3: wallets, transactions, and smart contracts on ETH, Solana, and TON.</li>
        <li>Help adopt AI: AI agents, prompting, vibe coding, and local models.</li>
      </ul>,
    },
    'merlion': {
      jobName: 'JS, PHP Full-Stack Developer',
      companyName: 'Merlion',
      description: <ul>
        <li>Developed the frontend components of a big-data service tailored for federal wholesale and B2B stores, enhancing user experience and functionality.</li>
        <li>Modernized numerous legacy React class components by updating them to hook components, improving performance and maintainability.</li>
        <li>Authored automated UI, end-to-end, and regression tests, ensuring quality control and stability of the application.</li>
        <li>Actively participated in Scrum activities, contributing to agile development and collaboration within the team.</li>
      </ul>,
    },
    'codabra': {
      jobName: 'JS, React and Node.js developer',
      companyName: 'Codabra',
      description: <ul>
        <li>
          I have created inner admin platform for provision of educational process.
          There are CRUD with big data, google calendar like schedule and salary calculator in this service
        </li>
        <li>
          I have created also outer user profile for pupils with information about course, workflow, kanban dashboard and group chat.
        </li>
        <li>The interactive showcase https://codabra.org/schedule/msk</li>
        <li>System for forms integration with AMO CRM</li>
        <li>Module for integration of slack with the user and lead activity</li>
      </ul>,
    },
    'initgroup': {
      jobName: 'JS, React developer',
      companyName: 'InitGroup cash-box decisions',
      description: <ul>
        <li>Developed inner CRM system</li>
        <li>Developed cash-box software with 2 iterations.</li>
      </ul>,
    },
    'ckdigital': {
      jobName: 'JS, Yii, PHP, React developer',
      companyName: 'CkDigital',
      description: <ul>
        <li>I was creating different sites and services</li>
        <li>There were a lot of middle outsource projects, like safe-sharing service and a couple of markets</li>
        <li>Also I have made a big addon for asana app. There is calculate KPI for employees in this addon.</li>
      </ul>,
    },
    'pspu': {
      jobName: 'Engineering Technician',
      companyName: 'Perm State Pedagogical University',
      description: <ul>
        <li>Administration of different services. Support of computer&apos;s classes.</li>
        <li>There was a plenty of time in this job where I had a side-work as IT freelancer</li>
        <li>Made some web layout and created small application by PHP, Yii2</li>
      </ul>,
    },
  },
}
