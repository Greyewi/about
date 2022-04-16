import MentorLogo from '../../shared/img/attachment_71573833.jpeg'
import MerlionLogo from '../../shared/img/snffkw4xywiybmpsopun.webp'
import CodabraLogo from '../../shared/img/07f127a9-5aa3-4e59-baf2-fed12e1b8953_thumb.png'
import InitGroupLogo from '../../shared/img/podkl_6.png'
import CkDigitalLogo from '../../shared/img/medium_37e3e54613a14bf780935b3b7ad1a5b6.png'
import PspuLogo from '../../shared/img/PSPU.webp'

interface CVPerson {
    phone: string,
    email: string,
    tg: string,
    linkedin: string,
    height: number
}

interface CVSkillItem {
    name: string,
    description: string,
    strength: number
}

interface CVEducation {
    height: number,
    name: string,
    description: string,
    gradeLevel: string
}

interface CVDataAside {
    person: CVPerson,
    skills: {
        list: CVSkillItem[],
        height: () => number
    },
    education: CVEducation
}

export const CVDataAside = (): CVDataAside => ({
    person: {
        phone: "+7(919)459-78-24",
        email: "greyewi@gmail.com",
        tg: "greyewi",
        linkedin: "greyewi",
        height: 240
    },
    skills: {
        list: [
            {name: 'JS', description: "ES++", strength: 80},
            {name: 'React', description: "Hooks, Context, Concurrent mode", strength: 80},
            {name: 'state managers', description: "Redux, toolkit, thunk, sagas", strength: 90},
            {name: 'Typescript', description: "", strength: 60},
            {name: 'Node JS', description: "express, nest", strength: 40},
            {name: 'System Design', description: "solid, yagni, patterns", strength: 75},
            {name: 'Q/A engineering', description: "Jest, RTL, puppeteer", strength: 70},
            {name: 'Databases', description: "SQL, mongoDB, redis, firebase", strength: 50},
            {name: 'DevOps', description: "Nginx, Docker, Supervisor, Bash", strength: 30},
            {name: 'English', description: "B2-", strength: 60},
        ],
        height: function(){ return this.list.length * 55}
    },
    education: {
        height: 180,
        name: 'Perm State Humanitarian Pedagogical University',
        description: '2010 - 2016 Master\'s degree, Information Science Education',
        gradeLevel: 'Grade: 9.4'
    }
})

interface CVDataExpItem {
    date: string,
    jobName: string,
    company: string,
    logo: string,
    description: string | JSX.Element
}

interface CVDataMain {
    about: string,
    experience: {
      list:  CVDataExpItem[]
    },
}

export const CVDataMain: CVDataMain = {
    about: `Result-oriented web developer for over 7 years with 5 years of experience as frontend and 3 years as full-stack.
            During this time I have finished a lot of big projects. It was CRM, user profiles, administration services, integration systems, multi-room chats, and so on.
            I would like to work in a product command. I am big on working with flexible methodologies, like agile with scrum and kanban approaches.
            I prefer to automate everything, enthusiastic to educate people.`,
    experience: {
        list: [
            {
                date: "2020 - present",
                jobName: "IT Mentor",
                logo: MentorLogo,
                company: "Self-employed",
                description: <ul>
                                <li>I give my experience with distinct developers. We already solved a lot of complex tasks and meet deadlines.</li>
                                <li>I also prepare candidates to interview for different positions: front/back, junior/middle/senior js developer.</li>
                                <li>Sometimes i take some freelance orders to make MVP or fix functional</li>
                                <li>I have eager to learn, each day I spend ay least 4 hours to my pet projects or learning new technologies.</li>
                            </ul>
            },
            {
                date: "2020",
                logo: MerlionLogo,
                jobName: "JS, PHP Full-Stack Developer",
                company: "Merlion",
                description: <ul>
                                <li>Developed frontend part of big-data service for federal wholesale, b2b store.</li>
                                <li>I have Updated a lot of legacies react class components to hook components</li>
                                <li>Wrote automated ui, e2e and regress tests</li>
                                <li>Took a part in scrum activity</li>
                            </ul>
            },
            {
                date: "2018 - 2020",
                jobName: "JS, React and Node.js developer",
                company: "Codabra",
                logo: CodabraLogo,
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
                            </ul>
            },
            {
                date: "2017 - 2018",
                jobName: "JS, React developer",
                logo: InitGroupLogo,
                company: "InitGroup cash-box decisions",
                description: <ul>
                                <li>
                                    Developed inner CRM system
                                </li>
                                <li>
                                    Developed cash-box software with 2 iterations.
                                </li>
                            </ul>
            },
            {
                date: "2016 - 2017",
                jobName: "JS, Yii, PHP, React developer",
                logo: CkDigitalLogo,
                company: "CkDigital",
                description: <ul>
                                <li>
                                    I was creating different sites and services
                                </li>
                                <li>
                                    There were a lot of middle outsource projects, like safe-sharing service and a couple of markets
                                </li>
                                <li>
                                    Also I have made a big addon for asana app. There is calculate KPI for employees in this addon.
                                </li>
                            </ul>
            },
            {
                date: "2013 - 2016",
                jobName: "Engineering Technician",
                logo: PspuLogo,
                company: "Perm State Pedagogical University",
                description: <ul>
                                <li>
                                    Administration of different services. Support of computer's classes.
                                </li>
                                <li>
                                    There were a plenty of time in this job where I had a sub-work as it freelancer
                                </li>
                                <li>
                                    Made some web layout and created small application by PHP, Yii2
                                </li>
                            </ul>
            }
        ]
    }
}