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

interface CVDataAsideI {
    person: CVPerson,
    skills: {
        list: CVSkillItem[],
        height: () => number
    },
    education: CVEducation
}

export const CVDataAside = (): CVDataAsideI => ({
    person: {
        phone: "+7(919)459-78-24(RU) +972(536)29-40-60 (IL)",
        email: "greyewi@gmail.com",
        tg: "greyewi",
        linkedin: "greyewi",
        height: 240
    },
    skills: {
        list: [
            {name: 'JS', description: "ES++", strength: 80},
            {name: 'React', description: "Hooks, Context, Concurrent mode", strength: 80},
            {name: 'State managers', description: "Redux, toolkit, thunk, sagas", strength: 90},
            {name: 'Typescript', description: "", strength: 70},
            {name: 'Node JS', description: "express, nest, prisma", strength: 60},
            {name: 'System Design', description: "solid, yagni, patterns", strength: 75},
            {name: 'Q/A engineering', description: "Jest, RTL, puppeteer", strength: 70},
            {name: 'Databases', description: "sql, posgress, mongoDB, redis", strength: 60},
            {name: 'DevOps', description: "Nginx, Docker, Bash, gitlab CI", strength: 50},
            {name: 'English', description: "B2", strength: 65},
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

interface CVDataMainI {
    about: string,
    experience: {
      list:  CVDataExpItem[]
    },
}

const numberOfYears = (start: string): number => {
  return Math.round((new Date().getTime() - new Date(start).getTime())/(1000*60*60*24*365))
}

export const CVDataMain: CVDataMainI = {
    about: `Result-oriented web developer for over ${numberOfYears('2015')} years with ${numberOfYears('2016')} years of experience as frontend and ${numberOfYears('2019')} years as full-stack.
            During this time I have finished a lot of big projects. It was CRM, user profiles, administration services, integration systems, multi-room chats, and so on.
            I would like to work in a product team. I am big on working with flexible methodologies, like agile with scrum and kanban approaches.
            I prefer to automize everything, enthusiastic to educate people.`,
    experience: {
        list: [
            {
                date: "2020 - present",
                jobName: "IT Mentor",
                logo: MentorLogo,
                company: "Self-employed",
                description: <ul>
                                <li>I share my experience with different developers. We already solved a lot of complex tasks and met deadlines.</li>
                                <li>I work with a big customers, where I works with architecture an performance.</li>
                                <li>I also prepare candidates to the interview for different positions: front/back, junior/middle/senior js developer.</li>
                                <li>Sometimes i take some freelance orders to make MVP or fix functional</li>
                                <li>I am eager to learn, each day I spend ay least 4 hours on my pet projects or learning new technologies.</li>
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
                                    There was a plenty of time in this job where I had a side-work as IT freelancer
                                </li>
                                <li>
                                    Made some web layout and created small application by PHP, Yii2
                                </li>
                            </ul>
            }
        ]
    }
}