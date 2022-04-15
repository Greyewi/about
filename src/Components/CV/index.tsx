import {
    CVAsideCaption,
    CVContainer,
    CVLeftAside,
    CVAsideParagraph,
    CVSkillScale,
    CVAsideSkillLabelContainer,
    CVMainContainer,
    CVMainText,
    CVMainCaption,
    CVExperiencePoint,
    CVExperienceDate,
    CVExperienceBody,
    CVExperienceTitle,
    CVExperienceLogo,
    CVExperienceCompany
} from './styles'

import MentorLogo from '../../shared/img/attachment_71573833.jpeg'
import MerlionLogo from '../../shared/img/snffkw4xywiybmpsopun.webp'
import CodabraLogo from '../../shared/img/07f127a9-5aa3-4e59-baf2-fed12e1b8953_thumb.png'
import InitGroupLogo from '../../shared/img/podkl_6.png'
import CkDigitalLogo from '../../shared/img/medium_37e3e54613a14bf780935b3b7ad1a5b6.png'
import PspuLogo from '../../shared/img/PSPU.webp'

import {memo} from "react"

const CV = () => {
    return (
        <CVContainer>
            <CVLeftAside>
                <h1>Suntsev Sergey</h1>
                <h3>Web Engineer</h3>
                <CVAsideCaption>Personal Info</CVAsideCaption>
                <CVAsideParagraph height={240}>
                    <div>
                        <b>Phone</b>
                        <div>+7(919)459-78-24</div>
                    </div>
                    <div>
                        <b>E-mail</b>
                        <div><a href="mailto:greyewi@gmail.com">greyewi@gmail.com</a></div>
                    </div>
                    <div>
                        <b>Telegram</b>
                        <div><a href="https://t.me/greyewi">@greyewi</a></div>
                    </div>
                    <div>
                        <b>Linkedin</b>
                        <div><a href="https://www.linkedin.com/in/greyewi/">linkedin.com/in/greyewi</a></div>
                    </div>
                </CVAsideParagraph>
                <CVAsideCaption>Skills</CVAsideCaption>
                <CVAsideParagraph height={562}>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>JS</span>
                            <label>ES++</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={80}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>React</span>
                            <label>Hooks, Context, Concurrent mode</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={90}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>Redux</span>
                            <label>thunk, saga, toolkit</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={90}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>Typescript</CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={50}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>Node JS</span>
                            <label>express, nest</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={40}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>System Design</span>
                            <label>solid, yagni, design patterns</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={75}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>Q/A engineering</span>
                            <label>Jest, RTL, puppeteer</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={70}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>Databases</span>
                            <label>SQL, mongoDB, redis, firebase</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={50}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>DevOps</span> <label>Nginx, Docker, Supervisor, Bash</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={30}>
                            <div/>
                        </CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>
                            <span>English</span> <label>B2-</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={60}><div/></CVSkillScale>
                    </div>
                </CVAsideParagraph>
                <CVAsideCaption>Education</CVAsideCaption>
                <CVAsideParagraph height={180}>
                    <h3>Perm State Humanitarian Pedagogical University</h3>
                    <h4><i>2010 - 2016 Master's degree, Information Science Education</i></h4>
                    <div>Grade: 9.4</div>
                </CVAsideParagraph>
            </CVLeftAside>
            <CVMainContainer>
                <CVMainText>
                    Result-oriented web developer for over 7 years with 5 years of experience as frontend and 3 years as full-stack.
                    During this time I have finished a lot of big projects. It was CRM, user profiles, administration services, integration systems, multi-room chats, and so on.
                    I would like to work in a product command. I am big on working with flexible methodologies, like agile with scrum and kanban approaches.
                    I prefer to automate everything, enthusiastic to educate people.
                </CVMainText>
                <CVMainCaption>
                    Experience
                </CVMainCaption>

                <CVExperiencePoint>
                    <CVExperienceDate>
                        2020 - present
                        <CVExperienceLogo><img src={MentorLogo}/></CVExperienceLogo>
                    </CVExperienceDate>
                    <CVExperienceBody>
                        <CVExperienceTitle>IT Mentor</CVExperienceTitle>
                        <CVExperienceCompany>Self-employed</CVExperienceCompany>
                        <div>
                            <ul>
                                <li>I give my experience with distinct developers. We already solved a lot of complex tasks and meet deadlines.</li>
                                <li>I also prepare candidates to interview for different positions: front/back, junior/middle/senior js developer.</li>
                                <li>Sometimes i take some freelance orders to make MVP or fix functional</li>
                                <li>I have eager to learn, each day I spend ay least 4 hours to my pet projects or learning new technologies.</li>
                            </ul>
                        </div>
                    </CVExperienceBody>
                </CVExperiencePoint>

                <CVExperiencePoint>
                    <CVExperienceDate>
                        2020
                        <CVExperienceLogo><img src={MerlionLogo}/></CVExperienceLogo>
                    </CVExperienceDate>
                    <CVExperienceBody>
                        <CVExperienceTitle>JS, PHP Full-Stack Developer</CVExperienceTitle>
                        <CVExperienceCompany>Merlion</CVExperienceCompany>
                        <div>
                            <ul>
                                <li>Developed frontend part of big-data service for federal wholesale, b2b store.</li>
                                <li>I have Updated a lot of legacies react class components to hook components</li>
                                <li>Wrote automated ui, e2e and regress tests</li>
                                <li>Took a part in scrum activity</li>
                            </ul>
                        </div>
                    </CVExperienceBody>
                </CVExperiencePoint>
                <CVExperiencePoint>
                    <CVExperienceDate>
                        2018 - 2020
                        <CVExperienceLogo><img src={CodabraLogo}/></CVExperienceLogo>
                    </CVExperienceDate>
                    <CVExperienceBody>
                        <CVExperienceTitle>JS, React and Node.js developer</CVExperienceTitle>
                        <CVExperienceCompany>Codabra</CVExperienceCompany>
                        <div>
                            <ul>
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
                        </div>
                    </CVExperienceBody>
                </CVExperiencePoint>
                <CVExperiencePoint>
                    <CVExperienceDate>
                        2017 - 2018
                        <CVExperienceLogo><img src={InitGroupLogo}/></CVExperienceLogo>
                    </CVExperienceDate>
                    <CVExperienceBody>
                        <CVExperienceTitle>JS, React developer</CVExperienceTitle>
                        <CVExperienceCompany>InitGroup cash-box decisions</CVExperienceCompany>
                        <div>
                            <ul>
                                <li>
                                    Developed inner CRM system
                                </li>
                                <li>
                                    Developed cash-box software with 2 iterations.
                                </li>
                            </ul>
                        </div>
                    </CVExperienceBody>
                </CVExperiencePoint>
                <CVExperiencePoint>
                    <CVExperienceDate>
                        2016 - 2017
                        <CVExperienceLogo><img src={CkDigitalLogo}/></CVExperienceLogo>
                    </CVExperienceDate>
                    <CVExperienceBody>
                        <CVExperienceTitle>JS, Yii, PHP, React developer</CVExperienceTitle>
                        <CVExperienceCompany>CkDigital</CVExperienceCompany>
                        <div>
                            <ul>
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
                        </div>
                    </CVExperienceBody>
                </CVExperiencePoint>
                <CVExperiencePoint>
                    <CVExperienceDate>
                        2013 - 2016
                        <CVExperienceLogo><img src={PspuLogo}/></CVExperienceLogo>
                    </CVExperienceDate>
                    <CVExperienceBody>
                        <CVExperienceTitle>Engineering Technician</CVExperienceTitle>
                        <CVExperienceCompany>Perm State Pedagogical University</CVExperienceCompany>
                        <div>
                            <ul>
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
                        </div>
                    </CVExperienceBody>
                </CVExperiencePoint>
            </CVMainContainer>
        </CVContainer>
    )
}

export default memo(CV)