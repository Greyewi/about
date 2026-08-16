import type { ReactNode } from 'react'
import type { RoadmapId, SkillId, JobId } from './structure'

export type Locale = 'en' | 'ru'

export interface UiText {
  nav: { main: string; story: string; cv: string }
  personName: string
  jobTitle: string
  calendlyCta: string
  cv: {
    personalInfo: string
    skills: string
    education: string
    experience: string
    phone: string
    email: string
    telegram: string
    linkedin: string
  }
}

export interface MainText {
  greeting: string
  description: ReactNode
}

export interface GoalItem {
  name: string
  note?: string
}

export interface RoadmapText {
  plot: ReactNode
  goalsLabel: string
  goals: GoalItem[]
  plotPosition?: string
  goalsPosition?: string
}

export interface CvText {
  about: string
  education: { name: string; description: string; gradeLevel: string }
  skills: Record<SkillId, { name: string; description: string }>
  experience: Record<JobId, {
    jobName: string
    companyName: string
    description: ReactNode
  }>
}

export interface Dictionary {
  ui: UiText
  main: MainText
  roadmap: Record<RoadmapId, RoadmapText>
  cv: CvText
}
