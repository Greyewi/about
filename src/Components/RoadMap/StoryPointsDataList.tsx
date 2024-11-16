import BoyIcon from "@mui/icons-material/Boy";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyBitcoin from "@mui/icons-material/CurrencyBitcoin";
import SurfingIcon from '@mui/icons-material/Surfing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CastleIcon from '@mui/icons-material/Castle';
import {GoalPoint} from "./styles"

export interface PointI {
    id: string,
    date: string | JSX.Element,
    plot: string | JSX.Element,
    goals?: string | JSX.Element,
    addition?: JSX.Element,
    plotPosition?: string,
    goalsPosition?: string,
}

export const StoryPointsDataList: PointI[] = [
    {
        id: "the first time",
        date: '2011',
        plot: "It was the first time when I had written a code, it was a small step for me as a student, but a big step for a future developer. I wrote my first demo code on Delphi, Java, C#, and C++",
        goals: <span>Goals: <GoalPoint>Algorithms</GoalPoint>, <GoalPoint>Unix shell</GoalPoint>, <GoalPoint>Data structures</GoalPoint></span>,
        addition: <BoyIcon fontSize="large"/>,
        plotPosition: '-240px',
        goalsPosition: "100px"
    },
    {
        id: "the second time",
        date: '2013',
        plot: <span>I was excited by web. I started to learn PHP and SQL. I had written my first web site. It was about OOP. As I know it still exists <a className="App-link" href='https://project-pro.do.am/'>project-pro.do.am</a></span>,
        goals: <span>New skills: <GoalPoint>OOP</GoalPoint>, <GoalPoint>PHP</GoalPoint> (base level), <GoalPoint>SQL</GoalPoint>, <GoalPoint>HTML</GoalPoint></span>,
        addition: <SchoolIcon fontSize="large"/>,
        plotPosition: '-220px',
        goalsPosition: "100px"
    },
    {
        id: "the third time",
        date: '2015',
        plot: <span>I had created my first web application. It was application for students, where they could practice in web development. University owns my service and now I cannot support it. <a className="App-link" href='http://webschool.pspu.ru/'>webschool.pspu.ru/</a></span>,
        goals: <span>New skills: <GoalPoint>CSS</GoalPoint>, <GoalPoint>JS</GoalPoint>, <GoalPoint>Yii2</GoalPoint>, <GoalPoint>Bootstrap</GoalPoint>, <GoalPoint>Material design</GoalPoint> </span>,
        addition: <WorkspacePremiumIcon fontSize="large"/>,
        plotPosition: '-240px',
        goalsPosition: "100px"
    },
    {
        id: "the forth half one time",
        date: '2016',
        plot: "After graduation I got my first job as developer. It was a small outsource company I wrote site functional on PHP and JS. Moreover, I was concentrated on JS and this language became my general language",
        goals: <span>New skills: <GoalPoint>ES5+</GoalPoint>, <GoalPoint>GIT</GoalPoint>, <GoalPoint>Lodash</GoalPoint>, <GoalPoint>HTTP/S</GoalPoint>, <GoalPoint>Nginx</GoalPoint> </span>,
        addition: <WorkIcon fontSize="large"/>,
        plotPosition: '-260px',
        goalsPosition: "100px"
    },
    {
        id: "the forth half two time",
        date: '2017',
        plot: "On the first job I created the first react client-server application. It was a plugin for the Asana app, which managed  employees KPI",
        goals: <span>New skills: <GoalPoint>React.js</GoalPoint>, <GoalPoint>Redis</GoalPoint>, <GoalPoint>Webpack</GoalPoint>, <GoalPoint>Jest and TDD</GoalPoint>, <GoalPoint>WebSockets + Socket.io</GoalPoint> </span>,
        addition: <WorkIcon fontSize="large"/>,
        plotPosition: '-200px',
        goalsPosition: "100px"
    },
    {
        id: "the five time",
        date: '2017',
        plot: "Once upon a time I had got a new opportunity in a product company I had learned React and I created two big application. It was a big inner CRM system and cash-box software (react+electron)",
        goals: <span>New skills: <GoalPoint>Redux</GoalPoint>, <GoalPoint>SASS/SCSS</GoalPoint>, <GoalPoint>Redux-thunks</GoalPoint>, <GoalPoint>Node.js</GoalPoint>, <GoalPoint>Electron.js</GoalPoint>, <GoalPoint>React-native</GoalPoint>(base level) </span>,
        addition: <WorkHistoryIcon fontSize="large"/>,
        plotPosition: '-245px',
        goalsPosition: "100px"
    },
    {
        id: "the six half one time",
        date: '2018',
        plot: "Next I moved to conquer the capital of Russia. I was employed by a huge startup, which was an educational platform for children. It was a challenging job because we started as a small team, just me and lead, but we grew up to dream team.",
        goals: <span>New skills: <GoalPoint>Agile, Scrum</GoalPoint>, <GoalPoint>Redux-saga</GoalPoint>, <GoalPoint>JWT and SSO</GoalPoint>, <GoalPoint>PostgreSQL</GoalPoint>, <GoalPoint>Supervisor</GoalPoint></span>,
        addition: <LocationCityIcon fontSize="large"/>,
        plotPosition: '-280px',
        goalsPosition: "100px"
    },
    {
        id: "the six half two time",
        date: '2019',
        plot: "I have created two frontend applications for that company. It was Inner admin platform for provision of educational process, and Outer user profile for pupils with information about course, workflow, kanban dashboard and group chat. ",
        goals: <span>New skills: <GoalPoint>Puppeteer</GoalPoint>, <GoalPoint>Firebase</GoalPoint>, <GoalPoint>Google cloud API</GoalPoint>, <GoalPoint>Express.js</GoalPoint></span>,
        addition: <LocationCityIcon fontSize="large"/>,
        plotPosition: '-280px',
        goalsPosition: "100px"
    },
    {
        id: "the seven time",
        date: '2020',
        plot: "Because of Covid19 our startup got into trouble and our team was disbanded. I found a job in a big Russian holding, where I created a part of a big marketplace.",
        goals: <span>New skills: <GoalPoint>React-hooks</GoalPoint>, <GoalPoint>Selenium</GoalPoint>, <GoalPoint>RabbitMQ</GoalPoint></span>,
        addition: <HomeWorkIcon fontSize="large"/>,
        plotPosition: '-220px',
        goalsPosition: "100px"
    },
    {
        id: "the eight time",
        date: '2020',
        plot: "I got a visa to the educational program in Israel and it was my chance. Unfortunately, this visa didn't permit me to work, and I became a freelancer. Since then I created a lot of pet projects and tried myself in the education area.",
        goals: <span>New skills: <GoalPoint>Typescript</GoalPoint>, <GoalPoint>Nest.js</GoalPoint>, <GoalPoint>Docker</GoalPoint>, <GoalPoint>Styled-components</GoalPoint>, <GoalPoint>English B1</GoalPoint></span>,
        addition: <CoronavirusIcon fontSize="large"/>,
        plotPosition: '-273px',
        goalsPosition: "100px"
    },
    {
        id: "the nine time",
        date: '2021',
        plot: "I have gathered a wide range of educational materials for my students. Currently, over 90% of them are employed by IT companies. Some are now working as QA engineers in international IT companies. I continue to support them in their development, while also improving my own QA skills.",
        goals: <span>New skills: <GoalPoint>Functional programming</GoalPoint>, <GoalPoint>Emotion.js</GoalPoint>, <GoalPoint>Team leadership</GoalPoint>, <GoalPoint>Webdriver.IO</GoalPoint></span>,
        addition: <GroupsIcon fontSize="large"/>,
        plotPosition: '-273px',
        goalsPosition: "100px"
    },
    {
        id: "the ten time",
        date: '2021',
        plot: "I returned to Russia to focus on improving my English. Currently, I continue to work as a mentor and freelancer, dedicating significant time to advancing my programming skills and learning new technologies in the IT field.",
        goals: <span>New skills: <GoalPoint>System Design</GoalPoint>, <GoalPoint>MongoDB/mongoose</GoalPoint>, <GoalPoint>Vite</GoalPoint></span>,
        addition: <PsychologyIcon fontSize="large"/>,
        plotPosition: '-240px',
        goalsPosition: "100px"
    },
    {
        id: "the ten time",
        date: '2022',
        plot: "I have tried to be employed by a big international company, but unfortunately, one political crisis made influenced my decision, so I took the opportunity became a full-stack developer and started to learn the crypto world.",
        goals: <span>New skills: <GoalPoint>Solidity</GoalPoint>, <GoalPoint>CSS-modules</GoalPoint>, <GoalPoint>Prisma ORM</GoalPoint>, <GoalPoint>English B2</GoalPoint></span>,
        addition: <CurrencyBitcoin fontSize="large"/>,
        plotPosition: '-280px',
        goalsPosition: "100px"
    },
    {
        id: "the eleven time",
        date: '2022',
        plot: "A new opportunity arose with a startup at a small distributed company, where I worked as a senior full-stack developer. I eventually obtained Israeli citizenship and relocated to Netanya. It’s a lovely city with a distinct 'Miami in the 90s' vibe.",
        goals: <span>New skills: <GoalPoint>Mobx</GoalPoint>, <GoalPoint>gitlab CI/CD</GoalPoint>, <GoalPoint>Transactions system architecture</GoalPoint>, <GoalPoint>PGPool</GoalPoint>, <GoalPoint>ETH network</GoalPoint>, <GoalPoint>Vitest</GoalPoint></span>,
        addition: <SurfingIcon fontSize="large"/>,
        plotPosition: '-280px',
        goalsPosition: "100px"
    },
    {
        id: "the twelve time",
        date: '2023',
        plot: "I am still working at the startup, where I developed a play-to-earn game. Although the game has launched, it remains under ongoing development and support. I have implemented extensive testing and emergency systems to protect the game from hackers.",
        goals: <span>New skills: <GoalPoint>Job Workers</GoalPoint>, <GoalPoint>Telegraf</GoalPoint>, <GoalPoint>Postfix</GoalPoint>, <GoalPoint>Solana network</GoalPoint>, <GoalPoint>Gitlab actions</GoalPoint></span>,
        addition: <VideogameAssetIcon fontSize="large"/>,
        plotPosition: '-280px',
        goalsPosition: "100px"
    },
    {
        id: "the thirteen time",
        date: '2023',
        plot: "While working at this startup, I developed a comprehensive trading system. I also participated in a Solana Hackathon with a local community, where we placed fifth.",
        goals: <span>New skills: <GoalPoint>victory.js</GoalPoint>, <GoalPoint>tanstack/query (React-query)</GoalPoint>, <GoalPoint>WalletConnect2</GoalPoint>, <GoalPoint>Wagme.js</GoalPoint>, <GoalPoint>Ant Design</GoalPoint></span>,
        addition: <ShowChartIcon fontSize="large"/>,
        plotPosition: '-280px',
        goalsPosition: "100px"
    },
    {
        id: "the fourteen time",
        date: '2024',
        plot: "We finally completed the projects. Meanwhile, the situation in Israel escalated with the outbreak of war, prompting me to move back to cold Russia. During this difficult time, I decided to find solace in a new D&D community. Now, I can both play and lead 'Dungeons and Dragons'-style games.",
        goals: <span>New skills: <GoalPoint>Monorepo</GoalPoint>, <GoalPoint>NX and Lerna.js</GoalPoint>, <GoalPoint>Playwright</GoalPoint>, <GoalPoint>TON network</GoalPoint>, <GoalPoint>Blueprint</GoalPoint>, <GoalPoint>Tact</GoalPoint></span>,
        addition: <CastleIcon fontSize="large"/>,
        plotPosition: '-300px',
        goalsPosition: "100px"
    },
]