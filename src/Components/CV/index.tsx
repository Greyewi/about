import {
    CVAsideCaption,
    CVContainer,
    Contacts,
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
    CVExperienceCompany,
    SummaryWithPhoto
} from './styles'
import {Photo} from '../../Pages/Main/styles'
import MyPhoto from '../../shared/images/photo.jpeg'
import {cvStructure} from '../../i18n/structure'
import {useTranslation} from '../../i18n/useTranslation'

import React, {memo} from "react"

const CV = () => {
    const {ui, cv} = useTranslation()
    const {person, educationHeight, skills, experience} = cvStructure

    return (
        <CVContainer id="cv-container">
            <CVLeftAside>
                <h1>{ui.personName}</h1>
                <h3>{ui.jobTitle}</h3>
                <SummaryWithPhoto>
                    <Photo src={typeof MyPhoto === 'string' ? MyPhoto : (MyPhoto as {src: string}).src} alt={ui.personName}/>
                    <span>{cv.about}</span>
                </SummaryWithPhoto>
                <CVAsideCaption>{ui.cv.personalInfo}</CVAsideCaption>
                <CVAsideParagraph height={person.height}>
                    <Contacts>
                        <b>{ui.cv.phone}</b>
                        <div>{person.phone}</div>
                    </Contacts>
                    <Contacts>
                        <b>{ui.cv.email}</b>
                        <div><a href={"mailto:"+person.email}>{person.email}</a></div>
                    </Contacts>
                    <Contacts>
                        <b>{ui.cv.telegram}</b>
                        <div><a href={"https://t.me/" + person.tg}>@{person.tg}</a></div>
                    </Contacts>
                    <Contacts>
                        <b>{ui.cv.linkedin}</b>
                        <div><a href={"https://www.linkedin.com/in/"+ person.linkedin}>linkedin.com/in/{person.linkedin}</a></div>
                    </Contacts>
                </CVAsideParagraph>
                <CVAsideCaption>{ui.cv.skills}</CVAsideCaption>
                <CVAsideParagraph height={cvStructure.skillsHeight}>
                    {skills.map((skill) => {
                        const text = cv.skills[skill.id]
                        return (
                            <div key={skill.id}>
                                <CVAsideSkillLabelContainer>
                                    <span>{text.name}</span>
                                    <label>{text.description}</label>
                                </CVAsideSkillLabelContainer>
                                <CVSkillScale percentage={skill.strength}><div/></CVSkillScale>
                            </div>
                        )
                    })}
                </CVAsideParagraph>
                <CVAsideCaption>{ui.cv.education}</CVAsideCaption>
                <CVAsideParagraph height={cv.educationHeight ?? educationHeight}>
                    <h3>{cv.education.name}</h3>
                    <h4><i>{cv.education.description}</i></h4>
                    <div>{cv.education.gradeLevel}</div>
                </CVAsideParagraph>
            </CVLeftAside>
            <CVMainContainer>
                <CVMainText>
                    {cv.about}
                </CVMainText>
                <CVMainCaption>
                    {ui.cv.experience}
                </CVMainCaption>
                {experience.map((job) => {
                    const text = cv.experience[job.id]
                    return (
                        <CVExperiencePoint key={job.id}>
                            <CVExperienceDate>
                                {job.date}
                                <CVExperienceLogo>
                                    <img src={typeof job.logo === 'string' ? job.logo : job.logo.src} alt={text.jobName}/>
                                </CVExperienceLogo>
                            </CVExperienceDate>
                            <CVExperienceBody>
                                <CVExperienceTitle>{text.jobName}</CVExperienceTitle>
                                <CVExperienceCompany>
                                    {job.companyUrl
                                        ? <a href={job.companyUrl} target="_blank" rel="noreferrer">{text.companyName}</a>
                                        : text.companyName}
                                </CVExperienceCompany>
                                <div>
                                    {text.description}
                                </div>
                            </CVExperienceBody>
                        </CVExperiencePoint>
                    )
                })}
            </CVMainContainer>
        </CVContainer>
    )
}

export default memo(CV)
