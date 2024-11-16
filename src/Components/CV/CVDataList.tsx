import MentorLogo from '../../shared/img/attachment_71573833.jpeg'
import MerlionLogo from '../../shared/img/snffkw4xywiybmpsopun.webp'
import CodabraLogo from '../../shared/img/07f127a9-5aa3-4e59-baf2-fed12e1b8953_thumb.png'
import InitGroupLogo from '../../shared/img/podkl_6.png'
import CkDigitalLogo from '../../shared/img/medium_37e3e54613a14bf780935b3b7ad1a5b6.png'
import PspuLogo from '../../shared/img/PSPU.webp'
import PlayToEarnLogo from '../../shared/img/playToEarn.jpeg'
import React from 'react'

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
        phone: "+972(536)29-40-60 (IL)",
        email: "greyewi@gmail.com",
        tg: "greyewi",
        linkedin: "greyewi",
        height: 140
    },
    skills: {
        list: [
            {name: 'JS', description: "ES++", strength: 90},
            {name: 'React', description: "Hooks, SSR, Concurrent mode", strength: 90},
            {name: 'State managers', description: "Redux, toolkit, Context, query", strength: 95},
            {name: 'Typescript', description: "v5", strength: 85},
            {name: 'Node JS', description: "express, nest, prisma", strength: 75},
            {name: 'System Design', description: "solid, yagni, patterns", strength: 85},
            {name: 'Q/A engineering', description: "Jest, RTL, playwright, vitest", strength: 70},
            {name: 'Databases', description: "sql, posgress, mongoDB, redis, *MQ", strength: 70},
            {name: 'Architecture', description: "Micro services, monorepo, NX, Lerna", strength: 50},
            {name: 'DevOps', description: "Nginx, Docker, Bash, CI/CD", strength: 60},
            {name: 'English', description: "B2+", strength: 80},
        ],
        height: function(){ return this.list.length * 55}
    },
    education: {
        height: 91,
        name: 'Perm State Pedagogical University',
        description: '2010 - 2016 Master\'s degree, Information Science Education',
        gradeLevel: 'Grade: 9.4'
    }
})

interface CVDataExpItem {
    date: string,
    jobName: string,
    company: string | JSX.Element,
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
            I prefer to automate everything and I am enthusiastic about tackling challenging work..`,
    experience: {
        list: [
            {
              date: "2022 - 2024",
              jobName: "JS Full-Stack Developer",
              logo: PlayToEarnLogo,
              company: "Play to Earn",
              description: <ul>
                <li>Engaged in a significant play-to-earn cryptocurrency project, contributing to its overall development and success.</li>
                <li>Successfully refactored the existing legacy codebase, enhancing efficiency and maintainability.</li>
                <li>Implemented Walletconnect v2 authentication and developed a parser for Ethereum blocks using web3 and web sockets, improving overall connectivity and data handling.</li>
                <li>Conducted a comprehensive system audit and integrated the findings with Telegram for streamlined reporting.</li>
                <li>Designed and developed an internal NFT marketplace, statistics page, and crafting system, providing valuable tools for user engagement.</li>
                <li>Configured and managed GitLab Continuous Integration (CI) to ensure seamless code deployment and testing.</li>
              </ul>
            },
            {
                date: "2020 - 2022",
                jobName: "IT Mentor",
                logo: MentorLogo,
                company: "Self-employed",
                description: <ul>
                                <li>Collaborate with various developers, sharing knowledge and experience to successfully tackle complex tasks and meet stringent deadlines.</li>
                                <li>Engage with major clients, focusing on optimizing architecture and performance to meet their unique needs and demands.</li>
                                <li>Occasionally undertake freelance projects to develop Minimum Viable Products (MVPs) or troubleshoot functional issues, applying my expertise in a flexible and responsive manner.</li>
                            </ul>
            },
            {
                date: "2020",
                logo: MerlionLogo,
                jobName: "JS, PHP Full-Stack Developer",
                company: <a href="https://merlion.com/eng/about/" target="_blank" rel="noreferrer">Merlion</a>,
                description: <ul>
                                <li>Developed the frontend components of a big-data service tailored for federal wholesale and B2B stores, enhancing user experience and functionality.</li>
                                <li>Modernized numerous legacy React class components by updating them to hook components, improving performance and maintainability.</li>
                                <li>Authored automated UI, end-to-end, and regression tests, ensuring quality control and stability of the application.</li>
                                <li>Actively participated in Scrum activities, contributing to agile development and collaboration within the team.</li>
                            </ul>
            },
            {
                date: "2018 - 2020",
                jobName: "JS, React and Node.js developer",
                company: <a href="https://codabra.org" target="_blank" rel="noreferrer">Codabra</a>,
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
                company: <a href="https://initpro.ru/kassa" target="_blank" rel="noreferrer">InitGroup cash-box decisions</a>,
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