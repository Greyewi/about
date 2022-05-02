import React, {useState} from 'react';
import {H2, Wrapper} from '../../styles'

const removeAtIndex = (arr: string[], index: number): string[] => {
    const copy = [...arr]
    copy.splice(index, 1)
    return copy
}

const toggle = (arr: string[], item: string, getValue = (item: string) => item): string[] => {
    const index = arr.findIndex(i => getValue(i) === getValue(item))
    if (index === -1) return [...arr, item]
    return removeAtIndex(arr, index)
}

const Cvs = () => {
    const [dropped, setDropped] = useState<string[]>(['about'])
    return (
        <Wrapper>
            <h2
                onClick={() => setDropped((prev) => toggle(prev, 'about'))}
                className="clickable"
            >
                About me
            </h2>
            <div style={{display: dropped.includes('about') ? 'block': 'none'}}>
                <i>"It's not gods who make pots."</i>
                <ul>
                    <li>Age: {new Date().getFullYear() - 1992} years</li>
                    <li>Nation: Russian</li>
                    <li>Telegram: <a href="https://telegram.me/greyewi">@greyewi</a></li>
                    <li>Email: <a href="mailto:greyewi@gmail.com?subject=From off site">greyewi@gmail.com</a></li>
                    <li>Phone ( russian local ): <a href="tel:+79194597824">+7 (919) 459-78-24</a></li>
                    <li>Linkedin: <a
                        href="https://www.linkedin.com/in/sergey-suntsev-219817113">https://www.linkedin.com/in/sergey-suntsev-219817113 </a>
                    </li>
                </ul>
            </div>
            <hr/>
            <H2
                onClick={() => setDropped((prev) => toggle(prev, 'Objective'))}
                className="clickable"
            >
                Objective
            </H2>
            <div style={{display: dropped.includes('Objective') ? 'flex': 'none'}}>
                I am enthusiastic, confident and dedicated receptionist with excellent engineering skills is eager to
                use my experience in work.
                I have a lot of experience of Web development. I created inner CRM system, admin platforms, different
                interactive modules like google calendar, mind maps, canna dashboards and gant diagrams.
            </div>
            <hr/>
            <H2
                onClick={() => setDropped((prev) => toggle(prev, 'Education'))}
                className="clickable"
            >
                Education
            </H2>
            <div style={{display: dropped.includes('Education') ? 'flex': 'none'}}>
                <ul>
                    <li>2010 - 2014 Perm State Humanitarian Pedagogical University, bachelor of mathematical science
                        with IT direction
                    </li>
                    <li>2014 - 2016 Perm State Humanitarian Pedagogical University, first class master of informatics
                        education
                    </li>
                </ul>
            </div>
            <hr/>
            <H2
                onClick={() => setDropped((prev) => toggle(prev, 'Skills'))}
                className="clickable"
            >
                Skills
            </H2>
            <div style={{display: dropped.includes('Skills') ? 'block': 'none'}}>
                <h3>Programming</h3>
                <ul>
                    <li>Client side: JavaScript and TypeScript with React(hooks, context, memos), Redux,
                        Redux-Saga/Thunk/Custom middlewares, React-Router, Reselect, Lodash, etc...
                    </li>
                    <li>Server side: JavaScript and TypeScript with NodeJs (Nest, Express, SocketIO, Electron). I am
                        looking on with interest to Deno
                    </li>
                    <li>Also have background with: PHP (Yii2, Laravel), Python (Django, Channels)</li>
                </ul>
                <h3>DataBases</h3>
                <ul>
                    <li>Actively use: PostgreSQL, SQL (join, union, etc...), Firebase, MongoDB. I glad to use serverless
                        and cloud technologies.
                    </li>
                    <li>Also: Redis, RabbitMQ, MySQL</li>
                </ul>

                <h3>Engineering Technologies</h3>
                I have a lot of experiences in frameworks and different architectures. I in found of OOP patterns, SOLID
                principles, MVC, ORM, Redux-Ducks, regexp.
                Moreover I have common skills in DEVOPS: Ubuntu, Debian, Bash, SSL, Nginx, Supervisor, Ansible, Docker.

                <h3>Work processes</h3>
                I would like to use modern agile management technics of work processes, like kanban, scrum.
                on a first-name basis with jira, asana, miro. I have basic experience in PM (swot/pest analysis,
                roadmap, gant)
            </div>
            <hr/>
            <H2
                onClick={() => setDropped((prev) => toggle(prev, 'Employment history'))}
                className="clickable"
            >
                Employment history
            </H2>
            <div style={{display: dropped.includes('Employment history') ? 'block': 'none'}}>
                <ul>
                    <li>
                        <h3>2020 Merlion - Senior fullstack developer</h3>
                        Developed b2b service for federal wholesale store. (React, redux, redux-thunk, php, yii2)
                        https://merlion.com/partners/b2b
                        - Wrote automated ui, e2e and regress tests (python, selenium)
                    </li>
                    <li>
                        <h3>2018 - 2020 Codabra - Senior Javascript developer</h3>
                        Developed new services and partly did site consulting.
                        <ol>
                            <li>
                                Inner admin platform for provision of educational process. CRUD with big data, schedule,
                                like google calendar
                                (front - react, redux, redux-saga redux-form, reselect, immutable, jest, puppeteer).
                            </li>
                            <li>
                                Outer user profile for pupils with information about course, workflow, kanban dashboard
                                and group chat.
                                (front - react, redux, redux-saga, back - node.js, postresql, redis)
                            </li>
                        </ol>
                        Also I made many microservices
                        <ol>
                            <li>
                                Interactive schedule https://codabra.org/schedule/msk (react)
                            </li>
                            <li>
                                System for forms integration with AMO CRM (node.js, express)
                            </li>
                            <li>
                                System for forms integration with slack (node.js, express)
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3>2017 - 2018 InitGroup - Javascript engineer</h3>
                        Developed inner CRM system (React, Redux)
                        Developed cashbox software. (Electron, React, Redux, Redux-saga)
                        http://initpro.ru/kassa/download
                    </li>
                    <li>
                        <h3>2016 - 2017 CKDIgital - Web developer </h3>
                        Created different portals on PHP (yii2),
                        deploying of https://www.ylee.io/en/profittable asana’s plugin for manage stuff KPI (react)
                    </li>
                    <li>
                        <h3>2014 - 2016 Perm State Humanitarian Pedagogical University - Engineer</h3>
                        http://webschool.pspu.ru/ develop inner education platform for web developing. (PHP, yii2)
                    </li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default Cvs;
