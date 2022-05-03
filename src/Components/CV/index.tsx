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
import {Photo} from '../../Pages/Main/styles'
import {CVDataAside, CVDataMain} from './CVDataList'

import React, {memo} from "react"

const CV = () => {
    const {person, skills, education} = CVDataAside()
    const {about, experience} = CVDataMain

    return (
        <CVContainer id="cv-container">
            <CVLeftAside>
                <h1>Suntsev Sergey</h1>
                <h3>Web Engineer, {new Date().getFullYear() - 1992} years old</h3>
                <Photo/>
                <CVAsideCaption>Personal Info</CVAsideCaption>
                <CVAsideParagraph height={person.height}>
                    <div>
                        <b>Phone</b>
                        <div>{person.phone}</div>
                    </div>
                    <div>
                        <b>E-mail</b>
                        <div><a href={"mailto:"+person.email}>{person.email}</a></div>
                    </div>
                    <div>
                        <b>Telegram</b>
                        <div><a href={"https://t.me/" + person.tg}>@{person.tg}</a></div>
                    </div>
                    <div>
                        <b>Linkedin</b>
                        <div><a href={"https://www.linkedin.com/in/"+ person.linkedin}>linkedin.com/in/{person.linkedin}</a></div>
                    </div>
                </CVAsideParagraph>
                <CVAsideCaption>Skills</CVAsideCaption>
                <CVAsideParagraph height={skills.height()}>
                    {skills.list.map((skill, key) => <div key={skill.name + key}>
                        <CVAsideSkillLabelContainer>
                            <span>{skill.name}</span>
                            <label>{skill.description}</label>
                        </CVAsideSkillLabelContainer>
                        <CVSkillScale percentage={skill.strength}><div/></CVSkillScale>
                    </div>)}

                </CVAsideParagraph>
                <CVAsideCaption>Education</CVAsideCaption>
                <CVAsideParagraph height={education.height}>
                    <h3>{education.name}</h3>
                    <h4><i>{education.description}</i></h4>
                    <div>{education.gradeLevel}</div>
                </CVAsideParagraph>
            </CVLeftAside>
            <CVMainContainer>
                <CVMainText>
                    {about}
                </CVMainText>
                <CVMainCaption>
                    Experience
                </CVMainCaption>
                {experience.list.map((point, key) => <CVExperiencePoint key={point.company + key}>
                    <CVExperienceDate>
                        {point.date}
                        <CVExperienceLogo><img src={point.logo} alt={point.company}/></CVExperienceLogo>
                    </CVExperienceDate>
                    <CVExperienceBody>
                        <CVExperienceTitle>{point.jobName}</CVExperienceTitle>
                        <CVExperienceCompany>{point.company}</CVExperienceCompany>
                        <div>
                            {point.description}
                        </div>
                    </CVExperienceBody>
                </CVExperiencePoint>)}
            </CVMainContainer>
        </CVContainer>
    )
}

export default memo(CV)