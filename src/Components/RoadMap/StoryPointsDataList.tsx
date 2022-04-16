import BoyIcon from "@mui/icons-material/Boy";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PsychologyIcon from "@mui/icons-material/Psychology";
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
        plot: "There was the first time when I was writing a code, it was a small step for me as a student, but a big step for a future developer. I wrote my first demo code on Delphi, Java, C#, and C++",
        goals: <span>Goals: <GoalPoint>Algorithms</GoalPoint>, <GoalPoint>Unix shell</GoalPoint>, <GoalPoint>Data structures</GoalPoint></span>,
        addition: <BoyIcon fontSize="large"/>,
        plotPosition: '-220px',
        goalsPosition: "100px"
    },
    {
        id: "the second time",
        date: '2013',
        plot: <span>I was so exited by web. I started to learn PHP and SQL. I have written my first web site. It was about OOP. As I know it is still exist <a className="App-link" href='https://project-pro.do.am/'>project-pro.do.am</a></span>,
        goals: <span>New skills: <GoalPoint>OOP</GoalPoint>, <GoalPoint>PHP</GoalPoint> (base level), <GoalPoint>SQL</GoalPoint>, <GoalPoint>HTML</GoalPoint></span>,
        addition: <SchoolIcon fontSize="large"/>,
        plotPosition: '-200px',
        goalsPosition: "100px"
    },
    {
        id: "the third time",
        date: '2015',
        plot: <span>I have created my first web application. It was application for students, where they could practice in web development. University owns my service and now I cannot support it. <a className="App-link" href='http://webschool.pspu.ru/'>webschool.pspu.ru/</a></span>,
        goals: <span>New skills: <GoalPoint>CSS</GoalPoint>, <GoalPoint>JS</GoalPoint>, <GoalPoint>Yii2</GoalPoint>, <GoalPoint>Bootstrap</GoalPoint>, <GoalPoint>Material design</GoalPoint> </span>,
        addition: <WorkspacePremiumIcon fontSize="large"/>,
        plotPosition: '-220px',
        goalsPosition: "100px"
    },
    {
        id: "the forth half one time",
        date: '2016',
        plot: "After graduation I got my first job as developer. It was a small outsource company I wrote site functional on PHP and JS. Moreover, I was concentrated on JS and this language became my general language",
        goals: <span>New skills: <GoalPoint>ES5+</GoalPoint>, <GoalPoint>GIT</GoalPoint>, <GoalPoint>Lodash</GoalPoint>, <GoalPoint>HTTP/S</GoalPoint>, <GoalPoint>Nginx</GoalPoint> </span>,
        addition: <WorkIcon fontSize="large"/>,
        plotPosition: '-240px',
        goalsPosition: "100px"
    },
    {
        id: "the forth half two time",
        date: '2017',
        plot: "On the first job I was created the first react client-server application. It was a plugin for the Asana app, which managed  employees KPI",
        goals: <span>New skills: <GoalPoint>React.js</GoalPoint>, <GoalPoint>Redis</GoalPoint>, <GoalPoint>Webpack</GoalPoint>, <GoalPoint>Jest and TDD</GoalPoint>, <GoalPoint>WebSockets + Socket.io</GoalPoint> </span>,
        addition: <WorkIcon fontSize="large"/>,
        plotPosition: '-180px',
        goalsPosition: "100px"
    },
    {
        id: "the five time",
        date: '2017',
        plot: "Once upon a time I had got a new opportunity in a product company I have learned React and was created two big application by me. It was a big inner CRM system and cash-box software (react+electron)",
        goals: <span>New skills: <GoalPoint>Redux</GoalPoint>, <GoalPoint>SASS/SCSS</GoalPoint>, <GoalPoint>Redux-thunks</GoalPoint>, <GoalPoint>Node.js</GoalPoint>, <GoalPoint>Electron.js</GoalPoint>, <GoalPoint>React-native</GoalPoint>(base level) </span>,
        addition: <WorkHistoryIcon fontSize="large"/>,
        plotPosition: '-225px',
        goalsPosition: "100px"
    },
    {
        id: "the six half one time",
        date: '2018',
        plot: "Next time I moved to conquer the capital of Russia. I was employed by a huge startup, which was an educational platform for children. It was a challenging job because we started as a small team, just me and lead, but we grew up to dream team.",
        goals: <span>New skills: <GoalPoint>Agile, Scrum</GoalPoint>, <GoalPoint>Redux-saga</GoalPoint>, <GoalPoint>JWT and SSO</GoalPoint>, <GoalPoint>PostgreSQL</GoalPoint>, <GoalPoint>Supervisor</GoalPoint></span>,
        addition: <LocationCityIcon fontSize="large"/>,
        plotPosition: '-260px',
        goalsPosition: "100px"
    },
    {
        id: "the six half two time",
        date: '2019',
        plot: "I have created two frontend applications for that company. It was Inner admin platform for provision of educational process, and Outer user profile for pupils with information about course, workflow, kanban dashboard and group chat. ",
        goals: <span>New skills: <GoalPoint>Puppeteer</GoalPoint>, <GoalPoint>Firebase</GoalPoint>, <GoalPoint>Google cloud API</GoalPoint>, <GoalPoint>Express.js</GoalPoint></span>,
        addition: <LocationCityIcon fontSize="large"/>,
        plotPosition: '-260px',
        goalsPosition: "100px"
    },
    {
        id: "the seven time",
        date: '2020',
        plot: "Owe Covid 19 our startup got into trouble and our team has disbanded. I find a job in a big Russian holding, where I created a part of a big marketplace.",
        goals: <span>New skills: <GoalPoint>React-hooks</GoalPoint>, <GoalPoint>Selenium</GoalPoint>, <GoalPoint>RabbitMQ</GoalPoint></span>,
        addition: <HomeWorkIcon fontSize="large"/>,
        plotPosition: '-200px',
        goalsPosition: "100px"
    },
    {
        id: "the eight time",
        date: '2020',
        plot: "I got a visa to the educational program in Israel and it was my chance. Unfortunately, this visa didn't permit me to work, and I became a freelancer. Since then I created a lot of pet projects and tried myself in the education area. Right now I help people in IT.",
        goals: <span>New skills: <GoalPoint>Typescript</GoalPoint>, <GoalPoint>Functional programming</GoalPoint>, <GoalPoint>Nest.js</GoalPoint>, <GoalPoint>Docker</GoalPoint>, <GoalPoint>Styled-components</GoalPoint>, <GoalPoint>English B1</GoalPoint></span>,
        addition: <PsychologyIcon fontSize="large"/>,
        plotPosition: '-275px',
        goalsPosition: "100px"
    },
    {
        id: "the nine time",
        date: '2021',
        plot: "I came back to Russia, for concentrated to learn English. Right now I still work as a freelancer, take a lot of time to increase my programming level, and learn new tech from the IT world.",
        goals: <span>New skills: <GoalPoint>System Design</GoalPoint>, <GoalPoint>MongoDB/mongoose</GoalPoint>, <GoalPoint>Vite</GoalPoint></span>,
        addition: <PsychologyIcon fontSize="large"/>,
        plotPosition: '-220px',
        goalsPosition: "100px"
    },
]