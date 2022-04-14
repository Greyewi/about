import {
    CVAsideCaption,
    CVContainer,
    CVLeftAside,
    CVAsideParagraph,
    CVSkillScale,
    CVAsideSkillLabelContainer,
    CVMainContainer
} from './styles'
import {memo} from "react";

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
                        <CVAsideSkillLabelContainer><span>JS</span> <label>ES++</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={80}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer><span>React</span> <label>Hooks, Context, Concurrent mode</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={90}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer><span>Redux</span> <label>thunk, saga, toolkit</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={90}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer>Typescript</CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={50}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer><span>Node JS</span> <label>express, nest</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={40}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer><span>System Design</span> <label>solid, yagni, design patterns</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={75}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer><span>Q/A engineering</span><label>Jest, RTL, puppeteer</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={70}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer><span>Databases</span> <label>SQL, mongoDB, redis, firebase</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={50}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer><span>DevOps</span> <label>Nginx, Docker, Supervisor, Bash</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={30}><div/></CVSkillScale>
                    </div>
                    <div>
                        <CVAsideSkillLabelContainer><span>English</span> <label>B2-</label></CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={60}><div/></CVSkillScale>
                    </div>
                </CVAsideParagraph>
            </CVLeftAside>
            <CVMainContainer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet, quaerat! Aperiam culpa distinctio facilis illum in minus officia provident quae recusandae repellendus similique totam, voluptates! Iste nemo quia suscipit!</CVMainContainer>
        </CVContainer>
    )
}

export default memo(CV)